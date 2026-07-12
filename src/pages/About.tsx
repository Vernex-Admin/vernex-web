import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Eye,
  Flag,
  Leaf,
  Megaphone,
  Search,
  Settings,
  Target,
  Users,
} from "lucide-react";

type TimelineItem = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
  side: "left" | "right";
};

type BranchItem = {
  title: string;
  text: string;
  points: string[];
  icon: LucideIcon;
  logo: string;
  to: string;
  explore: string;
};

type StepItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const timelineItems: TimelineItem[] = [
  {
    number: "01",
    title: "Who We Are",
    text: "Vernex is a technology and digital marketing company focused on solving real business problems. We build practical systems, create meaningful campaigns, and help brands grow with purpose and consistency.",
    icon: Users,
    side: "left",
  },
  {
    number: "02",
    title: "Our Mission",
    text: "Our mission is to help brands and businesses grow through useful technology and result-driven marketing. From powerful digital solutions to effective marketing execution, we create work that delivers real and long-term value.",
    icon: Target,
    side: "right",
  },
  {
    number: "03",
    title: "Our Vision",
    text: "Our vision is to become a trusted growth partner for businesses by combining reliable technology, clear communication, strong branding, and practical digital solutions.",
    icon: Eye,
    side: "left",
  },
  {
    number: "04",
    title: "The Vernex Ecosystem",
    text: "The Vernex ecosystem is built around two connected divisions: Vernex Gen Technologies and Vernex Digital Marketing. Together, they support both the internal operations and external growth of a business.",
    icon: Leaf,
    side: "right",
  },
];

const branchItems: BranchItem[] = [
  {
    title: "Vernex Gen Technologies",
    text: "We build reliable digital products and technology solutions that solve real business challenges and support long-term growth.",
    points: [
      "Custom web, mobile and business software",
      "Cloud, automation and system integration",
      "Scalable, secure and future-ready solutions",
    ],
    icon: Code2,
    logo: "/assets/logos/vernex-gen-technologies-logo-normalized.png",
    to: "/gen-technologies",
    explore: "Explore Vernex Gen Technologies",
  },
  {
    title: "Vernex Digital Marketing",
    text: "We help businesses grow online through clear strategy, professional content, strong branding and performance-focused marketing.",
    points: [
      "Branding, content and creative design",
      "Social media, SEO and paid advertising",
      "Analytics, growth strategy and optimisation",
    ],
    icon: Megaphone,
    logo: "/assets/logos/vernex-digital-marketing-logo-normalized.png",
    to: "/services",
    explore: "Explore Vernex Digital Marketing",
  },
];

const steps: StepItem[] = [
  { title: "Understand", text: "We listen, learn, and understand your business goals.", icon: Users },
  { title: "Plan", text: "We research and plan the right strategy together.", icon: Search },
  { title: "Build", text: "We design, develop, and execute with precision.", icon: Settings },
  { title: "Optimize", text: "We test, analyse, and refine for better performance.", icon: BarChart3 },
  { title: "Grow", text: "We deliver results that help your business scale and lead.", icon: Flag },
];

