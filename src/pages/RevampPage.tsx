import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const previewCards = [
  {
    icon: Layers3,
    label: "Unified Vernex Ecosystem",
    detail: "A clearer path across services, products, and partner experiences.",
  },
  {
    icon: BarChart3,
    label: "Smarter Growth Platform",
    detail: "Sharper content structure, faster pages, and better decision flow.",
  },
  {
    icon: Sparkles,
    label: "Premium Brand Experience",
    detail: "Refined visuals, polished interactions, and launch-ready storytelling.",
  },
];

const RevampPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-white py-16 text-center sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(216,179,106,0.16),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(11,36,84,0.1),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7f9fc_58%,#ffffff_100%)]" />
        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-12 left-6 hidden h-28 w-28 rounded-full border border-accent/30 md:block" />
        <div className="absolute right-8 top-28 hidden h-16 w-16 rounded-full border border-primary/10 md:block" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-6xl"
          >
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary shadow-[var(--shadow-subtle)] backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(216,179,106,0.8)]" />
              Vernex website revamp
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mx-auto mb-5 max-w-5xl text-balance text-4xl font-bold text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Vernex Is Evolving
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-9 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
            >
              We're revamping our digital experience into a faster, smarter,
              and more intuitive platform for the Vernex ecosystem. Launching
              soon with a cleaner interface and a more connected journey.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mb-12 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <Button asChild size="lg" className="h-12 w-full px-7 shadow-[var(--shadow-gold)] sm:w-auto">
                <Link to="/vernex-ecosystem">
                  Vernex Ecosystem <ArrowRight size={17} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 w-full bg-white/85 px-7 backdrop-blur sm:w-auto">
                <Link to="/services">Marketing Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 w-full bg-white/85 px-7 backdrop-blur sm:w-auto">
                <Link to="/products">Products</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto grid max-w-5xl gap-4 text-left sm:grid-cols-3"
            >
              {previewCards.map((card) => (
                <article
                  key={card.label}
                  className="corporate-card corporate-card-hover group p-5 sm:p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[var(--shadow-gold)]">
                    <card.icon size={23} />
                  </div>
                  <h2 className="mb-2 text-base font-bold text-primary sm:text-lg">
                    {card.label}
                  </h2>
                  <p className="text-sm leading-relaxed">{card.detail}</p>
                </article>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-lg border border-accent/25 bg-white/75 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur sm:flex-row sm:text-left"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-medium text-primary">
                Core Vernex pages remain available while the new experience is
                being prepared.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="gold-divider" />
    </div>
  );
};

export default RevampPage;
