import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-cyan-500/20">
      {/* Glow Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">
            Roshan Lal Chaurasia
          </span>
          . Built with passion & precision.
        </p>

        {/* Center Socials */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="text-xl hover:text-cyan-400 transition
            hover:drop-shadow-[0_0_10px_#22d3ee]"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-xl hover:text-cyan-400 transition
            hover:drop-shadow-[0_0_10px_#22d3ee]"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Back to Top */}
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold
          text-slate-300 hover:text-cyan-400 transition"
        >
          <FaArrowUp />
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
