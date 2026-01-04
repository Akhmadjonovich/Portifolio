import { link } from "framer-motion/client";
import HudPanel from "../components/HudPanel";
import { motion } from "framer-motion";

const projects = [
  {
    name: "CRM for Educational Centers",
    desc: "The CRM system tailored for educational centers to manage students, courses, and payments efficiently.",
    link: "https://leaders-academy-tau.vercel.app/"
  },
  {
    name: "CRM for Marketplaces",
    desc: "A comprehensive CRM solution designed for marketplaces to streamline vendor and customer interactions.",
    link: "https://market-crm.vercel.app/"
  },
  {
    name: "AxroMarket",
    desc: "A web SPA for posting and browsing gadget ads. Users can upload product images, filter by categories, and save favorites. Integrated with a Node.js & MongoDB backend for persistent data and image storage.",
    link: "http://axromarket.vercel.app/"
  },
  {
    name: "Health Recipe Finder",
    desc: "A web-based SPA that helps users discover and filter healthy recipes made from fresh ingredients and quick to prepare. Built with modern frontend technologies to ensure a fast and responsive user experience.",
    link: "https://last-exam-azure.vercel.app/"
  },
  {
    name: "Image Finder & Generator",
    desc: "Created a web where user can find and generate images by the input",
    link: "https://img-finder-two.vercel.app/"
  },

];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl mb-10 tracking-widest text-green-400 text-center">
          PROJECTS
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p, index) => (
            <motion.div
              key={p.name}
              variants={index % 2 === 0 ? itemLeft : itemRight}
            >
              <HudPanel title={p.name}>
                <p className="text-green-400/70 text-sm">{p.desc}</p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm text-green-400 border border-green-400/30 px-4 py-2 rounded hover:border-green-400 transition"
                  >
                    VIEW PROJECT
                  </a>
                )}
              </HudPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
