import { motion } from "motion/react";
import { Ruler, Info } from "lucide-react";

const sizes = [
  {
    name: "XS",
    weight: "1–3 kg",
    neck: "15–20 cm",
    chest: "25–32 cm",
    back: "18–24 cm",
    pets: "Chihuahua, Small Birds",
    color: "#DCCCF7",
    border: "#B49FDE",
  },
  {
    name: "S",
    weight: "3–6 kg",
    neck: "20–27 cm",
    chest: "32–42 cm",
    back: "24–32 cm",
    pets: "Shih Tzu, Rabbit, Cat",
    color: "#FFDCCB",
    border: "#D79B7D",
  },
  {
    name: "M",
    weight: "6–12 kg",
    neck: "27–35 cm",
    chest: "42–54 cm",
    back: "32–42 cm",
    pets: "Beagle, Corgi, Medium Cat",
    color: "#D9EEFF",
    border: "#7BAFD4",
    featured: true,
  },
  {
    name: "L",
    weight: "12–20 kg",
    neck: "35–45 cm",
    chest: "54–66 cm",
    back: "42–52 cm",
    pets: "Labrador, Golden (young)",
    color: "#DDF5E5",
    border: "#5BAE80",
  },
  {
    name: "XL",
    weight: "20–35 kg",
    neck: "45–58 cm",
    chest: "66–80 cm",
    back: "52–65 cm",
    pets: "Golden Retriever, Husky",
    color: "#FFF3DC",
    border: "#D4A74A",
  },
];

const measurementRows = [
  { label: "Weight", key: "weight" },
  { label: "Neck", key: "neck" },
  { label: "Chest", key: "chest" },
  { label: "Back Length", key: "back" },
  { label: "Best for", key: "pets" },
] as const;

export default function SizeGuideSection() {
  return (
    <section
      id="size-guide"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF9F3 0%, #DCCCF720 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "var(--secondary)",
              color: "var(--primary)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <span className="flex items-center gap-1.5">
              <Ruler size={12} /> Size Guide
            </span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Find The{" "}
            <span style={{ color: "var(--primary)" }}>Perfect Fit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Use the guide below to find the closest size for your pet. All sizes
            are approximate — measurements vary by breed and build.
          </motion.p>
        </div>

        {/* Size cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {sizes.map((size, i) => (
            <motion.div
              key={size.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border-2 bg-card shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              style={{ borderColor: size.border }}
            >
              {size.featured && (
                <div
                  className="absolute top-0 left-0 right-0 text-center text-xs font-bold py-1"
                  style={{
                    background: size.border,
                    color: "#fff",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  Most Popular
                </div>
              )}
              <div
                className="p-5"
                style={{ paddingTop: size.featured ? "2rem" : undefined }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                  style={{ background: size.color }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: size.border, fontFamily: "'Nunito', sans-serif" }}
                  >
                    {size.name}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {measurementRows.map((row) => (
                    <div key={row.key} className="flex justify-between gap-2">
                      <span
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {row.label}
                      </span>
                      <span
                        className="text-xs font-semibold text-foreground text-right"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {size[row.key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Measurement illustration + note */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: "16/9", background: "#FFDCCB30" }}
          >
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop&auto=format"
              alt="Dog in an orange hoodie — measurement reference"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm mb-6"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "var(--muted)", color: "var(--primary)" }}
              >
                <Ruler size={18} />
              </div>
              <div>
                <h4
                  className="font-bold text-base text-foreground mb-1"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  How to measure your pet
                </h4>
                <ul
                  className="text-sm text-muted-foreground space-y-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <li>📏 <strong>Neck:</strong> Measure around the base of the neck</li>
                  <li>📏 <strong>Chest:</strong> Measure around the widest part of the chest</li>
                  <li>📏 <strong>Back length:</strong> Measure from neck to base of tail</li>
                </ul>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl border-2 bg-card shadow-sm"
              style={{ borderColor: "var(--primary)", background: "#FFF9F3" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "var(--muted)", color: "var(--primary)" }}
              >
                <Info size={18} />
              </div>
              <div>
                <h4
                  className="font-bold text-base mb-1"
                  style={{ color: "var(--primary)", fontFamily: "'Nunito', sans-serif" }}
                >
                  Need a custom size?
                </h4>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We can also create{" "}
                  <strong className="text-foreground">completely custom sizes</strong>{" "}
                  tailored to your pet's exact measurements. Just let us know in
                  your order notes!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
