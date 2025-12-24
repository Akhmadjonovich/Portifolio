import HudPanel from "../components/HudPanel";
import { motion } from "framer-motion";

const skillsData = [
  { name: "JavaScript", level: 100 },
  { name: "React.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Git", level: 85 },
  { name: "TypeScript", level: 70 },
  { name: "Node.js", level: 70 },
  { name: "Next.js", level: 60 },
  { name: "Redux Toolkit", level: 60 },
  { name: "Framer Motion", level: 40 },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animatsiya o'ng va chapdan kirish uchun
const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl mb-10 tracking-widest text-green-400 text-center">
          SKILLS
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={index % 2 === 0 ? itemLeft : itemRight} // navbat bilan left/right
            >
              <HudPanel title="MODULE">
                <div className="flex flex-col gap-2">
                  <span className="text-green-400 font-semibold">{skill.name}</span>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-green-400/20 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-green-400 rounded-full animate-[progress_2s_ease-out]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-green-400/70 text-xs text-right">{skill.level}%</span>
                </div>
              </HudPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
