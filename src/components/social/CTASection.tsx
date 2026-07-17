import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";

const CTASection = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="grid grid-cols-1 items-center gap-7 rounded-2xl border border-[#E8E2D8] bg-[#FBF8F1] p-8 text-center shadow-[0_18px_44px_-30px_rgba(11,36,84,0.3)] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:text-left"
    >
      {/* Icon */}
      <span className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F7F2E8] text-[#D8B36A] lg:mx-0">
        <Handshake className="h-8 w-8" aria-hidden="true" />
      </span>

      {/* Copy */}
      <div>
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          Let&apos;s stay connected.
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
          Have a question or want to collaborate? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Divider + Button */}
      <div className="flex items-center gap-8 lg:gap-10">
        <div className="hidden h-20 w-px bg-[#E8E2D8] lg:block" aria-hidden="true" />
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="mx-auto lg:mx-0"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#D8B36A] px-7 py-3.5 text-base font-semibold text-primary shadow-[0_14px_30px_-14px_rgba(216,179,106,0.9)] transition-colors duration-250 hover:bg-[#C9A356] focus-visible:ring-2 focus-visible:ring-[#B8912F] focus-visible:ring-offset-2"
          >
            Get in Touch
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CTASection;
