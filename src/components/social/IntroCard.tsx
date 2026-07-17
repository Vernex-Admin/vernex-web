import { motion } from "framer-motion";
import { Users } from "lucide-react";

const logo = "/favicon.png";

const IntroCard = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="grid grid-cols-1 gap-8 rounded-2xl border border-[#E8E2D8] bg-[#FBF8F1] p-7 shadow-[0_18px_44px_-30px_rgba(11,36,84,0.3)] sm:p-9 lg:grid-cols-[1.55fr_auto_1fr] lg:items-center lg:gap-10"
    >
      {/* Left */}
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary shadow-[0_16px_32px_-18px_rgba(11,36,84,0.7)]">
          <img
            src={logo}
            alt="Vernex"
            className="h-11 w-11 object-contain"
            loading="lazy"
          />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Stay Connected. Stay Ahead.
          </h2>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-500">
            Reach out to Vernex for business enquiries, partnership
            opportunities, the latest updates, and everything in between.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#E8E2D8] lg:h-24 lg:w-px" aria-hidden="true" />

      {/* Right */}
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D8B36A] text-[#D8B36A]">
          <Users className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-primary">We&apos;re here to help</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-slate-500">
            and build lasting value together.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
