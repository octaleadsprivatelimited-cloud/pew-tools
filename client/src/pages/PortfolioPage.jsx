import { useState, useEffect } from "react";
import { portfolioService } from "@/services/firebaseService";

const testimonials = [
  {
    quote:
      "The VX telemetry rollout with Pew Tools gave us real-time visibility into torque compliance across all critical stations. Their service team has been outstanding.",
    author: "Rahul Mehta",
    role: "Head of Manufacturing Engineering, AutoMotion",
  },
  {
    quote:
      "From planning to commissioning, the Pew crew handled our workshop upgrade flawlessly. Calibration camps keep our crews running without delays.",
    author: "Sneha Kapoor",
    role: "Project Director, UrbanWay Infrastructure",
  },
];

export const PortfolioPage = () => {
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await portfolioService.getAll();
        setPortfolioProjects(data);
      } catch (e) {
        console.error("Error loading portfolio:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
  <div className="portfolio-page bg-[#050b18] text-white">
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_65%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,26,0.18),_transparent_60%)]"
        aria-hidden
      />
      <div className="container relative z-10 grid gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            <span aria-hidden>📁</span>
            Portfolio
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Proven deployments built to keep mission-critical projects on schedule.
          </h1>
          <p className="text-base text-white/70">
            Explore a cross-section of Pew Tools engagements spanning manufacturing, infrastructure, renewable energy,
            and commercial assets. Every project pairs rugged hardware with telemetry intelligence and responsive service.
          </p>
          <div className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
            <p>
              Our teams coordinate design, deployment, and maintenance, ensuring your crews walk into a ready-to-run tool
              ecosystem on day one.
            </p>
            <p>
              We deliver not just tools, but sustainable lifecycle partnerships with measurable performance gains for each
              engagement.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Metrics that matter</h2>
            <dl className="grid gap-4 text-sm text-white/70">
              <div>
                <dt className="text-white/60">Industrial partners served</dt>
                <dd className="text-2xl font-semibold text-brand">450+</dd>
                <p>Manufacturing, infrastructure, aerospace, and energy enterprises.</p>
              </div>
              <div>
                <dt className="text-white/60">Average service SLA</dt>
                <dd className="text-2xl font-semibold text-brand">4 hrs</dd>
                <p>Pew-certified technicians across India with rapid response kits.</p>
              </div>
              <div>
                <dt className="text-white/60">Telemetry installs</dt>
                <dd className="text-2xl font-semibold text-brand">28k</dd>
                <p>Tools streaming compliance data and predictive insights in real time.</p>
              </div>
            </dl>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
            >
              Discuss a project estimate
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
          <h2 className="text-3xl font-semibold md:text-4xl">Flagship deployments</h2>
          <p className="mt-4 text-base text-white/70">
            Swipe through our highlight reel and see how Pew Tools solutions drive measurable impact for industrial crews
            and project managers across India.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">Loading portfolio...</div>
          ) : (
            portfolioProjects.map((project) => (
            <article
              key={project.id || project.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow transition hover:-translate-y-2 hover:border-brand/40 hover:shadow-brand/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80"}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18]/90 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {project.sector}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{project.location}</p>
                  <p className="text-sm text-white/70">{project.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {(project.highlights || []).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1 text-brand">
                        ●
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-brand">
                  {project.result}
                </div>
              </div>
            </article>
          )))}
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
            <span aria-hidden>🌐</span>
            Nationwide reach
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Consistent Pew service coverage across India.</h2>
          <p className="text-base text-white/70">
            With service hubs in eight major metros, mobile calibration labs, and strategic warehouses, Pew Tools keeps
            hardware ready for every phase of your build, no matter where it is.
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand">
                ●
              </span>
              Mobile camps reach remote wind farms, mines, and highway projects within 48 hours.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand">
                ●
              </span>
              Calibration labs provide traceable certification, torque analysis, and repair services.
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-1 text-brand">
                ●
              </span>
              Strategic warehouses ensure rapid parts dispatch and swap kits on demand.
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Client testimonials</h2>
            <div className="grid gap-6">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="space-y-4">
                  <p className="text-lg text-white/80">"{testimonial.quote}"</p>
                  <footer className="text-sm text-white/70">
                    <strong>{testimonial.author}</strong>
                    <span className="mx-1">•</span>
                    {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};
