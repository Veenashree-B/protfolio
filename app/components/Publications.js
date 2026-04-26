import { FaBook, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Founding Member - Numinous",
    subtitle: "Department Technical Club",
    desc: "Spearheaded the creation of the department's technical club. Fostered a community of developers and hosted an intercollege hackathon to drive innovation and technical collaboration among students.",
    date: "Present",
  },
  {
    title: "App Development using Generative AI",
    subtitle: "MindMatrix | 16 weeks",
    desc: "Currently pursuing an internship in Android App Development with a specialization in Generative AI, where I am developing a mobile application with AI-driven features. Gaining hands-on experience in integrating GenAI tools, designing interaction workflows, and building a mini-project that showcases practical implementation of AI in Android applications.",
    date: "Current",
  },
];

const publications = [
  {
    title: "Survey on Cloud-Based Anomaly Detection in E-Commerce using Machine Learning",
    desc: "Published research focusing on ML-based intrusion and fraud detection techniques in cloud environments.",
    date: "2025",
  },
];

const certifications = [
  "Git skill up – Geeks for Geeks",
  "DSA using C & C++ – Udemy",
  "Power BI for Business Professionals – Infosys Springboard",
  "Tableau in 7 steps – Infosys Springboard",
  "Basics of Business Communication – Infosys Springboard",
];

export default function Publications() {
  return (
    <section id="experience" className="py-20 px-8 sm:px-12 bg-white text-black">
      <h2 className="text-5xl text-center font-bold mb-10 text-black">Experience</h2>
      <div className="grid gap-6 md:grid-cols-1">
        {experiences.map((exp) => (
          <div key={exp.title} className="card-bg p-7 rounded-3xl border border-pink-500/20">
            <div className="flex items-center gap-3 mb-3 text-black text-center justify-center">
              <FaBriefcase />
              <h3 className="text-3xl font-bold text-center">{exp.title}</h3>
            </div>
            <p className="text-xl font-semibold text-center mb-2">{exp.subtitle}</p>
            <p className="text-black leading-relaxed mb-2 text-center">{exp.desc}</p>
            <span className="text-sm text-black text-center">{exp.date}</span>
          </div>
        ))}
      </div>

      <h2 className="text-5xl text-center font-bold mt-16 mb-8 text-black">Publications</h2>
      <div className="grid gap-4 md:grid-cols-1">
        {publications.map((pub) => (
          <div key={pub.title} className="card-bg p-6 rounded-2xl border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-3 text-black text-center justify-center">
              <FaBook />
              <h3 className="text-xl font-semibold text-center">{pub.title}</h3>
            </div>
            <p className="text-black mb-2 text-center">{pub.desc}</p>
            <span className="text-sm text-black text-center">{pub.date}</span>
          </div>
        ))}
      </div>

      <h2 className="text-5xl text-center font-bold mt-16 mb-8 text-black">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-1">
        <div className="card-bg p-6 rounded-2xl border border-cyan-500/20">
          <ul className="list-disc list-inside text-black text-center">
            {certifications.map((cert) => (
              <li key={cert} className="mb-2">{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}