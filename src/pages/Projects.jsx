import HudPanel from "../components/HudPanel";

const projects = [
  {
    name: "O'quv Markaz uchun CRM",
    desc: "",
    link: "https://leaders-academy-tau.vercel.app/"
  },
  {
    name: "Startup MVP",
    desc: "Fast prototype systems for early startups",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl mb-10 tracking-widest text-green-400">
          PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <HudPanel key={p.name} title={p.name}>
              <p className="text-green-400/70 text-sm">
                {p.desc}
              </p>

              <button className="mt-6 text-sm text-green-400 border border-green-400/30 px-4 py-2 hover:border-green-400 transition">
                VIEW PROJECT
              </button>
            </HudPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
