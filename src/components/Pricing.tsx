import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "../data/content";

export default function Pricing() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
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
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Pricing Plans
            </span>
          </h2>

          <p className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible packages for every event and budget
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative ${
                plan.popular ? "lg:-mt-4 lg:mb-4" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    POPULAR
                  </div>
                </div>
              )}

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition"></div>

              {/* Card */}
              <div
                className={`
                  relative h-full
                  backdrop-blur-lg border
                  rounded-xl sm:rounded-2xl
                  p-5 sm:p-6 lg:p-8
                  transition
                  ${
                    plan.popular
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-500/40 sm:scale-105"
                      : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-white/10 hover:border-purple-500/40"
                  }
                `}
              >
                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                  {plan.name}
                </h3>

                {/* Description (short on mobile) */}
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 line-clamp-2">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-5 sm:mb-8">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {plan.price}
                  </span>

                  {plan.price.includes("+") && (
                    <span className="text-gray-400 text-xs sm:text-sm ml-1">
                      onwards
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                  {(window.innerWidth < 640
                    ? plan.features.slice(0, 4) // mobile show only 4
                    : plan.features
                  ).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                    >
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-yellow-400" : "text-blue-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={scrollToContact}
                  className={`
                    w-full
                    py-2.5 sm:py-3.5
                    rounded-lg sm:rounded-xl
                    text-sm sm:text-base
                    font-semibold
                    transition
                    ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }
                  `}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-xs sm:text-base text-gray-400">
            Need a custom package?{" "}
            <button
              onClick={scrollToContact}
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
