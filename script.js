/**
 * Pick&Pack - Core Application Engine & State Manager
 * Tagline: "Gifts that get them"
 */

// ==========================================================================
// 1. STATE & STORAGE MANAGEMENT
// ==========================================================================
const STORAGE_KEYS = {
  PRODUCTS: "pnp_products",
  BUNDLE: "pnp_bundle",
  CART: "pnp_cart",
  SAVED_RECIPIENTS: "pnp_saved_recipients",
  USER: "pnp_user",
  ORDERS: "pnp_orders"
};

// Initialize Products from default if not present
function getProducts() {
  const stored = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (!stored) {
    if (typeof DEFAULT_PRODUCTS !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
      return DEFAULT_PRODUCTS;
    }
    return [];
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error parsing stored products:", e);
    return typeof DEFAULT_PRODUCTS !== "undefined" ? DEFAULT_PRODUCTS : [];
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

// Bundle State
function getDefaultBundle() {
  return {
    recipient: {
      name: "Someone Special",
      relation: "friend",
      gender: "neutral",
      ageGroup: "adults",
      personalities: ["happy", "soft"],
      interests: ["flowers", "cute stuff"],
      occasion: "birthday",
      budget: 2000
    },
    items: [], // [{ id: number, quantity: number }]
    wrapping: {
      id: "none",
      name: "No Wrapping",
      price: 0
    },
    cardMessage: "Wishing you joy and wonderful moments!"
  };
}

function getBundle() {
  const stored = localStorage.getItem(STORAGE_KEYS.BUNDLE);
  if (!stored) {
    const def = getDefaultBundle();
    localStorage.setItem(STORAGE_KEYS.BUNDLE, JSON.stringify(def));
    return def;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return getDefaultBundle();
  }
}

function saveBundle(bundle) {
  localStorage.setItem(STORAGE_KEYS.BUNDLE, JSON.stringify(bundle));
  updateBadges();
}

// Cart State
function getCart() {
  const stored = localStorage.getItem(STORAGE_KEYS.CART);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateBadges();
}

// Saved Recipients
function getSavedRecipients() {
  const stored = localStorage.getItem(STORAGE_KEYS.SAVED_RECIPIENTS);
  if (!stored) {
    const defaults = [
      {
        id: "rec_1",
        name: "Ananya",
        relation: "friend",
        gender: "female",
        ageGroup: "young_adults",
        personalities: ["soft", "happy", "creative"],
        interests: ["flowers", "cute stuff", "skincare"],
        occasion: "birthday",
        budget: 2000
      },
      {
        id: "rec_2",
        name: "Rohan",
        relation: "sibling",
        gender: "male",
        ageGroup: "young_adults",
        personalities: ["bold", "funny", "adventurous"],
        interests: ["tech", "gaming", "fitness"],
        occasion: "festival",
        budget: 2500
      },
      {
        id: "rec_3",
        name: "Mom",
        relation: "parent",
        gender: "female",
        ageGroup: "mature",
        personalities: ["calm", "soft", "practical"],
        interests: ["plants", "cooking", "books", "flowers"],
        occasion: "anniversary",
        budget: 3000
      }
    ];
    localStorage.setItem(STORAGE_KEYS.SAVED_RECIPIENTS, JSON.stringify(defaults));
    return defaults;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

function saveRecipientProfile(profile) {
  const list = getSavedRecipients();
  const index = list.findIndex(r => r.name.toLowerCase() === profile.name.toLowerCase());
  if (index >= 0) {
    list[index] = { ...profile, id: list[index].id || "rec_" + Date.now() };
  } else {
    list.push({ ...profile, id: "rec_" + Date.now() });
  }
  localStorage.setItem(STORAGE_KEYS.SAVED_RECIPIENTS, JSON.stringify(list));
}

// User Session
function getUser() {
  const stored = localStorage.getItem(STORAGE_KEYS.USER);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

function setUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.USER);
  }
  updateNavbarUser();
}

// Orders
function getOrders() {
  const stored = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
}

// ==========================================================================
// 2. PRICING & TIERED DISCOUNT CALCULATIONS
// ==========================================================================
function calculateBundlePricing(bundle) {
  const products = getProducts();
  const productMap = new Map(products.map(p => [p.id, p]));
  
  let totalItemsCount = 0;
  let itemsSubtotal = 0;
  const detailedItems = [];

  (bundle.items || []).forEach(item => {
    const prod = productMap.get(item.id);
    if (prod) {
      const qty = item.quantity || 1;
      totalItemsCount += qty;
      itemsSubtotal += prod.price * qty;
      detailedItems.push({
        ...prod,
        quantity: qty,
        lineTotal: prod.price * qty
      });
    }
  });

  // Tiered discounts: 3 items = 5%, 5 items = 10%, 7+ items = 15%
  let discountRate = 0;
  let discountTier = 0;
  let nextTierMessage = "";
  let progressPercent = 0;

  if (totalItemsCount >= 7) {
    discountRate = 0.15;
    discountTier = 15;
    nextTierMessage = "🎉 Maximum 15% discount unlocked!";
    progressPercent = 100;
  } else if (totalItemsCount >= 5) {
    discountRate = 0.10;
    discountTier = 10;
    const need = 7 - totalItemsCount;
    nextTierMessage = `Add ${need} more item${need > 1 ? "s" : ""} to unlock 15% off!`;
    progressPercent = 70 + ((totalItemsCount - 5) / 2) * 30;
  } else if (totalItemsCount >= 3) {
    discountRate = 0.05;
    discountTier = 5;
    const need = 5 - totalItemsCount;
    nextTierMessage = `Add ${need} more item${need > 1 ? "s" : ""} to unlock 10% off!`;
    progressPercent = 35 + ((totalItemsCount - 3) / 2) * 35;
  } else {
    discountRate = 0;
    discountTier = 0;
    const need = 3 - totalItemsCount;
    nextTierMessage = `Add ${need} item${need > 1 ? "s" : ""} to unlock 5% off!`;
    progressPercent = (totalItemsCount / 3) * 35;
  }

  const discountAmount = Math.round(itemsSubtotal * discountRate);
  const wrappingPrice = (bundle.wrapping && bundle.wrapping.price) || 0;
  const finalPrice = Math.max(0, itemsSubtotal - discountAmount + wrappingPrice);

  return {
    totalItemsCount,
    itemsSubtotal,
    discountRate,
    discountTier,
    discountAmount,
    wrappingPrice,
    finalPrice,
    nextTierMessage,
    progressPercent,
    detailedItems
  };
}

// ==========================================================================
// 3. RULE-BASED RECOMMENDATION ENGINE
// ==========================================================================
function recommendProductsForRecipient(recipient) {
  const products = getProducts();
  if (!products || products.length === 0) return [];

  const recipientGender = (recipient.gender || "neutral").toLowerCase();
  const recipientOccasion = (recipient.occasion || "").toLowerCase();
  const recipientBudget = Number(recipient.budget) || 2000;
  const personalities = (recipient.personalities || []).map(p => p.toLowerCase());
  const interests = (recipient.interests || []).map(i => i.toLowerCase());
  const relation = (recipient.relation || "").toLowerCase();

  const scoredProducts = products.map(product => {
    let score = 0;
    const matchedReasons = [];

    // 1. Personality matching (+3 pts per match)
    const productPers = (product.personalities || []).map(p => p.toLowerCase());
    const matchedPers = personalities.filter(p => productPers.includes(p));
    score += matchedPers.length * 3;
    if (matchedPers.length > 0) {
      matchedReasons.push(`has a ${matchedPers.join(" & ")} personality`);
    }

    // 2. Interest matching (+4 pts per match)
    const productInterests = (product.interests || []).map(i => i.toLowerCase());
    const matchedInts = interests.filter(i => productInterests.includes(i));
    score += matchedInts.length * 4;
    if (matchedInts.length > 0) {
      matchedReasons.push(`loves ${matchedInts.join(" & ")}`);
    }

    // 3. Occasion matching (+2 pts per match)
    const productOccasions = (product.occasions || []).map(o => o.toLowerCase());
    if (productOccasions.includes(recipientOccasion)) {
      score += 2;
      matchedReasons.push(`is wonderful for their ${recipientOccasion}`);
    }


    // 4. Gender leaning affinity (+2 pts)
    const pGender = (product.genderLeaning || "neutral").toLowerCase();
    if (pGender === "neutral" || pGender === recipientGender) {
      score += 2;
    } else {
      score -= 2;
    }

    // 5. Relationship boosts
    if (relation === "partner" && (product.category === "Flowers" || product.personalities.includes("romantic") || product.category === "Accessories")) {
      score += 3;
    }
    if (relation === "colleague" && (product.category === "Stationery" || product.category === "Tech" || product.personalities.includes("practical"))) {
      score += 3;
    }
    if (relation === "parent" && (product.category === "Self-care" || product.category === "Snacks" || product.personalities.includes("calm"))) {
      score += 3;
    }
    if (relation === "sibling" && (product.category === "Cute Stuff" || product.category === "Tech" || product.personalities.includes("funny"))) {
      score += 3;
    }

    // 6. Budget compatibility
    // Products priced within budget receive higher relevance
    if (product.price <= recipientBudget * 0.6) {
      score += 3; // Leaves ample room in bundle
    } else if (product.price <= recipientBudget) {
      score += 1;
    } else {
      score -= 3; // Exceeds individual budget limit
    }

    // Generate dynamic "Why we picked this" description
    let explanation = "";
    const pronoun = recipientGender === "female" ? "she" : recipientGender === "male" ? "he" : "they";
    if (matchedReasons.length > 0) {
      explanation = `Because ${pronoun} ${matchedReasons.join(", and ")}.`;
    } else {
      explanation = `A delightful bestseller suited for thoughtful gift bundles.`;
    }

    return {
      product,
      score,
      explanation,
      matchPercentage: Math.min(99, Math.max(65, Math.round(50 + score * 3)))
    };
  });

  // Sort descending by score, tiebreak with rating
  scoredProducts.sort((a, b) => b.score - a.score || b.product.rating - a.product.rating);
  return scoredProducts;
}

// ==========================================================================
// 4. BUNDLE ACTIONS (ADD, REMOVE, UPDATE)
// ==========================================================================
function addItemToBundle(productId, qty = 1) {
  const bundle = getBundle();
  const pricing = calculateBundlePricing(bundle);
  
  if (pricing.totalItemsCount + qty > 12) {
    showToast("⚠️ Maximum 12 items allowed per gift bundle!", "warning");
    return false;
  }

  const existingItem = bundle.items.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + qty;
  } else {
    bundle.items.push({ id: productId, quantity: qty });
  }

  saveBundle(bundle);
  const products = getProducts();
  const prod = products.find(p => p.id === productId);
  showToast(`🎁 Added "${prod ? prod.name : 'Item'}" to Bundle for ${bundle.recipient.name}!`, "success");
  
  // Refresh drawer if visible
  renderSideDrawer();
  return true;
}

function updateBundleItemQty(productId, change) {
  const bundle = getBundle();
  const itemIndex = bundle.items.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  const newQty = (bundle.items[itemIndex].quantity || 1) + change;
  if (newQty <= 0) {
    bundle.items.splice(itemIndex, 1);
    showToast("Item removed from bundle", "info");
  } else {
    const pricing = calculateBundlePricing(bundle);
    if (change > 0 && pricing.totalItemsCount + change > 12) {
      showToast("⚠️ Maximum 12 items allowed per bundle!", "warning");
      return;
    }
    bundle.items[itemIndex].quantity = newQty;
  }

  saveBundle(bundle);
  renderSideDrawer();
  if (typeof renderBuilderPage === "function") {
    renderBuilderPage();
  }
}

function removeBundleItem(productId) {
  const bundle = getBundle();
  bundle.items = bundle.items.filter(item => item.id !== productId);
  saveBundle(bundle);
  showToast("Item removed from bundle", "info");
  renderSideDrawer();
  if (typeof renderBuilderPage === "function") {
    renderBuilderPage();
  }
}

function addAllTopPicksToBundle(topProducts) {
  const bundle = getBundle();
  let addedCount = 0;
  
  topProducts.forEach(item => {
    const pricing = calculateBundlePricing(bundle);
    if (pricing.totalItemsCount < 12) {
      const existing = bundle.items.find(i => i.id === item.product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        bundle.items.push({ id: item.product.id, quantity: 1 });
      }
      addedCount++;
    }
  });

  saveBundle(bundle);
  showToast(`🎉 Added ${addedCount} top gift picks to ${bundle.recipient.name}'s bundle!`, "success");
  renderSideDrawer();
  openSideDrawer();
}

// Convert Bundle to Cart item
function transferBundleToCart() {
  const bundle = getBundle();
  const pricing = calculateBundlePricing(bundle);

  if (pricing.totalItemsCount === 0) {
    showToast("Your bundle is currently empty. Add at least 1 gift item!", "warning");
    return false;
  }

  const cart = getCart();
  const bundleCartItem = {
    id: "bundle_" + Date.now(),
    type: "bundle",
    recipient: { ...bundle.recipient },
    wrapping: { ...bundle.wrapping },
    cardMessage: bundle.cardMessage || "",
    pricing: { ...pricing },
    items: [...pricing.detailedItems],
    addedAt: new Date().toISOString()
  };

  cart.push(bundleCartItem);
  saveCart(cart);

  // Trigger celebration confetti
  triggerConfetti();

  showToast(`✨ Bundle for ${bundle.recipient.name} added to your Cart!`, "success");

  // Reset bundle items while keeping recipient profile for next bundle
  bundle.items = [];
  bundle.wrapping = { id: "none", name: "No Wrapping", price: 0 };
  bundle.cardMessage = "";
  saveBundle(bundle);

  renderSideDrawer();
  if (typeof renderBuilderPage === "function") {
    renderBuilderPage();
  }
  return true;
}

function addSingleProductToCart(productId) {
  const products = getProducts();
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const cart = getCart();
  const existing = cart.find(item => item.type === "single" && item.product.id === productId);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: "single_" + Date.now(),
      type: "single",
      product: { ...prod },
      quantity: 1,
      addedAt: new Date().toISOString()
    });
  }

  saveCart(cart);
  showToast(`🛒 "${prod.name}" added to cart!`, "success");
}

