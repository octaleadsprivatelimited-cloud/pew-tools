import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { lines, updateQuantity, removeItem, totals } = useCart();

  if (lines.length === 0) {
    return (
      <div className="cart-page container empty-state">
        <h1>Your cart is empty.</h1>
        <p>Browse our tools and kits to start building your next project.</p>
        <Link to="/products" className="btn btn-primary">
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <section className="cart-items">
          {lines.map((line) => (
            <article key={line.product.id} className="cart-item">
              <img src={line.product.images[0]} alt={line.product.name} />
              <div className="cart-item-body">
                <h2>{line.product.name}</h2>
                <p>{line.product.shortDescription}</p>
                <span className="price">${line.product.price.toFixed(2)}</span>
                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease quantity for ${line.product.name}`}
                    onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                  >
                    <FaMinus aria-hidden />
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase quantity for ${line.product.name}`}
                    onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                  >
                    <FaPlus aria-hidden />
                  </button>
                  <button
                    type="button"
                    className="remove"
                    aria-label={`Remove ${line.product.name} from cart`}
                    onClick={() => removeItem(line.product.id)}
                  >
                    <FaTrash aria-hidden />
                  </button>
                </div>
              </div>
              <div className="cart-line-total">
                ${(line.product.price * line.quantity).toFixed(2)}
              </div>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <dl>
            <div>
              <dt>Subtotal</dt>
              <dd>${totals.subtotal.toFixed(2)}</dd>
            </div>
            <div>
              <dt>Tax</dt>
              <dd>${totals.tax.toFixed(2)}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>{totals.shipping === 0 ? "Free" : `$${totals.shipping.toFixed(2)}`}</dd>
            </div>
            <div className="summary-total">
              <dt>Total</dt>
              <dd>${totals.total.toFixed(2)}</dd>
            </div>
          </dl>
          <Link to="/checkout" className="btn btn-primary">
            Proceed to Checkout
          </Link>
          <Link to="/products" className="btn btn-ghost">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
};
