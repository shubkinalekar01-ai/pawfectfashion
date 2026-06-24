import { motion } from "motion/react";
import { Ruler, Gem, Hand, CalendarHeart } from "lucide-react";
import dog2 from "../../assets/dog2.png";

const features = [
  {
    icon: <Ruler size={22} />,
    title: "Custom Fit",
    desc: "Every outfit is tailored to your pet's exact measurements for a perfect, comfortable fit.",
    bg: "#DCCCF7",
    iconColor: "#7C5AC2",
  },
  {
    icon: <Gem size={22} />,
    title: "Premium Materials",
    desc: "We use only soft, skin-safe, breathable fabrics that your pet will love wearing.",
    bg: "#D9EEFF",
    iconColor: "#3B7FC4",
  },
  {
    icon: <Hand size={22} />,
    title: "Handmade",
    desc: "Each piece is carefully hand-stitched by skilled artisans with an eye for detail.",
    bg: "#FFDCCB",
    iconColor: "#D79B7D",
  },
  {
    icon: <CalendarHeart size={22} />,
    title: "Occasion Ready",
    desc: "From festive seasons to formal events — we design for every special moment.",
    bg: "#DDF5E5",
    iconColor: "#3A9B6A",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Designed With Love{" "}
            <span style={{ color: "var(--primary)" }}>For Every Pet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We believe every pet is unique — and their wardrobe should reflect
            that. PawfectFashion was born from a love of animals and a passion
            for craftsmanship.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-3xl -rotate-2 scale-105"
              style={{ background: "linear-gradient(135deg, #FFDCCB, #DCCCF7)" }}
            />
            <img
              src={dog2}
              alt="Small dog in a blue polka dot shirt looking adorable"
              className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
              style={{ aspectRatio: "4/4.5" }}
            />
            <div
              className="absolute -bottom-6 -right-6 z-20 bg-white rounded-2xl p-4 shadow-xl"
              style={{ maxWidth: 200 }}
            >
              <p
                className="text-3xl font-black mb-0.5"
                style={{ color: "var(--primary)", fontFamily: "'Nunito', sans-serif" }}
              >
                500+
              </p>
              <p
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Custom outfits crafted for happy pets worldwide
              </p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3
              className="text-2xl lg:text-3xl font-black text-foreground mb-6"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              We make fashion that feels as good as it looks
            </h3>
            <div className="space-y-4 text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                PawfectFashion specialises in fully custom pet clothing —
                designed around your pet's personality, measurements, and the
                occasion at hand. Whether you have a tiny teacup chihuahua or a
                large Labrador, we craft outfits that fit and flatter.
              </p>
              <p>
                Our designs span every occasion: birthdays, weddings, festivals,
                everyday strolls, holiday photo shoots, and beyond. Each piece
                is made by hand using premium, skin-friendly fabrics, with
                attention to every seam and stitch.
              </p>
              <p>
                We cater to dogs, cats, rabbits, birds, and other beloved pets.
                Every order is personal — we consult with you to ensure the
                perfect look.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: f.bg, color: f.iconColor }}
              >
                {f.icon}
              </div>
              <h4
                className="font-bold text-lg text-foreground mb-2"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {f.title}
              </h4>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
