const sampleCategories = [
  {
    id: "power-tools",
    slug: "power-tools",
    name: "Power Tools",
    description: "Cordless drivers, rotary hammers, impact wrenches, grinders, and saws for heavy-duty crews.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hand-tools",
    slug: "hand-tools",
    name: "Hand Tools",
    description: "Precision-engineered wrenches, torque tools, insulated pliers, and assembly kits.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "workshop-equipment",
    slug: "workshop-equipment",
    name: "Workshop Equipment",
    description: "Benchtop machines, vises, clamps, storage, and fabrication fixtures for shop floors.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "safety-ppe",
    slug: "safety-gear",
    name: "Safety & PPE",
    description: "Helmets, gloves, fall arrest systems, and compliance-ready protective equipment.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

const sampleProducts = [
  {
    id: "vx-drill",
    slug: "vx-cordless-drill",
    name: "VX Cordless Drill/Driver",
    description: "Brushless motor, dual-speed gearbox, telemetry-ready battery pack, and LED worklight.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "torque-wrench",
    slug: "precision-torque-wrench",
    name: "Precision Torque Wrench",
    description: "Digital torque readout with ±2% accuracy and cloud calibration history.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "bench-vise",
    slug: "industrial-bench-vise",
    name: "Industrial Bench Vise",
    description: "Heavy-duty swivel vise and clamping solutions designed for round-the-clock fabrication.",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "safety-kit",
    slug: "pro-safety-kit",
    name: "Pro Safety Kit",
    description: "Integrated PPE bundle with helmets, gloves, eyewear, and smart badges for access control.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
];

export const fetchCategories = async () => Promise.resolve(sampleCategories);

export const fetchProducts = async () => Promise.resolve(sampleProducts);
