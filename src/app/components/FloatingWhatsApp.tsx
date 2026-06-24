import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "919082081364";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse rings */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: "rgba(37, 211, 102, 0.35)" }}
      />
      <span
        className="absolute inset-1 rounded-full animate-ping animation-delay-300"
        style={{
          background: "rgba(37, 211, 102, 0.2)",
          animationDelay: "0.4s",
        }}
      />
      <motion.a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-white"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 28px rgba(37,211,102,0.5)",
        }}
      >
        <MessageCircle size={26} fill="white" stroke="white" />
      </motion.a>
    </div>
  );
}
