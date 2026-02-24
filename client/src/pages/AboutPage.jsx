const historyMilestones = [
  {
    year: "2008",
    title: "Engineering lab opened",
    description:
      "Pew Tools launches its Pune R&D lab to prototype torque instrumentation and precision assembly systems for aerospace partners.",
  },
  {
    year: "2013",
    title: "Nationwide fulfillment",
    description:
      "Bonded warehouses go live across Mumbai, Bengaluru, Chennai, and Delhi enabling 48-hour deliveries for large-scale rollouts.",
  },
  {
    year: "2018",
    title: "Telemetry platform released",
    description:
      "The VX telemetry stack connects power tools, streams calibration data in real time, and powers predictive maintenance dashboards.",
  },
  {
    year: "2024",
    title: "Industrial transformation partner",
    description:
      "Supporting 450+ manufacturing plants and infrastructure contractors with lifecycle hardware, on-site service camps, and training.",
  },
];

const missionStats = [
  { label: "Cities served", value: "480+", description: "Dedicated logistics partnerships across India" },
  { label: "Technicians trained", value: "12,500", description: "Hands-on certification programs every quarter" },
  { label: "Telemetry devices online", value: "28,000", description: "Live data powering predictive analytics" },
  { label: "Response SLA", value: "4 hrs", description: "Rapid on-site support in major industrial zones" },
];

const whyChooseUs = [
  {
    title: "Traceable calibration",
    description: "Every tool ships with certification records and is supported by our nationwide calibration labs for ongoing compliance.",
    icon: "✓",
  },
  {
    title: "Telemetry-first design",
    description: "VX-enabled hardware streams usage and torque data so you get predictive insights and audit-ready reporting.",
    icon: "📡",
  },
  {
    title: "On-site service camps",
    description: "Our technicians run preventive maintenance clinics and swap programs so your crews never wait on hardware.",
    icon: "🔧",
  },
  {
    title: "Single lifecycle partner",
    description: "From procurement to retirement, we handle deployment, training, and support so you focus on production.",
    icon: "🔄",
  },
];

export const AboutPage = () => {
  return (
    <div className="about-page bg-[#050b18] text-white">
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,26,0.25),_transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.2),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-12 px-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>🏗️</span>
              About Pew Tools
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Engineering reliable hardware ecosystems for crews that can’t slow down.
            </h1>
            <p className="text-base text-white/70">
              Pew Tools India manufactures professional-grade hand tools, power tools, and telemetry-ready workshop systems for
              industrial teams that demand precision and uptime. Our engineers partner with construction, manufacturing,
              aerospace, and heavy engineering leaders to keep projects moving without compromise.
            </p>
            <div className="grid gap-5 text-sm text-white/70 md:grid-cols-2">
              <p>
                From R&D to on-site service camps, every touchpoint is built around safety, reliability, and performance. We deliver
                calibrated tools, telemetry dashboards, and certified technicians through a single lifecycle program.
              </p>
              <p>
                By aligning hardware roadmaps with crew operations, every deployment remains adaptive to production schedules and
                compliance needs across India.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold">Mission metrics</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {missionStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-2xl font-semibold text-brand">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                  <p className="mt-2 text-xs text-white/60">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_65%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,107,26,0.18),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 flex max-w-6xl flex-col gap-16 px-6 lg:flex-row">
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>🗓️</span>
              Our journey
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">From prototype lab to nationwide industrial partner.</h2>
            <p className="text-base text-white/70">
              Each milestone sharpened our focus on reliability, data-backed maintenance, and customer success. Today our teams enable
              high-output crews across India to operate with confidence.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative pl-8">
              <div
                className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/40 to-transparent"
                aria-hidden
              />
              <span
                className="absolute -left-16 top-6 hidden h-16 w-16 rounded-full bg-brand/20 blur-3xl sm:block"
                aria-hidden
              />
              <div className="space-y-10">
                {historyMilestones.map((milestone, index) => (
                  <article
                    key={milestone.year}
                    className="group flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow transition hover:border-brand/40 hover:shadow-brand/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand bg-[#050b18] text-sm font-semibold shadow-[0_0_25px_rgba(255,107,26,0.25)]">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-sm text-white/70">{milestone.description}</p>
                    {index < historyMilestones.length - 1 && <div className="h-px w-full bg-white/10" aria-hidden />}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 py-24 pb-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,26,0.15),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>⭐</span>
              Why choose us
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Built for reliability, backed by service.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Industrial teams trust Pew Tools for precision hardware, real-time telemetry, and responsive support across India.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-brand/40 hover:shadow-brand/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
            >
              Talk to our team
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
