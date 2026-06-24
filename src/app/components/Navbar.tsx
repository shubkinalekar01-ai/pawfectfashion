import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Size Guide", href: "#size-guide" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const WA_NUMBER = "919082081364";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
          aria-label="PawfectFashion home"
        >
          <span className="text-2xl">🐾</span>
          <span
            className="font-extrabold text-xl lg:text-2xl tracking-tight text-foreground"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Pawfect
            <span style={{ color: "var(--primary)" }}>Fashion</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-200" />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
          }}
        >
          <MessageCircle size={16} />
          Order on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-xl text-foreground hover:bg-muted/40 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-border px-5 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-muted/40 transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-bold text-white shadow-md"
              style={{
                fontFamily: "'Nunito', sans-serif",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
