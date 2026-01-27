import { useState } from "react";
import HudPanel from "../components/HudPanel";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "MATHEMATICS CERTIFICATE",
    org: "National Education System",
    score: "100%",
    desc: "Perfect score in advanced mathematics, demonstrating peak analytical and logical reasoning.",
    img: "/matem.jpg" 
  },
  {
    title: "IELTS ENGLISH",
    org: "British Council / IDP",
    score: "Certified",
    desc: "Professional English proficiency for effective communication in global tech environments.",
    img: "/english.jpg"
  },
  {
    title: "START UP CENTER ACHIEVEMENT",
    org: "Start Up Center Uzbekistan",
    score: "Frontend Dev",
    desc: "Recognition for successful contribution and development of modern web infrastructures.",
    img: "/up.jpg"
  }
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl mb-12 tracking-widest text-green-400 text-center uppercase font-bold">
          Achievements & <span className="text-white">Certificates</span>
        </h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div 
              key={cert.title}
              whileHover={{ y: -5 }} // Kichik siljish effekti
            >
              <HudPanel title={cert.title}>
                {/* Rasm konteyneri */}
                <div 
                  className="relative group cursor-zoom-in overflow-hidden rounded mb-4 border border-green-400/20"
                  onClick={() => setSelectedImg(cert.img)}
                >
                  <img 
                    src={cert.img} 
                    alt={cert.title}
                    className="w-full h-48 object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  
                  {/* Hoverda chiqadigan "VIEW" yozuvi */}
                  <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-green-400 font-mono text-xs border border-green-400 px-3 py-1 bg-black/80">
                      FULL VIEW
                    </span>
                  </div>

                  <div className="absolute top-2 right-2 bg-black/80 border border-green-400 px-2 py-1 z-10">
                    <span className="text-[10px] text-green-400 font-mono">{cert.score}</span>
                  </div>
                </div>

                <p className="text-green-400/50 text-[10px] font-mono mb-2 uppercase tracking-tighter italic">
                  Issuer: {cert.org}
                </p>
                
                <p className="text-green-400/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {cert.desc}
                </p>

                <div className="pt-4 border-t border-green-400/10 flex justify-between items-center text-[10px] font-mono">
                   <span className="text-green-400/40 uppercase tracking-widest leading-none">Verified System</span>
                   <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
                </div>
              </HudPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- MODAL (Full Screen View) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImg}
                alt="Enlarged certificate"
                className="max-w-full max-h-full object-contain border border-green-400/30 shadow-[0_0_50px_rgba(74,222,128,0.1)]"
              />
              
              {/* Yopish tugmasi (X) */}
              <button className="absolute top-0 right-0 text-green-400 text-2xl p-4 hover:scale-125 transition-transform">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}