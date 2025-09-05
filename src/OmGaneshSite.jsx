import { motion } from "framer-motion";

export default function OmGaneshSite() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-300 via-rose-300 to-emerald-400 text-gray-900 overflow-hidden">
      {/* Background motifs with animation */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-[url('/indian-mandala.svg')] bg-contain bg-no-repeat opacity-15 pointer-events-none"
        animate={{ rotate: [0, 360, 0], scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2]}}
        transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}

      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-[url('/lotus-flower.svg')] bg-contain bg-no-repeat opacity-15 pointer-events-none"
        animate={{ rotate: [0, -360, 0], scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2]}}
        transition={{ repeat: Infinity, duration: 45, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="flex justify-between items-center p-2 shadow-lg  sticky top-0 z-50 rounded-b-2xl">
        
        <h1 className="text-3xl font-bold text-amber-800 tracking-wide uppercase">Om Ganesh Certification</h1>
        <img 
            src="/Logo-Om-Ganesh.jpeg" 
            alt="Om Ganesh Logo" 
            className="w-36 h-36 object-cover rounded-lg"
        />
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-6 px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-5xl md:text-6xl font-extrabold text-amber-900 mb-6 drop-shadow-lg">
            A Seal of Perfection, Purity & Trust
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-800 mb-10">
            Om Ganesh Certification is your guarantee that every product meets all needs and expectations how it's supposed to do. It masters all relevant qualities to the physical and spiritual experience when using a ©OmGanesh-certified product.
            {/* honesty, quality, and a spirit of joyful care. */}
          </p>
          <button className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 text-lg shadow-lg">
            See Products
          </button>

        </motion.div>
      </section>

      {/* About the Spirit */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-20 max-w-6xl mx-auto relative z-10">
        <div className="rounded-3xl shadow-xl bg-amber-100/90 p-8">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4">🪷 Honesty</h3>
          <p className="text-gray-700">Every certified product meets the highest standard of satisfaction, honesty, and transparency.</p>
        </div>

        <div className="rounded-3xl shadow-xl bg-rose-100/90 p-8">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">🙏 Presence</h3>
          <p className="text-gray-700">Rooted in the spirit of Om Ganesh, the certification promises balance and groundedness to the human body & spirit.</p>
        </div>

        <div className="rounded-3xl shadow-xl bg-emerald-100/90 p-8">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-4">🌿 Integrity</h3>
            <p className="text-gray-800">©OmGanesh-certified products are complete in itself, perfecly attuned and functioning in every detail as intended.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 bg-amber-800 text-white mt-16 relative z-10">
        <p>© {new Date().getFullYear()} Om Ganesh Certification — A Seal of Trust</p>
      </footer>
    </div>
  );
}
