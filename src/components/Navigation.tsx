import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/vnx-logo.jpg";

const GOLD = "#C9A227";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Join Network", path: "/join-network" },
    { name: "Social Connect", path: "/social-connect" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="Vernex"
                className="h-9 md:h-11 object-contain"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 260 }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="relative group">
                  <span
                    className={`font-semibold transition-colors ${
                      isActive(item.path)
                        ? "text-[#C9A227]"
                        : "text-black hover:text-[#C9A227]"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] w-full bg-[#C9A227] transition-transform duration-300 ${
                      isActive(item.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button className="bg-black text-white hover:bg-[#C9A227] hover:text-black font-semibold px-6">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* GOLD DIVIDER */}
      <div className="fixed top-[64px] md:top-[80px] left-0 right-0 z-40 h-[3px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      {/* ================= MOBILE MENU (ADDED) ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${
                  isActive(item.path)
                    ? "text-[#C9A227]"
                    : "text-black hover:text-[#C9A227]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-6">
              <a
                href="tel:9789912805"
                className="block w-full text-center py-4 rounded-xl bg-[#C9A227] text-black font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
