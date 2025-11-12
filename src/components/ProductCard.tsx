import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const primaryImage = product.images[0];

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-media">
        <img src={primaryImage} alt={product.name} loading="lazy" />
        {product.isFeatured && <span className="product-badge">Top Pick</span>}
      </Link>
      <div className="product-body">
        <h3>
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-description">{product.shortDescription}</p>
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-rating" aria-label={`${product.rating} rating`}>
            <FaStar aria-hidden />
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
      </div>
      <div className="product-actions">
        <Link to={`/products/${product.slug}`} className="btn btn-outline">
          View Details
        </Link>
        <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
};
