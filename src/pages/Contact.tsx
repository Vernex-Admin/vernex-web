import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const GOLD = "#C9A227";
const WHATSAPP_LINK = "https://wa.me/919789912805";

const Contact = () => {
  const { toast } = useToast();

  const [selected, setSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
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
      email: "",
      phone: "",
      message: "",
    });
    setSelected([]);
  };

  const servicesList = [
    "Web Development",
    "App Development",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "Social Media Management",
    "Content Creation",
    "Startup Support (BizGuard)",
    "School & College Project Support",
    "Photography",
    "Videography",
    "Event Organization",
    "Accounting & Finance",
    "Chatbot Creation",
    "Power BI & Data Analytics",
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-24">

      {/* GOLD TOP DIVIDER */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mb-16" />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in <span className="text-[#C9A227]">Touch</span>
        </h1>
        <p className="text-white/70 mt-3 max-w-3xl mx-auto">
          Let's discuss how Vernex can help transform your ideas into reality.
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
              relative rounded-3xl p-8
              bg-gradient-to-br from-[#0b0b0b] via-black to-[#050505]
              border border-[#C9A227]/30
              shadow-[0_0_40px_rgba(201,162,39,0.15)]
            "
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input placeholder="Full Name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Input placeholder="Email Address" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Input placeholder="Phone Number" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {servicesList.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`rounded-xl border px-3 py-2 text-sm transition-all
                      ${
                        selected.includes(service)
                          ? "bg-[#C9A227] text-black shadow-[0_0_15px_rgba(201,162,39,0.6)]"
                          : "border-white/20 text-white hover:border-[#C9A227] hover:text-[#C9A227]"
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Button
                type="submit"
                className="w-full bg-[#C9A227] text-black font-semibold
                hover:shadow-[0_0_25px_rgba(201,162,39,0.8)] transition"
              >
                <Send className="mr-2" /> Send Message
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
              <p className="text-white/70">
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:vernex.main@gmail.com" className="flex gap-3 items-center hover:text-[#C9A227] transition">
                <Mail color={GOLD} /> vernex.main@gmail.com
              </a>

              <a href="tel:+919789912805" className="flex gap-3 items-center hover:text-[#C9A227] transition">
                <Phone color={GOLD} /> +91 97899 12805
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:text-[#C9A227] transition"
              >
                <MapPin color={GOLD} /> Chennai, India
              </a>
            </div>

            {/* BUSINESS HOURS + WHATSAPP CTA */}
            <div
              className="
                rounded-2xl p-6
                bg-gradient-to-br from-[#0b0b0b] via-black to-[#050505]
                border border-[#C9A227]/30
                shadow-[0_0_35px_rgba(201,162,39,0.18)]
                space-y-4
              "
            >
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <p>Monday – Friday: 8:00 AM – 8:00 PM IST</p>
              <p>Saturday & Sunday: 9:00 AM – 5:00 PM IST</p>

              <p className="text-sm text-white/70">
                * Available 24/7 via email for urgent matters
              </p>

              {/* WHATSAPP CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-flex items-center justify-center w-full
                  rounded-xl bg-[#C9A227] text-black font-semibold
                  py-3 transition
                  hover:shadow-[0_0_30px_rgba(201,162,39,0.8)]
                "
              >
                Reach us instantly on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* GOLD BOTTOM DIVIDER */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mt-24" />
    </div>
  );
};

export default Contact;
