import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 text-white overflow-hidden perspective-1000"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Let’s <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Connect</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Ready to bring your ideas to life? I’m currently available for new projects and collaborations.
          </p>
        </div>

        {/* 3D Interactive Card */}
        <div className="group relative mx-auto max-w-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(5deg)_rotateY(-5deg)] active:[transform:rotateX(2deg)_rotateY(-2deg)_scale(0.95)]">
          
          {/* Card Border Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Side: Direct Info */}
              <div className="space-y-6">
                <a
                  href="mailto:your-email@gmail.com"
                  className="group/item flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-transparent hover:border-cyan-500/30 transition-all"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:scale-110 transition-transform">
                    <FaEnvelope size={20} />
                  </div>
                  <span className="text-slate-300 font-medium truncate">roshan.chaurasia2024@gmail.com</span>
                </a>

                <a
                  href="tel:+917982527257"
                  className="group/item flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-transparent hover:border-cyan-500/30 transition-all"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:scale-110 transition-transform">
                    <FaPhoneAlt size={20} />
                  </div>
                  <span className="text-slate-300 font-medium">+91 79825 27257</span>
                </a>
              </div>

              {/* Right Side: Socials & CTA */}
              <div className="flex flex-col items-center justify-center space-y-8 md:border-l md:border-white/10">
                <div className="flex gap-6">
                  {[
                    { icon: <FaGithub />, href: "https://github.com" },
                    { icon: <FaLinkedin />, href: "https://linkedin.com" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="text-3xl text-slate-400 hover:text-cyan-400 transition-all hover:-translate-y-2"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <a
                  href="mailto:your-email@gmail.com"
                  className="relative px-10 py-4 rounded-full bg-cyan-500 text-slate-950 font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-90"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;