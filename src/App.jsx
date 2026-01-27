import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";

import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
export default function App() {
  return (
    <>
      <Navbar/>
      <ParticleBackground />
      <CursorGlow />

      <Hero />
      <Skills />
      <Experience/>
      <Projects />
      <Certificates/>
      <Contact />
    </>
  );
}
