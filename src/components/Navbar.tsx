import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { companyInfo } from "../data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ---------- Scroll effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Smooth scroll ---------- */
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Plans" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO + BRAND ================= */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            {/* Logo image */}
            <img
              src="/logo.png"
              alt="StageSpark Logo"
              className="
                w-10 h-10
                sm:w-11 sm:h-11
                rounded-full
                object-cover
                border border-white/20
                group-hover:scale-110
                transition
              "
            />

            {/* Brand name */}
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {companyInfo.name}
            </span>
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Book Now
          </button>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
