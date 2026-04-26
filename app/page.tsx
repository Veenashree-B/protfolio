import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}