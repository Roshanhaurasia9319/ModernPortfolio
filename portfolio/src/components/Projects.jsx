import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Assignment Wala",
    description:
      "A full-stack platform helping students get assignments and engineering drawings done efficiently.",
    tech: ["Django", "Python", "Bootstrap", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Hospital Login Corner",
    description:
      "Doctor–Patient web app with appointment booking, blogs, and role-based authentication.",
    tech: ["Django", "Python", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "ML-based system using multiple algorithms to predict diabetes and give recommendations.",
    tech: ["Python", "ML", "MLP", "Streamlit"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Some of the work I’m proud of
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/5 backdrop-blur-xl
              border border-cyan-500/20 p-8 transition-all duration-300
              hover:-translate-y-3 hover:shadow-[0_0_50px_#22d3ee40]"
            >
              {/* Neon Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl
                opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-300 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full
                      bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-slate-300
                    hover:text-cyan-400 transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-slate-300
                    hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
