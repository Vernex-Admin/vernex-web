import React from "react";
import { motion, Variants } from "framer-motion";
import { BarChart3, Building2, Eye, Megaphone, MonitorCog, Sparkles, Target } from "lucide-react";

const GOLD = "#D8B36A";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buildItems = [
  {
    title: "Business Software and SaaS Products",
    text: "Custom software and SaaS tools for daily business operations.",
    icon: MonitorCog,
  },
  {
    title: "School ERP Systems",
    text: "ERP systems for student records, administration, fees, attendance, and school workflows.",
    icon: Building2,
  },
  {
    title: "Restaurant BI Dashboards",
    text: "Dashboards for sales, profit, menu performance, and operational reporting.",
    icon: BarChart3,
  },
  {
    title: "Billing and POS Systems",
    text: "Billing, POS, sales records, and basic inventory systems for retail and service businesses.",
    icon: Sparkles,
  },
  {
    title: "Attendance and Automation Systems",
    text: "Attendance systems, automation tools, and business process support.",
    icon: Target,
  },
  {
    title: "Clinic and Sales Automation Tools",
    text: "Clinic operations, sales follow-up systems, lead workflows, and customer tracking tools.",
    icon: BarChart3,
  },
  {
    title: "Websites and Landing Pages",
    text: "Professional websites and landing pages designed to support enquiries and trust.",
    icon: MonitorCog,
  },
  {
    title: "Branding and Content Systems",
    text: "Brand identity, content planning, social media creatives, video, and media assets.",
    icon: Megaphone,
  },
  {
    title: "Digital Marketing Campaigns",
    text: "Social media, paid campaigns, digital growth execution, and customer reach support.",
    icon: Megaphone,
  },
  {
    title: "Founder and Personal Branding Systems",
    text: "Profile positioning, content systems, visibility support, and personal brand growth.",
    icon: Eye,
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About <span style={{ color: GOLD }}>Vernex</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
            className="mx-auto max-w-3xl break-words px-1 text-base leading-relaxed text-muted-foreground md:text-xl"
          >
            Vernex is a founder-led digital company building technology systems
            and marketing solutions for growing businesses.
          </motion.p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 text-3xl font-bold md:text-4xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Who <span style={{ color: GOLD }}>We Are</span>
            </h2>

            <div
              className="mb-8 h-1 w-24 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <div
              className="max-w-full space-y-4 break-words text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              <p>
                Vernex helps businesses operate better and grow stronger
                through software, automation, business intelligence, branding,
                content, websites, and digital marketing.
              </p>
              <p>
                We work through two major divisions: Vernex Gen Technologies
                and Vernex Digital Marketing.
              </p>
              <p>
                Vernex Gen Technologies builds SaaS products, ERP systems, BI
                dashboards, automation tools, AI-powered systems, and practical
                business software.
              </p>
              <p>
                Vernex Digital Marketing helps brands improve visibility,
                content quality, social media presence, websites, campaigns,
                personal branding, and customer reach.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC] px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-border bg-white shadow-[var(--shadow-card)]">
          <div className="px-6 py-12 sm:px-10">
            <div className="flex flex-col gap-10 md:flex-row">
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="h-full rounded-lg border border-border bg-white px-8 py-9">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Target size={28} color={GOLD} />
                    </div>
                    <div>
                      <p className="mb-1 text-[11px] uppercase tracking-wide text-accent">
                        Our Mission
                      </p>
                      <h3 className="text-2xl font-bold md:text-3xl">
                        MISSION
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    To deliver practical, affordable, and scalable technology
                    and marketing solutions that help businesses improve
                    operations, build trust, attract customers, and grow with
                    confidence.
                  </p>
                </div>
              </motion.div>

              <div className="hidden items-stretch md:flex">
                <div className="w-px rounded-full bg-accent/50" />
              </div>

              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="h-full rounded-lg border border-border bg-white px-8 py-9">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Eye size={28} color={GOLD} />
                    </div>
                    <div>
                      <p className="mb-1 text-[11px] uppercase tracking-wide text-accent">
                        Our Vision
                      </p>
                      <h3 className="text-2xl font-bold md:text-3xl">
                        VISION
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    To build Vernex into a trusted digital company creating
                    software products, automation systems, marketing solutions,
                    and business growth tools for India and global markets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2
              className="mb-3 text-3xl font-bold md:text-4xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              What <span style={{ color: GOLD }}>We Build</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Vernex builds practical digital systems that support operations,
              visibility, customer reach, and business growth.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {buildItems.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                className="corporate-card corporate-card-hover rounded-lg p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
                  <item.icon size={22} color={GOLD} />
                </div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-[#F7F9FC]">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="corporate-card p-8 md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
              Founder-Led Approach
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Practical Execution, Clear Communication
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Vernex is built with a founder-led execution mindset. Every
              solution is planned with practical business value, clear
              communication, and long-term growth in mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
