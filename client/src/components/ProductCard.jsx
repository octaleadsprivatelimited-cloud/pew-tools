import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const fallbackImage = "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80";

export const ProductCard = ({ product }) => {
  const slug = product.slug || product.id || product.name?.toLowerCase().replace(/\s+/g, "-");
  const description =
    product.description || "Professional grade hardware designed for harsh work environments.";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-40 w-full overflow-hidden rounded-t-2xl bg-slate-100">
        <img
          src={product.image || fallbackImage}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="flex-1 text-sm text-slate-600">{description}</p>
        <Link to={`/products/${slug}`} className="text-sm font-semibold text-brand">
          View specifications →
        </Link>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slug: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
