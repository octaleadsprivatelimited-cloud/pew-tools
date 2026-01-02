const sampleCategories = [
  {
    id: "conveyors",
    slug: "conveyors",
    name: "Conveyors",
    description: "Efficient material handling conveyors for industrial applications including wire net and roller conveyors.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blades",
    slug: "blades",
    name: "Blades",
    description: "Precision cutting blades including circular blades, carbide V knives, and hand knives for various industrial applications.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rollers",
    slug: "rollers",
    name: "Rollers",
    description: "High-performance rollers including polygon, knurling, return, and metal rollers for specialized applications.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "specialised-machines",
    slug: "specialised-machines",
    name: "Specialised Machines",
    description: "Advanced specialized machinery including spinners, V-belt cutting machines, coding machines, and more.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "material-handling-equipment",
    slug: "material-handling-equipment",
    name: "Material Handling Equipment",
    description: "Comprehensive material handling solutions including trolleys, inspection tables, ESD storage, and drum loading stands.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "drums",
    slug: "drums",
    name: "Drums",
    description: "Industrial drums for V-belt curing and horizontal long belt applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
];

const sampleProducts = [
  // Conveyors
  {
    id: "conv-001",
    slug: "wire-net-conveyor",
    name: "Wire Net Conveyor",
    description: "Durable wire net conveyor system designed for efficient material handling in industrial environments.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    category: "conveyors",
    isFeatured: true,
  },
  {
    id: "conv-002",
    slug: "roller-conveyor",
    name: "Roller Conveyor",
    description: "Heavy-duty roller conveyor system for smooth and reliable material transport.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "conveyors",
    isFeatured: true,
  },
  // Blades - Circular Blades
  {
    id: "blade-001",
    slug: "sleeve-cutting-blades",
    name: "Sleeve Cutting Blades",
    description: "Precision sleeve cutting blades for accurate and clean cutting operations.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    category: "blades",
    isFeatured: true,
  },
  {
    id: "blade-002",
    slug: "slitting-blades-customised",
    name: "Slitting Blades (Customised)",
    description: "Customized slitting blades tailored to your specific cutting requirements.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    category: "blades",
    isFeatured: false,
  },
  {
    id: "blade-003",
    slug: "circular-carbide-blades",
    name: "Circular Carbide Blades",
    description: "High-performance circular carbide blades for long-lasting and precise cutting.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    category: "blades",
    isFeatured: true,
  },
  // Blades - Carbide V Knives
  {
    id: "blade-004",
    slug: "customised-carbide-v-knives",
    name: "Customised Carbide V Knives",
    description: "Customized carbide V knives designed for specialized cutting applications.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    category: "blades",
    isFeatured: false,
  },
  // Blades - Hand Knives
  {
    id: "blade-005",
    slug: "rubber-cutting-hand-knives",
    name: "Rubber Cutting Hand Knives",
    description: "Specialized hand knives designed for precise rubber cutting operations.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    category: "blades",
    isFeatured: false,
  },
  {
    id: "blade-006",
    slug: "aluminium-handle-knives",
    name: "Aluminium Handle Knives",
    description: "Lightweight and durable aluminium handle knives for various cutting applications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    category: "blades",
    isFeatured: false,
  },
  // Rollers
  {
    id: "roller-001",
    slug: "polygon-rollers",
    name: "Polygon Rollers",
    description: "Precision polygon rollers for specialized industrial applications.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: true,
  },
  {
    id: "roller-002",
    slug: "short-rollers",
    name: "Short Rollers",
    description: "Compact short rollers designed for space-constrained applications.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: false,
  },
  {
    id: "roller-003",
    slug: "knurling-rollers",
    name: "Knurling Rollers",
    description: "High-quality knurling rollers for enhanced grip and surface finishing.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: false,
  },
  {
    id: "roller-004",
    slug: "return-rollers",
    name: "Return Rollers",
    description: "Reliable return rollers for conveyor systems and material handling.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: false,
  },
  {
    id: "roller-005",
    slug: "metal-rollers",
    name: "Metal Rollers",
    description: "Heavy-duty metal rollers for demanding industrial applications.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: false,
  },
  {
    id: "roller-006",
    slug: "roller-cage-with-gear",
    name: "Roller Cage with Gear",
    description: "Complete roller cage assembly with integrated gear system.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: false,
  },
  {
    id: "roller-007",
    slug: "sleeve-cutting-rollers-with-bracket",
    name: "Sleeve Cutting Rollers with Bracket",
    description: "Specialized sleeve cutting rollers with mounting brackets for easy installation.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    category: "rollers",
    isFeatured: false,
  },
  // Specialised Machines
  {
    id: "machine-001",
    slug: "spinners",
    name: "Spinners",
    description: "Advanced spinning machines for industrial manufacturing processes.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "specialised-machines",
    isFeatured: true,
  },
  {
    id: "machine-002",
    slug: "v-belt-sleeve-cutting-machines",
    name: "V-Belt Sleeve Cutting Machines",
    description: "Precision V-belt sleeve cutting machines for accurate and efficient cutting operations.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "specialised-machines",
    isFeatured: true,
  },
  {
    id: "machine-003",
    slug: "horizontal-digital-coding-machine",
    name: "Horizontal Digital Coding Machine",
    description: "Modern horizontal digital coding machine for precise marking and coding applications.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "specialised-machines",
    isFeatured: false,
  },
  {
    id: "machine-004",
    slug: "v-belt-flipping-machine",
    name: "V-Belt Flipping Machine",
    description: "Automated V-belt flipping machine for efficient belt handling operations.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "specialised-machines",
    isFeatured: false,
  },
  {
    id: "machine-005",
    slug: "bobbin-wire-net-machine",
    name: "Bobbin Wire Net Machine",
    description: "Specialized bobbin wire net machine for wire net manufacturing applications.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "specialised-machines",
    isFeatured: false,
  },
  {
    id: "machine-006",
    slug: "v-belt-scrap-cutting-machine",
    name: "V-Belt Scrap Cutting Machine",
    description: "Efficient V-belt scrap cutting machine for waste reduction and recycling operations.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    category: "specialised-machines",
    isFeatured: false,
  },
  // Material Handling Equipment
  {
    id: "mhe-001",
    slug: "all-trolley-customisation-available",
    name: "All Trolley Customisation Available",
    description: "Complete trolley customization services to meet your specific material handling requirements.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: false,
  },
  {
    id: "mhe-002",
    slug: "v-belt-loading-trolley-ms-ss",
    name: "V-Belt Loading Trolley (MS & SS)",
    description: "Heavy-duty V-belt loading trolleys available in mild steel and stainless steel construction.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: true,
  },
  {
    id: "mhe-003",
    slug: "ss-inspection-tables",
    name: "SS Inspection Tables",
    description: "Stainless steel inspection tables for quality control and inspection operations.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: false,
  },
  {
    id: "mhe-004",
    slug: "esd-storage-trolley",
    name: "ESD Storage Trolley",
    description: "Electrostatic discharge (ESD) safe storage trolley for sensitive electronic components.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: false,
  },
  {
    id: "mhe-005",
    slug: "esd-laminated-work-tables",
    name: "ESD Laminated Work Tables",
    description: "ESD-safe laminated work tables for electrostatic-sensitive assembly and inspection work.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: false,
  },
  {
    id: "mhe-006",
    slug: "heavy-ss-trolley",
    name: "Heavy SS Trolley",
    description: "Robust heavy-duty stainless steel trolley for demanding material handling applications.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: false,
  },
  {
    id: "mhe-007",
    slug: "spc-heavy-drum-loading-stand",
    name: "SPC Heavy Drum Loading Stand",
    description: "Heavy-duty drum loading stand for safe and efficient drum handling operations.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    category: "material-handling-equipment",
    isFeatured: false,
  },
  // Drums
  {
    id: "drum-001",
    slug: "v-belt-curing-drums",
    name: "V-Belt Curing Drums",
    description: "Industrial V-belt curing drums for vulcanization and curing processes.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    category: "drums",
    isFeatured: true,
  },
  {
    id: "drum-002",
    slug: "horizontal-long-belt-drums",
    name: "Horizontal Long Belt Drums",
    description: "Large horizontal drums designed for long belt manufacturing and processing applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    category: "drums",
    isFeatured: false,
  },
];

export const fetchCategories = async () => Promise.resolve(sampleCategories);

export const fetchProducts = async () => Promise.resolve(sampleProducts);

export const fetchCategoryBySlug = async (slug) => {
  const categories = await fetchCategories();
  return categories?.find(
    (cat) => cat.slug === slug || cat.id === slug || cat.id?.toLowerCase() === slug?.toLowerCase()
  ) || null;
};

export const fetchProductBySlug = async (slug) => {
  const products = await fetchProducts();
  return products?.find((prod) => prod.slug === slug) || null;
};

export const fetchProductsByCategory = async (categorySlug) => {
  const [categories, products] = await Promise.all([fetchCategories(), fetchProducts()]);
  const category = categories?.find(
    (cat) => cat.slug === categorySlug || cat.id === categorySlug || cat.id?.toLowerCase() === categorySlug?.toLowerCase()
  );
  if (!category) return [];
  return products?.filter(
    (product) =>
      product.category === category.id ||
      product.category === category.slug ||
      product.category?.toLowerCase() === category.id?.toLowerCase() ||
      product.category?.toLowerCase() === category.slug?.toLowerCase()
  ) || [];
};
