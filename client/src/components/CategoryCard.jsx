import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const fallbackImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80";

export const CategoryCard = ({ category }) => {
  const slug = category.slug || category.id || category.name?.toLowerCase().replace(/\s+/g, "-");
  const description = category.description || "Explore Pew Tools solutions engineered for industrial environments.";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0">
        <img
          src={category.image || fallbackImage}
          alt={category.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80" />
      </div>
      <div className="relative flex h-full flex-col gap-5 p-6 text-white">
        <div className="flex items-center justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-semibold backdrop-blur">
            {category.icon ?? "🛠️"}
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            Browse
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold leading-tight">{category.name}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <div className="space-y-1 text-xs text-white/70">
            <p>• Curated pro-grade tools</p>
            <p>• Rapid delivery nationwide</p>
            <p>• OEM-backed warranties</p>
          </div>
          <Link
            to={`/products/${slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-brand-dark"
          >
            View tools
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slug: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};
