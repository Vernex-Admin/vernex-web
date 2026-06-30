import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Megaphone,
  MonitorCog,
  Paintbrush,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const subBrands = [
  {
    id: "gen-technologies",
    title: "Vernex Gen Technologies",
    description:
      "Business software, SaaS products, automation systems, BI dashboards, ERP systems, and AI-powered tools for schools, restaurants, clinics, retail shops, and growing businesses.",
    button: "View Tech Solutions",
    href: "/gen-technologies",
    icon: MonitorCog,
  },
  {
    id: "digital-marketing",
    title: "Vernex Digital Marketing",
    description:
      "Branding, content creation, social media management, website development, paid campaigns, personal branding, and digital growth support for businesses and founders.",
    button: "View Marketing Services",
    href: "/digital-marketing",
    icon: Megaphone,
  },
];

const products = [
  {
    name: "Vernex School ERP",
    status: "Live / Service-ready",
    description:
      "A practical ERP system for schools to manage daily administration, student data, communication, and academic workflows.",
    features: ["Student records", "Fee tracking", "Attendance workflows", "Admin dashboards"],
    icon: Building2,
  },
  {
    name: "Vernex BI For Restaurants",
    status: "Live / Service-ready",
    description:
      "Business intelligence dashboards that help restaurants understand sales, profit, menu performance, and operating trends.",
    features: ["Sales dashboards", "Profit insights", "Menu analysis", "Performance reports"],
    icon: BarChart3,
  },
  {
    name: "Vernex Billing POS Software",
    status: "Live / Service-ready",
    description:
      "Billing and POS software for retail shops and service businesses that need cleaner billing, records, and daily sales visibility.",
    features: ["Fast billing", "Inventory basics", "Sales records", "Receipt-ready flow"],
    icon: ShoppingCart,
  },
];

const upcomingProducts = [
  { name: "Vernex Attendance System", badge: "Upcoming", icon: CalendarCheck },
  { name: "Vernex Clinic OS", badge: "In Development", icon: ClipboardList },
  { name: "Vernex Sales Agent", badge: "Demo Coming Soon", icon: Bot },
  { name: "Vernex Inventory Profit", badge: "In Development", icon: BarChart3 },
];

const marketingCards = [
  {
    title: "Brand & Creative",
    description: "Brand identity, visual systems, creatives, and digital design support.",
    icon: Paintbrush,
  },
  {
    title: "Content & Media",
    description: "Content creation, video, reels, photography, and social media assets.",
    icon: Video,
  },
  {
    title: "Growth & Marketing",
    description: "Websites, paid campaigns, lead funnels, SEO basics, and enquiry-focused execution.",
    icon: Rocket,
  },
  {
    title: "Personal Branding",
    description: "Founder profiles, content positioning, visibility, and authority-building support.",
    icon: Users,
  },
];

const whyCards = [
  {
    title: "Technology + Marketing Under One Brand",
    description:
      "Software, websites, content, and marketing can move together with one clear execution partner.",
    icon: Sparkles,
  },
  {
    title: "Practical Solutions for Growing Businesses",
    description:
      "Vernex focuses on systems that solve real operating, visibility, and customer-growth problems.",
    icon: CheckCircle2,
  },
  {
    title: "Founder-Led Execution",
    description:
      "Projects stay close to business goals, timelines, and practical outcomes from planning to delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Affordable and Scalable Approach",
    description:
      "Start with what matters now, then scale products, automations, dashboards, and campaigns as the business grows.",
    icon: ShieldCheck,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section
        className="relative flex min-h-[88vh] items-center justify-center px-4 py-28 text-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,26,58,0.82), rgba(11,36,84,0.72)),
            url(${heroBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#061A3A]/10" />

        <motion.div
          className="relative z-10 mx-auto max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border border-[#D8B36A]/45 bg-white/10 px-5 py-1.5"
          >
            <span className="text-sm font-medium text-[#F4E4B8]">
              Vernex Technology + Digital Marketing
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mx-auto mb-6 max-w-5xl break-words font-heading text-[clamp(1.85rem,8vw,4.6rem)] font-bold leading-tight text-white"
          >
            Technology, Automation, and Digital Growth Solutions for Modern Businesses
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-10 max-w-3xl break-words text-base leading-relaxed text-white/88 md:text-xl"
          >
            Vernex builds business software, automation systems, dashboards,
            websites, content, and digital marketing solutions that help
            businesses operate better, look more professional, and grow faster.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="w-full bg-white px-8 py-5 font-semibold text-[#0B2454] hover:bg-[#F4E4B8] sm:w-auto"
            >
              <Link to="/gen-technologies">
                Explore Gen Technologies <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border border-white/60 bg-transparent px-8 py-5 font-semibold text-white hover:border-[#D8B36A] hover:bg-[#D8B36A] hover:text-[#061A3A] sm:w-auto"
            >
              <Link to="/digital-marketing">Explore Digital Marketing</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <div className="gold-divider-strong" />

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {subBrands.map((brand) => (
              <motion.div
                id={brand.id}
                key={brand.title}
                variants={fadeUp}
                className="corporate-card corporate-card-hover scroll-mt-28 p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-primary">
                  <brand.icon size={30} />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                  {brand.title}
                </h2>
                <p className="mb-7 leading-relaxed">{brand.description}</p>
                <Button asChild>
                  <Link to={brand.href}>
                    {brand.button} <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="products" className="section-shell scroll-mt-28 bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Software Products Built for Real Business Operations
            </h2>
            <p>
              Vernex products are designed around practical business workflows,
              cleaner records, and faster decision-making.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className="corporate-card corporate-card-hover flex h-full flex-col p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                    <product.icon size={26} />
                  </div>
                  <span className="rounded-full border border-accent/40 bg-secondary/70 px-3 py-1 text-xs font-semibold text-primary">
                    {product.status}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{product.name}</h3>
                <p className="mb-5 text-sm leading-relaxed">{product.description}</p>
                <ul className="mb-7 grid gap-2 text-sm text-muted-foreground">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-auto">
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {upcomingProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className="rounded-lg border border-dashed border-primary/20 bg-white p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-primary">
                  <product.icon size={22} />
                </div>
                <h3 className="mb-3 font-semibold">{product.name}</h3>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {product.badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="digital-marketing" className="section-shell scroll-mt-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Digital Marketing Solutions That Make Brands Enquiry-Ready
              </h2>
              <p className="max-w-2xl">
                Vernex Digital Marketing improves how your brand looks,
                communicates, and converts attention into real enquiries.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {marketingCards.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="corporate-card corporate-card-hover p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Why Vernex</h2>
            <p>
              A focused execution partner for businesses that need technology,
              marketing, and growth systems without unnecessary complexity.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {whyCards.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="corporate-card p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Ready to Build Your Digital Growth System?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl">
            Whether you need software, automation, dashboards, websites,
            content, or marketing support, Vernex helps you move from idea to
            execution.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
