import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects=[
  {
    title:"AI Business Assistant",
    type:"AI PRODUCT",
    desc:"An AI-powered business assistant designed around analysis, structured outputs and practical workflow automation.",
    tech:["LLM","AI Agents","Node.js","APIs"],
    image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    github:"https://github.com/aparna8683/ai-business-assistant-",
    live:null
  },
  {
    title:"Solron AI",
    type:"AI SYSTEM · IN PROGRESS",
    desc:"A website-analysis and AI generation workflow with validation and repair. The next milestone is public deployment.",
    tech:["Groq","Playwright","Node.js","GenAI"],
    image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    github:"https://github.com/aparna8683/Soul_Clone_AI",
    live:null
  },
  {
    title:"AI Resume Builder",
    type:"DEPLOYED",
    desc:"An AI-assisted resume builder with templates, themes, visibility controls, media support and PDF export.",
    tech:["React","Node.js","MongoDB","AI"],
    image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    github:"https://github.com/aparna8683/resume_builder",
    live:"https://resume-builder-client-hspy.onrender.com/"
  },
  {
    title:"FinTrack",
    type:"DEPLOYED",
    desc:"A personal finance application for tracking expenses and presenting financial information through a clean web interface.",
    tech:["React","Node.js","MongoDB"],
    image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    github:"https://github.com/aparna8683/FinTrack",
    live:"https://fin-track-indol-xi.vercel.app/login"
  },
  {
    title:"AI Interview Prep Bot",
    type:"DEPLOYED",
    desc:"An interview-practice platform built around AI-assisted mock sessions and preparation workflows.",
    tech:["React","Node.js","MongoDB","AI"],
    image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    github:"https://github.com/aparna8683/GUVII_PROJECT",
    live:"https://guvii-project-frontendd.onrender.com/"
  },
  {
    title:"Aivoa QMS",
    type:"ENGINEERING",
    desc:"Quality-management workflow work combining frontend, APIs, PostgreSQL and Docker.",
    tech:["React","FastAPI","Postgres","Docker"],
    image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    github:"https://github.com/aparna8683/Aivoa-QMS",
    live:null
  }
];

function LinkButton({href,children,muted=false}){
  if(!href) return <span className="text-[#514f48] text-xs">{children} · coming soon</span>;
  return <a href={href} target="_blank" rel="noreferrer" className={`text-xs font-medium flex items-center gap-2 transition-colors ${muted?"text-[#817e76] hover:text-[#f2f0ea]":"text-[#f2f0ea] hover:text-[#b8a06a]"}`}>{children}</a>;
}

export default function Projects(){
  return <section id="projects" className="relative py-32 bg-[#0a0a09] text-[#f2f0ea] border-t border-[#282721]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div><p className="section-kicker">02 / SELECTED WORK</p><h2 className="display-title">Built, shipped,<br/><em>still evolving.</em></h2></div>
        <p className="text-[#817e76] max-w-sm text-sm leading-7">Real projects, clear status, direct links. If a deployment is not public yet, I mark it instead of pretending it is.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[#282721] border border-[#282721]">
        {projects.map((p,i)=><motion.article key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*.05}} viewport={{once:true}} className="project-card bg-[#11110f] overflow-hidden group">
          <div className="relative h-52 overflow-hidden border-b border-[#282721]">
            <img src={p.image} alt={`${p.title} project visual`} loading="lazy" decoding="async" className="project-image w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-transparent to-transparent opacity-80" />
            <div className="absolute top-5 left-6 right-6 flex justify-between">
              <span className="text-[10px] font-semibold tracking-[.14em] text-[#d7d3ca]">0{i+1}</span>
              <span className="text-[10px] font-semibold tracking-[.12em] text-[#aaa69d]">{p.type}</span>
            </div>
          </div>
          <div className="p-7 md:p-9 min-h-[300px] flex flex-col">
            <h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-[-.035em]">{p.title}</h3>
            <p className="mt-4 text-sm text-[#817e76] leading-7 max-w-xl">{p.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="px-2.5 py-1 border border-[#282721] text-[10px] font-medium text-[#8d8981]">{t}</span>)}</div>
            <div className="mt-auto pt-8 flex gap-6 items-center">
              <LinkButton href={p.live}><FaExternalLinkAlt/> Demo ↗</LinkButton>
              <LinkButton href={p.github} muted><FaGithub/> GitHub ↗</LinkButton>
            </div>
          </div>
        </motion.article>)}
      </div>

      <div className="mt-10 border-y border-[#282721] py-5 flex flex-wrap gap-x-8 gap-y-3 items-center text-xs">
        <span className="font-semibold tracking-[.14em] text-[#706d66]">NEXT</span>
        <strong className="font-['Space_Grotesk'] font-medium">House Price Prediction</strong>
        <span className="text-[#706d66]">ML project to be added as it becomes portfolio-ready.</span>
      </div>
    </div>
  </section>;
}