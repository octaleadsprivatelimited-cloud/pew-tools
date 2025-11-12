import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingCart, FaSignInAlt, FaTools } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop All", to: "/products" },
  { label: "DIY Kits", to: "/products?category=DIY%20Kits" },
  { label: "Contact", to: "/#contact" },
];

export const Header = () => {
  const { lines } = useCart();
  const { user } = useAuth();

  const cartCount = useMemo(
    () => lines.reduce((total, line) => total + line.quantity, 0),
    [lines],
  );

  return (
    <header className="app-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <FaTools aria-hidden />
          <span>Pew Tools</span>
        </NavLink>
        <nav aria-label="Primary navigation">
          <button className="nav-trigger" type="button" aria-label="Open navigation">
            <FaBars aria-hidden />
          </button>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <NavLink to="/cart" className="cart-indicator" aria-label="Shopping cart">
            <FaShoppingCart aria-hidden />
            <span>Cart</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </NavLink>
          <NavLink to="/auth" className="auth-link">
            <FaSignInAlt aria-hidden />
            <span>{user ? `Hello, ${user.name}` : "Sign In"}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
