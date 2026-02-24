import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import heroBg from "@/assets/images/home-hero.avif";
import { CategoryCard } from "@/components/CategoryCard";
import { fetchCategories } from "@/services/productService";

const heroSlides = [
  {
    badge: "New arrival",
    title: "VX Core18 Brushless Drivers",
    subtitle: "Deliver 48% more runtime with telemetry-ready batteries and smart torque modes.",
    ctaLabel: "Shop the range",
    ctaLink: "/products",
    image: heroBg,
  },
  {
    badge: "Deal of the week",
    title: "Industrial Workshop Bundles",
    subtitle: "Complete tool walls, storage, and power tool kits packaged for rapid deployment.",
    ctaLabel: "Explore bundles",
    ctaLink: "/workshop-solutions",
    image: heroBg,
  },
  {
    badge: "Limited stock",
    title: "Precision Torque Instruments",
    subtitle: "±2% accuracy torque analyzers with cloud calibration logs and service reminders.",
    ctaLabel: "View instruments",
    ctaLink: "/precision-instruments",
    image: heroBg,
  },
];

const quickLinks = [
  { label: "Power Tools", to: "/power-tools", icon: "⚡" },
  { label: "Hand Tools", to: "/products", icon: "🛠️" },
  { label: "Workshop", to: "/workshop-solutions", icon: "🏭" },
  { label: "Safety Gear", to: "/safety-gear", icon: "🛡️" },
  { label: "Rentals", to: "/tool-rentals", icon: "📦" },
  { label: "Service", to: "/services", icon: "🧰" },
];

const whyChooseUs = [
  {
    title: "Pan-India delivery",
    description: "48-hour fulfillment for stocked items with same-day dispatch in major metros.",
    icon: "🚚",
    metric: "480+",
    metricLabel: "Cities served",
    detail: "Logistics partners across India"
  },
  {
    title: "Telemetry ready",
    description: "Edge analytics dashboards keep maintenance teams ahead of every breakdown.",
    icon: "📊",
    metric: "99.8%",
    metricLabel: "System uptime",
    detail: "Live diagnostics across fleets"
  },
  {
    title: "Pro support",
    description: "Certified technicians deliver on-site demos, calibration, and repair camps.",
    icon: "🧑‍🔧",
    metric: "1,200+",
    metricLabel: "Annual service calls",
    detail: "Dedicated industry specialists"
  },
  {
    title: "Warranty plus",
    description: "Extended coverage plans and swap programs for mission-critical tool fleets.",
    icon: "✅",
    metric: "36 mo",
    metricLabel: "Coverage options",
    detail: "No-downtime replacement"
  },
];

