import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const menuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

export const MobileMenu = ({ open, onClose, links }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.nav
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-slate-100 p-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 220, damping: 30 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900">Pew Tools</span>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={onClose}
                className="text-2xl text-slate-600"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className={`block rounded-lg px-4 py-2 text-base font-medium transition ${
                        isActive ? "bg-white text-brand" : "text-slate-900 hover:bg-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-sm text-slate-600">
                Need a tailored quote? Reach out to our solutions team and we will equip your crew with
                the right hardware.
              </p>
              <Link
                to="/contact"
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-dark"
              >
                Request a Quote
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
