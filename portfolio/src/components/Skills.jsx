import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBrain,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
  // {
  //   title: "Computer Science",
  //   skills: [
  //     "Data Structures & Algorithms",
  //     "Object-Oriented Programming",
  //     "System Design",
  //     "DBMS",
  //     "Operating Systems",
  //     "Computer Networks",
  //   ],
  // },

  {
    title: "AI & ML",
    skills: [
      { name: "Artificial Intelligence", icon: <FaBrain /> },
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "Prompt Engineering", icon: <FaBrain /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#0B1020] text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

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
            SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I use to build modern web applications, AI-powered
            solutions, and scalable software products.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
            >
              <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>

              <div className="grid grid-cols-2 gap-5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="text-3xl text-cyan-400">{skill.icon}</div>

                    <span className="text-slate-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
