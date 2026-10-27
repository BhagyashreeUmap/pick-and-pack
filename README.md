# 🎁 Pick&Pack — "Gifts that get them"

A responsive, client-side e-commerce gift bundle building platform built purely with **Vanilla HTML, CSS, and JavaScript** (zero external frameworks and no backend server required). All application state, active bundles, cart items, customer profiles, product catalog revisions, and past orders are persisted directly in browser `localStorage`.

---

## 🌟 Core Features & Highlights

1. **"Describe who you want to gift" (Heart of the Site)**
   - 4-step interactive modal wizard with step indicators:
     - **Step 1**: Recipient's name, relationship, gender, and age group.
     - **Step 2**: Personality chips (pick up to 3: soft, happy, funny, calm, bold, creative, studious, adventurous, romantic, practical).
     - **Step 3**: Interests chips (flowers, cute stuff, books, music, fitness, gaming, art, travel, cooking, tech, fashion, skincare, plants).
     - **Step 4**: Occasion selector & live budget range slider (₹300 to ₹5,000).
   - **Rule-based recommendation engine** scoring each product based on tag overlap, affinity boosts, and budget suitability.
   - Dynamic **"Why we picked this"** explanation generated for every recommendation card.
   - One-click **"Add all top picks"** and **"Suggest again"** actions.

2. **Dynamic Bundle Builder (`builder.html` & Side Drawer)**
   - Displays recipient name banner: *"Bundle for Ananya"*.
   - Item controls: live quantity stepper (`+` / `-`), remove button, item line totals.
   - **Tiered Discounts**:
     - **1–2 items**: 0% discount
     - **3–4 items**: **5% discount**
     - **5–6 items**: **10% discount**
     - **7+ items**: **15% discount** (Max tier)
   - Visual **Discount Progress Bar** (e.g. *"Add 2 more items to unlock 10% off!"*).
   - **Gift Wrapping Selection**: Standard Free (`₹0`), Classic Kraft & Ribbon (`₹49`), Luxury Velvet Box (`₹99`).
   - **Personalized Greeting Card & Live Preview**: Real-time rendering of handwritten notes on heavy textured paper.
   - **Budget Meter**: Compares total bundle price to the recipient's target budget with visual colored progress bar and remaining amount calculation.
   - **Enforces max 12 items** limit per bundle with friendly toast warnings.
   - **Confetti animation** triggered when bundles are packed and sent to cart.
   - **Saved Recipients**: Store recipient preferences in `localStorage` and switch between them with 1-click.

3. **Shopping Cart (`cart.html`)**
   - Distinct, grouped cards for customized **Gift Bundles** (with wrapping badge, greeting card preview, and item list) and standalone individual items.
   - Live discount recalculation, delivery fee estimation (Free over ₹999 or ₹99), and promo codes (`GIFT100` for ₹100 off, `WELCOME10` for 10% off).

4. **Multi-Step Checkout & Order Confirmation (`checkout.html`)**
   - Sender details and Recipient delivery address with real-time field validation (6-digit PIN code, 10-digit mobile, delivery date validation).
   - Optional *"Secret Gift / Anonymous"* toggle.
   - Dummy payment options:
     - **UPI**: Simulated QR code and VPA input (`user@bank`).
     - **Card**: Interactive credit/debit card mockup with live number, cardholder, and expiry updates.
     - **Cash on Delivery (COD)**.
   - Order confirmation screen with celebratory confetti, generated Order ID (`PNP-2026-XXXX`), shipping timeline, and printable receipt.

5. **Admin Dashboard (`admin.html`)**
   - Full CRUD product management: Add new product, edit existing product details, delete product.
   - Tag management for recommendation engine (personalities, interests, occasions, gender leaning).
   - Image URL input with live thumbnail preview.
   - Search and category filtering across catalog.
   - One-click **"Reset to Default 40 Products"** button to restore sample catalog at any time.
   - Customer Order history inspector.

6. **Authentication & Session (`login.html`)**
   - Sign in and sign up with instant demo logins (`Demo Shopper` and `Demo Admin`).
   - Sticky navbar dynamically reflects login state with custom dropdown menu.

---

## 📁 File Structure

