import {
  GraduationCap,
  Music,
  Heart,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import { services } from "../data/content";

const iconMap = {
  GraduationCap,
  Music,
  Heart,
  Briefcase,
  Lightbulb,
};

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        bg-gradient-to-b from-slate-900 to-slate-800
        px-4 sm:px-6 lg:px-8
        py-16 sm:py-24 lg:py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to your needs
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

                {/* Card */}
                <div
                  className="
                    relative h-full
                    bg-gradient-to-br from-slate-800/80 to-slate-900/80
                    backdrop-blur-lg
                    border border-white/10
                    rounded-2xl
                    p-5 sm:p-6 lg:p-8
                    hover:border-purple-500/50
                    transition-all duration-300
                  "
                >
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
