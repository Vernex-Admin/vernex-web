import {
  ArrowRight,
  Globe,
  Handshake,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  Zap,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactCards = [
  {
    label: "Website",
    value: "www.vernex.in",
    note: "Visit our website",
    href: "https://www.vernex.in",
    icon: Globe,
  },
  {
    label: "Email",
    value: "connect@vernex.in",
    note: "Drop us an email",
    href: "mailto:connect@vernex.in?subject=Project%20Enquiry%20from%20Vernex%20Website",
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: "+91 97899 12805",
    note: "Mon - Sat, 9:00 AM - 7:00 PM",
    href: "https://wa.me/919789912805",
    icon: Phone,
  },
];

const trustItems = [
  { title: "Secure & Confidential", text: "Your data is protected and never shared.", icon: ShieldCheck },
  { title: "Quick Response", text: "We respond within 1 business day.", icon: Zap },
  { title: "Right Solutions", text: "We recommend the best path for your goals.", icon: Target },
  { title: "Long-Term Partnership", text: "We grow with you and your business.", icon: Handshake },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  requirement: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const canSubmit = useMemo(
    () => form.name.trim() && form.email.trim() && form.message.trim(),
    [form.email, form.message, form.name],
  );

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setFeedback("Please add your name, email, and project details before submitting.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          services: form.requirement.trim() ? [form.requirement.trim()] : [],
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");
      setFeedback("Thank you. Vernex will get back to you within 1 business day.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("We could not submit the form right now. Please email or WhatsApp Vernex directly.");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBFCFE] pt-20 text-[#07172F]">
      <section className="mx-auto max-w-[1180px] px-4 pb-7 pt-10 text-center sm:px-6 md:pb-9 md:pt-12">
        <span className="text-xs font-bold uppercase tracking-wide text-[#B28A3B]">
          Contact Vernex
        </span>
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold leading-tight text-[#07172F] md:text-6xl">
          Start Your Project With Vernex
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#4B5565] md:text-lg">
          Tell us what you want to build, improve, automate, design, or grow.
          Vernex will help you choose the right path across technology,
          products, websites, content, and marketing.
        </p>
        <div className="mx-auto mt-8 flex max-w-xs items-center gap-4 text-[#B28A3B]">
          <span className="h-px flex-1 bg-[#DDE3EC]" />
          <Sparkles size={22} />
          <span className="h-px flex-1 bg-[#DDE3EC]" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,.9fr)]">
        <form
          onSubmit={handleSubmit}
          className="min-w-0 rounded-lg border border-[#DDE3EC] bg-white p-5 shadow-[0_16px_44px_rgba(7,23,47,0.08)] md:p-8"
        >
          <div className="mb-7 flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D8B36A] text-white">
              <UserRound size={24} />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-[#07172F]">Project Enquiry</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#4B5565]">
                Use this form to outline your requirement. You can also contact
                Vernex directly through WhatsApp or email.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#07172F]" htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                autoComplete="name"
                placeholder="Your name"
                className="h-12 bg-white text-[#07172F] placeholder:text-[#7B8798]"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#07172F]" htmlFor="phone">Phone / WhatsApp</label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91..."
                className="h-12 bg-white text-[#07172F] placeholder:text-[#7B8798]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#07172F]" htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                autoComplete="email"
                placeholder="you@example.com"
                className="h-12 bg-white text-[#07172F] placeholder:text-[#7B8798]"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-[#07172F]" htmlFor="service">Requirement</label>
              <Input
                id="service"
                name="service"
                value={form.requirement}
                onChange={(event) => updateField("requirement", event.target.value)}
                placeholder="Website, software, marketing..."
                className="h-12 bg-white text-[#07172F] placeholder:text-[#7B8798]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#07172F]" htmlFor="message">Project Details</label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                rows={6}
                placeholder="Tell us about your business and what you need."
                className="min-h-36 resize-y bg-white text-[#07172F] placeholder:text-[#7B8798]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#07172F] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2454] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === "loading" ? (
              <>
                Sending Enquiry <Loader2 className="animate-spin" size={18} />
              </>
            ) : (
              <>
                Submit Enquiry <ArrowRight size={18} />
              </>
            )}
          </button>
          {feedback && (
            <p
              className={`mt-4 rounded-md border px-4 py-3 text-center text-sm font-medium ${
                status === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}
              role="status"
            >
              {feedback}
            </p>
          )}
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-[#64748B]">
            <ShieldCheck size={16} className="text-[#64748B]" />
            We respect your privacy. Your information is safe with us.
          </p>
        </form>

        <div className="min-w-0 space-y-4">
          {contactCards.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-lg border border-[#DDE3EC] bg-white p-5 shadow-[0_12px_34px_rgba(7,23,47,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D8B36A]/50 hover:shadow-[0_18px_44px_rgba(7,23,47,0.11)] sm:gap-5"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F8ECCC] text-[#B28A3B]">
                <item.icon size={28} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-wide text-[#B28A3B]">{item.label}</span>
                <span className="mt-1 block truncate text-lg font-bold text-[#07172F]">{item.value}</span>
                <span className="mt-1 block text-sm text-[#64748B]">{item.note}</span>
              </span>
              <ArrowRight className="shrink-0 text-[#B28A3B] transition-transform group-hover:translate-x-1" size={18} />
            </a>
          ))}

          <div className="relative overflow-hidden rounded-lg border border-[#DDE3EC] bg-white p-7 shadow-[0_12px_34px_rgba(7,23,47,0.07)]">
            <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-[#D8B36A]/15" aria-hidden="true" />
            <div className="absolute -bottom-10 -right-8 h-36 w-36 rounded-full border border-[#D8B36A]/15" aria-hidden="true" />
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#07172F] text-white">
              <MessageCircle size={22} />
            </span>
            <h2 className="text-2xl font-bold text-[#07172F]">Best First Step</h2>
            <div className="my-5 h-px w-14 bg-[#B28A3B]" />
            <p className="text-sm leading-relaxed text-[#4B5565]">
              Share your business type, current challenge, required service,
              expected timeline, and preferred contact method.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 pb-14 sm:px-6">
        <div className="grid gap-5 rounded-lg border border-[#DDE3EC] bg-white p-5 shadow-[0_14px_40px_rgba(7,23,47,0.07)] md:grid-cols-4 md:p-7">
          {trustItems.map((item) => (
            <div key={item.title} className="flex gap-4 border-b border-[#DDE3EC] pb-5 last:border-b-0 last:pb-0 md:border-b-0 md:border-r md:pb-0 md:pr-5 md:last:border-r-0 md:last:pr-0">
              <item.icon className="shrink-0 text-[#B28A3B]" size={34} />
              <div>
                <h3 className="font-bold text-[#07172F]">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#64748B]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
