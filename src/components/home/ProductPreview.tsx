import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { liveProducts } from "@/data/products";
import { getProductIcon } from "@/components/products/productMeta";
import SectionHeading from "./SectionHeading";
import { fadeUp, productPreviewDescriptions, stagger } from "./homeData";

const products = liveProducts.slice(0, 3);

const ProductPreview = (): JSX.Element => {
  return (
    <section className="bg-[#FBFAF7] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Our Products"
          title="Vernex Gen Technologies Products"
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
            return (
              <motion.article
                key={product.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_54px_-28px_rgba(11,31,77,0.5)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#E8E2D8] bg-white shadow-[0_6px_14px_-10px_rgba(11,31,77,0.4)]">
                    <Icon className="h-6 w-6 text-[#C79A2E]" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                    Live / Ready
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {productPreviewDescriptions[product.name] ?? product.description}
                </p>

                <Link
                  to="/products"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B88932]"
                >
                  View Product
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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

export default ProductPreview;