```
pick-and-pack/
├── index.html        # Main storefront, hero, gift wizard modal, recommendations, catalog & side drawer
├── builder.html      # Dedicated Bundle Builder with budget meter, tiered discounts, wrapping & card preview
├── cart.html         # Cart view for bundles and standalone items with promo code support
├── checkout.html     # Multi-step checkout with address validation, dummy payments & celebration screen
├── login.html        # Authentication with demo quick-login and localStorage session persistence
├── admin.html        # Product inventory CRUD management and customer order log
├── style.css         # Responsive styling system: Coral (#FF6B6B), Deep Navy (#162035), Soft Cream (#FDF9F4)
├── products.js       # 40 carefully curated products across 8 categories with rich recommendation tags
├── script.js         # State management, recommendation algorithm, pricing formulas, drawer, toasts & confetti
└── README.md         # Comprehensive documentation
```

---

## 🚀 How to Run the Website

### Option 1: Direct File Opening
Double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari). All assets and dependencies are self-contained.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```powershell
cd C:\Users\cse\.gemini\antigravity\scratch\pick-and-pack
python -m http.server 8000
```
Then visit: `http://localhost:8000/index.html` in your browser.

Using Node (`npx serve` or `http-server`):
```powershell
npx serve C:\Users\cse\.gemini\antigravity\scratch\pick-and-pack
```

---

## 🧠 Rule-Based Recommendation Engine

The heart of Pick&Pack is its client-side, rule-based recommendation algorithm located in `script.js` (`recommendProductsForRecipient`). It operates without any external API calls:

### 1. Scoring Formula
Every product starts at a baseline score and earns points based on tag matches:

$$\text{Product Score} = (N_{\text{personality}} \times 3) + (N_{\text{interest}} \times 4) + (N_{\text{occasion}} \times 2) + \text{GenderBonus} + \text{RelationshipBonus} + \text{BudgetBonus}$$

Where:
- **$N_{\text{personality}}$**: Number of personality chips shared between recipient and product tags (+3 points each).
- **$N_{\text{interest}}$**: Number of hobbies/interests shared between recipient and product tags (+4 points each).
- **$N_{\text{occasion}}$**: Matches occasion (e.g. Birthday, Anniversary, Festival) (+2 points).
- **$\text{GenderBonus}$**:
  - `+2` if the product has a `neutral` leaning or matches the recipient's gender.
  - `-2` if there is a gender leaning mismatch.
- **$\text{RelationshipBonus}$** (+3 points):
  - *Partner*: Boosts Flowers, Accessories, and Romantic items.
  - *Colleague*: Boosts Stationery, Tech, and Practical desk items.
  - *Parent*: Boosts Self-care, Teas/Snacks, and Calm botanical items.
  - *Sibling*: Boosts Cute Plushies, Tech/Gaming, and Funny items.
- **$\text{BudgetBonus}$**:
  - `+3` if the product price is $\le 60\%$ of target budget (allows building a multi-item bundle).
  - `+1` if the product price is $\le 100\%$ of target budget.
  - `-3` if the single product exceeds the recipient's total target budget.

### 2. Contextual "Why We Picked This" Generator
The engine tracks which tags triggered the match and crafts personalized explanations:
> *"Because she loves flowers & cute stuff with a soft, happy vibe."*

---

## 💾 LocalStorage Schema Reference

| Key | Type | Description |
|---|---|---|
| `pnp_products` | `Array<Product>` | Catalog of items (defaults to 40 items from `products.js`, updated via Admin). |
| `pnp_bundle` | `Object` | Active bundle with `{ recipient, items, wrapping, cardMessage }`. |
| `pnp_cart` | `Array<Bundle \| SingleItem>` | Items currently in user's cart. |
| `pnp_saved_recipients` | `Array<Recipient>` | Address book of saved recipient profiles for quick re-use. |
| `pnp_user` | `Object \| null` | Logged-in user session `{ name, email, role }`. |
| `pnp_orders` | `Array<Order>` | Order history generated upon completing checkout. |

---

## 🎨 Design System
- **Primary Coral**: `#FF6B6B` (Buttons, badges, highlights, accents)
- **Deep Navy**: `#162035` (Headings, dark cards, footer, contrast text)
- **Soft Cream Canvas**: `#FDF9F4` (Warm, comforting background)
- **Accents**: Mint (`#2E9D64`), Gold (`#D97706`), Lavender (`#8B5CF6`)
- **Shapes**: Rounded cards (`14px` - `24px`), soft layered drop shadows, pill buttons.
