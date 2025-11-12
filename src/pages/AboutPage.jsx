import { useEffect, useRef, useState } from "react";

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

const teamMembers = [
  {
    name: "Sanjana Patel",
    role: "Chief Technology Officer",
    bio: "Leads product innovation across telemetry, firmware, and edge analytics after a decade in robotics research.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Arjun Desai",
    role: "Director, Industrial Projects",
    bio: "Oversees enterprise rollouts for automotive, aviation, and heavy engineering partners nationwide.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Neha Kulkarni",
    role: "Head of Customer Success",
    bio: "Runs the nationwide service network delivering calibration clinics and uptime-focused agreements.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

const missionStats = [
  { label: "Cities served", value: "480+", description: "Dedicated logistics partnerships across India" },
  { label: "Technicians trained", value: "12,500", description: "Hands-on certification programs every quarter" },
  { label: "Telemetry devices online", value: "28,000", description: "Live data powering predictive analytics" },
  { label: "Response SLA", value: "4 hrs", description: "Rapid on-site support in major industrial zones" },
];

const CountdownBlock = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const target = useRef(new Date().setDate(new Date().getDate() + 12));

  useEffect(() => {
    const interval = window.setInterval(() => {
      const difference = Math.max(0, Number(target.current) - Date.now());
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-xl backdrop-blur">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,107,26,0.2),_transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.18),_transparent_60%)]"
        aria-hidden
      />
      <div className="relative space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>⏳</span>
              Upcoming milestone
            </span>
            <h3 className="text-2xl font-semibold">Next VX telemetry release goes live soon.</h3>
            <p className="text-sm text-white/60">
              We push telemetry enhancements, predictive maintenance models, and analytics dashboards with minimal downtime.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
          >
            Book a preview demo
            <span aria-hidden>→</span>
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          {units.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center">
              <p className="text-3xl font-semibold text-brand">{String(item.value).padStart(2, "0")}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/50">
          Stay subscribed for early release notes, feature previews, and best practices to keep your fleet calibrated.
        </p>
      </div>
    </section>
  );
};

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

      <section className="relative border-t border-white/5 py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_65%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_60%)]" aria-hidden />
        <div className="container relative z-10 px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>🤝</span>
              Leadership
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">Meet the team orchestrating uptime for industrial crews.</h2>
            <p className="text-base text-white/70">
              Cross-functional specialists in telemetry, mechanical engineering, operations, and customer success bring decades of
              expertise to every project we launch.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 text-white shadow-lg backdrop-blur transition hover:-translate-y-2 hover:border-brand/40"
              >
                <div className="relative h-40 overflow-hidden rounded-2xl bg-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent" />
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{member.role}</p>
                  <p className="text-sm text-white/70">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,26,0.15),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 px-6">
          <CountdownBlock />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
