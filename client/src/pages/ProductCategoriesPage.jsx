import { useEffect, useState } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { fetchCategories, fetchProducts } from "@/services/productService";

const heroMetrics = [
  { label: "Product SKUs", value: "1.2K+", detail: "curated for industrial duty cycles" },
  { label: "Featured drops", value: "48", detail: "telemetry-ready bundles and kits" },
  { label: "Delivery SLA", value: "48 hrs", detail: "rapid fulfillment in major metros" },
  { label: "Warranty", value: "36 mo", detail: "extended coverage on pro fleets" },
];

export const ProductCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const [categoryResults, productResults] = await Promise.all([
        fetchCategories(),
        fetchProducts(),
      ]);
      setCategories(categoryResults ?? []);
      setProducts(productResults ?? []);
      setIsLoading(false);
    };

    void load();
  }, []);

  return (
    <div className="products-page bg-[#050b18] text-white">
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
              <span aria-hidden>🧰</span>
              Pew catalogue
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Tools, systems, and telemetry-ready bundles for every crew.
            </h1>
            <p className="text-base text-white/70">
              Explore our flagship products across power, hand, safety, and workshop categories. Each SKU is engineered
              for industrial uptime, and every bundle is supported by Pew service camps and VX telemetry.
            </p>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-brand">{metric.value}</dd>
                  <p className="mt-2 text-xs text-white/60">{metric.detail}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Pick your starting point</h2>
              <p className="text-sm text-white/70">
                Not sure where to begin? Start with pro bundles for framing crews, precision kits for aerospace teams,
                or VX telemetry-ready assortments. Our product specialists tailor loadouts to your exact use case.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-brand">
                    ●
                  </span>
                  Mix-and-match kits with calibrated torque, low vibration, and shatter-resistant housings.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-brand">
                    ●
                  </span>
                  Telemetry nodes that sync runtime, torque signatures, and service intervals to dashboards.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-brand">
                    ●
                  </span>
                  Optional service bundles covering maintenance camps, swap programs, and training.
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
              >
                Request a tailored catalogue
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
            <h2 className="text-3xl font-semibold md:text-4xl">Browse categories engineered for demanding job sites.</h2>
            <p className="mt-4 text-base text-white/70">
              Choose a category to view VX-enabled tools, hand-picked loadouts, and compatible telemetry modules. Each
              category is supported by rapid fulfillment, calibration labs, and optional maintenance camps.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {isLoading && categories.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-sm text-white/70">
                Loading categories...
              </div>
            ) : (
              categories.map((category) => <CategoryCard key={category.id} category={category} />)
            )}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-3xl font-semibold md:text-4xl">All flagship products at a glance.</h2>
              <p className="text-base text-white/70">
                Drill into product details, compare specs, and build your crew’s toolkit. Every featured product ships
                telemetry-ready, and most include extended warranty and service options.
              </p>
            </div>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
            >
              View pricing catalogue
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {isLoading && products.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-sm text-white/70">
                Loading products...
              </div>
            ) : (
              products.map((product) => <ProductCard key={product.id} product={product} />)
            )}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 pb-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,26,0.15),_transparent_60%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 px-6 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span aria-hidden>🔄</span>
              Service bundles
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">Pair products with lifecycle support programs.</h2>
            <p className="text-base text-white/70">
              Bundle your purchases with calibration schedules, telemetry dashboards, and rapid-response service camps
              so crews never wait on hardware.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand">
                  ●
                </span>
                Annual or quarterly calibration camps with traceable certification records.
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand">
                  ●
                </span>
                VX telemetry onboarding, custom dashboards, and predictive maintenance alerts.
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1 text-brand">
                  ●
                </span>
                Dedicated customer success team with 4-hour response SLAs in major metros.
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let’s build your next toolkit.</h3>
              <p className="text-sm text-white/70">
                Share project requirements, crew size, and deployment timelines—we’ll curate a Pew Tools bundle with the
                right service coverage.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/20"
              >
                Talk to a product strategist
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
