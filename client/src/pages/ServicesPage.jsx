const serviceCategories = [
  {
    title: "Engineering & fabrication",
    description:
      "Design, prototype, and produce custom hand and power tools engineered to match duty-cycle, tolerances, and safety requirements for every industry vertical.",
    items: [
      "Torque-verified power driver systems",
      "Precision hand tool sets with insulation",
      "Specialty fixtures and jigs for assembly",
      "Private label and OEM branding programs",
    ],
  },
  {
    title: "Workshop deployment",
    description:
      "Convert empty floors into fully instrumented workshops. Our team configures workstations, storage, telemetry endpoints, and EHS-compliant layouts in weeks, not months.",
    items: [
      "Site audits and workflow mapping",
      "Bench, storage, and lift installation",
      "Tool crib digitisation and tracking",
      "SOP documentation and crew onboarding",
    ],
  },
  {
    title: "Maintenance & calibration",
    description:
      "Keep uptime predictable with scheduled service camps, calibration labs, and repair programs handled by Pew-certified technicians across India.",
    items: [
      "On-site preventive maintenance clinics",
      "Torque tool calibration with traceable certificates",
      "Hot-swap loaner hardware",
      "Break/fix and refurbishment services",
    ],
  },
  {
    title: "Telemetry & analytics",
    description:
      "Connect your tool fleet to live dashboards for productivity, compliance, and predictive insights. We integrate VX telemetry with existing ERPs and CMMS platforms.",
    items: [
      "VX telemetry sensor retrofits",
      "Dashboard configuration and alerts",
      "Integration with SAP, Oracle, and custom APIs",
      "Predictive maintenance modelling",
    ],
  },
  {
    title: "Training & certification",
    description:
      "Equip crews with the knowledge to operate, troubleshoot, and maintain complex tooling through immersive training experiences and certification tracks.",
    items: [
      "Hands-on workshops and simulator labs",
      "EHS compliance and safety certifications",
      "Shift supervisor and champion programs",
      "Digital knowledge bases and refresher modules",
    ],
  },
  {
    title: "Fleet lifecycle management",
    description:
      "We handle procurement, deployment, maintenance, and upgrade paths for large tool fleets so your teams focus on the job—not the hardware logistics.",
    items: [
      "Strategic procurement and vendor consolidation",
      "Lifecycle planning and upgrade roadmaps",
      "Centralised inventory and kitting",
      "Asset recovery and sustainability programs",
    ],
  },
];

const differentiators = [
  {
    label: "Certified experts",
    value: "210+",
    detail: "factory-trained Pew technicians across India",
  },
  {
    label: "Service camps",
    value: "480",
    detail: "annual on-site clinics keeping fleets mission-ready",
  },
  {
    label: "Telemetry installs",
    value: "28k",
    detail: "VX-enabled tools feeding real-time analytics",
  },
  {
    label: "Response SLA",
    value: "4 hrs",
    detail: "rapid support in major manufacturing hubs",
  },
];

export const ServicesPage = () => (
  <div className="services-page bg-[#050b18] text-white">
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_65%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,26,0.18),_transparent_60%)]"
        aria-hidden
      />
      <div className="container relative z-10 grid gap-10 px-6 lg:grid-cols-[1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            <span aria-hidden>🛠️</span>
            Services
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Full-stack support that keeps industrial crews moving.
          </h1>
          <p className="text-base text-white/70">
            From custom tool engineering to telemetry-backed maintenance, Pew Tools delivers end-to-end services that
            accelerate deployment, safeguard uptime, and ensure every crew operates at peak performance.
          </p>
          <div className="grid gap-4 text-sm text-white/60 md:grid-cols-2">
            <p>
              We partner with construction, manufacturing, automotive, aerospace, and energy leaders to design tool
              ecosystems, commission workshops, and sustain fleets with responsive service programs.
            </p>
            <p>
              Our service teams operate across India with rapid-response SLAs, traceable certifications, and field-ready
              technicians equipped to handle complex tooling environments.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-4">
            {differentiators.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{item.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-brand">{item.value}</dd>
                <p className="mt-2 text-xs text-white/60">{item.detail}</p>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-light">
                <span aria-hidden>📡</span>
                VX telemetry advantage
              </span>
              <h2 className="text-2xl font-semibold">Connected services from deployment to diagnostics.</h2>
              <p className="text-sm text-white/70">
                Combine hardware, data, and support in one program. Live dashboards track torque compliance, tool usage,
                and maintenance schedules so your crews stay ahead of every job.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand">
                  ●
                </span>
                Fleet telemetry retrofits, SIM provisioning, and secure cloud ingestion.
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand">
                  ●
                </span>
                Predictive alerts and maintenance workflows integrated with your CMMS.
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand">
                  ●
                </span>
                Quarterly business reviews to tune performance targets and budgets.
              </li>
            </ul>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20">
              Schedule a discovery call
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="relative border-t border-white/5 py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]"
        aria-hidden
      />
      <div className="container relative z-10 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Services engineered for every phase of your tooling lifecycle.</h2>
          <p className="mt-4 text-base text-white/70">
            Explore our core service pillars. Each engagement is modular so you can start with rapid deployment, scale
            into telemetry, and layer on maintenance programs as your operation grows.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => (
            <article
              key={category.title}
              className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow transition hover:-translate-y-2 hover:border-brand/40 hover:shadow-brand/20"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                <p className="text-sm text-white/70">{category.description}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 text-brand">
                      ●
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:border-brand hover:text-brand"
              >
                Learn more
                <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="relative border-t border-white/5 py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_60%)]"
        aria-hidden
      />
      <div className="container relative z-10 grid gap-10 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            <span aria-hidden>🏭</span>
            Workshop blueprints
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Turnkey facility upgrades, delivered on aggressive timelines.</h2>
          <p className="text-base text-white/70">
            Our deployment specialists handle every step—layout design, equipment sourcing, on-site installation, and
            operator training—so your crews walk into a ready-to-run workshop.
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand">
                ●
              </span>
              Digital twins and 3D layout simulations to validate flow before build-out.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand">
                ●
              </span>
              Collaboration with EHS teams to meet compliance, ventilation, and ergonomic standards.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand">
                ●
              </span>
              Detailed handover documentation, SOPs, and certification for your crew leaders.
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Rapid deployment playbook</h3>
            <ol className="space-y-3 text-sm text-white/70">
              <li>
                <strong className="block text-white">1. Blueprint</strong>
                Requirements discovery, workflow mapping, and BOM preparation.
              </li>
              <li>
                <strong className="block text-white">2. Mobilise</strong>
                Hardware sourcing, logistics scheduling, and crew training plans.
              </li>
              <li>
                <strong className="block text-white">3. Commission</strong>
                On-site installation, acceptance testing, and telemetry onboarding.
              </li>
              <li>
                <strong className="block text-white">4. Sustain</strong>
                Service camps, calibration schedules, and continuous improvement loops.
              </li>
            </ol>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
            >
              Request a workshop audit
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
