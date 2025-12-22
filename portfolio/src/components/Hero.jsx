import { FaDownload, FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mt-[144px] min-h-[50vh] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I’m{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">
              Roshan
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-slate-300">
            Full Stack Developer & Problem Solver
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl">
            I build modern, scalable, and performance-driven web applications
            with clean UI, strong backend logic, and a touch of gaming-style
            creativity.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-bold transition-all duration-300
              hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee]"
            >
              <FaRocket />
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-bold transition-all duration-300
              hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee]"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl bg-slate-900 border border-cyan-500/30
            shadow-[0_0_60px_#22d3ee40] flex items-center justify-center
            animate-[float_6s_ease-in-out_infinite]">

            <span className="text-cyan-400 text-7xl font-extrabold drop-shadow-[0_0_20px_#22d3ee]">
              &lt;/&gt;
            </span>
          </div>
        </div>

      </div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
