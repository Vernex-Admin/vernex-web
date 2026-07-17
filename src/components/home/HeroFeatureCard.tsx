import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, type IconCard } from "./homeData";

const HeroFeatureCard = ({ title, text, icon: Icon }: IconCard): JSX.Element => (
  <motion.article
    variants={fadeUp}
    whileHover={{ y: -3, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="group flex items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-4 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.45)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(11,31,77,0.55)] sm:p-5"
  >
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D8B36A] shadow-[0_10px_22px_-12px_rgba(11,31,77,0.9)]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
    <div className="min-w-0 flex-1">
      <h3 className="text-base font-bold text-primary sm:text-lg">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
    <ArrowRight
      className="h-5 w-5 shrink-0 text-[#D8B36A] transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  </motion.article>
);

export default HeroFeatureCard;
