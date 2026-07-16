import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { liveProducts } from "@/data/products";
import { getProductIcon } from "@/components/products/productMeta";
import SectionHeading from "@/components/home/SectionHeading";
import {
  fadeUp,
  productDisplayNames,
  productPreviewDescriptions,
  stagger,
} from "./ecosystemData";

const products = liveProducts.slice(0, 3);

const ProductPreviewSection = (): JSX.Element => {
  return (
    <section className="bg-[#FBFAF7] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Vernex Gen Technologies"
          title="Our Live / Service-ready Products"
          subtitle="Practical software products built for schools, restaurants, shops, clinics, teams, and growing businesses."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {products.map((product) => {
            const Icon = getProductIcon(product);
            const displayName = productDisplayNames[product.name] ?? product.name;
            return (
              <motion.article
                key={product.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,31,77,0.5)]"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Live / Service-ready
                </span>

                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8E2D8] bg-white shadow-[0_6px_14px_-10px_rgba(11,31,77,0.4)]">
                    <Icon className="h-5 w-5 text-[#C79A2E]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-primary">{displayName}</h3>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {productPreviewDescriptions[product.name] ?? product.description}
                </p>

                {/* Device mockup */}
                <div className="mt-5 overflow-hidden rounded-lg border border-[#E8E2D8] bg-[#F7F9FC]">
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt={`${displayName} preview`}
                      loading="lazy"
                      className="h-32 w-full object-contain p-3"
                    />
                  ) : (
                    <div className="flex h-32 items-center justify-center">
                      <Icon className="h-10 w-10 text-[#D8B36A]" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <Link
                  to="/products"
                  className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B88932]"
                >
                  View Product
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-9 text-center">
          <Link
            to="/products"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D5DAE4] bg-white px-7 text-sm font-semibold text-primary transition-colors duration-[250ms] hover:border-primary/40 hover:bg-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
          >
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;
