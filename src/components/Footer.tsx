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
import logo from "@/assets/vernex-logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#021946] text-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo + Tagline + Social Icons */}
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="Vernex Logo"
            className="h-11 mb-4 bg-white/90 px-2 py-1 rounded-sm inline-block"
          />

          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Empowering Growth Through Technology — For Everyone, Everywhere.
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://vernex.in" target="_blank" rel="noreferrer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#f4c869] transition">
                <Globe size={20} />
              </div>
            </a>

            <a href="https://wa.me/919789912805" target="_blank" rel="noreferrer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#f4c869] transition">
                <MessageCircle size={20} />
              </div>
            </a>

            <a
              href="https://www.instagram.com/vernex.in"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#f4c869] transition">
                <Instagram size={20} />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/boss-anandaa"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#f4c869] transition">
                <Linkedin size={20} />
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg text-[#f4c869] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/join-network">Join Network</Link></li>
            <li><Link to="/social-connect">Social Connect</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Services (FIXED) */}
        <div>
          <h3 className="font-semibold text-lg text-[#f4c869] mb-4">
            Popular Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services">Chatbot Creation</Link></li>
            <li><Link to="/services">Accounting & Finance</Link></li>
            <li><Link to="/services">Social Media Management</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg text-[#f4c869] mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={20} />
              <a href="mailto:vernex.main@gmail.com">
                vernex.main@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={20} />
              <a href="tel:+919789912805">
                +91 97899 12805
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={20} />
              <a
                href="https://www.google.com/maps?q=Chennai"
                target="_blank"
                rel="noreferrer"
              >
                Chennai
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        <p>© {year} Vernex Digital Ecosystem. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-3 md:mt-0">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

