import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/site";

const useActiveSection = (enabled) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!enabled) return;
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [enabled]);

  return enabled ? active : "";
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active = useActiveSection(pathname === "/");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (id) =>
    `relative py-1 text-sm transition-colors hover:text-ivory ${
      active === id ? "text-ivory" : "text-sage"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-moss/60 bg-forest/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-ivory">
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.slice(0, -1).map((l) => (
            <Link key={l.id} to={{ pathname: "/", hash: `#${l.id}` }} className={linkClass(l.id)} aria-current={active === l.id ? "location" : undefined}>
              {l.label}
              {active === l.id && <span className="absolute inset-x-0 -bottom-[13px] h-px bg-mint" />}
            </Link>
          ))}
          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className="rounded-md border border-mint px-4 py-2 text-sm font-medium text-mint transition-colors hover:bg-mint hover:text-forest"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-ivory md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full border-b border-moss/60 bg-forest shadow-2xl md:hidden"
          >
            <ul className="wrap py-2">
              {navLinks.map((l) => (
                <li key={l.id} className="border-b border-moss/40 last:border-0">
                  <Link
                    to={{ pathname: "/", hash: `#${l.id}` }}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-lg text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
