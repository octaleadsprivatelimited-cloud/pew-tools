import { useState, useEffect } from "react";
import { blogsService } from "@/services/firebaseService";

const formatDate = (timestamp) => {
  if (!timestamp) return "";
  const d = timestamp.toMillis ? new Date(timestamp.toMillis()) : new Date(timestamp);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await blogsService.getAll();
        setBlogPosts(data.filter((b) => b.published).map((b) => ({ ...b, date: formatDate(b.createdAt), category: b.category || "Insights", readTime: b.readTime || "5 min read" })));
      } catch (e) {
        console.error("Error loading blogs:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const [featured, ...others] = blogPosts;

  return (
    <div className="blog-page bg-[#050b18] text-white">
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_65%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,26,0.18),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>📰</span>
              Insights
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Strategy, telemetry, and tooling know-how from inside Pew Labs.
            </h1>
            <p className="text-base text-white/70">
              Dive into case studies, technical breakdowns, and maintenance playbooks that help industrial crews operate with
              confidence. New pieces drop every week from our product engineers and service leads.
            </p>
            <div className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
              <p>
                Get actionable guidance on deploying VX telemetry, configuring workshops, and scaling tool fleets across India.
              </p>
              <p>
                Subscribe for launch alerts, service updates, and downloadable templates designed for plant managers and project leads.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
            >
              Join the insights bulletin
              <span aria-hidden>→</span>
            </a>
          </div>

          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white/70">Loading...</div>
          ) : featured ? (
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
                {featured.category}
              </span>
              <h2 className="text-2xl font-semibold text-white">{featured.title}</h2>
              <p className="text-sm text-white/70">{featured.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.author}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
              <a
                href={featured.slug ? `/blog/${featured.slug}` : "/contact"}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
              >
                Read the case study
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
          ) : null}
        </div>
      </section>

      <section className="relative border-t border-white/5 py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Latest insights</h2>
            <p className="mt-4 text-base text-white/70">
              All blog posts are crafted by Pew engineers, service specialists, and partner crews in the field—bringing practical
              knowledge straight to your inbox.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">Loading posts...</div>
            ) : (
              others.map((post) => (
              <article
                key={post.id || post.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow transition hover:-translate-y-2 hover:border-brand/40 hover:shadow-brand/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80"}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b18]/90 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                    <p className="text-sm text-white/70">{post.excerpt}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            )))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 pb-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,26,0.15),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>📬</span>
              Stay informed
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">Get the latest VX launch notes and service bulletins.</h2>
            <p className="text-base text-white/70">
              Subscribe to the Pew Tools digest for weekly updates, early product reveals, and downloadable checklists tailored to
              plant managers and project leads.
            </p>
          </div>
          <form
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-3">
              <label htmlFor="blog-email" className="text-sm font-semibold text-white/80">
                Work email
              </label>
              <input
                id="blog-email"
                type="email"
                required
                placeholder="you@factory.com"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-brand focus:outline-none"
              />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
              Subscribe to insights
              <span aria-hidden>→</span>
            </button>
            <p className="mt-3 text-xs text-white/50">
              We send one email per week. Unsubscribe at any time. Your data is handled per our privacy policy.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};