const slideMotion = {
  initial: { opacity: 0, scale: 1.02 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const categoryIconMap = {
  "power-tools": "⚡",
  "hand-tools": "🛠️",
  "workshop-equipment": "🏭",
  "safety-gear": "🛡️",
};

export const HomePage = () => {
  const [productCategoriesData, setProductCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [heroForm, setHeroForm] = useState({ name: "", phone: "", email: "", requirement: "" });
  const [heroMessage, setHeroMessage] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const cats = await fetchCategories();
      setProductCategoriesData(cats ?? []);
      setIsLoading(false);
    };

    void loadContent();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const normalizedCategories = useMemo(
    () =>
      productCategoriesData.map((category, index) => ({
        id: String(category.id ?? index),
        slug:
          category.slug || category.name?.toLowerCase().replace(/\s+/g, "-") || `category-${index + 1}`,
        name: category.name || category.title || `Category ${index + 1}`,
        description:
          category.description ||
          "Explore Pew Tools solutions engineered for industrial crews across India.",
        image: category.image,
        icon: category.icon || categoryIconMap[category.id] || categoryIconMap[category.slug],
      })),
    [productCategoriesData],
  );

  const categoryCards = useMemo(
    () => normalizedCategories.map((category) => <CategoryCard key={category.id} category={category} />),
    [normalizedCategories],
  );

  const activeHero = heroSlides[activeSlide];

  const handleHeroFormSubmit = (event) => {
    event.preventDefault();
    if (!heroForm.name || !heroForm.phone || !heroForm.requirement) {
      setHeroMessage("Please complete the required fields before submitting.");
      return;
    }
    setHeroMessage("Thank you! A Pew Tools consultant will reach out within one business day.");
    setHeroForm({ name: "", phone: "", email: "", requirement: "" });
  };

  return (
    <div className="home-page bg-[#050b18]">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className="absolute inset-0"
              variants={slideMotion}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                backgroundImage: `linear-gradient(95deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.55)), url(${activeHero.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto grid gap-10 px-4 pb-24 pt-28 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                <span aria-hidden>✨</span>
                {activeHero.badge}
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                {activeHero.title}
              </h1>
              <p className="max-w-2xl text-base text-white/80 md:text-lg">{activeHero.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={activeHero.ctaLink}
                  className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-dark"
                >
                  {activeHero.ctaLabel}
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)}
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  View next offer
                </button>
              </div>
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 sm:grid-cols-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="flex flex-col gap-1 rounded-xl bg-white/5 p-3 text-white transition hover:bg-white/15"
                  >
                    <span className="text-lg" aria-hidden>
                      {item.icon}
                    </span>
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-xs text-white/60">Explore premium options</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/8 p-6 text-white backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Request an industrial build plan</h2>
              <p className="mt-2 text-sm text-white/70">
                Share your requirements and our consultants will assemble the perfect toolkit bundle for your crew.
              </p>
              <form onSubmit={handleHeroFormSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    value={heroForm.name}
                    required
                    placeholder="Your name"
                    className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
                    onChange={(event) => setHeroForm((prev) => ({ ...prev, name: event.target.value }))}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="hero-phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="hero-phone"
                      type="tel"
                      value={heroForm.phone}
                      required
                      placeholder="Phone number"
                      className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
                      onChange={(event) => setHeroForm((prev) => ({ ...prev, phone: event.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="hero-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      value={heroForm.email}
                      placeholder="Work email"
                      className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
                      onChange={(event) => setHeroForm((prev) => ({ ...prev, email: event.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="hero-requirement" className="sr-only">
                    Requirement
                  </label>
                  <textarea
                    id="hero-requirement"
                    value={heroForm.requirement}
                    required
                    rows={3}
                    placeholder="Required tools, crew size, budget"
                    className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
                    onChange={(event) => setHeroForm((prev) => ({ ...prev, requirement: event.target.value }))}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center py-3">
                  Submit request
                </button>
                {heroMessage && <p className="text-sm text-emerald-500">{heroMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 py-24">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center text-white">
            <span className="eyebrow text-brand/80">Browse categories</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Dial in the exact toolkit for every crew and application.
            </h2>
            <p className="text-base text-white/70">
              Curated collections designed for power users, maintenance teams, fabrication units, and on-site
              contractors. Each category is stocked with telemetry-ready, warranty-backed solutions.
            </p>
          </div>
          {isLoading ? (
            <div className="mt-10 text-center text-white/70">Loading categories...</div>
          ) : (
            <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(260px,_1fr))] gap-8 lg:mx-auto lg:max-w-6xl">
              {categoryCards}
            </div>
          )}
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden bg-[#050b18] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,26,0.25),_transparent_60%)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.2),_transparent_60%)]" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand/20 via-transparent to-transparent" aria-hidden />

        <div className="container relative z-10 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              <span aria-hidden>★</span>
              Why Pew Tools
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Precision hardware, telemetry intelligence, and pro crews.
            </h2>
            <p className="mt-3 text-base text-white/70">
              Aerospace-grade engineering and data-backed service so your tool fleets never slow down.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-xl">
                  {item.icon}
                </span>
                <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
                <div className="mt-4 rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-brand">{item.metric}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{item.metricLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#050b18] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(148,_163,_184,_0.12),_transparent_60%)]" aria-hidden />
        <div className="container relative z-10 px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
              <span aria-hidden>⏱️</span>
              Proven playbooks
            </span>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Lifecycle support every step of the way</h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="text-brand" aria-hidden>●</span>
                Discovery workshops to map crew requirements and safety protocols.
              </li>
              <li className="flex gap-3">
                <span className="text-brand" aria-hidden>●</span>
                Rapid deployment kits with telemetry-enabled tools and calibrated instrumentation.
              </li>
              <li className="flex gap-3">
                <span className="text-brand" aria-hidden>●</span>
                Preventive maintenance schedules, on-site clinics, and swap programs.
              </li>
              <li className="flex gap-3">
                <span className="text-brand" aria-hidden>●</span>
                Analytics dashboards and quarterly business reviews to keep your edge sharp.
              </li>
            </ul>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/10"
            >
              Explore service programs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mt-16 overflow-hidden bg-[#050b18] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,_107,_26,_0.25),_transparent_60%)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(148,_163,_184,_0.2),_transparent_65%)]" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand via-transparent to-brand" aria-hidden />
        <div className="container relative z-10 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6 lg:pl-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
                <span aria-hidden>📡</span>
                Stay ahead
              </div>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Get the latest VX launch alerts, pro tips, and fleet offers.
              </h2>
              <p className="text-base text-white/70">
                Join the Pew Tools bulletin to be first in line for new drops, telemetry updates, and exclusive
                bundles built for industrial crews. We ship only the most essential intel—no spam, ever.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <span className="text-brand" aria-hidden>
                    ●
                  </span>
                  Weekly pro insights
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand" aria-hidden>
                    ●
                  </span>
                  Exclusive launch access
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand" aria-hidden>
                    ●
                  </span>
                  Fleet management alerts
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
              <div className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-brand" aria-hidden />
              <form
                className="flex flex-col gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!newsletterEmail) return;
                  setSubscriptionMessage("Thanks! We will keep you posted on the latest drops.");
                  setNewsletterEmail("");
                }}
              >
                <div className="space-y-2">
                  <label htmlFor="home-cta-email" className="text-sm font-semibold text-white/80">
                    Work email
                  </label>
                  <input
                    id="home-cta-email"
                    type="email"
                    placeholder="you@workshop.com"
                    required
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="home-cta-role" className="text-sm font-semibold text-white/80">
                    Crew size
                  </label>
                  <select
                    id="home-cta-role"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-brand focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-slate-800">
                      Select range
                    </option>
                    <option value="1-10" className="text-slate-800">
                      1 - 10 technicians
                    </option>
                    <option value="11-25" className="text-slate-800">
                      11 - 25 technicians
                    </option>
                    <option value="26-50" className="text-slate-800">
                      26 - 50 technicians
                    </option>
                    <option value="50+" className="text-slate-800">
                      50+ technicians
                    </option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="home-cta-focus" className="text-sm font-semibold text-white/80">
                    Priority focus
                  </label>
                  <input
                    id="home-cta-focus"
                    type="text"
                    placeholder="e.g. Telemetry upgrades"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center rounded-2xl py-3">
                  Subscribe to insights
                </button>
                {subscriptionMessage && <p className="text-sm text-emerald-400">{subscriptionMessage}</p>}
                <p className="text-xs text-white/50">
                  By subscribing, you agree to receive curated communications from Pew Tools. You can unsubscribe at
                  any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
