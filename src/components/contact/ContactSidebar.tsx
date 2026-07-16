import { motion } from "framer-motion";
import { ChevronRight, Headphones, Star } from "lucide-react";
import { contactChannels, fadeUp, planCard, stagger } from "./contactData";
import ContactInfoCard from "./ContactInfoCard";

const ContactSidebar = (): JSX.Element => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="min-w-0 space-y-4"
    >
      {contactChannels.map((channel) => (
        <ContactInfoCard key={channel.id} {...channel} />
      ))}

      {/* Desktop: dark navy premium card */}
      <motion.div
        variants={fadeUp}
        className="relative hidden overflow-hidden rounded-2xl bg-[#0B1F4D] p-7 shadow-[0_24px_55px_-30px_rgba(11,31,77,0.7)] lg:block"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(#D8B36A 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 90% 90%, #000 20%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 90% 80% at 90% 90%, #000 20%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D8B36A] text-[#0B1F4D]">
              <Headphones className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-bold text-white">{planCard.desktopTitle}</h2>
          </div>
          <span className="mt-5 block h-0.5 w-12 rounded-full bg-[#D8B36A]" aria-hidden="true" />
          <p className="mt-5 text-sm leading-relaxed text-slate-300">{planCard.desktopText}</p>
        </div>
      </motion.div>

      {/* Mobile / tablet: white "best first step" card */}
      <motion.a
        variants={fadeUp}
        href={planCard.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group flex items-start gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(11,31,77,0.5)] lg:hidden"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D8B36A]">
          <Star className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#B88932]">
            {planCard.mobileLabel}
          </span>
          <span className="mt-0.5 block text-base font-bold text-primary">{planCard.mobileTitle}</span>
          <span className="mt-1 block text-sm leading-relaxed text-slate-500">{planCard.mobileText}</span>
        </span>
        <ChevronRight
          className="mt-1 h-5 w-5 shrink-0 text-[#D8B36A] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </motion.a>
    </motion.div>
  );
};

export default ContactSidebar;
