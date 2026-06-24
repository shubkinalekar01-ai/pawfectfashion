import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["All", "Birthday", "Wedding", "Festive", "Everyday", "Seasonal"] as const;
type Category = (typeof categories)[number];

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1583336663277-620dc1996580?w=480&h=580&fit=crop&auto=format",
    alt: "Dog in pink polka dot birthday dress",
    category: "Birthday",
    label: "Princess Birthday",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=480&h=420&fit=crop&auto=format",
    alt: "Small dog in blue polka dot shirt",
    category: "Everyday",
    label: "Casual Day Out",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1598133893847-a3b6858156d6?w=480&h=540&fit=crop&auto=format",
    alt: "Shih Tzu in red polka dot wedding dress",
    category: "Wedding",
    label: "Bridal Shih Tzu",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?w=480&h=480&fit=crop&auto=format",
    alt: "Dog in Santa costume for the festive season",
    category: "Festive",
    label: "Santa Paws",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1583513702411-9dade5d3cb12?w=480&h=560&fit=crop&auto=format",
    alt: "Small dog in Santa hat for seasonal celebrations",
    category: "Seasonal",
    label: "Winter Collection",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1608096299230-81c7b43d5dfc?w=480&h=420&fit=crop&auto=format",
    alt: "Dog in Santa hat holiday outfit",
    category: "Festive",
    label: "Holiday Joy",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=480&h=580&fit=crop&auto=format",
    alt: "Black pug in a stylish outfit",
    category: "Everyday",
    label: "Urban Chic",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1608096281339-5bcae1ec2f12?w=480&h=360&fit=crop&auto=format",
    alt: "Long-coated dog in a casual look",
    category: "Everyday",
    label: "Weekend Vibes",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1598134493202-9a02529d86bb?w=480&h=460&fit=crop&auto=format",
    alt: "French bulldog in a trendy outfit",
    category: "Birthday",
    label: "Birthday Frenchie",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1618173745201-8e3bf8978acc?w=480&h=540&fit=crop&auto=format",
    alt: "Dog on beach in seasonal outfit",
    category: "Seasonal",
    label: "Summer Edition",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "var(--muted)",
              color: "var(--primary)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Our{" "}
            <span style={{ color: "var(--primary)" }}>Pawfect Creations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Browse our collection of custom outfits made for pets of every
            shape, size, and personality.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200"
              style={{
                fontFamily: "'Nunito', sans-serif",
                background: active === cat ? "var(--primary)" : "var(--background)",
                color: active === cat ? "#fff" : "var(--muted-foreground)",
                border: `2px solid ${active === cat ? "var(--primary)" : "var(--border)"}`,
                boxShadow: active === cat ? "0 4px 14px rgba(215,155,125,0.35)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-muted cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ borderRadius: "1rem" }}
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(45,45,45,0.75) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-white/70 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
