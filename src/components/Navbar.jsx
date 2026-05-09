import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-lg border border-white/10 shadow-xl' : 'bg-transparent border border-transparent'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <a href="/" className="text-white font-bold tracking-tighter text-2xl flex-shrink-0">
          MyIdentity<span className="text-violet-deep">.</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md">
          {navLinks.map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a href="/#contact" className="hidden sm:block px-6 py-2.5 bg-violet-deep text-white text-sm font-bold rounded-xl hover:bg-violet-glow transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            Let's Talk
          </a>
          
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2 bg-white/5 rounded-lg border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[95%] glass rounded-2xl p-6 flex flex-col gap-4 border border-white/10 md:hidden"
          >
            {navLinks.map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-violet-glow transition-colors cursor-pointer border-b border-white/5 pb-3"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center mt-2 px-6 py-3 bg-violet-deep text-white font-bold rounded-xl hover:bg-violet-glow transition-all"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
