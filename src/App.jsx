import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";

import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
      <Navbar/>
      <ParticleBackground />
      <CursorGlow />

      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
