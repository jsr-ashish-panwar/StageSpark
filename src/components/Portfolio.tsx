import { useState } from "react";
import { portfolioItems } from "../data/content";
import { ExternalLink, X } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const categories = [
    "All",
    "Wedding",
    "College",
    "Corporate",
    "School",
    "Concert",
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section
      id="portfolio"
      className="relative bg-slate-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Our Portfolio
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            A glimpse of our successful events and happy clients
          </p>

          {/* ================= FILTER ================= */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/40"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition duration-500 z-10"></div>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 sm:h-56 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4 z-20">
                <div>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs text-white mb-2">
                    {item.category}
                  </div>

                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN MODAL ================= */}
{selectedItem && (
  <div className="fixed inset-0 z-[9999] bg-black/95 flex justify-center">

    <div className="w-full max-w-6xl bg-slate-900 h-dvh sm:h-auto sm:my-20 sm:rounded-2xl shadow-2xl flex flex-col">

      {/* ===== Sticky Header ===== */}
      <div className="sticky top-0 z-50 bg-slate-900 border-b border-white/10 flex items-center justify-between px-5 py-4 flex-shrink-0">

        <h2 className="text-lg sm:text-2xl font-bold text-white truncate">
          {selectedItem.title}
        </h2>

        <button
          onClick={() => setSelectedItem(null)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition active:scale-95"
        >
          <X size={18} />
          <span className="hidden sm:inline">Close</span>
        </button>
      </div>

      {/* ===== Scrollable Content Area ===== */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-6">

        {(selectedItem.category === "College" ||
          selectedItem.category === "School") ? (

          <div className="space-y-10">

            {/* ===== Gallery ===== */}
            {selectedItem.gallery && (
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  Event Gallery
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedItem.gallery.map(
                    (img: string, index: number) => (
                      <img
                        key={index}
                        src={img}
                        alt="event"
                        onClick={() => setFullscreenImage(img)}
                        className="rounded-lg object-cover h-32 sm:h-40 w-full cursor-pointer hover:scale-105 transition"
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* ===== Videos ===== */}
            {selectedItem.videos && (
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-4">
                  Event Videos
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedItem.videos.map(
                    (video: string, index: number) => (
                      <video
                        key={index}
                        src={video}
                        controls
                        className="rounded-lg w-full"
                      />
                    )
                  )}
                </div>
              </div>
            )}

          </div>

        ) : (
          <div className="text-center py-20">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Coming Soon 🚀
            </h3>
            <p className="text-gray-400 mt-4">
              We are preparing something amazing for this category.
            </p>
          </div>
        )}

      </div>
    </div>
  </div>
)}

      {/* ================= FULLSCREEN IMAGE MODAL ================= */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-xl"
          >
            <X size={22} />
          </button>

          <img
            src={fullscreenImage}
            alt="fullscreen"
            className="max-h-[95vh] max-w-[95vw] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
