// Initialize localStorage with existing website data (optional fallback; admin uses Firebase)
const sampleProducts = [];

// Import data from pages (we'll need to extract these)
const initialServices = [
  {
    title: "Engineering & fabrication",
    description: "Design, prototype, and produce custom hand and power tools engineered to match duty-cycle, tolerances, and safety requirements for every industry vertical.",
    icon: "⚙️",
    features: [
      "Torque-verified power driver systems",
      "Precision hand tool sets with insulation",
      "Specialty fixtures and jigs for assembly",
      "Private label and OEM branding programs",
    ],
  },
  {
    title: "Workshop deployment",
    description: "Convert empty floors into fully instrumented workshops. Our team configures workstations, storage, telemetry endpoints, and EHS-compliant layouts in weeks, not months.",
    icon: "🏭",
    features: [
      "Site audits and workflow mapping",
      "Bench, storage, and lift installation",
      "Tool crib digitisation and tracking",
      "SOP documentation and crew onboarding",
    ],
  },
  {
    title: "Maintenance & calibration",
    description: "Keep uptime predictable with scheduled service camps, calibration labs, and repair programs handled by Pew-certified technicians across India.",
    icon: "🔧",
    features: [
      "On-site preventive maintenance clinics",
      "Torque tool calibration with traceable certificates",
      "Hot-swap loaner hardware",
      "Break/fix and refurbishment services",
    ],
  },
  {
    title: "Telemetry & analytics",
    description: "Connect your tool fleet to live dashboards for productivity, compliance, and predictive insights. We integrate VX telemetry with existing ERPs and CMMS platforms.",
    icon: "📡",
    features: [
      "VX telemetry sensor retrofits",
      "Dashboard configuration and alerts",
      "Integration with SAP, Oracle, and custom APIs",
      "Predictive maintenance modelling",
    ],
  },
  {
    title: "Training & certification",
    description: "Equip crews with the knowledge to operate, troubleshoot, and maintain complex tooling through immersive training experiences and certification tracks.",
    icon: "🎓",
    features: [
      "Hands-on workshops and simulator labs",
      "EHS compliance and safety certifications",
      "Shift supervisor and champion programs",
      "Digital knowledge bases and refresher modules",
    ],
  },
  {
    title: "Fleet lifecycle management",
    description: "We handle procurement, deployment, maintenance, and upgrade paths for large tool fleets so your teams focus on the job—not the hardware logistics.",
    icon: "🚚",
    features: [
      "Strategic procurement and vendor consolidation",
      "Lifecycle planning and upgrade roadmaps",
      "Centralised inventory and kitting",
      "Asset recovery and sustainability programs",
    ],
  },
];

const initialBlogs = [
  {
    title: "Selecting the right torque tools for industrial assembly",
    slug: "selecting-right-torque-tools",
    excerpt: "Evaluate duty-cycle, precision requirements, and telemetry options before choosing your next torque solution. We break down the key specs every plant manager should know.",
    content: "Full content for: Selecting the right torque tools for industrial assembly...",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80",
    author: "Aarav Shah",
    published: true,
  },
  {
    title: "How telemetry reduces downtime for construction fleets",
    slug: "telemetry-reduces-downtime",
    excerpt: "See how VX telemetry surfaces torque, runtime, and maintenance alerts to keep multi-shift crews on schedule across large infrastructure builds.",
    content: "Full content for: How telemetry reduces downtime for construction fleets...",
    image: "https://images.unsplash.com/photo-1529429617124-aee711a332da?auto=format&fit=crop&w=1200&q=80",
    author: "Priya Deshmukh",
    published: true,
  },
  {
    title: "Five workshop upgrades that boost safety compliance",
    slug: "workshop-upgrades-safety",
    excerpt: "From ESD-safe benches to smart PPE badges, discover the upgrades that help workshops meet evolving compliance standards.",
    content: "Full content for: Five workshop upgrades that boost safety compliance...",
    image: "https://images.unsplash.com/photo-1529429617124-aee711a332da?auto=format&fit=crop&w=1200&q=80",
    author: "Karan Mehta",
    published: true,
  },
  {
    title: "The telemetry checklist for aerospace assembly lines",
    slug: "telemetry-checklist-aerospace",
    excerpt: "A framework to deploy telemetry-ready driver systems without disrupting throughput or clean-room protocols.",
    content: "Full content for: The telemetry checklist for aerospace assembly lines...",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    author: "Ananya Rao",
    published: true,
  },
  {
    title: "Configuring mobile service camps for remote sites",
    slug: "mobile-service-camps-remote",
    excerpt: "Plan mobile calibration labs, swap kits, and spares logistics to support crews at wind farms, mines, and highway builds.",
    content: "Full content for: Configuring mobile service camps for remote sites...",
    image: "https://images.unsplash.com/photo-1572985025314-38c375b21769?auto=format&fit=crop&w=1200&q=80",
    author: "Deepak Kulkarni",
    published: true,
  },
  {
    title: "Why predictive maintenance matters for tool fleets",
    slug: "predictive-maintenance-tool-fleets",
    excerpt: "Telemetry-driven maintenance can cut unexpected downtime by double digits. Here's how to build the roadmap.",
    content: "Full content for: Why predictive maintenance matters for tool fleets...",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    author: "Sahana Singh",
    published: true,
  },
];

