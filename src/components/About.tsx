import { Zap, Target, Heart, Phone } from "lucide-react";

export default function About() {
  const founders = [
    {
      name: "Puru Sharma",
      role: "Founder",
      phone: "+91 7500462919",
      img: "/puru.jpg"
    },
    {
      name: "Ashish Panwar",
      role: "Co-Founder",
      phone: "+91 8650882398",
      img: "/ashish.jpg"
    },
    {
      name: "Ujjwal Rathore",
      role: "Co-Founder",
      phone: "+91 9389859141",
      img: "/ujjwal.jpg"
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              About StageSpark
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming visions into reality, one event at a time
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-40"></div>

            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 sm:p-6 rounded-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                alt="Event Management"
                className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Founded in 2024, StageSpark has grown into Meerut's most trusted
              event management company. We craft extraordinary experiences that
              leave lasting impressions.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              From school events and college fests 
              gatherings, we combine creativity with professionalism.
            </p>

            {/* ================= FEATURE CARDS ================= */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <Feature icon={<Zap />} title="Innovation" />
              <Feature icon={<Target />} title="Precision" />
              <Feature icon={<Heart />} title="Passion" />
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* =============== FOUNDERS SECTION ================= */}
        {/* ================================================= */}
        <div className="mt-16">

          <h3 className="text-center text-2xl sm:text-3xl font-bold text-white mb-8">
            Meet Our Founders
          </h3>

          {/* MOBILE → 3 in one line | DESKTOP → bigger */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6">

            {founders.map((person, index) => (
              <a
                key={index}
                href={`tel:${person.phone}`}
                className="
                  bg-slate-800/80 backdrop-blur-lg border border-white/10
                  rounded-xl sm:rounded-2xl
                  p-3 sm:p-6
                  text-center
                  hover:scale-105
                  transition
                "
              >
                {/* DP */}
                <img
                  src={person.img}
                  alt={person.name}
                  className="
                    w-12 h-12 sm:w-20 sm:h-20
                    rounded-full
                    object-cover
                    mx-auto mb-2 sm:mb-4
                    border-2 border-purple-500
                  "
                />

                {/* Name */}
                <h4 className="text-[11px] sm:text-base font-semibold text-white">
                  {person.name}
                </h4>

                {/* Role */}
                <p className="text-[10px] sm:text-sm text-purple-400">
                  {person.role}
                </p>

                {/* Phone */}
                <div className="hidden sm:flex items-center justify-center gap-2 mt-2 text-gray-400 text-xs">
                  <Phone className="w-3 h-3" />
                  {person.phone}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SMALL FEATURE COMPONENT ================= */
function Feature({ icon, title }: any) {
  return (
    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center">
      <div className="w-6 h-6 mx-auto text-blue-400 mb-1">{icon}</div>
      <p className="text-xs sm:text-sm text-white font-medium">{title}</p>
    </div>
  );
}
