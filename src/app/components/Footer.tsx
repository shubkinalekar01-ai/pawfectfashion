import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

const WA_NUMBER = "919082081364";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Size Guide", href: "#size-guide" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const handleNav = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 border-t border-border"
      style={{ background: "var(--foreground)" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span
                className="font-extrabold text-xl tracking-tight text-white"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Pawfect<span style={{ color: "var(--primary)" }}>Fashion</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              Premium custom clothing for pets of all types. Handmade with love,
              designed for every occasion — because your pet deserves the very best.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  aria-label="Social media"
                >
                  <Icon size={16} color="rgba(255,255,255,0.8)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest text-white mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest text-white mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Order Now
            </h4>
            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              Ready to dress your pet in style? Chat with us on WhatsApp and
              we'll create a custom outfit just for them.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-white transition-transform hover:scale-105"
              style={{
                fontFamily: "'Nunito', sans-serif",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <p>© 2025 PawfectFashion. All rights reserved.</p>
          <p>Made with 🐾 for pets everywhere</p>
        </div>
      </div>
    </footer>
  );
}
