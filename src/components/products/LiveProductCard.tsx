import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import {
  BrandTile,
  CardButton,
  FeatureList,
  StatusBadge,
  cardVariants,
  getProductIcon,
} from "./productMeta";

const LiveProductCard = ({ product }: { product: Product }): JSX.Element => {
  const Icon = getProductIcon(product);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_16px_40px_-30px_rgba(11,36,84,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,36,84,0.5)]"
    >
      {/* Mobile / tablet header: logo left, title beside, badge right */}
      <div className="flex items-start gap-4 lg:hidden">
        <BrandTile Icon={Icon} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-primary">{product.name}</h3>
            <StatusBadge status={product.status} />
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            {product.description}
          </p>
        </div>
      </div>

      {/* Desktop header: logo + badge row, then category, name, description */}
      <div className="hidden lg:block">
        <div className="mb-5 flex items-start justify-between gap-3">
          <BrandTile Icon={Icon} />
          <StatusBadge status={product.status} />
        </div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A9791F]">
          For {product.audience}
        </p>
        <h3 className="text-xl font-bold text-primary">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>
      </div>

      {/* Features: 2 columns on mobile, single column on desktop */}
      <FeatureList
        features={product.features}
        className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2.5 lg:grid-cols-1 lg:gap-y-2.5"
      />

      {/* CTA */}
      <div className="mt-6 lg:mt-auto lg:pt-7">
        <CardButton to="/contact" label="Request Demo" />
      </div>
    </motion.article>
  );
};

export default LiveProductCard;
