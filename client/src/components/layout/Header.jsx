import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold">
            PT
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-slate-900">Pew Tools</span>
            <span className="text-xs text-slate-500">Industrial Hand & Power Tools</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `border-b-2 border-transparent pb-1 transition hover:text-brand ${
                  isActive ? "border-brand text-brand" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileOpen(true)}
        >
          <span className="block h-0.5 w-6 bg-slate-900" />
          <span className="mt-1 block h-0.5 w-6 bg-slate-900" />
          <span className="mt-1 block h-0.5 w-6 bg-slate-900" />
        </button>
      </div>

      <MobileMenu open={isMobileOpen} onClose={() => setIsMobileOpen(false)} links={navLinks} />
    </header>
  );
};