const up = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fromLeft = {
  hidden: { opacity: 0, x: -36, y: 10 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 36, y: 10 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const TimelineCard = ({
  item,
  reduceMotion,
  transition,
  mobile = false,
}: {
  item: TimelineItem;
  reduceMotion: boolean;
  transition: { duration: number; ease: string };
  mobile?: boolean;
}) => {
  const Icon = item.icon;
  const isLeft = item.side === "left";

  if (mobile) {
    return (
      <div className="relative">
        <motion.article
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={up}
          transition={transition}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="mx-auto min-h-[250px] max-w-[430px] rounded-lg border border-[#DDE3EC] bg-white p-5 text-left shadow-[0_16px_40px_rgba(7,23,47,0.08)] sm:p-7"
        >
          <div className="mb-5 flex items-center gap-4">
            <motion.span
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#07172F] text-white"
            >
              <Icon size={25} />
            </motion.span>
            <span className="text-xl font-bold text-[#B28A3B]">{item.number}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#07172F]">{item.title}</h2>
          <p className="text-base leading-[1.65] text-[#23334D]">{item.text}</p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]">
      <motion.span
        initial={reduceMotion ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={transition}
        className="absolute left-[22px] top-10 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#07172F] ring-4 ring-white md:left-1/2"
      />
      <span
        className={`absolute top-[46px] hidden h-0.5 w-9 bg-[#07172F] md:block ${
          isLeft ? "left-[calc(50%-36px)]" : "left-1/2"
        }`}
      />
      <motion.article
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={reduceMotion ? up : isLeft ? fromLeft : fromRight}
        transition={transition}
        whileHover={reduceMotion ? undefined : { y: -5 }}
        className={`ml-11 min-h-[250px] max-w-[430px] rounded-2xl border border-[#DDE3EC] bg-white p-5 text-left shadow-[0_16px_40px_rgba(7,23,47,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_52px_rgba(7,23,47,0.13)] sm:p-7 md:ml-0 md:min-h-[235px] md:max-w-[520px] md:p-8 ${
          isLeft ? "md:col-start-1 md:justify-self-end" : "md:col-start-3 md:justify-self-start"
        }`}
      >
        <div className="mb-5 flex items-center gap-4">
          <motion.span
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#07172F] text-white"
          >
            <Icon size={25} />
          </motion.span>
          <span className="text-xl font-bold text-[#B28A3B]">{item.number}</span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-[#07172F]">{item.title}</h2>
        <p className="text-base leading-[1.65] text-[#23334D]">{item.text}</p>
      </motion.article>
    </div>
  );
};

const DesktopTimeline = ({
  reduceMotion,
  transition,
  lineScale,
}: {
  reduceMotion: boolean;
  transition: { duration: number; ease: string };
  lineScale: ReturnType<typeof useTransform>;
}) => (
  <div className="relative hidden pb-10 md:block">
    <div className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-[#D8DEE8]" />
    <motion.div
      style={{ scaleY: reduceMotion ? 1 : lineScale }}
      className="absolute bottom-0 left-1/2 top-0 w-0.5 origin-top -translate-x-1/2 bg-[#07172F]"
    />

    <div className="grid gap-y-10">
      {timelineItems.map((item) => (
        <TimelineCard key={item.number} item={item} reduceMotion={reduceMotion} transition={transition} />
      ))}
    </div>

    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scaleX: 0.35 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={transition}
      className="relative mx-auto mt-10 h-14 w-[720px] origin-center border-x-2 border-t-2 border-[#07172F]"
    >
      <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07172F] ring-4 ring-white" />
    </motion.div>
  </div>
);

const MobileTimeline = ({
  reduceMotion,
  transition,
}: {
  reduceMotion: boolean;
  transition: { duration: number; ease: string };
}) => (
  <div className="relative pb-8 md:hidden">
    <div className="grid justify-items-center">
      {timelineItems.map((item, index) => (
        <div key={item.number} className="grid w-full justify-items-center">
          <TimelineCard item={item} reduceMotion={reduceMotion} transition={transition} mobile />
          {index < timelineItems.length - 1 ? (
            <div className="relative flex h-9 w-5 items-center justify-center">
              <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-[#07172F]" />
              <motion.span
                initial={reduceMotion ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={transition}
                className="relative z-10 h-2.5 w-2.5 rounded-full bg-[#07172F] ring-4 ring-white"
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>

    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scaleX: 0.35 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={transition}
      className="relative mx-auto mt-8 h-9 w-[140px] origin-center border-x-2 border-t-2 border-[#07172F]"
    >
      <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07172F] ring-4 ring-white" />
    </motion.div>
  </div>
);

const BranchCard = ({
  item,
  reduceMotion,
  transition,
}: {
  item: BranchItem;
  reduceMotion: boolean;
  transition: { duration: number; ease: string };
}) => {
  return (
    <motion.article
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={up}
      transition={transition}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="relative mx-auto flex min-h-[430px] w-full max-w-[430px] flex-col rounded-lg border border-[#DDE3EC] bg-white px-5 pb-7 pt-10 text-center shadow-[0_16px_40px_rgba(7,23,47,0.08)] md:min-h-[500px] md:max-w-none md:rounded-2xl md:px-8 md:pb-8 md:pt-10"
    >
      <div className="mx-auto mb-5 flex h-20 w-full max-w-[260px] items-center justify-center rounded-lg bg-white p-2">
        <img src={item.logo} alt={`${item.title} logo`} className="max-h-full w-full object-contain" />
      </div>
      <h2 className="text-xl font-bold uppercase text-[#07172F] md:text-2xl">{item.title}</h2>
      <div className="mx-auto my-5 h-px w-10 bg-[#B28A3B]" />
      <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-[#23334D] md:text-base">{item.text}</p>
      <div className="space-y-3 text-left">
        {item.points.map((point) => (
          <div key={point} className="flex items-center gap-3 rounded-lg border border-[#E5EAF1] bg-white px-4 py-3 text-sm text-[#23334D]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B28A3B] text-white">
              <Check size={12} />
            </span>
            {point}
          </div>
        ))}
      </div>
      <Link
        to={item.to}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#07172F] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#0B2454] md:mt-auto"
      >
        View More
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Link>
      <Link
        to={item.to}
        className="group mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-[#07172F]"
      >
        {item.explore}
        <ArrowRight size={15} className="text-[#B28A3B] transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
};

const ProcessStep = ({
  step,
  index,
  reduceMotion,
  transition,
}: {
  step: StepItem;
  index: number;
  reduceMotion: boolean;
  transition: { duration: number; ease: string };
}) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={up}
      transition={{ ...transition, delay: index * 0.06 }}
      className="relative flex items-start gap-4 rounded-xl border border-[#DDE3EC] bg-white p-4 text-left shadow-[0_10px_28px_rgba(7,23,47,0.06)] md:block md:border md:px-5 md:py-6 md:text-center"
    >
      <span className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#07172F] text-xs font-bold text-white ring-4 ring-white md:left-1/2 md:-translate-x-1/2">
        {index + 1}
      </span>
      <Icon className="mt-3 shrink-0 text-[#07172F] md:mx-auto md:mb-4 md:mt-2" size={34} />
      <div>
        <h3 className="mb-2 font-bold text-[#07172F] md:mb-3">{step.title}</h3>
        <p className="max-w-[280px] text-sm leading-relaxed text-[#23334D] md:mx-auto md:max-w-[172px]">
          {step.text}
        </p>
      </div>
      {index < steps.length - 1 ? (
        <span className="absolute -right-[22px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#DDE3EC] bg-white text-[#B28A3B] shadow-sm md:flex">
          <ArrowRight size={16} />
        </span>
      ) : null}
    </motion.div>
  );
};

const About = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 82%", "end 96%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const transition = { duration: reduceMotion ? 0 : 0.65, ease: "easeOut" };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-20 text-[#07172F]">
      <motion.section
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={up}
        transition={transition}
        className="mx-auto max-w-[1180px] px-4 pb-8 pt-10 text-center sm:px-6 md:pb-12 md:pt-14"
      >
        <span className="text-xs font-bold uppercase tracking-wide text-[#B28A3B]">About Vernex</span>
        <h1 className="mt-3 text-[38px] font-bold leading-tight text-[#07172F] md:text-[64px]">About Vernex</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 bg-[#B28A3B]" />
        <p className="mx-auto mt-4 max-w-[650px] text-base leading-relaxed text-[#23334D]">
          Vernex brings technology and marketing together to help businesses grow smarter, work better, and create lasting impact.
        </p>
      </motion.section>

      <section ref={timelineRef} className="relative mx-auto max-w-[1180px] px-4 pb-12 sm:px-6">
        <div className="relative">
          <DesktopTimeline reduceMotion={!!reduceMotion} transition={transition} lineScale={lineScale} />
          <MobileTimeline reduceMotion={!!reduceMotion} transition={transition} />

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-6 grid gap-10 md:mt-8 md:grid-cols-2 md:gap-12"
          >
            {branchItems.map((item) => (
              <BranchCard key={item.title} item={item} reduceMotion={!!reduceMotion} transition={transition} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 text-center sm:px-6">
        <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={up} transition={transition}>
          <span className="text-xs font-bold uppercase tracking-wide text-[#B28A3B]">How We Work</span>
          <h2 className="mt-3 text-3xl font-bold text-[#07172F] md:text-4xl">Simple. Transparent. Effective.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#23334D]">
            Our process is built for clarity, collaboration, and consistent results.
          </p>
          <div className="relative mt-12 grid gap-6 md:grid-cols-5 md:gap-5">
            <div className="absolute left-[10%] right-[10%] top-0 hidden h-0.5 bg-gradient-to-r from-transparent via-[#07172F] to-transparent md:block" />
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} reduceMotion={!!reduceMotion} transition={transition} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-14 pt-4 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={up}
          transition={transition}
          className="grid min-h-[220px] gap-8 rounded-2xl bg-gradient-to-br from-[#07172F] to-[#031021] p-8 text-white shadow-[0_22px_54px_rgba(7,23,47,0.24)] md:grid-cols-[1.1fr_auto_1fr] md:items-center md:p-12"
        >
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">Let's build something great together.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#DDE3EC]">
              One ecosystem. Two areas of growth. Practical solutions built around your business.
            </p>
          </div>
          <div className="hidden h-28 w-px bg-white/25 md:block" />
          <div className="md:text-center">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#D8B36A] px-8 py-4 text-sm font-bold text-[#07172F] transition-all duration-300 hover:scale-[1.02] hover:bg-[#F4E4B8] md:w-auto"
            >
              Let's Talk
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="mt-5 inline-flex items-center justify-center gap-2 text-sm text-white">
              See how we can help
              <ArrowRight size={15} className="text-[#D8B36A]" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
