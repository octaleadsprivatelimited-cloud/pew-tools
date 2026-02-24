const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/pewtools", icon: "📘" },
  { name: "Instagram", href: "https://www.instagram.com/pewtools", icon: "📸" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/pewtools", icon: "💼" },
  { name: "YouTube", href: "https://www.youtube.com/@pewtools", icon: "▶️" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold">
              PT
            </div>
            <span className="text-xl font-semibold">Pew Tools</span>
          </div>
          <p className="text-sm text-white/70">
            Professional-grade hand tools, power tools, and workshop solutions engineered for industrial teams across India.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Pew Tools India Pvt Ltd.</li>
            <li>Plot 42, Industrial Estate, Pune, India</li>
            <li>
              <a href="mailto:hello@pewtools.com" className="hover:text-brand">
                hello@pewtools.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="hover:text-brand">
                +91 98765 43210
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Quick Links</h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70">
            <li><a className="hover:text-brand" href="/services">Services</a></li>
            <li><a className="hover:text-brand" href="/products">Products</a></li>
            <li><a className="hover:text-brand" href="/portfolio">Portfolio</a></li>
            <li><a className="hover:text-brand" href="/faq">FAQ</a></li>
            <li><a className="hover:text-brand" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Follow us</h4>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm text-white/70 transition hover:border-brand hover:text-brand"
              >
                <span aria-hidden>{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-white/60">
          Designed and developed by <a className="text-brand" href="https://www.octaleads.com/" target="_blank" rel="noopener noreferrer">Octaleads Pvt Ltd.</a>
        </div>
      </div>
    </footer>
  );
};
