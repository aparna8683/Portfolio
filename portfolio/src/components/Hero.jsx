import { motion } from "framer-motion";
import profile from "../assets/aparna.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-5">
              <span className="px-4 py-2 rounded-full border border-sky-500 text-sky-400 text-sm">
                Open to Internships & Freelance Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-sky-400">Aparna Singh</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">
              AI & Full Stack Developer
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
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-slate-600 hover:border-sky-400 rounded-xl font-semibold transition duration-300"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                React
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                Node.js
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                MongoDB
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                AI/ML
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                C++
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                Python
              </span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Aparna Singh"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-500 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
