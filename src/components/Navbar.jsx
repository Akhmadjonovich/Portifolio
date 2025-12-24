import { useEffect, useState } from "react";
import NamePlate from "./NamePlate";

const links = [
  { label: "<HOME/>", id: "home" },
  { label: "<SKILLS/>", id: "skills" },
  { label: "<PROJECTS/>", id: "projects" },
  { label: "<CONTACT/>", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false); // Close mobile menu after click
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-sm
        transition-all
        ${scrolled ? "bg-black/50 border-b border-green-400/20" : "bg-black/20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <NamePlate />

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative font-semibold text-lg cursor-pointer text-green-400/70 hover:text-green-400 transition group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-green-400 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* STATUS */}
        <div className="hidden md:flex items-center gap-2 text-xs border border-green-400/30 px-3 py-1 text-green-400/80 rounded">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          ONLINE
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span className={`block h-0.5 bg-green-400 rounded transition-transform ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-green-400 rounded transition-opacity ${mobileMenu ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 bg-green-400 rounded transition-transform ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-black/80 backdrop-blur-sm border-t border-green-400/20">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-semibold text-green-400/80 hover:text-green-400 text-lg cursor-pointer transition"
            >
              {link.label}
            </li>
          ))}
          <li className="flex items-center gap-2 text-xs border border-green-400/30 px-3 py-1 text-green-400/80 rounded">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            ONLINE
          </li>
        </ul>
      )}
    </nav>
  );
}
