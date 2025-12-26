import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit clicked");


    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selected,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        toast({
          title: "Message Sent",
          description: "Thank you! We’ll contact you shortly.",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
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
    <div className="min-h-screen pt-20 bg-white text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#0a1a4a] via-[#0A1E59] to-[#0a1a4a] text-white py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Get in <span className="text-[#C9A94D]">Touch</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Let's discuss how Vernex can help transform your ideas into reality
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-[#C9A94D]/40 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="py-16 text-center">
                  <h3 className="text-3xl font-bold text-[#0A1E59] mb-4">
                    Thank You!
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Your message has been sent successfully.
                    <br />
                    Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <Input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {servicesList.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`rounded-xl border py-3 px-2 text-sm font-medium ${
                          selected.includes(service)
                            ? "bg-[#C9A94D] text-slate-900"
                            : "bg-white"
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

                  <Button type="submit" className="w-full bg-[#C9A94D]" size="lg">
                    <Send className="mr-2" /> Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  Contact Information
                </h2>
                <p className="text-slate-600">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#C9A94D]" />
                  <span>vernex.main@gmail.com</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-[#C9A94D]" />
                  <a href="tel:+919789912805" className="hover:text-[#C9A94D]">
                    +91 97899 12805
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#C9A94D]" />
                  <a
                    href="https://www.google.com/maps?q=Chennai,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A94D]"
                  >
                    Chennai, India
                  </a>
                </div>
              </div>

              <div className="rounded-2xl p-8 text-white bg-gradient-to-b from-[#0A1E59] to-[#0a1a4a]">
                <h3 className="text-2xl font-bold mb-3">Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM IST</p>
                <p>Saturday & Sunday: 9:00 AM - 5:00 PM IST</p>
                <p className="mt-3 text-sm text-white/80">
                  * For urgent matters, we're available 24/7 via email
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
