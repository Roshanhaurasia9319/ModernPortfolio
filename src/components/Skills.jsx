import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiMysql } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Databases", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Technologies I use to build scalable and modern applications
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20
              p-8 transition-all duration-300 hover:-translate-y-2
              hover:shadow-[0_0_40px_#22d3ee40]"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

              <h3 className="relative z-10 text-xl font-bold text-cyan-400 mb-6">
                {group.title}
              </h3>

              <div className="relative z-10 grid grid-cols-2 gap-5">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-slate-300 font-medium
                    hover:text-cyan-400 transition"
                  >
                    <span className="text-2xl drop-shadow-[0_0_8px_#22d3ee]">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
