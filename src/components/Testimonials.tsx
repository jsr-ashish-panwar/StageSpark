import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        bg-slate-900
        px-4 sm:px-6 lg:px-8
        py-16 sm:py-24 lg:py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Client Testimonials
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it — hear from our happy clients
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500"></div>

              {/* Card */}
              <div
                className="
                  relative h-full
                  bg-gradient-to-br from-slate-800/80 to-slate-900/80
                  backdrop-blur-lg
                  border border-white/10
                  rounded-xl sm:rounded-2xl
                  p-4 sm:p-6 lg:p-8
                  hover:border-purple-500/50
                  transition
                "
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400/30 mb-3 sm:mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
