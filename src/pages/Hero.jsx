export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6"
    >
      {/* Overlay for subtle glow */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="text-center max-w-3xl relative z-10">
        {/* Status */}
        <p className="text-green-400/60 tracking-widest mb-3 uppercase text-xs sm:text-sm animate-pulse">
          SYSTEM ONLINE
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wider text-white">
          AXRORBEK
          <span className="text-green-400 pl-2 sm:pl-4 md:pl-6">NEMATOV</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-green-400/70 leading-relaxed text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto">
          Frontend Developer creating{" "}
          <span className="text-white">
            intuitive, performance-driven web experiences
          </span>{" "}
          for modern applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2 sm:py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-green-400/50 text-sm sm:text-base"
          >
            CONTACT
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-2 sm:py-3 border border-green-400/30 text-green-400/70 hover:border-green-400 hover:text-green-400 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base"
          >
            CV
          </a>
        </div>

        {/* Subtle animated glow lines */}
        <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-green-400/30 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
