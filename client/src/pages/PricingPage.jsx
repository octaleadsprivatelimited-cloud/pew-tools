const tiers = [
  {
    name: "Workshop Starter",
    price: "₹49,000",
    description: "Hand tool kits and cordless drivers for small fabrication teams.",
  },
  {
    name: "Contractor Pro",
    price: "₹1,29,000",
    description: "Comprehensive power tool bundles with telemetry-ready batteries and chargers.",
  },
  {
    name: "Enterprise Fleet",
    price: "Custom",
    description: "Tailored tool fleets, calibration services, and analytics dashboards for large crews.",
  },
];

export const PricingPage = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">Pricing & Tool Bundles</h1>
      <p className="mt-4 text-slate-600">
        Flexible packages to equip crews of every scale. Custom configurations and leasing options available on
        request.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="rounded-2xl bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{tier.name}</h2>
            <p className="my-3 text-3xl font-bold text-brand">{tier.price}</p>
            <p className="text-sm text-slate-600">{tier.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
