import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/vnx-logo.jpg";

/* ===== PROVIDED CONSTANTS (UNCHANGED) ===== */
const WHATSAPP_LINK = "https://wa.me/919789912805";
const INSTAGRAM_LINK =
  "https://www.instagram.com/vernex.in?igsh=MWp6am1vaWoxYjY1NQ==";
const WEBSITE_LINK = "http://vernex.in/";
const LINKEDIN_LINK =
  "https://www.linkedin.com/in/boss-anandaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const EMAIL = "vernexmain@gmail.com";
const PHONE_NUMBER = "+91 97899 12805";
const PHONE_NUMBER_TEL = "+919789912805";

const GOLD = "#C9A227";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkClass =
    "relative inline-block text-sm text-black transition-all after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full hover:text-[#C9A227]";

  const serviceLink = (label: string, anchor: string) => (
    <li>
      <Link to={`/services#${anchor}`} className={linkClass}>
        {label}
      </Link>
    </li>
  );

  return (
    <>
      {/* GOLD DIVIDER */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <footer className="bg-white text-black py-14 px-6">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="Vernex"
              className="h-11 mb-4 cursor-pointer transition-transform hover:scale-105"
            />

            <p className="text-sm text-gray-600 max-w-xs">
              Empowering Growth Through Technology — For Everyone – Everywhere.
            </p>

            {/* SOCIAL ICONS – FIXED */}
            <div className="flex gap-4 mt-6">
              <a
                href={WEBSITE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#C9A227]"
              >
                <Globe size={18} />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#C9A227]"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#C9A227]"
              >
                <Instagram size={18} />
              </a>

              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#C9A227]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#C9A227] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className={linkClass}>About Us</Link></li>
              <li><Link to="/services" className={linkClass}>Services</Link></li>
              <li><Link to="/join-network" className={linkClass}>Join Network</Link></li>
              <li><Link to="/social-connect" className={linkClass}>Social Connect</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          {/* POPULAR SERVICES – FIXED */}
          <div>
            <h3 className="text-[#C9A227] font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              {serviceLink("Web Development", "web-development")}
              {serviceLink("App Development", "app-development")}
              {serviceLink("Digital Marketing", "digital-marketing")}
              {serviceLink("Social Media Management", "social-media-management")}
              {serviceLink("Video Editing", "video-editing")}
              {serviceLink("Event Organization", "event-organization")}
              {serviceLink("Accounting & Finance", "accounting-finance")}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#C9A227] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#C9A227]">
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href={`tel:${PHONE_NUMBER_TEL}`} className="hover:text-[#C9A227]">
                  {PHONE_NUMBER}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chennai+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227]"
                >
                  Chennai, India
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm">
          <p className="text-gray-600">
            © {year} Vernex Digital Ecosystem. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className={linkClass}>Privacy Policy</Link>
            <Link to="/terms-of-service" className={linkClass}>Terms of Service</Link>
            <Link to="/cookie-policy" className={linkClass}>Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
