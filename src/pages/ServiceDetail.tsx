import { useParams, Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type ComingSoonFallbackProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const ComingSoonFallback = ({
  eyebrow,
  title,
  description,
}: ComingSoonFallbackProps) => (
  <div className="min-h-screen overflow-hidden bg-background pt-24 text-foreground">
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center bg-white py-16 text-center sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(216,179,106,0.15),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(11,36,84,0.09),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f7f9fc_62%,#ffffff_100%)]" />
      <div className="absolute left-1/2 top-14 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="show"
        className="container relative z-10 mx-auto px-4"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto max-w-3xl rounded-lg border border-border/80 bg-white/80 p-6 shadow-[var(--shadow-elevated)] backdrop-blur sm:p-8 md:p-10"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-secondary text-primary shadow-[var(--shadow-gold)]">
            <Sparkles size={26} />
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h1 className="mx-auto mb-4 max-w-2xl text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mb-8 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-lg border border-accent/20 bg-secondary/35 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                <Clock3 size={16} className="text-accent" />
                In progress
              </div>
              <p className="text-sm leading-relaxed">
                Our team is refining the detail page with clearer structure and
                stronger service context.
              </p>
            </div>
            <div className="rounded-lg border border-primary/10 bg-[#F7F9FC] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                <Sparkles size={16} className="text-accent" />
                Launch-ready polish
              </div>
              <p className="text-sm leading-relaxed">
                The experience will align with the premium Vernex ecosystem
                interface.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 w-full sm:w-auto">
              <Link to="/services">
                Back to Services <ArrowRight size={17} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 w-full bg-white/85 sm:w-auto">
              <Link to="/contact">Talk to Vernex</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
    <div className="gold-divider" />
  </div>
);

/**
 * SAFE ServiceDetail
 * - No crashes
 * - No red screen
 * - Works even if slug / data is missing
 */
const ServiceDetail = () => {
  const params = useParams();
  const slug = params.id || params.slug;

  // If slug is missing → show fallback
  if (!slug) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            Service details coming soon
          </h1>
          <p className="text-muted-foreground mb-6">
            We’re currently preparing detailed pages for each service.
          </p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const service = services.find((s) => s.slug === slug);

  // If service not found → graceful fallback
  if (!service) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            Service details coming soon
          </h1>
          <p className="text-muted-foreground mb-6">
            This service page is under construction.
          </p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/services"
            className="inline-flex items-center text-sm mb-6 text-primary-foreground/80 hover:text-accent transition"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/90">
            {service.description}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.overview ||
                "Detailed information for this service will be available soon."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {(service.approach && service.approach.length > 0
                ? service.approach
                : [
                    "Professional planning and execution",
                    "Industry best practices",
                    "Scalable and future-ready solutions",
                  ]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground">
              <Link to="/contact">Talk to Vernex</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
