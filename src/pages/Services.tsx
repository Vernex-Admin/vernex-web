import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import React from "react";

/* -------- Animations -------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* -------- Service order (01–15) -------- */
const order = [
  "Web Development",
  "App Development",
  "Video Editing",
  "Graphic Design",
  "School & College Projects Support",
  "Photography",
  "Videography",
  "Startup Support & Legal Advice",
  "Content Creation",
  "Social Media Management",
  "Accounting & Finance",
  "Digital Marketing",
  "Chatbot Creation",
  "Power BI & Data Analytics",
  "Event Organization (Sports & More)",
];

const orderMap = new Map<string, number>(
  order.map((title, index) => [title, index])
);

const Services: React.FC = () => {
  const orderedServices = [...services].sort(
    (a, b) =>
      (orderMap.get(a.title) ?? 99) -
      (orderMap.get(b.title) ?? 99)
  );

  return (
    <div className="min-h-screen pt-20">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-heading font-bold"
            >
              Our <span className="text-accent">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-base md:text-lg text-primary-foreground/90"
            >
              All 15 Vernex services — clearly presented, no redirects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {orderedServices.map((service, index) => {
              const Icon =
                service.icon as React.ComponentType<{
                  size?: number;
                  className?: string;
                }>;

              const number = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={service.slug}
                  variants={card}
                  className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                >
                  {/* Number + Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border border-accent text-accent text-xs font-semibold">
                      {number}
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                      {Icon && <Icon size={20} className="text-accent" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-3 border-t border-border/60 text-sm flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Service overview
                    </span>
                    <span className="text-accent/70">
                      Details coming soon
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-background">
        <Button
          size="lg"
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
        >
          <Link to="/contact" className="inline-flex items-center gap-2">
            Talk to Vernex
            <ArrowRight size={18} />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Services;
