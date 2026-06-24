import { motion } from "motion/react";
import { MessageCircle, ChevronDown, Sparkles, Star, Truck, Heart } from "lucide-react";

const WA_NUMBER = "919082081364";

const badges = [
  { icon: <Sparkles size={16} />, label: "Custom Made" },
  { icon: <Heart size={16} />, label: "All Pet Types" },
  { icon: <Star size={16} />, label: "Premium Quality" },
  { icon: <Truck size={16} />, label: "Fast Delivery" },
];

const floatingShapes = [
  { size: 120, color: "#DCCCF7", top: "8%", left: "5%", delay: 0 },
  { size: 80, color: "#FFDCCB", top: "20%", right: "8%", delay: 0.5 },
  { size: 60, color: "#D9EEFF", bottom: "30%", left: "3%", delay: 1 },
  { size: 100, color: "#DDF5E5", bottom: "15%", right: "5%", delay: 0.8 },
  { size: 50, color: "#FFDCCB", top: "50%", left: "12%", delay: 1.5 },
];

export default function HeroSection() {
  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #FFF9F3 0%, #FFDCCB30 30%, #DCCCF730 60%, #D9EEFF30 100%)",
      }}
    >
      {/* Floating decorative blobs */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            opacity: 0.45,
            top: shape.top,
            left: shape.left,
            right: (shape as { right?: string }).right,
            bottom: (shape as { bottom?: string }).bottom,
            filter: "blur(2px)",
          }}
          animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full py-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "var(--secondary)",
              color: "var(--primary)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <Sparkles size={12} /> Premium Pet Boutique
          </motion.span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5 text-foreground"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Custom Pet Fashion{" "}
            <span
              className="relative inline-block"
              style={{ color: "var(--primary)" }}
            >
              For Every
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8 Q50 2, 100 8 Q150 14, 198 8"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Occasion
          </h1>

          <p
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From birthdays to weddings, PawfectFashion creates beautiful custom
            outfits for pets of all shapes, sizes, and personalities. Because
            every pet deserves to look their best.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white shadow-lg text-sm"
              style={{
                fontFamily: "'Nunito', sans-serif",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToGallery}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-foreground border-2 border-border bg-white text-sm hover:border-primary transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              View Gallery
            </motion.button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-border shadow-sm"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "var(--primary)",
                }}
              >
                {badge.icon}
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, x: 32, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div
            className="relative w-full max-w-md lg:max-w-none"
            style={{ aspectRatio: "4/5" }}
          >
            {/* Background blob */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, #DCCCF7 0%, #FFDCCB 50%, #D9EEFF 100%)",
                transform: "rotate(-3deg) scale(1.04)",
                borderRadius: "2.5rem",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1583336663277-620dc1996580?w=700&h=875&fit=crop&auto=format"
              alt="Adorable dog wearing a pink polka dot dress"
              className="relative z-10 w-full h-full object-cover"
              style={{ borderRadius: "2.5rem" }}
            />
            {/* Floating pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 z-20 flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-xl"
            >
              <span className="text-2xl">🎀</span>
              <div>
                <p
                  className="text-xs font-bold text-foreground"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Handcrafted with love
                </p>
                <p
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  100+ happy pets styled
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 z-20 bg-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <span className="text-xl">⭐</span>
              <span
                className="text-sm font-bold text-foreground"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                5.0 Rating
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
}
