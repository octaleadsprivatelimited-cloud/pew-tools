import type { Category, Product } from "../types";

export const categories: Category[] = [
  {
    id: "Power Tools",
    title: "Power Tools",
    description: "High-performance drills, saws, and sanders for professional craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1520225141511-2a936121ca38?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "Hand Tools",
    title: "Hand Tools",
    description: "Essential hand tools engineered for precision and comfort.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "DIY Kits",
    title: "DIY Kits",
    description: "All-in-one kits to tackle weekend projects with confidence.",
    image:
      "https://images.unsplash.com/photo-1522202757859-7472b0973c69?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "Accessories",
    title: "Accessories",
    description: "Premium blades, bits, and attachments that extend tool life.",
    image:
      "https://images.unsplash.com/photo-1572985229412-7435cc0c7c3d?auto=format&fit=crop&w=1200&q=80",
  },
];

export const products: Product[] = [
  {
    id: "pt-001",
    name: "Pew HammerForce Drill",
    slug: "pew-hammerforce-drill",
    category: "Power Tools",
    shortDescription: "Cordless hammer drill with brushless motor and smart torque control.",
    description:
      "The Pew HammerForce Drill delivers maximum torque with minimal vibration. Powered by a brushless motor and intelligent torque control, it adapts to every surface for clean, consistent results. The ergonomic grip and dual LED worklights keep you productive in any environment.",
    price: 249.99,
    rating: 4.8,
    reviewCount: 184,
    inventory: 26,
    specs: {
      Voltage: "20V",
      "Max Torque": "620 in-lbs",
      "No Load Speed": "0-2,000 RPM",
      Weight: "3.1 lbs",
    },
    features: [
      "Brushless motor for increased runtime",
      "Smart torque sensor protects fasteners",
      "Auxiliary handle for added stability",
      "Integrated dual LED lighting",
    ],
    images: [
      "https://images.unsplash.com/photo-1558640472-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Cordless", "Brushless", "Pro"],
    isFeatured: true,
  },
  {
    id: "pt-002",
    name: "Pew Precision Circular Saw",
    slug: "pew-precision-circular-saw",
    category: "Power Tools",
    shortDescription: "Lightweight circular saw with laser guide and dust collection.",
    description:
      "Cut with confidence using the Pew Precision Circular Saw. Precision laser guidance keeps cuts straight, while the integrated dust collection keeps your workspace clean. The magnesium shoe provides durability without the weight.",
    price: 199,
    rating: 4.6,
    reviewCount: 96,
    inventory: 18,
    specs: {
      Blade: "7-1/4 in",
      Power: "1,800 W",
      "No Load Speed": "5,200 RPM",
      Weight: "2.8 lbs",
    },
    features: [
      "Laser guide for precise cuts",
      "Adjustable bevel up to 56°",
      "Dust collection port",
      "Lightweight magnesium shoe",
    ],
    images: [
      "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581594549595-35f6ed5b2dd9?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Laser", "Lightweight"],
    isFeatured: true,
  },
  {
    id: "ht-001",
    name: "Pew Titan Wrench Set",
    slug: "pew-titan-wrench-set",
    category: "Hand Tools",
    shortDescription: "10-piece chrome vanadium wrench set with anti-slip grip.",
    description:
      "From automotive projects to home maintenance, the Pew Titan Wrench Set provides the leverage you need. Each wrench is forged from chrome vanadium steel and finished with an anti-slip coating for confident handling.",
    price: 89.5,
    rating: 4.9,
    reviewCount: 228,
    inventory: 45,
    specs: {
      Material: "Chrome Vanadium Steel",
      Sizes: "6-24 mm",
      Finish: "Nickel-Chrome Plated",
      Warranty: "Lifetime",
    },
    features: [
      "Anti-slip, comfort-grip handles",
      "Laser-etched size markings",
      "Polished chrome finish resists corrosion",
      "Includes roll-up storage pouch",
    ],
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Set", "Lifetime Warranty"],
    isFeatured: true,
  },
  {
    id: "ht-002",
    name: "Pew ProGrip Screwdriver Kit",
    slug: "pew-progrip-screwdriver-kit",
    category: "Hand Tools",
    shortDescription: "15-in-1 magnetic screwdriver system with quick-change bits.",
    description:
      "The Pew ProGrip Screwdriver Kit is engineered for technicians and hobbyists who demand versatility. The magnetic collar locks bits in place, while the rotating cap speeds up repetitive fastening tasks.",
    price: 49.99,
    rating: 4.5,
    reviewCount: 72,
    inventory: 66,
    specs: {
      Pieces: "15",
      Handle: "Soft-touch ergonomic",
      Bits: "S2 Steel",
      Magnet: "Rare-earth",
    },
    features: [
      "15 interchangeable precision bits",
      "Magnetic collar prevents stripping",
      "Ergonomic, non-slip handle",
      "Rotating cap for faster turning",
    ],
    images: [
      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Precision", "Magnetic"],
  },
  {
    id: "dk-001",
    name: "Pew Maker DIY Workbench Kit",
    slug: "pew-maker-diy-workbench-kit",
    category: "DIY Kits",
    shortDescription: "Modular workbench kit with adjustable height and storage.",
    description:
      "Build your own workspace with the Pew Maker DIY Workbench Kit. The modular system adapts to your garage or studio, offering adjustable height modes and included storage bins to keep tools organized.",
    price: 329,
    rating: 4.7,
    reviewCount: 54,
    inventory: 12,
    specs: {
      Dimensions: "60\" x 30\"",
      Height: "Adjustable 32\"-42\"",
      Capacity: "600 lbs",
      Material: "Powder-coated steel",
    },
    features: [
      "Modular frame with adjustable height",
      "Integrated power strip with surge protection",
      "Includes 6 storage bins and pegboard hooks",
      "Clear assembly instructions with AR guidance",
    ],
    images: [
      "https://images.unsplash.com/photo-1523419409543-0c1df022bdd9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Workbench", "Modular"],
    isFeatured: true,
  },
  {
    id: "dk-002",
    name: "Pew Starter Woodworking Kit",
    slug: "pew-starter-woodworking-kit",
    category: "DIY Kits",
    shortDescription: "Comprehensive kit with pre-cut materials for first-time builders.",
    description:
      "Kick off your woodworking journey with confidence. The Pew Starter Woodworking Kit includes pre-cut hardwood pieces, finishing supplies, and step-by-step instructions accessible via QR code tutorials.",
    price: 149,
    rating: 4.4,
    reviewCount: 39,
    inventory: 33,
    specs: {
      Projects: "Coffee table & planter",
      Material: "Maple & Pine",
      Tools: "Clamps, sanding blocks, glue",
      Guides: "Video + AR overlays",
    },
    features: [
      "Two weekend-ready projects",
      "Beginner-friendly illustrated guide",
      "Includes finishing oil and applicators",
      "QR codes unlock pro tips and videos",
    ],
    images: [
      "https://images.unsplash.com/photo-1506086679522-a927511962be?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Beginner", "Tutorial"],
  },
  {
    id: "ac-001",
    name: "Pew UltraCut Blade Pack",
    slug: "pew-ultracut-blade-pack",
    category: "Accessories",
    shortDescription: "Premium carbide blade assortment for cutting metal, wood, and PVC.",
    description:
      "Switch between materials seamlessly with the Pew UltraCut Blade Pack. Each blade uses industrial-grade carbide teeth and anti-vibration slots for cleaner cuts and longer life.",
    price: 79.99,
    rating: 4.6,
    reviewCount: 112,
    inventory: 57,
    specs: {
      Blades: "3-piece set",
      Diameter: "6-1/2 in, 7-1/4 in, 10 in",
      Material: "C4 Micrograin Carbide",
      Warranty: "3 years",
    },
    features: [
      "Anti-vibration laser cut slots",
      "Optimized kerf for battery saws",
      "Color-coded for quick identification",
      "Includes protective storage case",
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Carbide", "Multi-material"],
  },
  {
    id: "ac-002",
    name: "Pew MaxGrip Safety Gloves",
    slug: "pew-maxgrip-safety-gloves",
    category: "Accessories",
    shortDescription: "Cut-resistant gloves with touchscreen fingertips and breathable mesh.",
    description:
      "Stay protected without losing dexterity. Pew MaxGrip gloves provide ANSI A4 cut resistance while staying breathable thanks to the 3D mesh back. Touchscreen-ready fingertips let you stay connected on the job.",
    price: 24.99,
    rating: 4.3,
    reviewCount: 58,
    inventory: 120,
    specs: {
      Material: "HPPE blend",
      Sizes: "S-XXL",
      Rating: "ANSI A4",
      Features: "Touchscreen tips",
    },
    features: [
      "High-grip nitrile palm coating",
      "Reinforced thumb saddle",
      "Breathable 3D mesh back",
      "Machine washable",
    ],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Safety", "Touchscreen"],
  },
  {
    id: "pt-003",
    name: "Pew MultiVolt Impact Driver",
    slug: "pew-multivolt-impact-driver",
    category: "Power Tools",
    shortDescription: "Compact impact driver with multi-volt battery system.",
    description:
      "Delivering 1,800 in-lbs of torque in a palm-sized frame, the Pew MultiVolt Impact Driver is the go-to tool for installers and remodelers. Pair it with the MultiVolt smart batteries for all-day productivity.",
    price: 189.99,
    rating: 4.7,
    reviewCount: 141,
    inventory: 36,
    specs: {
      Torque: "1,800 in-lbs",
      Modes: "3 speed + precision mode",
      Battery: "18V / 36V MultiVolt",
      Weight: "2.2 lbs",
    },
    features: [
      "Precision mode prevents fastener stripping",
      "Triple LED halo ring removes shadows",
      "Quick-release hex chuck",
      "Compatible with MultiVolt battery ecosystem",
    ],
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Impact Driver", "Compact"],
    isFeatured: true,
  },
  {
    id: "ht-003",
    name: "Pew Apex Measuring Set",
    slug: "pew-apex-measuring-set",
    category: "Hand Tools",
    shortDescription: "Precision measuring set with laser measure, level, and tape.",
    description:
      "Measure twice, cut once with the Pew Apex Measuring Set. The combo laser measure, 25-foot tape, and digital level ensure every project is dialed in.",
    price: 129.5,
    rating: 4.6,
    reviewCount: 88,
    inventory: 29,
    specs: {
      Tape: "25 ft, auto-lock",
      Laser: "165 ft range",
      Level: "0.1° accuracy",
      Battery: "USB-C rechargeable",
    },
    features: [
      "Magnetic base for hands-free leveling",
      "Backlit display with angle hold",
      "Dual units (imperial/metric)",
      "Hardshell carrying case included",
    ],
    images: [
      "https://images.unsplash.com/photo-1512427691650-eacc4d2b91a1?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Measuring", "Laser"],
  },
];

export const getFeaturedProducts = () => products.filter((product) => product.isFeatured);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, limit);
