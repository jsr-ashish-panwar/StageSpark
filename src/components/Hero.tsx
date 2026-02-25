import { Play } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="
        relative 
        min-h-screen 
        flex 
        items-center 
        justify-center 
        overflow-hidden
        pt-28 sm:pt-32   /* prevent header overlap */
        pb-16
      "
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-blue-900/50"></div>

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-52 h-52 sm:w-96 sm:h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="
          text-3xl 
          sm:text-5xl 
          lg:text-7xl 
          font-bold 
          mb-5
          leading-tight
        ">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
            {companyInfo.tagline}
          </span>
        </h1>

        {/* Description */}
        <p className="
          text-sm 
          sm:text-lg 
          text-gray-300 
          mb-8 
          max-w-2xl 
          mx-auto
        ">
          <span className="sm:hidden">
            Premium event planning & execution for schools, colleges, fests and event.
          </span>
          <span className="hidden sm:block">
            {companyInfo.description}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">

          <button
            onClick={scrollToContact}
            className="
              w-full sm:w-auto
              px-7 py-3
              bg-gradient-to-r from-blue-600 to-purple-600
              rounded-full
              text-white
              font-semibold
              text-sm sm:text-base
              hover:scale-105
              transition
            "
          >
            Book Your Event
          </button>

          <button
            onClick={scrollToPortfolio}
            className="
              w-full sm:w-auto
              px-7 py-3
              bg-white/10
              border border-white/20
              backdrop-blur-lg
              rounded-full
              text-white
              text-sm sm:text-base
              flex items-center justify-center gap-2
              hover:bg-white/20
              transition
            "
          >
            <Play className="w-4 h-4" />
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-4 
          gap-6
          max-w-3xl 
          mx-auto
        ">
          {[
            ['2+', 'Years'],
            ['10+', 'Events'],
            ['50+', 'Team'],
            ['99%', 'Happy Clients'],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="
                bg-white/5 
                backdrop-blur-md 
                border border-white/10 
                rounded-xl 
                py-4
              "
            >
              <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {num}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
