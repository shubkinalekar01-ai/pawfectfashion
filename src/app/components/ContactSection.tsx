import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { MessageCircle, Send, CheckCircle } from "lucide-react";

const WA_NUMBER = "919082081364";

interface FormData {
  ownerName: string;
  phone: string;
  petName: string;
  petType: string;
  petGender: string;
  petAge: string;
  breed: string;
  occasion: string;
  size: string;
  requirements: string;
}

const initial: FormData = {
  ownerName: "",
  phone: "",
  petName: "",
  petType: "",
  petGender: "",
  petAge: "",
  breed: "",
  occasion: "",
  size: "",
  requirements: "",
};

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all";

const labelClass =
  "block text-sm font-semibold text-foreground mb-1.5";

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.ownerName.trim()) e.ownerName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.petName.trim()) e.petName = "Required";
    if (!form.petType) e.petType = "Required";
    if (!form.petGender) e.petGender = "Required";
    if (!form.petAge.trim()) e.petAge = "Required";
    if (!form.breed.trim()) e.breed = "Required";
    if (!form.occasion) e.occasion = "Required";
    if (!form.size) e.size = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = `Hello PawfectFashion!

*New Custom Outfit Order*

*Owner Name:* ${form.ownerName}
*Phone:* ${form.phone}
*Pet Name:* ${form.petName}
*Pet Type:* ${form.petType}
*Gender:* ${form.petGender}
*Age:* ${form.petAge}
*Breed:* ${form.breed}
*Occasion:* ${form.occasion}
*Size:* ${form.size}
*Special Requirements:* ${form.requirements || "None"}

I would like a custom outfit quote. Please get back to me!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
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
            Order Now
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Order Your{" "}
            <span style={{ color: "var(--primary)" }}>Custom Pet Outfit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fill in the details below and we'll send a personalised order
            straight to our WhatsApp. We'll respond with a quote within 24 hours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center gap-5">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "var(--secondary)" }}
              >
                <CheckCircle size={40} style={{ color: "var(--primary)" }} />
              </div>
              <h3
                className="text-2xl font-black text-foreground"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Order Sent to WhatsApp!
              </h3>
              <p
                className="text-muted-foreground max-w-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Your order details have been sent to our WhatsApp. We'll get
                back to you with a quote within 24 hours. 🐾
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(initial); }}
                className="mt-2 px-6 py-3 rounded-full font-bold text-sm"
                style={{
                  background: "var(--primary)",
                  color: "#fff",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="p-8 lg:p-10 grid sm:grid-cols-2 gap-5">
                {/* Owner Name */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    value={form.ownerName}
                    onChange={(e) => set("ownerName", e.target.value)}
                    placeholder="Your full name"
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.ownerName && <p className="text-xs text-red-500 mt-1">{errors.ownerName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Pet Name */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Pet Name *
                  </label>
                  <input
                    type="text"
                    value={form.petName}
                    onChange={(e) => set("petName", e.target.value)}
                    placeholder="e.g., Bella, Bruno, Luna"
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.petName && <p className="text-xs text-red-500 mt-1">{errors.petName}</p>}
                </div>

                {/* Pet Type */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Pet Type *
                  </label>
                  <select
                    value={form.petType}
                    onChange={(e) => set("petType", e.target.value)}
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Select pet type</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Rabbit</option>
                    <option>Bird</option>
                    <option>Other</option>
                  </select>
                  {errors.petType && <p className="text-xs text-red-500 mt-1">{errors.petType}</p>}
                </div>

                {/* Pet Gender */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Pet Gender *
                  </label>
                  <select
                    value={form.petGender}
                    onChange={(e) => set("petGender", e.target.value)}
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  {errors.petGender && <p className="text-xs text-red-500 mt-1">{errors.petGender}</p>}
                </div>

                {/* Pet Age */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Pet Age *
                  </label>
                  <input
                    type="text"
                    value={form.petAge}
                    onChange={(e) => set("petAge", e.target.value)}
                    placeholder="e.g., 2 years, 8 months"
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.petAge && <p className="text-xs text-red-500 mt-1">{errors.petAge}</p>}
                </div>

                {/* Breed */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Breed *
                  </label>
                  <input
                    type="text"
                    value={form.breed}
                    onChange={(e) => set("breed", e.target.value)}
                    placeholder="e.g., Labrador, Shih Tzu, Mixed"
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.breed && <p className="text-xs text-red-500 mt-1">{errors.breed}</p>}
                </div>

                {/* Occasion */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Outfit Occasion *
                  </label>
                  <select
                    value={form.occasion}
                    onChange={(e) => set("occasion", e.target.value)}
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Select occasion</option>
                    <option>Birthday</option>
                    <option>Wedding</option>
                    <option>Festival</option>
                    <option>Party</option>
                    <option>Everyday</option>
                    <option>Seasonal</option>
                    <option>Custom</option>
                  </select>
                  {errors.occasion && <p className="text-xs text-red-500 mt-1">{errors.occasion}</p>}
                </div>

                {/* Size */}
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Size *
                  </label>
                  <select
                    value={form.size}
                    onChange={(e) => set("size", e.target.value)}
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Select size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>Custom</option>
                  </select>
                  {errors.size && <p className="text-xs text-red-500 mt-1">{errors.size}</p>}
                </div>

                {/* Special Requirements — full width */}
                <div className="sm:col-span-2">
                  <label className={labelClass} style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Special Requirements
                  </label>
                  <textarea
                    value={form.requirements}
                    onChange={(e) => set("requirements", e.target.value)}
                    placeholder="Tell us about specific colours, design ideas, fabric preferences, or any customisations..."
                    rows={4}
                    className={fieldClass}
                    style={{ background: "var(--input-background)", fontFamily: "'Inter', sans-serif", resize: "vertical" }}
                  />
                </div>
              </div>

              {/* Submit */}
              <div
                className="px-8 lg:px-10 pb-8 lg:pb-10"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base text-white shadow-lg transition-all"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                  }}
                >
                  <MessageCircle size={20} />
                  Send Order via WhatsApp
                  <Send size={16} />
                </motion.button>
                <p
                  className="text-center text-xs text-muted-foreground mt-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  This will open WhatsApp with your order details pre-filled. We'll reply within 24 hours with a quote.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
