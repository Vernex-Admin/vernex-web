import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/home/SectionHeading";
import { fadeUp, stagger, testimonials, type Testimonial } from "./ecosystemData";

const TestimonialCard = ({ quote, name, company, initials }: Testimonial): JSX.Element => (
  <article className="flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_16px_40px_-30px_rgba(11,31,77,0.4)] sm:p-7">
    <Quote className="h-7 w-7 text-[#D8B36A]" aria-hidden="true" />
    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
    <div className="mt-6 flex items-center gap-3 border-t border-[#EEF0F4] pt-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] text-sm font-bold text-[#D8B36A]">
        {initials}
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-primary">{name}</h3>
        <p className="text-xs text-slate-500">{company}</p>
      </div>
    </div>
  </article>
);

const TestimonialsSection = (): JSX.Element => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FBFAF7] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="What Clients Say" title="Real Feedback. Real Growth." />

        {/* Desktop: three cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden gap-6 md:grid md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeUp}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: single slider */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <TestimonialCard {...testimonials[active]} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={active === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index ? "w-6 bg-[#D8B36A]" : "w-2 bg-[#D8B36A]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
