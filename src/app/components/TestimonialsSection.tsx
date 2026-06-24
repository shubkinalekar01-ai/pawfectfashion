import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    petName: "Bella",
    ownerName: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&auto=format",
    review:
      "PawfectFashion made the most adorable birthday dress for Bella. The fabric was so soft — she wore it all day without any fuss! Absolutely exceeded my expectations.",
    rating: 5,
    occasion: "Birthday",
  },
  {
    id: 2,
    petName: "Bruno",
    ownerName: "Rahul Mehta",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&auto=format",
    review:
      "Bruno attended our cousin's wedding as the ring bearer and he looked absolutely regal in his custom sherwani! Everyone kept photographing him. 10/10 experience.",
    rating: 5,
    occasion: "Wedding",
  },
  {
    id: 3,
    petName: "Luna",
    ownerName: "Anjali Kapoor",
    avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&auto=format",
    review:
      "Ordered a festive lehenga for Luna during Diwali. The attention to detail was incredible — matching dupatta and everything. Fast delivery too!",
    rating: 5,
    occasion: "Festive",
  },
  {
    id: 4,
    petName: "Max",
    ownerName: "Vikram Nair",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&auto=format",
    review:
      "Max is a Golden Retriever and finding clothes that fit him is always a struggle. PawfectFashion made a perfect custom hoodie — fit like a glove!",
    rating: 5,
    occasion: "Everyday",
  },
  {
    id: 5,
    petName: "Mittens",
    ownerName: "Deepa Iyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    review:
      "I was skeptical about pet clothing but PawfectFashion converted me completely. Mittens looked stunning and comfortable in her custom outfit. Will order again!",
    rating: 5,
    occasion: "Birthday",
  },
  {
    id: 6,
    petName: "Coco",
    ownerName: "Sneha Pillai",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
    review:
      "The WhatsApp ordering process was so convenient — I described what I wanted and they delivered beyond expectations. Coco is already the star of every playdate.",
    rating: 5,
    occasion: "Seasonal",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#FF9D8A" : "none"}
          stroke={i < rating ? "#FF9D8A" : "#ccc"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm p-6 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <StarRating rating={t.rating} />
        <span
          className="text-xs px-3 py-1 rounded-full font-semibold"
          style={{
            background: "var(--muted)",
            color: "var(--primary)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          {t.occasion}
        </span>
      </div>
      <p
        className="text-sm text-muted-foreground leading-relaxed flex-1"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        "{t.review}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <img
          src={t.avatar}
          alt={t.ownerName}
          className="w-10 h-10 rounded-full object-cover bg-muted"
        />
        <div>
          <p
            className="text-sm font-bold text-foreground"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {t.ownerName}
          </p>
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Pet: {t.petName} 🐾
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const prev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((c) => (c - 1 + total) % total);
    startAutoplay();
  };

  const next = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((c) => (c + 1) % total);
    startAutoplay();
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFF9F3 0%, #DCCCF720 50%, #FFDCCB20 100%)",
      }}
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
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Happy Pets,{" "}
            <span style={{ color: "var(--primary)" }}>Happy Parents</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Don't just take our word for it — hear from the pawrents who trust
            us with their most precious family members.
          </motion.p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard t={testimonials[current]} />
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted/40 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    background: i === current ? "var(--primary)" : "var(--border)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted/40 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
