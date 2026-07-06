import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart3, Blocks, Check, Lightbulb, Quote, Rocket, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Path = "technology" | "marketing";

const paths = {
  technology: {
    title: "Vernex Gen Technologies",
    tagline: "Build Smarter. Operate Faster.",
    subtitle: "Software • Automation • SaaS • BI • ERP • AI Tools",
    description: "Vernex Gen Technologies builds practical software systems and automation solutions that help businesses simplify operations, improve efficiency, and make better decisions through data.",
    purpose: "We created Vernex Gen Technologies to solve everyday operational problems — scattered data, manual work, weak reporting, disconnected processes, and lack of scalable systems.",
    focus: ["Business Software", "SaaS Platforms", "ERP Systems", "Automation Tools", "BI Dashboards", "AI-Powered Systems", "Custom Digital Infrastructure"],
    problemsTitle: "Technology Problems We Solve",
    problems: [
      ["Manual Operations", "We replace repetitive manual processes with structured digital workflows."],
      ["Scattered Business Data", "We organize data through dashboards, reports, and software systems."],
      ["Poor Operational Visibility", "We help owners track performance, sales, attendance, inventory, and business activity."],
      ["Lack of Scalable Systems", "We build software foundations that can grow with the business."],
    ],
    primary: ["View SaaS Products", "/products"],
    secondary: ["Request a Demo", "/contact"],
    logo: "/assets/logos/vernex-gen-technologies-logo-normalized.png",
    testimonials: [
      ["School Operations Lead", "Education Sector", "Vernex helped us understand how a structured ERP system can simplify daily school operations, student workflows, and communication. The approach felt practical and business-focused."],
      ["Restaurant Business Owner", "Food & Beverage", "The restaurant BI concept gave us a clearer way to look at sales, profit, and menu performance. It turns business data into decisions we can actually use."],
      ["Retail Store Manager", "Retail Business", "The billing and inventory approach is built around real shop problems — receipts, stock, customers, reports, and daily control."],
    ],
  },
  marketing: {
    title: "Vernex Digital Marketing",
    tagline: "Build Presence. Create Demand.",
    subtitle: "Branding • Content • Social Media • Websites • Ads • Growth",
    description: "Vernex Digital Marketing helps businesses, founders, creators, and local brands build visibility, trust, content consistency, and customer reach through strategy-led digital execution.",
    purpose: "We created Vernex Digital Marketing to solve online growth problems — inconsistent content, weak branding, poor social presence, low enquiries, and lack of digital strategy.",
    focus: ["Digital Marketing", "Social Media Management", "Personal Branding", "Website Development", "Content Creation", "Paid Campaigns", "Graphic Design / Branding", "Event Promotion", "Photography / Videography"],
    problemsTitle: "Growth Problems We Solve",
    problems: [
      ["Weak Brand Presence", "We help businesses look professional and trustworthy across digital platforms."],
      ["Inconsistent Content", "We plan and execute content systems that keep the brand active and relevant."],
      ["Low Enquiries", "We improve visibility, landing pages, campaigns, and communication to support enquiries."],
      ["No Clear Strategy", "We build structured marketing plans backed by content, campaigns, and monthly tracking."],
    ],
    primary: ["View Marketing Services", "/services"],
    secondary: ["Get Free Brand Audit", "/contact"],
    logo: "/assets/logos/vernex-digital-marketing-logo-normalized.png",
    testimonials: [
      ["Local Business Founder", "Service Business", "Vernex gave us a clearer direction for our brand presence, content, and digital marketing. The focus was how to make the brand enquiry-ready."],
      ["Fitness Brand Owner", "Local Brand", "The content and social media strategy helped us understand how to present our business more professionally and consistently online."],
      ["Creator / Consultant", "Personal Brand", "The personal branding approach helped shape profile positioning, content direction, and authority-building in a simple and practical way."],
    ],
  },
} as const;

