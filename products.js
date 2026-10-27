/**
 * Pick&Pack - Default Product Catalog (40 Curated Items)
 * Categories: Flowers, Cute Stuff, Stationery, Snacks, Tech, Self-care, Books, Accessories
 */

const DEFAULT_PRODUCTS = [
  // --- FLOWERS (5) ---
  {
    id: 1,
    name: "Pastel Dream Hydrangea & Rose Bouquet",
    category: "Flowers",
    price: 899,
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
    description: "Hand-tied bouquet of blush pink roses, lilac hydrangeas, and fresh eucalyptus foliage.",
    personalities: ["soft", "romantic", "calm", "happy"],
    interests: ["flowers", "art", "fashion"],
    occasions: ["birthday", "anniversary", "thank you", "just because"],
    genderLeaning: "feminine",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 2,
    name: "Preserved Everlasting Crimson Rose in Glass Dome",
    category: "Flowers",
    price: 1499,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "A real, hand-selected rose preserved to maintain freshness for up to 3 years under a glass bell jar.",
    personalities: ["romantic", "bold", "calm"],
    interests: ["flowers", "art", "fashion"],
    occasions: ["anniversary", "birthday", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 3,
    name: "Cheerful Sunshine Sunflower & Daisy Posy",
    category: "Flowers",
    price: 649,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    description: "Vibrant yellow sunflowers paired with chamomile daisies to bring instant joy and radiant smiles.",
    personalities: ["happy", "adventurous", "soft", "creative"],
    interests: ["flowers", "plants", "art"],
    occasions: ["birthday", "farewell", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: false
  },
  {
    id: 4,
    name: "Dried French Lavender & Baby's Breath Bundle",
    category: "Flowers",
    price: 499,
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
    description: "Naturally dried aromatic lavender sprigs and delicate baby's breath wrapped in rustic kraft paper.",
    personalities: ["calm", "soft", "studious", "practical"],
    interests: ["flowers", "plants", "skincare", "books"],
    occasions: ["thank you", "farewell", "just because"],
    genderLeaning: "neutral",
    rating: 4.6,
    bestseller: false
  },
  {
    id: 5,
    name: "Mini Succulent & White Ceramic Planter Duo",
    category: "Flowers",
    price: 429,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "Two resilient, low-maintenance jade and echeveria succulents in minimalist white ceramic pots.",
    personalities: ["calm", "practical", "studious", "creative"],
    interests: ["plants", "flowers", "art"],
    occasions: ["farewell", "thank you", "birthday", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },

  // --- CUTE STUFF (5) ---
  {
    id: 6,
    name: "Boba Milk Tea Plush Pillow (Chubby & Soft)",
    category: "Cute Stuff",
    price: 599,
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-squishy, premium velvet plushie with embroidered pearl eyes and a soft boba straw.",
    personalities: ["soft", "happy", "funny", "creative"],
    interests: ["cute stuff", "gaming", "art"],
    occasions: ["birthday", "just because", "farewell"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 7,
    name: "Kawaii Ceramic Cat Mug with Paw Stirring Spoon",
    category: "Cute Stuff",
    price: 479,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    description: "Adorably sculpted 380ml coffee mug featuring a sleeping cat lid and 304 stainless paw spoon.",
    personalities: ["soft", "happy", "calm", "funny"],
    interests: ["cute stuff", "cooking", "books"],
    occasions: ["birthday", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 8,
    name: "Warm Glow Capybara Silicone Night Lamp",
    category: "Cute Stuff",
    price: 799,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    description: "Tap-sensitive dimmable rechargeable silicone bedside light shaped like a supremely relaxed capybara.",
    personalities: ["calm", "funny", "soft", "happy"],
    interests: ["cute stuff", "tech", "gaming"],
    occasions: ["birthday", "festival", "just because"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 9,
    name: "Pastel Aesthetic Enamel Keychain Charm Set",
    category: "Cute Stuff",
    price: 299,
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=600&q=80",
    description: "Trio of gold-plated enamel charms: daisy blossom, cute smiling cloud, and strawberry milk box.",
    personalities: ["soft", "happy", "creative"],
    interests: ["cute stuff", "fashion", "art"],
    occasions: ["birthday", "thank you", "just because", "farewell"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: false
  },
  {
    id: 10,
    name: "Sleepy Corgi Desktop Anti-Stress Companion",
    category: "Cute Stuff",
    price: 349,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    description: "Squishy ergonomic wrist-rest and desk figurine made of memory foam with playful corgi detailing.",
    personalities: ["funny", "calm", "happy", "practical"],
    interests: ["cute stuff", "tech", "gaming"],
    occasions: ["farewell", "thank you", "birthday", "just because"],
    genderLeaning: "neutral",
    rating: 4.6,
    bestseller: false
  },

  // --- STATIONERY (5) ---
  {
    id: 11,
    name: "Vintage Handcrafted Leather Journal (240 Pages)",
    category: "Stationery",
    price: 699,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    description: "Rustic full-grain leather notebook with unlined deckle edge cotton paper and wrap-around cord.",
    personalities: ["creative", "studious", "romantic", "calm"],
    interests: ["art", "books", "travel"],
    occasions: ["birthday", "farewell", "anniversary", "festival"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 12,
    name: "Pastel Aesthetic Dual-Tip Brush Highlighter Set",
    category: "Stationery",
    price: 399,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    description: "12 mild aesthetic pastel highlighters with a chisel tip on one side and a fine brush on the other.",
    personalities: ["studious", "creative", "soft", "happy"],
    interests: ["books", "art", "cute stuff"],
    occasions: ["birthday", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 13,
    name: "Medieval Wax Seal Stamp & Melting Spoon Kit",
    category: "Stationery",
    price: 849,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    description: "Complete letter-writing ritual kit with brass tree-of-life seal, metallic wax beads, and spoon.",
    personalities: ["creative", "romantic", "studious", "bold"],
    interests: ["art", "books", "fashion"],
    occasions: ["anniversary", "festival", "birthday"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: false
  },
  {
    id: 14,
    name: "Minimalist Daily Planner & Habit Tracker",
    category: "Stationery",
    price: 499,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    description: "Undated 12-month productivity agenda with gold foil embossing and thick 120gsm ink-proof paper.",
    personalities: ["practical", "studious", "bold", "calm"],
    interests: ["books", "fitness", "tech"],
    occasions: ["farewell", "birthday", "festival"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 15,
    name: "Executive Matte Brass Fountain Pen in Gift Box",
    category: "Stationery",
    price: 799,
    image: "https://images.unsplash.com/photo-1585336261026-4180490b4bf7?auto=format&fit=crop&w=600&q=80",
    description: "Solid brass heavyweight writing instrument with German iridium medium nib and piston converter.",
    personalities: ["studious", "practical", "bold", "calm"],
    interests: ["books", "art", "tech"],
    occasions: ["farewell", "thank you", "anniversary", "birthday"],
    genderLeaning: "masculine",
    rating: 4.8,
    bestseller: false
  },

  // --- SNACKS & GOURMET (5) ---
  {
    id: 16,
    name: "Artisanal Belgian Dark Chocolate Truffle Collection",
    category: "Snacks",
    price: 749,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80",
    description: "Box of 16 handcrafted truffles featuring salted caramel, hazelnut praline, and espresso crunch.",
    personalities: ["romantic", "happy", "soft", "calm"],
    interests: ["cooking", "cute stuff", "travel"],
    occasions: ["birthday", "anniversary", "festival", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 17,
    name: "Gourmet Flavoured Kettle Corn Popcorn Trio",
    category: "Snacks",
    price: 399,
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80",
    description: "Three signature reusable tins: Himalayan Pink Salt, Smoky Cheddar Jalapeño, and Caramel Drizzle.",
    personalities: ["funny", "happy", "adventurous"],
    interests: ["gaming", "cooking", "travel"],
    occasions: ["birthday", "just because", "festival"],
    genderLeaning: "neutral",
    rating: 4.6,
    bestseller: false
  },
  {
    id: 18,
    name: "Kashmiri Saffron & Roasted Almond Brittle",
    category: "Snacks",
    price: 549,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=600&q=80",
    description: "Crunchy golden caramelized almond chikki infused with pure royal saffron strands and cardamom.",
    personalities: ["practical", "calm", "happy", "romantic"],
    interests: ["cooking", "travel", "fitness"],
    occasions: ["festival", "anniversary", "thank you", "birthday"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 19,
    name: "Organic Berry & Chamomile Loose Leaf Tea Tin",
    category: "Snacks",
    price: 449,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    description: "Caffeine-free soothing botanical tea blend with whole elderberries, rosehips, and chamomile buds.",
    personalities: ["calm", "soft", "studious"],
    interests: ["cooking", "skincare", "books", "fitness"],
    occasions: ["thank you", "birthday", "just because", "farewell"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: true
  },
  {
    id: 20,
    name: "Scottish Butter Shortbread & Coffee Bean Bites",
    category: "Snacks",
    price: 499,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    description: "Melt-in-mouth golden shortbread rounds paired with chocolate covered roasted Arabica coffee beans.",
    personalities: ["studious", "practical", "happy", "calm"],
    interests: ["cooking", "books", "tech"],
    occasions: ["farewell", "thank you", "festival", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },

  // --- TECH (5) ---
  {
    id: 21,
    name: "Retro Wooden FM Radio & Bluetooth 5.0 Speaker",
    category: "Tech",
    price: 1399,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    description: "Walnut wood finish wireless speaker with classic analog rotary dial and 10 hours playtime.",
    personalities: ["creative", "romantic", "calm", "happy"],
    interests: ["music", "tech", "art", "travel"],
    occasions: ["birthday", "anniversary", "festival"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 22,
    name: "3-in-1 Foldable Magnetic Fast Wireless Charging Pad",
    category: "Tech",
    price: 1199,
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=600&q=80",
    description: "Compact travel dock that powers your phone, smartwatch, and wireless earbuds simultaneously.",
    personalities: ["practical", "studious", "adventurous", "bold"],
    interests: ["tech", "travel", "fitness"],
    occasions: ["birthday", "farewell", "festival"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 23,
    name: "RGB Sunset & Golden Hour Projection Lamp",
    category: "Tech",
    price: 699,
    image: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=600&q=80",
    description: "16-color optical glass atmospheric halo projector with remote control for room ambiance & photography.",
    personalities: ["creative", "soft", "happy", "bold"],
    interests: ["art", "tech", "fashion", "music"],
    occasions: ["birthday", "just because", "festival"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: true
  },
  {
    id: 24,
    name: "Smart Temperature Control Beverage Mug Warmer",
    category: "Tech",
    price: 899,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600&q=80",
    description: "Keeps your morning brew at constant 55°C with auto shut-off and waterproof tempered glass plate.",
    personalities: ["practical", "studious", "calm"],
    interests: ["tech", "books", "gaming"],
    occasions: ["farewell", "thank you", "birthday"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 25,
    name: "Ultra-Light Ergonomic RGB Gaming Mouse & Mat",
    category: "Tech",
    price: 849,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    description: "Honeycomb lightweight 6400 DPI optical mouse with matching microfiber speed desk mat.",
    personalities: ["bold", "adventurous", "funny"],
    interests: ["gaming", "tech"],
    occasions: ["birthday", "festival", "just because"],
    genderLeaning: "masculine",
    rating: 4.7,
    bestseller: false
  },

  // --- SELF-CARE (5) ---
  {
    id: 26,
    name: "French Lavender & Vanilla Soy Wax Aromatherapy Candle",
    category: "Self-care",
    price: 549,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
    description: "Hand-poured 100% soy candle with a crackling wooden wick, burning clean for 45+ relaxing hours.",
    personalities: ["calm", "soft", "romantic"],
    interests: ["skincare", "flowers", "books"],
    occasions: ["birthday", "anniversary", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 27,
    name: "Rose Quartz Facial Roller & Gua Sha Glow Set",
    category: "Self-care",
    price: 649,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    description: "Real natural rose quartz stone tools designed to reduce tension, promote lymphatic flow and glow.",
    personalities: ["soft", "calm", "romantic"],
    interests: ["skincare", "fashion", "fitness"],
    occasions: ["birthday", "anniversary", "just because"],
    genderLeaning: "feminine",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 28,
    name: "Himalayan Pink Salt & Rose Petal Bath Soak",
    category: "Self-care",
    price: 429,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    description: "Mineral-rich crystalline soak infused with essential oils of geranium, jojoba, and dried petals.",
    personalities: ["calm", "soft", "romantic"],
    interests: ["skincare", "fitness", "flowers"],
    occasions: ["birthday", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: false
  },
  {
    id: 29,
    name: "Eucalyptus & Mint Aromatherapy Shower Steamers (6 Pack)",
    category: "Self-care",
    price: 499,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    description: "Effervescent shower tablets that dissolve in water steam, turning your bathroom into a luxury spa.",
    personalities: ["calm", "practical", "adventurous"],
    interests: ["skincare", "fitness", "travel"],
    occasions: ["farewell", "thank you", "birthday", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 30,
    name: "Silk Sleep Eye Mask & Mulberry Silk Scrunchie Duo",
    category: "Self-care",
    price: 599,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "100% 22-momme pure mulberry silk blackout mask for uninterrupted beauty sleep without skin creases.",
    personalities: ["soft", "calm", "romantic"],
    interests: ["skincare", "fashion", "travel"],
    occasions: ["birthday", "farewell", "anniversary"],
    genderLeaning: "feminine",
    rating: 4.9,
    bestseller: true
  },

  // --- BOOKS (5) ---
  {
    id: 31,
    name: "The Little Book of Hygge: Danish Secrets to Happy Living",
    category: "Books",
    price: 499,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    description: "Meik Wiking's charming illustrated guide to comfort, togetherness, and cozy well-being.",
    personalities: ["calm", "soft", "happy", "studious"],
    interests: ["books", "cooking", "art"],
    occasions: ["birthday", "farewell", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 32,
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
    category: "Books",
    price: 550,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    description: "James Clear's global phenomenon on tiny changes, remarkable results, and personal mastery.",
    personalities: ["practical", "studious", "bold"],
    interests: ["books", "fitness", "tech"],
    occasions: ["birthday", "farewell", "festival"],
    genderLeaning: "neutral",
    rating: 5.0,
    bestseller: true
  },
  {
    id: 33,
    name: "Japanese Haiku & Watercolor Illustrated Hardcover",
    category: "Books",
    price: 649,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    description: "Exquisite anthology of Basho, Buson, and Issa poems accompanied by serene sumi-e artwork.",
    personalities: ["calm", "creative", "romantic", "studious"],
    interests: ["books", "art", "flowers"],
    occasions: ["anniversary", "birthday", "farewell"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 34,
    name: "Coffee Table Book: Hidden Escapes of the World",
    category: "Books",
    price: 899,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    description: "Vibrant high-gloss photography travel book chronicling secret islands, cabins, and mountain trails.",
    personalities: ["adventurous", "creative", "bold"],
    interests: ["travel", "books", "art"],
    occasions: ["birthday", "anniversary", "farewell"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  },
  {
    id: 35,
    name: "Creative Spark: 365 Daily Prompts to Unleash Imagination",
    category: "Books",
    price: 449,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    description: "An inspiring companion journal packed with playful writing, drawing, and storytelling exercises.",
    personalities: ["creative", "happy", "funny"],
    interests: ["art", "books", "cute stuff"],
    occasions: ["birthday", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.7,
    bestseller: false
  },

  // --- ACCESSORIES (5) ---
  {
    id: 36,
    name: "Celestial Sun & Moon Layered Pendant (18K Gold Plated)",
    category: "Accessories",
    price: 899,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    description: "Tarnish-resistant stainless steel necklace with delicate celestial charms and zircon accents.",
    personalities: ["romantic", "soft", "creative"],
    interests: ["fashion", "art"],
    occasions: ["birthday", "anniversary", "festival", "just because"],
    genderLeaning: "feminine",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 37,
    name: "Slim RFID-Blocking Italian Grain Leather Cardholder",
    category: "Accessories",
    price: 699,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-slim front pocket wallet with 6 card slots, magnetic money clip, and brass pull tab.",
    personalities: ["practical", "bold", "calm"],
    interests: ["fashion", "tech", "travel"],
    occasions: ["birthday", "farewell", "anniversary", "festival"],
    genderLeaning: "masculine",
    rating: 4.8,
    bestseller: true
  },
  {
    id: 38,
    name: "Handcrafted Botanical Silk Blend Jacquard Scarf",
    category: "Accessories",
    price: 799,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
    description: "Featherlight floral printed silk scarf suitable as a neck wrap, headscarf, or handbag accent.",
    personalities: ["soft", "romantic", "creative"],
    interests: ["fashion", "flowers", "art"],
    occasions: ["birthday", "anniversary", "thank you"],
    genderLeaning: "feminine",
    rating: 4.7,
    bestseller: false
  },
  {
    id: 39,
    name: "Minimalist Matte Black Mesh Strap Dress Watch",
    category: "Accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "Sleek 40mm unisex quartz timepiece with scratch-proof sapphire crystal and magnetic mesh strap.",
    personalities: ["bold", "practical", "calm"],
    interests: ["fashion", "tech"],
    occasions: ["birthday", "anniversary", "farewell"],
    genderLeaning: "neutral",
    rating: 4.9,
    bestseller: true
  },
  {
    id: 40,
    name: "Embroidered Canvas Botanical Daily Tote Bag",
    category: "Accessories",
    price: 499,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    description: "Heavyweight 16oz cotton canvas tote featuring delicate wildflower embroidery and zip pocket.",
    personalities: ["creative", "happy", "practical", "soft"],
    interests: ["fashion", "books", "flowers", "art"],
    occasions: ["birthday", "thank you", "just because"],
    genderLeaning: "neutral",
    rating: 4.8,
    bestseller: false
  }
];

// Fallback category emojis & icons
const CATEGORY_ICONS = {
  "Flowers": "🌸",
  "Cute Stuff": "🧸",
  "Stationery": "✍️",
  "Snacks": "🍫",
  "Tech": "⚡",
  "Self-care": "🕯️",
  "Books": "📚",
  "Accessories": "✨"
};

// Cross-environment compatibility
if (typeof window !== "undefined") {
  window.DEFAULT_PRODUCTS = DEFAULT_PRODUCTS;
  window.CATEGORY_ICONS = CATEGORY_ICONS;
}
if (typeof global !== "undefined") {
  global.DEFAULT_PRODUCTS = DEFAULT_PRODUCTS;
  global.CATEGORY_ICONS = CATEGORY_ICONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { DEFAULT_PRODUCTS, CATEGORY_ICONS };
}

