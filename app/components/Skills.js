import { FaPython, FaDatabase, FaReact, FaGitAlt } from "react-icons/fa";
import { SiC, SiTypescript, SiPostgresql, SiMongodb, SiFastapi, SiNextdotjs } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming & Frameworks",
    items: ["C", "Python", "HTML", "CSS", "Java", "React", "Node.js"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & Emerging Tech",
    items: ["Tableau", "Power BI", "Excel", "Jupyter Notebook", "GitHub", "Generative Automation"],
  },
  {
    title: "Core Competencies",
    items: ["Problem-Solving", "Analytical Thinking", "Communication", "Team Collaboration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 sm:px-12 bg-white text-black">
      <h2 className="text-5xl text-center font-bold mb-10 text-black">Tech Stack & Skills</h2>
      <p className="text-center text-black mb-12">Technologies and tools I use to build high-performance applications and AI-driven solutions.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="rounded-3xl card-bg p-6 border border-violet-500/20">
            <h3 className="text-2xl font-bold mb-4 text-center">{cat.title}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {cat.items.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-white border border-violet-400/30 text-sm font-medium text-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}