import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Megaphone, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ecosystemCards, fadeUp, stagger } from "./homeData";

const decorIcons: LucideIcon[] = [Boxes, Megaphone];

const EcosystemSection = (): JSX.Element => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Our Ecosystem"
          title="One Vernex. Two Ways to Help Your Business Grow."
          subtitle="Some businesses need better systems. Some need better visibility. Many need both. Vernex connects technology and marketing so your business can work better and present itself better."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {ecosystemCards.map((card, index) => {
            const Decor = decorIcons[index];
            return (
              <motion.div key={card.title} variants={fadeUp}>
                <Link
                  to={card.href}
                  className="group flex h-full overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-[0_18px_44px_-32px_rgba(11,31,77,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_58px_-30px_rgba(11,31,77,0.5)]"
                >
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <img
                      src={card.logo}
                      alt={card.alt}
                      loading="lazy"
                      className="mb-5 h-9 w-auto max-w-[190px] object-contain object-left"
                    />
                    <h3 className="text-xl font-bold text-primary">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                      {card.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B88932]">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Decorative panel */}
                  <div className="hidden w-32 shrink-0 items-center justify-center bg-[#F7F2E8] sm:flex lg:w-40">
                    <Decor className="h-12 w-12 text-[#C79A2E]" aria-hidden="true" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-9 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <Link
              to="/vernex-ecosystem"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0B1F4D] px-7 text-sm font-semibold text-white transition-colors duration-[250ms] hover:bg-[#0a1c40] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2"
            >
              Explore Vernex Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
