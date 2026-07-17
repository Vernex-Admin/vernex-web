import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import {
  CardButton,
  FeatureList,
  IconTile,
  StatusBadge,
  cardVariants,
  getProductIcon,
} from "./productMeta";

const UpcomingProductCard = ({ product }: { product: Product }): JSX.Element => {
  const Icon = getProductIcon(product);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group h-full rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_16px_40px_-30px_rgba(11,36,84,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,36,84,0.5)] lg:p-6"
    >
      {/* Mobile / tablet: compact horizontal row */}
      <div className="flex items-center gap-4 lg:hidden">
        <IconTile Icon={Icon} withCaption />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-primary">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-500">
            {product.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <StatusBadge status={product.status} />
          <CardButton to="/contact" label="Join Waitlist" compact />
        </div>
      </div>

      {/* Desktop: vertical card */}
      <div className="hidden h-full flex-col lg:flex">
        <div className="mb-4 flex items-start justify-between gap-3">
          <IconTile Icon={Icon} />
          <StatusBadge status={product.status} />
        </div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A9791F]">
          For {product.audience}
        </p>
        <h3 className="text-lg font-bold text-primary">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>

        <FeatureList
          features={product.features}
          className="mt-4 grid grid-cols-1 gap-y-2.5"
        />

        <div className="mt-auto pt-6">
          <CardButton to="/contact" label="Join Waitlist" />
        </div>
      </div>
    </motion.article>
  );
};

export default UpcomingProductCard;
