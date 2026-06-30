import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/vnx-logo.jpg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gen Technologies", path: "/gen-technologies" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Services", path: "/services" },
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
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0B2454] text-white ${
          scrolled ? "shadow-[0_10px_30px_rgba(6,26,58,0.22)]" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4 md:h-20">
            <Link to="/" className="flex min-w-fit items-center" aria-label="Vernex home">
              <img
                src={logo}
                alt="Vernex"
                className="h-9 rounded bg-white object-contain p-1 md:h-11"
              />
            </Link>

            <div className="hidden items-center gap-5 xl:flex">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="group relative py-2">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path) ? "text-[#D8B36A]" : "text-white/88 hover:text-[#F4E4B8]"
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
              <Button asChild variant="secondary" className="px-5">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white xl:hidden"
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
        <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-white px-6 py-6 shadow-[var(--shadow-elevated)] md:top-20 xl:hidden">
          <div className="mx-auto flex max-w-2xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
                  isActive(item.path)
                    ? "bg-secondary/70 text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild className="mt-4 w-full">
              <a href="tel:9789912805">Call Now</a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
