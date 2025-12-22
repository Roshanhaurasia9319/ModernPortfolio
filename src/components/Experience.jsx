import { FaBriefcase, FaGraduationCap, FaRocket } from "react-icons/fa";

const experiences = [
  {
    year: "2025 – Present",
    title: "Graduate Engineer Trainee",
    place: "WIPRO Ltd",
    icon: <FaRocket />,
    points: [
      "Database Testing: Validated data integrity and complex relational logic using comprehensive test plans.",
      "Production Safety: Prevented production data corruption through strict environment safeguards and monitoring.",
      "Regression Testing: Built automated suites to ensure new updates didn't break existing features.",
    ],
  },
  {
    year: "2025",
    title: "Freelance Projects",
    place: "Various Clients",
    icon: <FaBriefcase />,
    points: [
      "Analyzed business needs and generated solutions",
      "Worked with clients to improve web presence",
      "Improved reporting and documentation quality",
    ],
  },
  {
    year: "2020 – 2024",
    title: "B.Tech (Computer Science)",
    place: "JIMS Greater Noida",
    icon: <FaGraduationCap />,
    points: [
      "Strong foundation in DSA, DBMS, OOPS, and OS",
      "Participated in coding competitions and hackathons",
      "Built multiple academic and real-world projects",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Education, experience, and growth over time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-cyan-500/30 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Timeline Dot */}
              <div
                className="absolute -left-[42px] top-1 w-10 h-10 rounded-full
                bg-slate-900 border border-cyan-400 flex items-center justify-center
                text-cyan-400 shadow-[0_0_20px_#22d3ee]"
              >
                {exp.icon}
              </div>

              {/* Card */}
              <div
                className="rounded-xl bg-white/5 backdrop-blur-xl border
                border-cyan-500/20 p-6 transition-all duration-300
                group-hover:shadow-[0_0_40px_#22d3ee40]"
              >
                <span className="text-sm text-cyan-400 font-semibold">
                  {exp.year}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {exp.title}
                </h3>

                <p className="text-slate-400 font-medium">
                  {exp.place}
                </p>

                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
