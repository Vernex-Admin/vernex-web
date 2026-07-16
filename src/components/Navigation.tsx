import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const logo = "/vernex-logo-main.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Vernex Ecosystem", path: "/vernex-ecosystem" },
  { name: "Marketing Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Social Connect", path: "/social-connect" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const basePath = path.split("#")[0];
    const hash = path.includes("#") ? `#${path.split("#")[1]}` : "";
    if (hash) {
      return location.pathname === basePath && location.hash === hash;
    }
    return basePath === "/" ? location.pathname === "/" : location.pathname === basePath;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`fixed left-0 right-0 top-0 z-50 border-b border-[rgba(216,179,106,0.25)] bg-[#050505] text-white ${
          scrolled
            ? "shadow-[0_12px_32px_rgba(0,0,0,0.48),0_1px_10px_rgba(216,179,106,0.08)]"
            : "shadow-[0_6px_22px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4 md:h-20">
            <Link to="/" className="flex min-w-fit items-center" aria-label="Vernex home">
              <img
                src={logo}
                alt="Vernex"
                className="logo-gold-glow h-10 w-auto max-w-[180px] object-contain md:h-12 md:max-w-[220px]"
              />
            </Link>

            <div className="hidden items-center gap-5 xl:flex">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="group relative py-2">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path) ? "text-[#D8B36A]" : "text-white hover:text-[#D8B36A]"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-[#D8B36A] transition-transform duration-300 ${
                      isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden xl:block">
              <Button
                asChild
                className="border border-[#D8B36A] bg-[#D8B36A] px-5 text-[#050505] hover:bg-[#F4E4B8] hover:text-[#050505]"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D8B36A]/40 text-white transition-colors hover:border-[#D8B36A] hover:text-[#D8B36A] xl:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="fixed left-0 right-0 top-[64px] z-40 h-[2px] bg-gradient-to-r from-transparent via-[#D8B36A] to-transparent md:top-[80px]" />

      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-[#D8B36A]/25 bg-[#0A0A0A] px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.5)] md:top-20 xl:hidden">
          <div className="mx-auto flex max-w-2xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
                  isActive(item.path)
                    ? "bg-[#D8B36A]/10 text-[#D8B36A]"
                    : "text-white hover:bg-white/5 hover:text-[#D8B36A]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button
              asChild
              className="mt-4 w-full bg-[#D8B36A] text-[#050505] hover:bg-[#F4E4B8] hover:text-[#050505]"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
