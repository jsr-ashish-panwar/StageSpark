import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { companyInfo } from "../data/content";

export default function Contact() {
  /* ---------- WhatsApp Number ---------- */
  const WHATSAPP_NUMBER = "917500462919"; // without +

  /* ---------- State ---------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  /* ---------- Submit to WhatsApp ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hi StageSpark 👋%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Event: ${formData.eventType}%0A
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  /* ---------- Input Change ---------- */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ---------- Direct WhatsApp ---------- */
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">
            Let's plan your next event together
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ================================================= */}
          {/* LEFT SIDE - CONTACT INFO */}
          {/* ================================================= */}
          <div>
            <div className="bg-slate-800/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">

                {/* Phone */}
                <a
                  href="tel:+917500462919"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-blue-600 w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Phone / WhatsApp
                    </h4>
                    <p className="text-gray-400 text-sm">
                      +91 7500462919
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-purple-600 w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400 text-sm">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 w-11 h-11 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400 text-sm">
                      {companyInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE - FORM */}
          {/* ================================================= */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Send us a message
            </h3>

            {/* Name */}
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />

          {/* Event Type */}
<select
  name="eventType"
  required
  value={formData.eventType}
  onChange={handleChange}
  className="input bg-slate-800 text-white"
>
  <option value="" disabled className="bg-slate-800 text-white">
    Select Event Category
  </option>

  <option value="College Events" className="bg-slate-800 text-white">
    College Events
  </option>

  <option value="School Events" className="bg-slate-800 text-white">
    School Events
  </option>

  <option value="Wedding Events" className="bg-slate-800 text-white">
    Wedding Events
  </option>

  <option value="Corporate Events" className="bg-slate-800 text-white">
    Corporate Events
  </option>

  <option value="Other Events" className="bg-slate-800 text-white">
    Other Events
  </option>
</select>



            {/* Message */}
            <textarea
              name="message"
              rows={3}
              required
              placeholder="Tell us about your event..."
              value={formData.message}
              onChange={handleChange}
              className="input resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* ================= SMALL UTILITY STYLES ================= */}
      <style jsx>{`
        .input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 14px;
          border-radius: 10px;
          color: white;
          font-size: 14px;
        }
        .input:focus {
          outline: none;
          border-color: #8b5cf6;
        }
      `}</style>
    </section>
  );
}
