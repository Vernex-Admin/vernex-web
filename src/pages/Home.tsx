import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cpu,
  LucideIcon,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { liveProducts } from "@/data/products";
import { marketingServices } from "@/data/marketing";
import { Product } from "@/data/products";

type IconCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type DivisionCard = {
  title: string;
  text: string;
  href: string;
  logo: string;
  alt: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const heroCards: IconCard[] = [
  {
    title: "Software Systems",
    text: "ERP, POS, dashboards, automation, and business tools.",
    icon: Cpu,
  },
  {
    title: "Brand Growth",
    text: "Content, websites, campaigns, social media, and visibility.",
    icon: Megaphone,
  },
  {
    title: "Business Clarity",
    text: "Better workflows, stronger presentation, and clearer growth decisions.",
    icon: BarChart3,
  },
];

const divisionCards: DivisionCard[] = [
  {
    title: "Vernex Gen Technologies",
    text: "Software, SaaS, ERP, dashboards, automation, and AI-powered tools for businesses that need better control and cleaner workflows.",
    href: "/products",
    logo: "/assets/logos/vernex-gen-technologies-logo-normalized.png",
    alt: "Vernex Gen Technologies logo",
  },
  {
    title: "Vernex Digital Marketing",
    text: "Digital marketing, social media, branding, websites, content, campaigns, and creative execution for brands that need stronger visibility.",
    href: "/services",
    logo: "/assets/logos/vernex-digital-marketing-logo-normalized.png",
    alt: "Vernex Digital Marketing logo",
  },
];

const productDescriptions: Record<string, string> = {
  "Vernex School ERP":
    "School management system for attendance, academics, communication, materials, events, and administration.",
  "Vernex BI For Restaurants":
    "Restaurant intelligence dashboard for sales, profit, menu performance, and business reporting.",
  "Vernex Billing POS Software":
    "Billing and POS system for inventory, customers, receipts, reports, and daily business control.",
};

const whyCards: IconCard[] = [
  {
    title: "Direct Founder Involvement",
    text: "You work with a team that understands business, delivery, communication, and practical execution.",
    icon: ShieldCheck,
  },
  {
    title: "Technology + Marketing Together",
    text: "We connect software, automation, branding, content, websites, and campaigns under one practical execution system.",
    icon: Workflow,
  },
  {
    title: "Clear, Useful Outputs",
    text: "Every website, dashboard, campaign, and workflow is built to support real business progress.",
    icon: CheckCircle2,
  },
];

const sectionHeadingClass = "mx-auto mb-9 max-w-3xl text-center md:mb-11";
const sectionLabelClass = "mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-[#B88932]";
const buttonLiftClass = "transition-transform duration-300 hover:-translate-y-0.5";

const productPreview = liveProducts.slice(0, 3);
const marketingPreview = marketingServices.slice(0, 4);

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] pt-20 text-foreground">
      <section className="relative overflow-hidden bg-[#F5F5F7] px-4 py-14 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FAFAFA_0%,#F5F5F7_56%,#FFFFFF_100%)]" />
        <div className="home-hero-grid container relative z-10 mx-auto grid max-w-7xl items-center gap-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex rounded-full border border-[#D8B36A]/45 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#5B4520] shadow-[0_10px_28px_-22px_rgba(6,26,58,0.45)]"
            >
              Vernex • Technology • Marketing • Automation
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mb-5 max-w-4xl text-4xl font-bold text-[#111827] md:text-6xl"
            >
              Build Better Systems. Grow a Better Brand.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-3xl text-base leading-relaxed text-[#4B5563] md:text-lg"
            >
              Vernex helps businesses move from scattered work to structured
              growth — with software, automation, websites, content, and
              marketing support built for real business needs.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className={`${buttonLiftClass} w-full bg-slate-950 text-white hover:bg-black sm:w-auto`}>
                <Link to="/contact">
                  Start Your Project <ArrowRight size={17} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className={`${buttonLiftClass} w-full border-[#D8B36A]/70 bg-white text-[#111827] hover:bg-[#F4E4B8]/45 sm:w-auto`}>
                <Link to="/services">Explore Marketing Services</Link>
              </Button>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#B88932] sm:px-2"
              >
                View Products <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid gap-4"
          >
            {heroCards.map((card) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_18px_48px_-34px_rgba(17,24,39,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B36A]/70 hover:shadow-[0_24px_58px_-34px_rgba(17,24,39,0.62)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition-all duration-300 group-hover:bg-[#D8B36A] group-hover:text-slate-950">
                  <card.icon size={22} />
                </div>
                <h2 className="mb-2 text-lg font-bold text-[#111827]">{card.title}</h2>
                <p className="text-sm leading-relaxed text-[#64748B]">{card.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className={sectionHeadingClass}
          >
            <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
              One Vernex. Two Ways to Help Your Business Grow.
            </h2>
            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Some businesses need better systems. Some need better visibility.
              Many need both. Vernex connects technology and marketing so your
              business can work better and present itself better.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {divisionCards.map((card) => (
              <motion.div key={card.title} variants={fadeUp}>
                <Link
                  to={card.href}
                  className="group block h-full rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-6 shadow-[0_18px_44px_-34px_rgba(6,26,58,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B36A]/70 hover:bg-white hover:shadow-[0_24px_58px_-34px_rgba(6,26,58,0.6)]"
                >
                  <div className="mb-6 flex h-20 items-center justify-start">
                    <img
                      src={card.logo}
                      alt={card.alt}
                      className="logo-shine max-h-16 w-auto max-w-[230px] object-contain"
                    />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary">{card.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-[#64748B]">{card.text}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B88932]">
                    View division <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Button asChild className={`${buttonLiftClass} bg-primary text-white hover:bg-[#061A3A]`}>
              <Link to="/vernex-ecosystem">
                Explore Vernex Ecosystem <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] px-4 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className={sectionHeadingClass}
          >
            <span className={sectionLabelClass}>Product Preview</span>
            <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
              Vernex Gen Technologies Products
            </h2>
            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Practical software products built for schools, restaurants,
              shops, clinics, teams, and growing businesses.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {productPreview.map((product: Product) => {
              const Icon = product.icon || Building2;
              return (
                <motion.article
                  key={product.name}
                  variants={fadeUp}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_44px_-34px_rgba(6,26,58,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B36A]/70 hover:shadow-[0_24px_58px_-34px_rgba(6,26,58,0.58)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#D8B36A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-2">
                      {product.logo ? (
                        <img
                          src={product.logo}
                          alt={`${product.name} logo`}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <Icon size={28} className="text-primary" />
                      )}
                    </div>
                    <span className="rounded-full border border-[#D8B36A]/45 bg-[#F4E4B8]/70 px-3 py-1 text-xs font-semibold text-primary">
                      Live / Service-ready
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {productDescriptions[product.name] || product.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className={`${buttonLiftClass} bg-white`}>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className={sectionHeadingClass}
          >
            <span className={sectionLabelClass}>Marketing Services Preview</span>
            <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
              Marketing Services Built for Visibility
            </h2>
            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              From strategy and content to websites and campaigns, Vernex helps
              brands look clear, stay active, and generate better enquiries.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {marketingPreview.map((service) => (
              <motion.article
                key={service.name}
                variants={fadeUp}
                className="group rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-6 shadow-[0_18px_44px_-34px_rgba(6,26,58,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B36A]/70 hover:bg-white hover:shadow-[0_24px_58px_-34px_rgba(6,26,58,0.55)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition-all duration-300 group-hover:bg-[#D8B36A] group-hover:text-slate-950">
                  <service.icon size={22} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">{service.name}</h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{service.benefit}</p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className={`${buttonLiftClass} bg-white`}>
              <Link to="/services">View Marketing Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] px-4 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className={sectionHeadingClass}
          >
            <span className={sectionLabelClass}>Why Businesses Choose Vernex</span>
            <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
              Built for Real Business Execution
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {whyCards.map((card) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_44px_-34px_rgba(6,26,58,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B36A]/70 hover:shadow-[0_24px_58px_-34px_rgba(6,26,58,0.58)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition-all duration-300 group-hover:bg-[#D8B36A] group-hover:text-slate-950">
                  <card.icon size={22} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{card.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="container mx-auto max-w-4xl rounded-3xl border border-[#E5E7EB] bg-[#F5F5F7] px-6 py-10 text-center shadow-[0_18px_50px_-38px_rgba(6,26,58,0.55)] md:px-10 md:py-12"
        >
          <Sparkles className="mx-auto mb-5 text-[#B88932]" size={30} />
          <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
            Ready to Build Something Better?
          </h2>
          <p className="mx-auto mb-7 max-w-3xl text-[#64748B]">
            Tell us what you want to improve — your systems, your brand, your
            website, your content, or your customer reach. Vernex will help you
            choose the right path.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className={`${buttonLiftClass} w-full bg-slate-950 text-white hover:bg-black sm:w-auto`}>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className={`${buttonLiftClass} w-full bg-white sm:w-auto`}>
              <Link to="/vernex-ecosystem">Explore Vernex Ecosystem</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