// Replace these placeholder testimonials with real client testimonials before final public launch.
const VernexEcosystem = () => {
  const [active, setActive] = useState<Path>("technology");
  const content = paths[active];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-20 text-foreground">
      <section className="relative overflow-hidden bg-white px-4 py-24 text-center md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />
        <div className="container relative z-10 mx-auto max-w-6xl">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-accent">VERNEX ECOSYSTEM</span>
        <h1 className="mx-auto mb-5 max-w-5xl text-4xl font-bold text-primary md:text-6xl">One Brand. Two Engines for Business Growth.</h1>
        <p className="mx-auto mb-5 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">Vernex brings together technology systems and digital growth execution through two focused divisions — Vernex Gen Technologies and Vernex Digital Marketing.</p>
        <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-accent">SOFTWARE · AUTOMATION · INTELLIGENCE · BRANDING · CONTENT · GROWTH</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto"><a href="#choose">Explore Ecosystem</a></Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><Link to="/contact">Start Your Project</Link></Button>
        </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="section-shell bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">One connected advantage</span><h2 className="mb-4 mt-3 text-3xl font-bold md:text-4xl">The Vernex Ecosystem</h2><p className="text-base leading-relaxed md:text-lg">Practical technology and market-facing digital execution, designed to work together.</p></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [Blocks, "Build Systems", "Software, automation, dashboards, ERP tools, and AI-powered workflows that improve business operations."],
              [TrendingUp, "Create Demand", "Branding, content, websites, social media, campaigns, and marketing systems that improve visibility and enquiries."],
              [Rocket, "Scale With Clarity", "A connected approach where operations and growth work together instead of functioning separately."],
            ].map(([CardIcon, title, text]) => <article key={title as string} className="corporate-card corporate-card-hover p-7"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary"><CardIcon size={24}/></div><h3 className="mb-3 text-xl font-semibold text-primary">{title as string}</h3><p className="text-sm leading-relaxed">{text as string}</p></article>)}
          </div>
        </div>
      </section>

      <section id="choose" className="scroll-mt-24 bg-[#F7F9FC] py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-7 text-center md:mb-10"><h2 className="mb-3 text-2xl font-bold md:text-4xl">Choose Your Vernex Path</h2><p className="mx-auto max-w-2xl text-sm md:text-base">Whether you need smarter systems or stronger market presence, Vernex has a dedicated division.</p></div>
          <div className="mx-auto grid max-w-4xl gap-3 rounded-lg border border-border bg-white p-2 shadow-[var(--shadow-card)] md:grid-cols-2" role="tablist" aria-label="Vernex divisions">
            {(Object.keys(paths) as Path[]).map((key) => {
              const item = paths[key]; const selected = active === key;
              return <button key={key} role="tab" aria-selected={selected} aria-pressed={selected} onClick={() => setActive(key)} className={`relative flex min-h-[88px] items-center gap-4 rounded-lg border px-4 py-3 text-left transition-all duration-300 md:px-5 ${selected ? "border-accent bg-primary text-white shadow-[var(--shadow-card)]" : "border-transparent bg-[#F7F9FC] text-primary hover:border-accent/50 hover:bg-white"}`}>
                <span className={`flex h-14 w-[104px] shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white p-1.5 md:w-[118px] ${selected ? "border-accent/70 shadow-[0_0_18px_rgba(216,179,106,.16)]" : "border-accent/30"}`}>
                  <img src={item.logo} alt={`${item.title} logo`} className="h-full w-full object-contain mix-blend-multiply" />
                </span>
                <span className="min-w-0 flex-1"><span className="block pr-7 text-sm font-bold md:text-base">{item.title}</span><span className={`mt-1 block text-xs leading-relaxed ${selected ? "text-[#D1D5DB]" : "text-muted-foreground"}`}>{item.subtitle}</span></span>
                {selected && <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#D8B36A] text-black"><Check size={13}/></span>}
              </button>;
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="corporate-card mt-5 md:mt-8">
              <div className="grid lg:grid-cols-[1.25fr_.75fr]">
              <div className="p-5 md:p-10"><span className="mb-3 inline-block text-xs font-bold uppercase tracking-[.16em] text-[#B88932]">Vernex Division</span><h2 className="mb-2 text-2xl font-bold text-[#061A3A] md:text-3xl">{content.title}</h2><p className="mb-4 text-lg font-semibold text-[#0B2454] md:mb-5 md:text-xl">{content.tagline}</p>
              <p className="mb-4 text-sm leading-relaxed md:mb-5 md:text-lg">{content.description}</p><p className="mb-6 text-sm leading-relaxed md:mb-7 md:text-base">{content.purpose}</p>
              <h3 className="mb-3 text-lg font-bold md:mb-4 md:text-xl">What We Focus On</h3><div className="mb-6 flex flex-wrap gap-1.5 md:mb-8 md:gap-2">{content.focus.map(x => <span key={x} className="rounded-full bg-[#F4E4B8]/50 px-2.5 py-1 text-xs md:px-3 md:text-sm">{x}</span>)}</div>
              <div className="flex flex-col gap-3 sm:flex-row"><Button asChild className="w-full sm:w-auto"><Link to={content.primary[1]}>{content.primary[0]} <ArrowRight size={16}/></Link></Button><Button asChild variant="outline" className="w-full sm:w-auto"><Link to={content.secondary[1]}>{content.secondary[0]}</Link></Button></div>
              </div>
              <div className="relative flex min-h-[260px] items-center bg-[#F7F9FC] p-5 md:min-h-[320px] md:p-8"><div className="relative w-full space-y-3 md:space-y-4"><p className="text-xs font-bold uppercase tracking-widest text-accent">Business intelligence view</p>{content.problems.slice(0,3).map(([title], index) => <div key={title} className="rounded-lg border border-border bg-white p-3 shadow-[var(--shadow-card)] md:p-4"><div className="mb-2 flex items-center justify-between"><span className="text-sm font-semibold text-primary md:text-base">{title}</span><span className="text-xs text-accent">0{index + 1}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-gradient-to-r from-[#D8B36A] to-[#F4E4B8]" style={{width: `${78 - index * 12}%`}}/></div></div>)}</div></div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-shell bg-white"><div className="container mx-auto max-w-6xl px-4"><h2 className="mb-9 text-center text-3xl font-bold md:text-4xl">{content.problemsTitle}</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{content.problems.map(([title, text]) => <article key={title} className="corporate-card corporate-card-hover p-6"><BarChart3 className="mb-4 text-[#D8B36A]"/><h3 className="mb-2 text-lg font-bold">{title}</h3><p className="text-sm">{text}</p></article>)}</div></div></section>

      <section className="section-shell bg-[#F7F9FC]"><div className="container mx-auto max-w-6xl px-4"><div className="mx-auto mb-12 max-w-3xl text-center"><h2 className="mb-4 text-3xl font-bold md:text-4xl">Where Technology Meets Growth</h2><p className="text-muted-foreground">Strong internal systems and strong external visibility, connected through one disciplined process.</p></div><div className="relative grid gap-7 md:grid-cols-4"><div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#D8B36A] to-transparent md:block"/>{[[Search,"Understand the Business"],[Blocks,"Build the Right System"],[Lightbulb,"Create the Right Brand Presence"],[Rocket,"Track, Improve, and Scale"]].map(([StepIcon,title],i)=><div key={title as string} className="relative text-center"><div className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-secondary text-primary"><StepIcon size={21}/></div><span className="text-xs font-bold text-[#D8B36A]">STEP 0{i+1}</span><h3 className="mt-2 font-bold text-primary">{title as string}</h3></div>)}</div></div></section>

      <section className="section-shell bg-white"><div className="container mx-auto max-w-6xl px-4"><h2 className="mb-9 text-center text-3xl font-bold">What Businesses Say</h2><div className="grid gap-6 lg:grid-cols-3">{content.testimonials.map(([name, role, quote]) => <article key={name} className="corporate-card p-7"><Quote className="mb-4 text-[#D8B36A]"/><p className="mb-6">{quote}</p><h3 className="font-bold">{name}</h3><span className="text-sm text-muted-foreground">{role}</span></article>)}</div></div></section>

      <section className="section-shell bg-[#F7F9FC] text-center"><div className="container mx-auto px-4"><h2 className="mb-4 text-3xl font-bold md:text-4xl">Choose the Right Vernex Path for Your Business</h2><p className="mx-auto mb-8 max-w-3xl">Need software, automation, dashboards, branding, content, websites, or marketing execution? Vernex helps you move from idea to execution.</p><div className="flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg" className="w-full sm:w-auto"><Link to="/products">View SaaS Products</Link></Button><Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><Link to="/services">View Marketing Services</Link></Button><Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><Link to="/contact">Start a Project</Link></Button></div></div></section>
    </div>
  );
};

export default VernexEcosystem;

