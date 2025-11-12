import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { CheckoutFormData } from "../types";

const initialFormState: CheckoutFormData = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  shippingMethod: "standard",
  paymentMethod: "card",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
};

export const CheckoutPage = () => {
  const { lines, totals, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const updateField = <Key extends keyof CheckoutFormData>(
    key: Key,
    value: CheckoutFormData[Key],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    const requiredFields: Array<keyof CheckoutFormData> = [
      "fullName",
      "email",
      "phone",
      "addressLine1",
      "city",
      "state",
      "postalCode",
      "country",
    ];

    if (formData.paymentMethod === "card") {
      requiredFields.push("cardNumber", "cardExpiry", "cardCvc");
    }

    const nextErrors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        nextErrors[field] = "This field is required.";
      }
    });

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (formData.cardNumber && formData.cardNumber.replace(/\s/g, "").length < 12) {
      nextErrors.cardNumber = "Card number is incomplete.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page container">
        <div className="confirmation-card">
          <h1>Order confirmed!</h1>
          <p>
            Thanks for shopping with Pew Tools. A confirmation email is on its way with your order
            details and tracking information.
          </p>
          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link to="/products" className="btn btn-outline">
              Continue exploring tools
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="checkout-page container empty-state">
        <h1>Your cart is empty.</h1>
        <p>Add items to your cart before checking out.</p>
        <Link to="/products" className="btn btn-primary">
          Shop tools
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page container">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Shipping details</legend>
            <div className="form-grid">
              <label>
                Full name
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  required
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  required
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </label>
              <label className="span-2">
                Address line 1
                <input
                  type="text"
                  value={formData.addressLine1}
                  onChange={(event) => updateField("addressLine1", event.target.value)}
                  required
                />
                {errors.addressLine1 && <span className="error-text">{errors.addressLine1}</span>}
              </label>
              <label className="span-2">
                Address line 2
                <input
                  type="text"
                  value={formData.addressLine2}
                  onChange={(event) => updateField("addressLine2", event.target.value)}
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </label>
              <label>
                City
                <input
                  type="text"
                  value={formData.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  required
                />
                {errors.city && <span className="error-text">{errors.city}</span>}
              </label>
              <label>
                State / Province
                <input
                  type="text"
                  value={formData.state}
                  onChange={(event) => updateField("state", event.target.value)}
                  required
                />
                {errors.state && <span className="error-text">{errors.state}</span>}
              </label>
              <label>
                Postal code
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(event) => updateField("postalCode", event.target.value)}
                  required
                />
                {errors.postalCode && <span className="error-text">{errors.postalCode}</span>}
              </label>
              <label>
                Country
                <input
                  type="text"
                  value={formData.country}
                  onChange={(event) => updateField("country", event.target.value)}
                  required
                />
                {errors.country && <span className="error-text">{errors.country}</span>}
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Shipping method</legend>
            <label className="radio-option">
              <input
                type="radio"
                name="shippingMethod"
                value="standard"
                checked={formData.shippingMethod === "standard"}
                onChange={(event) =>
                  updateField("shippingMethod", event.target.value as CheckoutFormData["shippingMethod"])
                }
              />
              <div>
                <strong>Standard (3-5 business days)</strong>
                <span>Free</span>
              </div>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="shippingMethod"
                value="express"
                checked={formData.shippingMethod === "express"}
                onChange={(event) =>
                  updateField("shippingMethod", event.target.value as CheckoutFormData["shippingMethod"])
                }
              />
              <div>
                <strong>Express (1-2 business days)</strong>
                <span>$14.99</span>
              </div>
            </label>
          </fieldset>

          <fieldset>
            <legend>Payment</legend>
            <div className="payment-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={(event) =>
                    updateField("paymentMethod", event.target.value as CheckoutFormData["paymentMethod"])
                  }
                />
                <span>Credit / Debit Card</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={(event) =>
                    updateField("paymentMethod", event.target.value as CheckoutFormData["paymentMethod"])
                  }
                />
                <span>PayPal</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="google-pay"
                  checked={formData.paymentMethod === "google-pay"}
                  onChange={(event) =>
                    updateField("paymentMethod", event.target.value as CheckoutFormData["paymentMethod"])
                  }
                />
                <span>Google Pay</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="apple-pay"
                  checked={formData.paymentMethod === "apple-pay"}
                  onChange={(event) =>
                    updateField("paymentMethod", event.target.value as CheckoutFormData["paymentMethod"])
                  }
                />
                <span>Apple Pay</span>
              </label>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="form-grid">
                <label className="span-2">
                  Card number
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(event) => updateField("cardNumber", event.target.value)}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
                </label>
                <label>
                  Expiry
                  <input
                    type="text"
                    value={formData.cardExpiry}
                    onChange={(event) => updateField("cardExpiry", event.target.value)}
                    placeholder="MM/YY"
                  />
                  {errors.cardExpiry && <span className="error-text">{errors.cardExpiry}</span>}
                </label>
                <label>
                  CVC
                  <input
                    type="text"
                    value={formData.cardCvc}
                    onChange={(event) => updateField("cardCvc", event.target.value)}
                    placeholder="123"
                  />
                  {errors.cardCvc && <span className="error-text">{errors.cardCvc}</span>}
                </label>
              </div>
            )}
          </fieldset>

          <button type="submit" className="btn btn-primary">
            Place order
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order summary</h2>
          <ul className="summary-lines">
            {lines.map((line) => (
              <li key={line.product.id}>
                <div>
                  <strong>{line.product.name}</strong>
                  <span>Qty {line.quantity}</span>
                </div>
                <span>${(line.product.price * line.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
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
        </aside>
      </div>
    </div>
  );
};
