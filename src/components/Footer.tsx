import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  MessageCircle
} from "lucide-react";

import { companyInfo } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappNumber = "917500462919";

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* ================= BRAND + LOGO ================= */}
          <div>
            {/* 🔥 Logo + Name Row */}
            <div className="flex items-center gap-3 mb-4">

              {/* Circular Logo */}
              <img
  src="/logo.png"
  alt="StageSpark Logo"
  className="
    w-32 h-32
    sm:w-24 sm:h-24
    rounded-full
    object-cover
    border border-white/20
  "
/>


              {/* Company Name */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {companyInfo.name}
              </h3>
            </div>

            <p className="text-gray-400 mb-6">
              Creating unforgettable experiences across Meerut and beyond.
              Your vision, our expertise.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <Facebook className="w-5 h-5 text-white" />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition">
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                <Twitter className="w-5 h-5 text-white" />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["home", "about", "services", "portfolio", "plans"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          {/* ================= SERVICES ================= */}
<div>
  <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
  <ul className="space-y-3">
    {[
      { name: "School Events", id: "school-events" },
      { name: "College Fests", id: "college-fests" },
      { name: "Weddings", id: "weddings" },
      { name: "Corporate Events", id: "corporate-events" },
      { name: "Sound & Light", id: "sound-light" },
    ].map((service) => (
      <li key={service.id}>
        <button
          onClick={() => scrollToSection(service.id)}
          className="text-gray-400 hover:text-purple-400 transition"
        >
          {service.name}
        </button>
      </li>
    ))}
  </ul>
</div>


          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>

            <ul className="space-y-4">

              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-purple-400" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-purple-400">
                  {companyInfo.phone}
                </a>
              </li>

              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-purple-400">
                  {companyInfo.email}
                </a>
              </li>

              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{companyInfo.location}</span>
              </li>

              {/* 🔥 WhatsApp */}
              <li className="flex gap-3 text-gray-400">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="hover:text-green-400"
                >
                  +91 7500462919
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Meerut
          </p>
        </div>
      </div>
    </footer>
  );
}
