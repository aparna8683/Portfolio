import { motion } from "framer-motion";
import profile from "../assets/aparna.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B1020] text-white flex items-center"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Aurora Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm text-slate-300">
                Open to Internships & Freelance Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Aparna Singh
              </span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">
              AI Engineer • Full Stack Developer
            </h2>

            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              Building intelligent web applications, AI-powered solutions, and
              scalable digital products. Passionate about problem-solving,
              software development, and creating technology that makes a real
              impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["React", "Node.js", "MongoDB", "AI/ML", "C++", "Python"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-full blur-3xl"></div>

              <img
                src={profile}
                alt="Aparna Singh"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border border-white/10 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
