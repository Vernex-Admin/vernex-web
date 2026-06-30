import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const GOLD = "#D8B36A";
const WHATSAPP_LINK = "https://wa.me/919789912805";

const Contact = () => {
  const { toast } = useToast();

  const [selected, setSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent successfully",
      description: "Our team will get back to you shortly.",
    });

    setFormData({
      name: "",
      brandName: "",
      email: "",
      phone: "",
      message: "",
    });
    setSelected([]);
  };

  const servicesList = [
    "I need software / SaaS product",
    "I need digital marketing services",
    "I need website / landing page",
    "I need branding / content support",
    "I want to collaborate with Vernex",
    "I want to request a demo",
  ];

  return (
    <div className="min-h-screen bg-background pt-28 pb-24 text-foreground">

      {/* GOLD TOP DIVIDER */}
      <div className="gold-divider-strong mb-16" />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Start Your Project With <span className="text-primary">Vernex</span>
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
          Tell us what you want to build or grow. Vernex will help you with the
          right technology, software, automation, branding, website, or digital
          marketing solution.
        </p>
      </motion.section>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              corporate-card
              relative rounded-lg p-8
            "
          >
            <h2 className="text-2xl font-semibold mb-6">Send Your Enquiry</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input placeholder="Name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Input placeholder="Business / Brand Name" value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              />

              <Input placeholder="Phone / WhatsApp" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <Input placeholder="Email" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <p className="text-sm font-semibold text-primary">Service Interest</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {servicesList.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`rounded-xl border px-3 py-2 text-sm transition-all
                      ${
                        selected.includes(service)
                          ? "border-primary bg-primary text-white shadow-[var(--shadow-gold)]"
                          : "border-border bg-white text-muted-foreground hover:border-accent hover:text-primary"
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Button
                type="submit"
                className="w-full"
              >
                <Send className="mr-2" /> Book a Free Consultation
              </Button>
            </form>
          </motion.div>

          {/* INFO SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach Vernex for software, automation, websites, branding,
                digital marketing, demos, and collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <a href="http://vernex.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
                <MapPin color={GOLD} /> www.vernex.in
              </a>

              <a href="mailto:vernex.main@gmail.com" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
                <Mail color={GOLD} /> vernex.main@gmail.com
              </a>

              <a href="tel:+919789912805" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
                <Phone color={GOLD} /> +91 97899 12805
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition hover:text-primary"
              >
                <MapPin color={GOLD} /> Chennai, India
              </a>
            </div>

            {/* BUSINESS HOURS + WHATSAPP CTA */}
            <div
              className="
                corporate-card
                rounded-lg p-6
                space-y-4
              "
            >
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <p>Monday – Friday: 8:00 AM – 8:00 PM IST</p>
              <p>Saturday & Sunday: 9:00 AM – 5:00 PM IST</p>

              <p className="text-sm text-muted-foreground">
                * Available 24/7 via email for urgent matters
              </p>

              {/* WHATSAPP CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-flex items-center justify-center w-full
                  rounded-lg bg-primary text-white font-semibold
                  py-3 transition
                  hover:bg-[#061A3A] hover:shadow-[var(--shadow-gold)]
                "
              >
                Reach us instantly on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* GOLD BOTTOM DIVIDER */}
      <div className="gold-divider-strong mt-24" />
    </div>
  );
};

export default Contact;
