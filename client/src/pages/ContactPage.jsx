const contactChannels = [
  {
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    description: "Monday–Saturday, 8:00 AM – 8:00 PM IST",
  },
  {
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    description: "Quick responses for urgent tooling requests",
  },
  {
    label: "Email",
    value: "hello@pewtools.com",
    href: "mailto:hello@pewtools.com",
    description: "Share RFQs, project briefs, or service tickets",
  },
  {
    label: "Head office",
    value: "Plot 42, Industrial Estate, Pune, Maharashtra, India",
    description: "Open Monday–Friday, 9:00 AM – 6:00 PM",
  },
];

const supportPrograms = [
  {
    title: "Project discovery",
    description:
      "Book a workshop to scope tooling requirements, crew sizes, and compliance needs. We deliver a tailored proposal within 48 hours.",
  },
  {
    title: "Service support",
    description:
      "Log maintenance requests, schedule calibration camps, and request swap kits through our dedicated service desk.",
  },
  {
    title: "Telemetry onboarding",
    description:
      "Work with VX specialists to configure dashboards, integrations, and alert thresholds for your tool fleet.",
  },
];

export const ContactPage = () => (
  <div className="contact-page bg-[#050b18] text-white">
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_65%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,26,0.18),_transparent_60%)]"
        aria-hidden
      />
      <div className="container relative z-10 grid gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            <span aria-hidden>📞</span>
            Contact us
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Let’s design the right tooling ecosystem for your crew.
          </h1>
          <p className="text-base text-white/70">
            Reach out for consultations, service requests, or telemetry onboarding. Our project consultants respond within
            one business day, and our service desk is available round-the-clock for critical support.
          </p>
          <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="space-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">{channel.label}</p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="text-lg font-semibold text-white transition hover:text-brand"
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {channel.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-white">{channel.value}</p>
                )}
                {channel.description && <p className="text-sm text-white/60">{channel.description}</p>}
              </div>
            ))}
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Support programs</h2>
            <ul className="space-y-3 text-sm text-white/70">
              {supportPrograms.map((program) => (
                <li key={program.title}>
                  <strong className="block text-white">{program.title}</strong>
                  <span>{program.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="relative space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-semibold text-white/80">
              Full name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Priya Sharma"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-semibold text-white/80">
                Work email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-phone" className="text-sm font-semibold text-white/80">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="+91 | 00000 00000"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-company" className="text-sm font-semibold text-white/80">
              Company
            </label>
            <input
              id="contact-company"
              type="text"
              placeholder="Your organisation"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-requirements" className="text-sm font-semibold text-white/80">
              Project requirements
            </label>
            <textarea
              id="contact-requirements"
              rows={5}
              required
              placeholder="Share crew size, project type, timelines, and any existing tool or telemetry stack."
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-dark"
          >
            Submit enquiry
          </button>
          <p className="text-xs text-white/50">
            We respond within one business day. For urgent requests, call or WhatsApp the numbers listed above.
          </p>
        </form>
      </div>
    </section>
  </div>
);