const initialContact = [
  {
    type: "phone",
    label: "Call us",
    value: "+91 98765 43210",
    icon: "📞",
  },
  {
    type: "phone",
    label: "WhatsApp",
    value: "+91 98765 43210",
    icon: "💬",
  },
  {
    type: "email",
    label: "Email",
    value: "hello@pewtools.com",
    icon: "✉️",
  },
  {
    type: "address",
    label: "Head office",
    value: "Plot 42, Industrial Estate, Pune, Maharashtra, India",
    icon: "📍",
  },
];

const initialPricing = [
  {
    name: "Workshop Starter",
    price: 49000,
    currency: "₹",
    period: "",
    description: "Hand tool kits and cordless drivers for small fabrication teams.",
    features: [
      "Basic hand tool set",
      "Cordless drivers",
      "Small team support",
    ],
    popular: false,
  },
  {
    name: "Contractor Pro",
    price: 129000,
    currency: "₹",
    period: "",
    description: "Comprehensive power tool bundles with telemetry-ready batteries and chargers.",
    features: [
      "Power tool bundles",
      "Telemetry-ready batteries",
      "Chargers included",
      "Medium team support",
    ],
    popular: true,
  },
  {
    name: "Enterprise Fleet",
    price: 0,
    currency: "₹",
    period: "",
    description: "Tailored tool fleets, calibration services, and analytics dashboards for large crews.",
    features: [
      "Custom tool fleets",
      "Calibration services",
      "Analytics dashboards",
      "Large crew support",
      "Custom pricing",
    ],
    popular: false,
  },
];

// Check if data is already initialized
const isInitialized = (key) => {
  const data = localStorage.getItem(key);
  if (!data) return false;
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0;
  } catch {
    return false;
  }
};

// Initialize all data
export const initializeData = () => {
  const STORAGE_KEYS = {
    products: "pew_tools_products",
    services: "pew_tools_services",
    blogs: "pew_tools_blogs",
    contact: "pew_tools_contact",
    pricing: "pew_tools_pricing",
  };

  // Initialize Products (only if using localStorage; admin uses Firebase)
  if (!isInitialized(STORAGE_KEYS.products) && sampleProducts.length > 0) {
    const productsWithTimestamps = sampleProducts.map((product) => ({
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(productsWithTimestamps));
    console.log(`Initialized ${productsWithTimestamps.length} products`);
  }

  // Initialize Services
  if (!isInitialized(STORAGE_KEYS.services)) {
    const servicesWithTimestamps = initialServices.map((service, index) => ({
      ...service,
      id: `service-${index + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    localStorage.setItem(STORAGE_KEYS.services, JSON.stringify(servicesWithTimestamps));
    console.log(`Initialized ${servicesWithTimestamps.length} services`);
  }

  // Initialize Blogs
  if (!isInitialized(STORAGE_KEYS.blogs)) {
    const blogsWithTimestamps = initialBlogs.map((blog, index) => ({
      ...blog,
      id: `blog-${index + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    localStorage.setItem(STORAGE_KEYS.blogs, JSON.stringify(blogsWithTimestamps));
    console.log(`Initialized ${blogsWithTimestamps.length} blogs`);
  }

  // Initialize Contact
  if (!isInitialized(STORAGE_KEYS.contact)) {
    const contactWithTimestamps = initialContact.map((contact, index) => ({
      ...contact,
      id: `contact-${index + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    localStorage.setItem(STORAGE_KEYS.contact, JSON.stringify(contactWithTimestamps));
    console.log(`Initialized ${contactWithTimestamps.length} contact details`);
  }

  // Initialize Pricing
  if (!isInitialized(STORAGE_KEYS.pricing)) {
    const pricingWithTimestamps = initialPricing.map((pricing, index) => ({
      ...pricing,
      id: `pricing-${index + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    localStorage.setItem(STORAGE_KEYS.pricing, JSON.stringify(pricingWithTimestamps));
    console.log(`Initialized ${pricingWithTimestamps.length} pricing plans`);
  }
};
