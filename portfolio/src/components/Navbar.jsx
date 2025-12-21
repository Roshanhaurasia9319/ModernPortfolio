import { useState } from "react";
import {
  FaGamepad,
  FaHome,
  FaUserAstronaut,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", icon: <FaHome />, link: "#home" },
    { name: "About", icon: <FaUserAstronaut />, link: "#about" },
    { name: "Projects", icon: <FaCode />, link: "#projects" },
    { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#05010D] backdrop-blur-xl border-cyan-400 border-b border-opacity-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-xl tracking-wider">
          <FaGamepad className="text-3xl drop-shadow-[0_0_10px_#22d3ee]" />
          <span className="text-white">
            ROSHAN<span className="text-cyan-400">.DEV</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="group relative flex items-center gap-2 text-gray-300 font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <span className="text-cyan-400 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>

                <span className="relative z-10 group-hover:text-cyan-400">
                  {item.name}
                </span>

                {/* 3D Glow Layer */}
                <span className="absolute inset-0 bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></span>

                {/* 3D Depth Effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 pb-6 pt-4 bg-black/80 border-t border-cyan-500/20">
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-gray-300 font-semibold tracking-wider hover:text-cyan-400 transition-all duration-300"
              >
                <span className="text-cyan-400 text-xl drop-shadow-[0_0_8px_#22d3ee]">
                  {item.icon}
                </span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
