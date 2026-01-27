import { FaCode, FaProjectDiagram, FaTrophy, FaUserTie } from "react-icons/fa";

const stats = [
  {
    value: "600+",
    label: "DSA Problems Solved",
    icon: <FaCode />,
  },
  {
    value: "5+",
    label: "Full Stack Projects",
    icon: <FaProjectDiagram />,
  },
  {
    value: "2",
    label: "(Past)Freelance Clients",
    icon: <FaUserTie />,
  },
  {
    value: "2nd",
    label: "Treasure Hunt Winner",
    icon: <FaTrophy />,
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Achievements & <span className="text-cyan-400">Stats</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Numbers remind people what words sometimes can’t
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group cursor-pointer relative rounded-2xl bg-white/5 backdrop-blur-xl
              border border-cyan-500/20 p-8 text-center transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_0_40px_#22d3ee40]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl
                opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="text-4xl text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
                  {stat.icon}
                </div>

                <h3 className="text-3xl font-extrabold">
                  {stat.value}
                </h3>

                <p className="text-slate-400 font-medium text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
