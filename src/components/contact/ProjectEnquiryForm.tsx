import { FormEvent, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutGrid,
  Loader2,
  Mail,
  Pencil,
  PhoneCall,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type FieldKey = "name" | "phone" | "email" | "requirement" | "message";
type FormState = Record<FieldKey, string>;
type Errors = Partial<Record<FieldKey, string>>;
type Status = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  requirement: "",
  message: "",
};

const MESSAGE_MAX = 500;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "h-12 w-full rounded-lg border bg-white pl-11 pr-3 text-sm text-primary placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B36A]/60 focus-visible:ring-offset-0";

interface TextFieldProps {
  id: FieldKey;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  icon: ComponentType<{ className?: string }>;
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
}

const TextField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  type = "text",
  autoComplete,
  inputMode,
}: TextFieldProps): JSX.Element => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-primary">
      {label}
    </label>
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${error ? "border-red-400" : "border-[#E8E2D8]"}`}
      />
    </div>
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
        {error}
      </p>
    )}
  </div>
);

const ProjectEnquiryForm = (): JSX.Element => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (field: FieldKey, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status === "success" || status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone or WhatsApp number.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!emailPattern.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.requirement.trim()) next.requirement = "Please tell us what you need.";
    if (!form.message.trim()) next.message = "Please share a few project details.";
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      setFeedback("");
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

      if (!response.ok) throw new Error("Contact request failed");

      setStatus("success");
      setFeedback("Thank you. Vernex will get back to you within 1 business day.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("We could not submit the form right now. Please email or WhatsApp Vernex directly.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onSubmit={handleSubmit}
      noValidate
      className="min-w-0 rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(11,31,77,0.35)] sm:p-8"
    >
      {/* Header */}
      <div className="mb-7 flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D8B36A]">
          <UserRound className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">Project Enquiry</h2>
          <span className="mt-2 block h-0.5 w-10 rounded-full bg-[#D8B36A]" aria-hidden="true" />
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
            Use this form to outline your requirement. You can also contact Vernex
            directly through WhatsApp or email.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          id="name"
          label="Name"
          placeholder="Your name"
          value={form.name}
          onChange={(value) => updateField("name", value)}
          error={errors.name}
          icon={UserRound}
          autoComplete="name"
        />

        {/* Phone with +91 prefix */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-primary">
            Phone / WhatsApp
          </label>
          <div
            className={`flex h-12 items-center overflow-hidden rounded-lg border bg-white transition-colors focus-within:ring-2 focus-within:ring-[#D8B36A]/60 ${
              errors.phone ? "border-red-400" : "border-[#E8E2D8]"
            }`}
          >
            <span className="flex h-full items-center gap-1.5 border-r border-[#E8E2D8] px-3 text-sm font-medium text-slate-500">
              <PhoneCall className="h-4 w-4 text-slate-400" aria-hidden="true" />
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="Your number"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="h-full flex-1 bg-transparent px-3 text-sm text-primary placeholder:text-slate-400 focus-visible:outline-none"
            />
          </div>
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <TextField
          id="email"
          label="Email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(value) => updateField("email", value)}
          error={errors.email}
          icon={Mail}
          type="email"
          autoComplete="email"
          inputMode="email"
        />

        <TextField
          id="requirement"
          label="Requirement"
          placeholder="Website, software, marketing..."
          value={form.requirement}
          onChange={(value) => updateField("requirement", value)}
          error={errors.requirement}
          icon={LayoutGrid}
        />

        {/* Project details */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-primary">
            Project Details
          </label>
          <div className="relative">
            <Pencil className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={MESSAGE_MAX}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us about your business and what you need."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full resize-y rounded-lg border bg-white py-3 pl-11 pr-4 text-sm text-primary placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B36A]/60 ${
                errors.message ? "border-red-400" : "border-[#E8E2D8]"
              }`}
            />
            <span className="pointer-events-none absolute bottom-2.5 right-3 text-xs text-slate-400">
              {form.message.length}/{MESSAGE_MAX}
            </span>
          </div>
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1.5 text-xs font-medium text-red-500">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.25 }}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0B1F4D] px-6 text-sm font-semibold text-white shadow-[0_16px_34px_-20px_rgba(11,31,77,0.9)] transition-shadow duration-[250ms] hover:shadow-[0_22px_44px_-18px_rgba(11,31,77,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            Sending Enquiry
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Submit Enquiry
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </motion.button>

      {feedback && (
        <p
          role="status"
          className={`mt-4 rounded-lg border px-4 py-3 text-center text-sm font-medium ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}

      <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
        <ShieldCheck className="h-4 w-4 text-slate-400" aria-hidden="true" />
        We respect your privacy. Your information is safe with us.
      </p>
    </motion.form>
  );
};

export default ProjectEnquiryForm;
