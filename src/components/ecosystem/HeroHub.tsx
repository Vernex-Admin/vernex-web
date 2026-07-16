import { motion } from "framer-motion";
import { technologyNodes, marketingNodes, type HubNode } from "./ecosystemData";

const logo = "/vernex-logo-main.png";

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const NodeCard = ({ label, icon: Icon }: HubNode): JSX.Element => (
  <motion.div
    variants={nodeVariants}
    whileHover={{ y: -3, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
    className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E8E2D8] bg-white px-2.5 py-2.5 shadow-[0_14px_34px_-26px_rgba(11,31,77,0.5)] sm:gap-2.5 sm:px-3"
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F2E8] text-[#C79A2E]">
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
    <span className="min-w-0 break-words text-[12px] font-semibold leading-tight text-primary sm:text-[13px]">{label}</span>
  </motion.div>
);

const ColumnLabel = ({ text }: { text: string }): JSX.Element => (
  <span className="mb-1 inline-flex self-start rounded-full border border-[#E8E2D8] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A6A28] shadow-[0_8px_20px_-16px_rgba(11,31,77,0.5)]">
    {text}
  </span>
);

const HeroHub = (): JSX.Element => {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        animate="show"
        className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-3xl border border-[#E8E2D8] bg-[#FBFAF7] p-4 shadow-[0_30px_70px_-45px_rgba(11,31,77,0.55)] sm:gap-5 sm:p-7"
      >
        {/* Connection lines (desktop) */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hubLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D8B36A" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#D8B36A" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#D8B36A" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <line x1="32%" y1="50%" x2="50%" y2="50%" stroke="url(#hubLine)" strokeWidth="1.5" />
          <line x1="68%" y1="50%" x2="50%" y2="50%" stroke="url(#hubLine)" strokeWidth="1.5" />
        </svg>

        {/* Technology branch */}
        <div className="relative z-10 flex min-w-0 flex-col gap-2.5 sm:gap-3">
          <ColumnLabel text="Technology" />
          {technologyNodes.map((node) => (
            <NodeCard key={node.label} {...node} />
          ))}
        </div>

        {/* Center hub */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            variants={nodeVariants}
            className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0B1F4D] shadow-[0_24px_50px_-24px_rgba(11,31,77,0.9)] sm:h-32 sm:w-32"
          >
            <span
              className="absolute inset-0 rounded-full border border-[#D8B36A]/30"
              aria-hidden="true"
            />
            <span
              className="absolute -inset-2 rounded-full border border-[#D8B36A]/15"
              aria-hidden="true"
            />
            <img
              src={logo}
              alt="Vernex"
              loading="lazy"
              className="h-12 w-auto max-w-[76px] object-contain sm:h-16 sm:max-w-[96px]"
            />
          </motion.div>
        </div>

        {/* Marketing branch */}
        <div className="relative z-10 flex min-w-0 flex-col gap-2.5 sm:gap-3">
          <ColumnLabel text="Marketing" />
          {marketingNodes.map((node) => (
            <NodeCard key={node.label} {...node} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroHub;
