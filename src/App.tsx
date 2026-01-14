import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

// 🔽 IMPORTANT: Scroll to top handler
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import JoinNetwork from "@/pages/JoinNetwork";
import SocialConnect from "./pages/SocialConnect";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  return (
    <BrowserRouter>
      {/* 👇 MUST be here (outside Routes) */}
      <ScrollToTop />

      <Routes>
        {/* Layout wraps all pages (Navbar + Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="join-network" element={<JoinNetwork />} />
          <Route path="social-connect" element={<SocialConnect />} />
          <Route path="contact" element={<Contact />} />

          {/* Legal pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
