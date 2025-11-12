import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "../components/CategoryCard";
import { ProductCard } from "../components/ProductCard";
import { fetchCategories, fetchProducts } from "../services/productService";
import type { Category, Product } from "../types";

export const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [productCategories, setProductCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const [cats, prods] = await Promise.all([fetchCategories(), fetchProducts()]);
      setProductCategories(cats);
      setFeaturedProducts(prods.filter((product) => product.isFeatured));
      setIsLoading(false);
    };

    void loadContent();
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              <span>Built with field crews in mind</span>
            </div>
            <h1>Level up every build with intelligent torque systems.</h1>
            <p>
              From the first cut to the final polish, Pew Tools merges industrial resilience with
              ergonomic control so crews deliver flawless results faster.
            </p>

            <ul className="hero-feature-list">
              <li>
                <span className="hero-feature-icon" aria-hidden>
                  ⚡
                </span>
                <div>
                  <strong>EdgeCore batteries</strong>
                  <p>Hot-swap packs recharge to 80% in 18 minutes for non-stop momentum.</p>
                </div>
              </li>
              <li>
                <span className="hero-feature-icon" aria-hidden>
                  🛠️
                </span>
                <div>
                  <strong>Adaptive drive modes</strong>
                  <p>Sensor-guided precision automatically tunes torque, speed, and balance.</p>
                </div>
              </li>
              <li>
                <span className="hero-feature-icon" aria-hidden>
                  🧰
                </span>
                <div>
                  <strong>Modular loadouts</strong>
                  <p>Mix-and-match kits tailored to framing, finish, and specialty crews.</p>
                </div>
              </li>
            </ul>

            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/auth" className="btn btn-outline">
                Join the Crew
              </Link>
            </div>

            <dl className="hero-metrics">
              <div>
                <dt>Pro crews powered</dt>
                <dd>10K+</dd>
              </div>
              <div>
                <dt>Avg. uptime gain</dt>
                <dd>48%</dd>
              </div>
              <div>
                <dt>Support response</dt>
                <dd>14 min</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="hero-visual-panel">
              <header className="hero-visual-header">
                <span className="hero-visual-pill">Telemetry synced</span>
                <span className="hero-visual-value">98%</span>
              </header>
              <div className="hero-visual-chart">
                <div className="hero-visual-track">
                  <div className="hero-visual-track-header">
                    <span>Torque output</span>
                    <span>1320 in-lb</span>
                  </div>
                  <div className="hero-visual-progress">
                    <span style={{ width: "92%" }} />
                  </div>
                </div>
                <div className="hero-visual-track">
                  <div className="hero-visual-track-header">
                    <span>Runtime</span>
                    <span>4h 12m</span>
                  </div>
                  <div className="hero-visual-progress hero-visual-progress--secondary">
                    <span style={{ width: "86%" }} />
                  </div>
                </div>
              </div>
              <footer className="hero-visual-footer">
                <strong>MX-9 Brushless Drill</strong>
                <p>1320 in-lb torque • 3.1 lbs • IP56 dust + water seal</p>
              </footer>
            </div>
            <div className="hero-visual-badge">
              <strong>New drop</strong>
              <span>Carbon composite housing</span>
            </div>
            <div className="hero-visual-glow" />
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Shop by Category</p>
            <h2>Everything you need, from torque to touch-ups.</h2>
          </div>
          <Link to="/products" className="btn btn-link">
            Browse all tools
          </Link>
        </div>
        <div className="container category-grid">
          {isLoading ? (
            <div className="loading-block" role="status">
              Loading categories...
            </div>
          ) : (
            productCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          )}
        </div>
      </section>

      <section className="featured-products">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Featured Picks</p>
            <h2>Our best-selling tools for power, precision, and protection.</h2>
          </div>
          <Link to="/products" className="btn btn-link">
            View shop
          </Link>
        </div>
        <div className="container product-grid">
          {isLoading ? (
            <div className="loading-block" role="status">
              Loading featured products...
            </div>
          ) : (
            featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <h2>Get exclusive blueprints and launch alerts.</h2>
            <p>
              Sign up for the Pew Tools bulletin to receive new product drops, pro tips, and special
              offers tailored to your trade.
            </p>
          </div>
          <form
            className="cta-form"
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              if (!newsletterEmail) return;
              setSubscriptionMessage("Thanks! We will keep you posted on the latest drops.");
              setNewsletterEmail("");
            }}
          >
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              placeholder="you@workshop.com"
              required
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
          {subscriptionMessage && <p>{subscriptionMessage}</p>}
        </div>
      </section>
    </div>
  );
};