// ==========================================================================
// 5. TOAST NOTIFICATIONS & CONFETTI
// ==========================================================================
function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "💬";
  if (type === "success") icon = "✨";
  if (type === "warning") icon = "⚠️";
  if (type === "error") icon = "❌";

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Lightweight Canvas Confetti
function triggerConfetti() {
  let canvas = document.getElementById("confetti-canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "confetti-canvas";
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FF6B6B", "#FFA07A", "#38A169", "#D69E2E", "#8B5CF6", "#FFFFFF"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 300,
      y: window.innerHeight / 2 - 100,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    frame++;
    if (frame < 120) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(animate);
}

// ==========================================================================
// 6. NAVBAR, BADGES, AND SIDE DRAWER
// ==========================================================================
function updateBadges() {
  const bundle = getBundle();
  const pricing = calculateBundlePricing(bundle);
  const bundleBadge = document.getElementById("nav-bundle-badge");
  if (bundleBadge) {
    bundleBadge.textContent = pricing.totalItemsCount;
    bundleBadge.style.display = pricing.totalItemsCount > 0 ? "inline-flex" : "none";
  }

  const cart = getCart();
  const cartBadge = document.getElementById("nav-cart-badge");
  if (cartBadge) {
    let totalCartItems = 0;
    cart.forEach(item => {
      if (item.type === "bundle") {
        totalCartItems += 1;
      } else {
        totalCartItems += (item.quantity || 1);
      }
    });
    cartBadge.textContent = totalCartItems;
    cartBadge.style.display = totalCartItems > 0 ? "inline-flex" : "none";
  }
}

function updateNavbarUser() {
  const user = getUser();
  const userContainer = document.getElementById("nav-user-container");
  if (!userContainer) return;

  if (user) {
    userContainer.innerHTML = `
      <div class="nav-user-dropdown">
        <button class="user-avatar-btn" id="user-menu-btn">
          <span>👋 ${user.name.split(" ")[0]}</span>
          <span style="font-size: 0.75rem;">▼</span>
        </button>
        <div class="user-dropdown-menu" id="user-dropdown-menu">
          <div style="padding: 6px 12px; font-size: 0.78rem; color: var(--navy-muted); border-bottom: 1px solid var(--border-light);">
            Signed in as <strong>${user.email}</strong>
          </div>
          <a href="builder.html" class="user-dropdown-item">🎁 My Active Bundle</a>
          <a href="cart.html" class="user-dropdown-item">🛒 My Cart</a>
          <a href="admin.html" class="user-dropdown-item">⚙️ Admin Dashboard</a>
          <button class="user-dropdown-item" id="logout-btn" style="color: #EF4444; width: 100%; text-align: left;">
            🚪 Sign Out
          </button>
        </div>
      </div>
    `;

    const menuBtn = document.getElementById("user-menu-btn");
    const menu = document.getElementById("user-dropdown-menu");
    if (menuBtn && menu) {
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("show");
      });
      document.addEventListener("click", () => menu.classList.remove("show"));
    }

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        setUser(null);
        showToast("Signed out successfully", "info");
        window.location.reload();
      });
    }
  } else {
    userContainer.innerHTML = `
      <a href="login.html" class="nav-link">
        <span>👤</span> Login
      </a>
    `;
  }
}

