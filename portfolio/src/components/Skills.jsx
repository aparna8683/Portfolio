import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJs, FaBrain, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiExpress, SiMysql, SiFastapi, SiDocker } from "react-icons/si";

const skillCategories = [
  { title: "Frontend", skills: [{ name: "React.js", icon: <FaReact /> }, { name: "JavaScript", icon: <FaJs /> }] },
  { title: "Backend & APIs", skills: [{ name: "Node.js", icon: <FaNodeJs /> }, { name: "Express.js", icon: <SiExpress /> }, { name: "FastAPI", icon: <SiFastapi /> }, { name: "REST APIs", icon: <FaBrain /> }] },
  { title: "Languages & Data", skills: [{ name: "Python", icon: <FaPython /> }, { name: "C++", icon: <SiCplusplus /> }, { name: "SQL", icon: <SiMysql /> }, { name: "MongoDB", icon: <SiMongodb /> }] },
  { title: "AI & Agentic Systems", skills: [{ name: "LLM Integration", icon: <FaBrain /> }, { name: "Generative AI", icon: <FaBrain /> }, { name: "AI Agents", icon: <FaBrain /> }, { name: "Multi-Agent Workflows", icon: <FaBrain /> }, { name: "RAG", icon: <FaBrain /> }, { name: "Prompt Engineering", icon: <FaBrain /> }, { name: "LangGraph", icon: <FaBrain /> }, { name: "MCP", icon: <FaBrain /> }] },
  { title: "Engineering & Tools", skills: [{ name: "DSA", icon: <FaBrain /> }, { name: "OOP / SOLID", icon: <FaBrain /> }, { name: "DBMS", icon: <FaBrain /> }, { name: "Operating Systems", icon: <FaBrain /> }, { name: "Computer Networks", icon: <FaBrain /> }, { name: "LLD / HLD", icon: <FaBrain /> }, { name: "Git / GitHub", icon: <FaGitAlt /> }, { name: "Docker", icon: <SiDocker /> }] }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#080808] text-white border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }} viewport={{ once: true }} className="mb-16">
          <p className="section-kicker">02 / TOOLKIT</p>
          <h2 className="display-title">Tools I use to<br /><em>turn ideas into software.</em></h2>
          <p className="mt-6 text-neutral-500 text-base leading-8 max-w-2xl">
            A practical stack across full-stack development, AI systems and core computer science, grounded in hands-on product work.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-3">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * .06 }} viewport={{ once: true }}
              className="border border-white/[.08] bg-[#0d0d0d] p-7 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-7">{category.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 border border-white/[.07] bg-[#080808]">
                    <span className="text-lg text-neutral-400">{skill.icon}</span>
                    <span className="text-sm text-neutral-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
