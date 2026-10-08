import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { title:"AI Business Assistant", status:"Built", description:"AI-powered business workflow assistant with analysis, structured outputs, and practical automation.", tech:["AI","LLM","Agents","Node.js"], github:"https://github.com/aparna8683/ai-business-assistant-", live:null },
  { title:"Solron AI", status:"Next → Deploy", description:"AI workflow focused on analysis, generation, validation and repair. Deployment is the next milestone.", tech:["GenAI","Groq","Playwright","Node.js"], github:"https://github.com/aparna8683/Soul_Clone_AI", live:null },
  { title:"AI Resume Builder", status:"Built", description:"AI-assisted resume creation with templates, themes, visibility controls and PDF export.", tech:["MERN","AI","MongoDB","Cloudinary"], github:"https://github.com/aparna8683/resume_builder", live:null },
  { title:"Aivoa QMS", status:"Built", description:"Quality-management workflow project combining a modern frontend, APIs, Postgres and Docker.", tech:["React","API","Postgres","Docker"], github:"https://github.com/aparna8683/Aivoa-QMS", live:null },
  { title:"Stock Price Predictor", status:"Built", description:"Machine-learning project exploring preprocessing, model selection, evaluation and prediction workflows.", tech:["Python","Pandas","ML","EDA"], github:"https://github.com/aparna8683/Stock-Price-Predictor", live:null },
  { title:"FinTrack", status:"Built", description:"Personal finance product focused on tracking expenses and presenting financial information clearly.", tech:["React","Node.js","MongoDB"], github:"https://github.com/aparna8683/FinTrack", live:null },
];

export default function Projects(){
 return <section id="projects" className="relative py-32 bg-[#0B1020] text-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_80%_15%,#22d3ee_0,transparent_25%),radial-gradient(circle_at_10%_80%,#8b5cf6_0,transparent_25%)]"/>
  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
   <motion.div initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16">
    <p className="text-cyan-400 font-semibold tracking-wider mb-3">SELECTED WORK</p>
    <h2 className="text-4xl md:text-6xl font-bold">Projects that move from <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">idea → system.</span></h2>
    <p className="mt-6 text-slate-400 text-lg max-w-2xl">I keep project status honest: built projects are labeled built, and deployment work stays visibly in progress.</p>
   </motion.div>
   <div className="grid md:grid-cols-2 gap-7">
    {projects.map((p,i)=><motion.article key={p.title} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} transition={{delay:i*.06}} viewport={{once:true}} whileHover={{y:-8}} className="group rounded-3xl border border-white/10 bg-white/[.045] backdrop-blur-md p-7 min-h-[315px] flex flex-col">
      <div className="flex items-center justify-between text-xs font-mono text-slate-600"><span>0{i+1}</span><span className="text-emerald-300">{p.status}</span></div>
      <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4">{p.title}</h3>
      <p className="text-slate-400 leading-relaxed">{p.description}</p>
      <div className="flex flex-wrap gap-2 mt-6">{p.tech.map(t=><span key={t} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] text-xs text-slate-300">{t}</span>)}</div>
      <div className="mt-auto pt-7 flex gap-3">
       <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/10 text-sm"><FaGithub/> Repository ↗</a>
       {p.live ? <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-sm font-semibold"><FaExternalLinkAlt/> Live</a> : <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white/[.03] text-xs text-slate-600">No public deployment yet</span>}
      </div>
    </motion.article>)}
   </div>
   <div className="mt-7 rounded-2xl border border-dashed border-white/10 p-5 bg-white/[.02]"><span className="text-xs font-mono text-cyan-300">NEXT ON THE BOARD</span><div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm"><strong>House Price Prediction</strong><span className="text-slate-500">ML application project — planned</span><strong>Solron AI deployment</strong><span className="text-slate-500">next milestone</span></div></div>
  </div>
 </section>;
}