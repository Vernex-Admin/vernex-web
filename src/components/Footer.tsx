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

const logo = "/vernex-logo-main.png";

const WHATSAPP_LINK = "https://wa.me/919789912805";
const INSTAGRAM_LINK =
  "https://www.instagram.com/vernex.in?igsh=MWp6am1vaWoxYjY1NQ==";
const WEBSITE_LINK = "http://vernex.in/";
const LINKEDIN_LINK =
  "https://www.linkedin.com/in/boss-anandaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const EMAIL = "connect@vernex.in";
const PHONE_NUMBER = "+91 97899 12805";
const PHONE_NUMBER_TEL = "+919789912805";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkClass =
    "relative inline-block text-sm text-[#D1D5DB] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D8B36A] after:transition-all after:duration-300 hover:text-[#D8B36A] hover:after:w-full";

  const socialClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B36A]/25 bg-white/5 text-white transition-all hover:border-[#D8B36A] hover:bg-[#D8B36A] hover:text-[#050505]";

  const serviceLink = (label: string) => (
    <li>
      <Link to="/services" className={linkClass}>
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <div className="gold-divider-strong" />

      <footer className="bg-[#050505] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Vernex"
              className="logo-gold-glow mb-5 h-14 w-auto max-w-[240px] object-contain"
            />

            <p className="max-w-xs text-sm leading-relaxed text-[#D1D5DB]">
              Technology, automation, websites, branding, and digital marketing
              solutions for growing businesses.
            </p>

            <div className="mt-6 flex gap-3">
              <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Website">
                <Globe size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className={linkClass}>Home</Link></li>
              <li><Link to="/vernex-ecosystem" className={linkClass}>Vernex Ecosystem</Link></li>
              <li><Link to="/services" className={linkClass}>Marketing Services</Link></li>
              <li><Link to="/products" className={linkClass}>Products</Link></li>
              <li><Link to="/about" className={linkClass}>About</Link></li>
              <li><Link to="/social-connect" className={linkClass}>Social Connect</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Popular Services
            </h3>
            <ul className="space-y-3">
              {serviceLink("Business Software")}
              {serviceLink("Automation Systems")}
              {serviceLink("Website Development")}
              {serviceLink("Branding & Content")}
              {serviceLink("Social Media Management")}
              {serviceLink("Digital Marketing & Ads")}
              {serviceLink("Personal Branding")}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-[#D8B36A]" />
                <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#D8B36A]">
                  www.vernex.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D8B36A]" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#D8B36A]">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D8B36A]" />
                <a href={`tel:${PHONE_NUMBER_TEL}`} className="hover:text-[#D8B36A]">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D8B36A]" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chennai+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D8B36A]"
                >
                  Chennai, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-[#D8B36A]/25 pt-6 text-sm text-[#D1D5DB] md:flex-row md:items-center md:justify-between">
          <p className="text-[#D1D5DB]">&copy; {year} Vernex. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
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
