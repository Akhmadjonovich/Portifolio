export default function Experience() {
    
    const experiences = [
      {
        company: "START UP CENTER",
        role: "Frontend Developer",
        period: "OCT 2025 - PRESENT",
        description: [
            "Developing modern web applications within the React and Next.js ecosystem.",
            "Optimizing user interfaces (UI) for maximum performance and efficiency.",
            "Collaborating with cross-functional teams to architect start-up projects from the ground up."
          ]
      },
      // Kelajakda bu yerga boshqa tajribalarni qo'shishingiz mumkin
    ];
  
    return (
      <section id="experience" className="py-20 mx-10 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-6 max-sm:px-0">
          {/* Sarlavha */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              MY <span className="text-green-400">EXPERIENCE</span>
            </h2>
            <div className="h-1 w-20 bg-green-400 mt-2 opacity-50"></div>
          </div>
  
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-12 group">
                {/* Vertikal Chiziq */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-green-400/20 group-hover:bg-green-400/50 transition-colors"></div>
                
                {/* Nuqta (Indicator) */}
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse"></div>
  
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-green-400/80 font-mono text-sm tracking-wide uppercase">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 font-mono">
                    {exp.period}
                  </span>
                </div>
  
                <ul className="mt-4 space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                      <span className="text-green-400 mt-1.5 text-[10px]">▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dekorativ element: Pastki qatlam uchun xira nur */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-900/5 blur-[120px] pointer-events-none"></div>
      </section>
    );
  }