// Side Bundle Drawer Logic
function openSideDrawer() {
  renderSideDrawer();
  const drawer = document.getElementById("side-bundle-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  }
}

function closeSideDrawer() {
  const drawer = document.getElementById("side-bundle-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function renderSideDrawer() {
  const container = document.getElementById("drawer-items-container");
  if (!container) return;

  const bundle = getBundle();
  const pricing = calculateBundlePricing(bundle);

  // Recipient tag
  const recipientTag = document.getElementById("drawer-recipient-name");
  if (recipientTag) {
    recipientTag.textContent = `For ${bundle.recipient.name} (${bundle.recipient.occasion})`;
  }

  // Tiered discount banner
  const tierProgressFill = document.getElementById("drawer-tier-fill");
  const tierMessage = document.getElementById("drawer-tier-message");
  const tierRateBadge = document.getElementById("drawer-tier-rate");
  if (tierProgressFill && tierMessage && tierRateBadge) {
    tierProgressFill.style.width = `${pricing.progressPercent}%`;
    tierMessage.textContent = pricing.nextTierMessage;
    tierRateBadge.textContent = `${pricing.discountTier}% Off`;
  }

  // Items list
  if (pricing.detailedItems.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--navy-muted);">
        <div style="font-size: 2.8rem; margin-bottom: 10px;">🎁</div>
        <p style="font-weight: 700; color: var(--navy); margin-bottom: 6px;">Your bundle is empty</p>
        <p style="font-size: 0.85rem;">Add some wonderful gifts to craft a personalized bundle for ${bundle.recipient.name}!</p>
      </div>
    `;
  } else {
    container.innerHTML = pricing.detailedItems.map(item => `
      <div class="drawer-item-card">
        <img src="${item.image}" alt="${item.name}" class="drawer-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=200&q=80'">
        <div class="drawer-item-details">
          <div class="drawer-item-name">${item.name}</div>
          <div class="drawer-item-price">₹${item.price}</div>
        </div>
        <div class="qty-stepper">
          <button class="qty-btn" onclick="updateBundleItemQty(${item.id}, -1)">−</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" onclick="updateBundleItemQty(${item.id}, 1)">+</button>
        </div>
        <button class="drawer-item-delete" onclick="removeBundleItem(${item.id})" title="Remove item">✕</button>
      </div>
    `).join("");
  }

  // Summary breakdown
  const subtotalEl = document.getElementById("drawer-subtotal");
  const discountEl = document.getElementById("drawer-discount");
  const discountRow = document.getElementById("drawer-discount-row");
  const totalEl = document.getElementById("drawer-final-total");
  const addCartBtn = document.getElementById("drawer-add-cart-btn");

  if (subtotalEl) subtotalEl.textContent = `₹${pricing.itemsSubtotal}`;
  if (discountEl && discountRow) {
    if (pricing.discountAmount > 0) {
      discountRow.style.display = "flex";
      discountEl.textContent = `-₹${pricing.discountAmount} (${pricing.discountTier}%)`;
    } else {
      discountRow.style.display = "none";
    }
  }
  if (totalEl) totalEl.textContent = `₹${pricing.finalPrice}`;
  if (addCartBtn) {
    addCartBtn.disabled = pricing.totalItemsCount === 0;
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  getProducts(); // Seed products if needed
  updateBadges();
  updateNavbarUser();

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Drawer triggers
  const openDrawerBtn = document.getElementById("open-bundle-drawer");
  const closeDrawerBtn = document.getElementById("close-bundle-drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");

  if (openDrawerBtn) openDrawerBtn.addEventListener("click", openSideDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeSideDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeSideDrawer);

  const drawerAddCartBtn = document.getElementById("drawer-add-cart-btn");
  if (drawerAddCartBtn) {
    drawerAddCartBtn.addEventListener("click", () => {
      if (transferBundleToCart()) {
        closeSideDrawer();
      }
    });
  }
});
