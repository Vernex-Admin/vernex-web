import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, type ContactChannel } from "./contactData";

const ContactInfoCard = ({ label, value, note, href, icon: Icon }: ContactChannel): JSX.Element => {
  const isExternal = href.startsWith("http");
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(11,31,77,0.5)]"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D8B36A]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#B88932]">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-base font-bold text-primary">{value}</span>
        <span className="mt-0.5 block truncate text-sm text-slate-500">{note}</span>
      </span>
      <ChevronRight
        className="h-5 w-5 shrink-0 text-[#D8B36A] transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </motion.a>
  );
};

export default ContactInfoCard;
