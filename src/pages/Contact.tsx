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
  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject = encodeURIComponent("Vernex Enquiry");
    const mailBody = encodeURIComponent(
      `Hello Vernex Team,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSelected Services: ${selected.join(
        ", "
      )}\n\nMessage:\n${formData.message}\n\nRegards,\n${formData.name}`
    );

    window.open(
      `mailto:vernex.main@gmail.com?subject=${mailSubject}&body=${mailBody}`,
      "_blank"
    );

    toast({
      title: "Redirecting to Email...",
      description: "Your mail app will open shortly.",
    });
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
      {/* --- Hero Section --- */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#0a1a4a] via-[#0A1E59] to-[#0a1a4a] text-white py-12 md:py-14"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get in <span className="text-[#C9A94D]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Let's discuss how Vernex can help transform your ideas into reality
          </motion.p>
        </div>
      </motion.section>

      {/* --- Contact Section --- */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="py-14"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* --- Left: Form --- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-[#C9A94D]/40 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* --- Name --- */}
                <div>
                  <label className="block text-sm font-medium text-[#7f6a30] mb-1">
                    Full Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full"
                    placeholder="Enter your name"
                  />
                </div>

                {/* --- Email --- */}
                <div>
                  <label className="block text-sm font-medium text-[#7f6a30] mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>

                {/* --- Phone --- */}
                <div>
                  <label className="block text-sm font-medium text-[#7f6a30] mb-1">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* --- Services --- */}
                <div>
                  <label className="block text-sm font-medium text-[#7f6a30] mb-2">
                    Select Services
                  </label>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm justify-items-center sm:justify-items-stretch"
                    style={{
                      gridAutoRows: "minmax(55px, auto)",
                    }}
                  >
                    {servicesList.map((service, i) => (
                      <motion.button
                        key={service}
                        type="button"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i }}
                        onClick={() => toggleService(service)}
                        className={`w-full text-center font-medium rounded-xl border py-3 px-2 transition-all duration-300 ${
                          selected.includes(service)
                            ? "bg-[#C9A94D] text-slate-900 border-[#C9A94D] shadow-[0_0_10px_rgba(201,169,77,0.6)]"
                            : "bg-white text-slate-700 hover:bg-[#C9A94D]/15"
                        }`}
                      >
                        {service}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* --- Message --- */}
                <div>
                  <label className="block text-sm font-medium text-[#7f6a30] mb-1">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C9A94D] text-slate-900 font-semibold hover:bg-[#d4b557] hover:shadow-[0_0_15px_rgba(201,169,77,0.7)] transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* --- Right: Contact Info --- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Contact Information
                </h2>
                <p className="text-slate-600 mb-6">
                  We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              {/* --- Contact Details --- */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A94D]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#C9A94D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:vernex.main@gmail.com?subject=Vernex%20Inquiry&body=Hello%20Vernex%20Team,"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-[#C9A94D] hover:drop-shadow-[0_0_8px_rgba(201,169,77,0.5)] transition-all underline-offset-4 hover:underline"
                    >
                      vernex.main@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A94D]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#C9A94D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone / WhatsApp</h3>
                    <a
                      href="https://wa.me/919789912805"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-[#C9A94D] hover:drop-shadow-[0_0_8px_rgba(201,169,77,0.5)] transition-all underline-offset-4 hover:underline"
                    >
                      +91 97899 12805
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A94D]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#C9A94D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <a
                      href="https://www.google.com/maps?q=Chennai,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-[#C9A94D] hover:drop-shadow-[0_0_8px_rgba(201,169,77,0.5)] transition-all underline-offset-4 hover:underline"
                    >
                      Chennai, India
                    </a>
                  </div>
                </div>
              </div>

              {/* --- Business Hours --- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="rounded-2xl p-8 text-white"
                style={{
                  background: "linear-gradient(180deg, #0A1E59 0%, #0a1a4a 100%)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <h3 className="text-2xl font-bold mb-3">Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM IST</p>
                <p>Saturday & Sunday: 9:00 AM - 5:00 PM IST</p>
                <p className="mt-3 text-sm text-white/80">
                  * For urgent matters, we're available 24/7 via email
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
