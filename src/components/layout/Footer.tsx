import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h4>Pew Tools</h4>
          <p>
            Premium hand and power tools engineered for pros, makers, and weekend DIY champions.
          </p>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>123 Workshop Avenue, Seattle, WA</li>
            <li>
              <FaPhone aria-hidden /> (800) 555-PEWT
            </li>
            <li>support@pewtools.com</li>
          </ul>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/returns">Returns & Warranty</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Follow</h5>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook aria-hidden />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram aria-hidden />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Pew Tools. All rights reserved.</span>
      </div>
    </footer>
  );
};
