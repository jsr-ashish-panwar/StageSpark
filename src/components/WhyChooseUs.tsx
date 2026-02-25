import { useState } from "react";
import {
  Award,
  CalendarCheck,
  Users,
  Sparkles,
  HeadphonesIcon,
  X,
} from "lucide-react";
import { whyChooseUs } from "../data/content";

const iconMap = {
  Award,
  CalendarCheck,
  Users,
  Sparkles,
  HeadphonesIcon,
};

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="why-choose-us"
      className="relative bg-gradient-to-b from-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Why Choose StageSpark
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400">
            Excellence in every detail, trust in every event
          </p>
        </div>

        {/* ================= GRID ================= */}
        {/* Mobile → 2 per row = 2,2,1 automatically */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={index}
                onClick={() => setActiveCard(item)}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div
                  className="
                    h-full
                    bg-gradient-to-br from-slate-800/90 to-slate-900/90
                    border border-white/10
                    rounded-xl sm:rounded-2xl
                    p-4 sm:p-6 lg:p-8
                    flex flex-col
                    justify-start
                    hover:border-purple-500/40
                    transition
                  "
                >
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  {/* hidden on mobile */}
                  <p className="hidden sm:block text-gray-400 mt-3 text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE POPUP ================= */}
      {activeCard && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center sm:hidden">
          <div className="relative w-[90%] bg-slate-900 border border-white/10 rounded-2xl p-6">
            {/* Close */}
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-3 right-3 text-gray-400"
            >
              <X />
            </button>

            <h3 className="text-xl font-bold text-white mb-4">
              {activeCard.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {activeCard.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
