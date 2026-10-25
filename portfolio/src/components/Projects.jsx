import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Talk-to-Data Agent",
    type: "AI / AGENTIC SYSTEM",
    desc: "A multi-agent system that converts plain-English questions into SQL, validates queries for read-only execution, and returns concise summaries and charts. Uses MCP for tool connectivity and human handoff when confidence is low or requests are ambiguous.",
    tech: ["Python", "FastAPI", "LangGraph", "MCP", "SQL", "Docker"],
    github: null,
    live: null
  },
  {
    title: "AI Interview Preparation Bot",
    type: "DEPLOYED",
    desc: "An AI-powered interview platform with role-specific question generation, adaptive multi-step question flows, and AI-generated feedback to identify strengths and improvement areas.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "LLM APIs"],
    github: "https://github.com/aparna8683/GUVII_PROJECT",
    live: "https://guvii-project-frontendd.onrender.com/"
  },
  {
    title: "AI Resume Builder",
    type: "DEPLOYED",
    desc: "A full-stack resume platform with multiple templates, AI-assisted content refinement, public/private visibility, secure authentication, media management, and PDF export.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "LLM APIs"],
    github: "https://github.com/aparna8683/resume_builder",
    live: "https://resume-builder-client-hspy.onrender.com/"
  },
  {
    title: "AI Business Assistant",
    type: "AI PRODUCT",
    desc: "An AI-powered business assistant designed around website analysis, structured outputs, and practical workflow automation.",
    tech: ["LLMs", "AI Agents", "Node.js", "APIs"],
    github: "https://github.com/aparna8683/ai-business-assistant-",
    live: null
  },
  {
    title: "FinTrack",
    type: "DEPLOYED",
    desc: "A personal finance application for tracking expenses and presenting financial information through a clean web interface.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/aparna8683/FinTrack",
    live: "https://fin-track-indol-xi.vercel.app/login"
  },
  {
    title: "Role-Based Digital Voting Platform",
    type: "HACKATHON · 2ND PLACE",
    desc: "A secure voting platform built for 1,000+ users with JWT authentication, role-based access control, backend validation, tamper-resistant vote storage, and real-time vote tracking using WebSockets.",
    tech: ["Node.js", "JWT", "WebSockets", "Role-Based Access"],
    github: null,
    live: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#080808] text-white border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="section-kicker">03 / SELECTED WORK</p>
            <h2 className="display-title">Built, shipped,<br /><em>still evolving.</em></h2>
          </div>
          <p className="text-neutral-600 max-w-sm text-sm leading-7">
            AI systems and full-stack products, from agentic data workflows to deployed applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/[.08] border border-white/[.08]">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              transition={{ delay: i * .05 }} viewport={{ once: true }}
              className="bg-[#0b0b0b] p-7 md:p-9 min-h-[330px] flex flex-col hover:bg-[#101010] transition-colors">
              <div className="flex justify-between gap-4">
                <span className="text-[10px] font-medium text-neutral-600">0{i + 1}</span>
                <span className="text-[10px] font-medium text-neutral-500 text-right">{p.type}</span>
              </div>
              <h3 className="mt-12 text-2xl font-semibold tracking-[-.025em]">{p.title}</h3>
              <p className="mt-4 text-sm text-neutral-500 leading-7 max-w-xl">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="px-2.5 py-1 border border-white/[.08] text-[10px] text-neutral-600">{t}</span>)}
              </div>
              <div className="mt-auto pt-8 flex flex-wrap gap-5 text-xs font-medium">
                {p.live
                  ? <a href={p.live} target="_blank" rel="noreferrer" className="text-white flex items-center gap-2 hover:text-neutral-300"><FaExternalLinkAlt /> Live demo ↗</a>
                  : <span className="text-neutral-700">Demo · not listed</span>}
                {p.github
                  ? <a href={p.github} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white flex items-center gap-2"><FaGithub /> GitHub ↗</a>
                  : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
