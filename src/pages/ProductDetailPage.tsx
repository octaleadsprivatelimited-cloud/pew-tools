import { useEffect, useState } from "react";
import { FaCheckCircle, FaChevronRight, FaTruck } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { getRelatedProducts } from "../data/products";
import { fetchProductBySlug } from "../services/productService";
import type { Product } from "../types";

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      setIsLoading(true);
      const result = await fetchProductBySlug(slug);
      if (!result) {
        navigate("/products");
        return;
      }
      setProduct(result);
      setRelatedProducts(getRelatedProducts(result));
      setIsLoading(false);
    };

    void load();
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="product-detail container">
        <div className="loading-block" role="status">
          Loading tool details...
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const primaryImage = product.images[0];

  return (
    <div className="product-detail container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <FaChevronRight aria-hidden />
        <Link to="/products">Products</Link>
        <FaChevronRight aria-hidden />
        <span aria-current="page">{product.name}</span>
      </nav>

      <div className="product-detail-grid">
        <div className="product-gallery">
          <img src={primaryImage} alt={product.name} />
          <div className="thumbnail-row">
            {product.images.map((image) => (
              <img key={image} src={image} alt={`${product.name} angle`} />
            ))}
          </div>
        </div>

        <div className="product-info">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>

          <div className="availability">
            <FaCheckCircle aria-hidden />
            <span>{product.inventory > 0 ? "In stock and ready to ship" : "Backorder"}</span>
          </div>

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              type="number"
              min={1}
              max={product.inventory}
              value={quantity}
              onChange={(event) => {
                const nextValue = Number(event.target.value) || 1;
                setQuantity(Math.max(1, Math.min(product.inventory, nextValue)));
              }}
            />
          </div>

          <div className="product-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addItem(product, quantity)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-outline">
              View Cart
            </Link>
          </div>

          <div className="shipping-note">
            <FaTruck aria-hidden />
            <div>
              <strong>Free express shipping on orders over $299.</strong>
              <p>Orders placed before 2 PM ship the same day.</p>
            </div>
          </div>

          <dl className="spec-list">
            {Object.entries(product.specs).map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="product-features">
        <h2>Why makers love it</h2>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="section-header">
            <div>
              <p className="eyebrow">Related tools</p>
              <h2>You might also like</h2>
            </div>
            <Link
              to={`/products?category=${encodeURIComponent(product.category)}`}
              className="btn btn-link"
            >
              View all {product.category.toLowerCase()}
            </Link>
          </div>
          <div className="product-grid">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
