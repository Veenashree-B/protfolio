const projects = [
  {
    title: "E-Commerce Sales Analytics",
    desc: "Performed exploratory data analysis to identify sales trends and customer behavior patterns. Created visual insights to support data-driven business decisions.",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "Express.js", "GitHub"],
  },
  {
    title: "Weather Forecast Web Application",
    desc: "Built a web application to display real-time weather data using external APIs. Implemented asynchronous data fetching for improved user experience.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    title: "Cloud-Based Anomaly Detection System",
    desc: "Built an end-to-end anomaly detection solution with data simulation, model training (Isolation Forest, One-Class SVM, Autoencoder), and REST API integration.",
    tags: ["Python", "Scikit-Learn", "Flask API", "Streamlit", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 sm:px-12 bg-white text-black">
      <h2 className="text-5xl text-center font-bold mb-10 text-black">Featured Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="card-bg p-7 rounded-3xl border border-violet-500/20 transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(91,35,255,0.35)]">
            <h3 className="text-3xl font-bold mb-4 text-center">{project.title}</h3>
            <p className="text-black leading-relaxed mb-4 text-center">{project.desc}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white border border-violet-500/20 text-sm text-black">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}