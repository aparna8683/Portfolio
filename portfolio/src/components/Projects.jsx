import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Interview Prep Bot",
    description:
      "An AI-powered interview preparation platform that helps users practice technical and behavioral interviews through mock interview sessions, personalized feedback, and performance analytics.",

    tech: ["React", "Node.js", "MongoDB", "AI", "Tailwind CSS"],

    live: "https://guvii-project-frontendd.onrender.com/",
    github: "#",
  },

  {
    title: "Resume Builder",
    description:
      "A modern ATS-friendly resume builder with real-time preview, professional templates, and PDF export functionality.",

    tech: ["React", "JavaScript", "Tailwind CSS", "PDF"],

    live: "https://resume-builder-client-hspy.onrender.com/",
    github: "#",
  },

  {
    title: "Finance Tracker",
    description:
      "A personal finance management application for tracking expenses, managing income, and visualizing financial insights.",

    tech: ["React", "Node.js", "MongoDB", "Charts"],

    live: "https://fin-track-indol-xi.vercel.app/login",
    github: "#",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#0B1020] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-semibold tracking-wider mb-3">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my experience in full-stack
            development, AI-powered applications, and solving real-world
            problems.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="mb-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-sm font-medium">
            Featured Project
          </span>

          <h3 className="text-3xl font-bold mb-4">{projects[0].title}</h3>

          <p className="text-slate-400 leading-relaxed mb-6">
            {projects[0].description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {projects[0].tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={projects[0].live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 font-semibold"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

            <a
              href={projects[0].github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Remaining Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-slate-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 font-medium"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
