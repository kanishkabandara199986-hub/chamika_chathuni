import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Couple", to: "couple" },
    { name: "Our Story", to: "story" },
    { name: "Events", to: "events" },
    { name: "Gallery", to: "gallery" },
    { name: "RSVP", to: "rsvp" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "bg-[var(--color-ivory)]/95 shadow-sm py-4" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 4 }} // Delay after preloader
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand/Initials */}
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="cursor-pointer font-heading text-2xl font-bold text-[var(--color-maroon)]"
          >
            C<span className="text-[var(--color-gold)] font-traditional italic px-1">&</span>C
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={800}
                className="cursor-pointer font-traditional text-sm uppercase tracking-widest text-[var(--color-dark-brown)] hover:text-[var(--color-gold)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--color-maroon)]"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[var(--color-ivory)] flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className="absolute top-6 right-6 text-[var(--color-maroon)]"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-heading text-[var(--color-dark-brown)] hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-10 font-traditional text-xs text-[var(--color-maroon)]/50 tracking-widest uppercase">
              Wedora by Bandara Studio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
