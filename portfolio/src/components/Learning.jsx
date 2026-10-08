import { motion } from "framer-motion";

const notes = [
  ["System Design","Architecture, APIs, scalability, LLD/HLD"],
  ["DBMS","SQL, data modeling, indexing, transactions"],
  ["Operating Systems","Processes, threads, memory, scheduling"],
  ["AI / LLMs","GenAI, RAG, agents, prompting, integrations"],
  ["Web Engineering","React, Next.js, Node.js, REST APIs"],
  ["Computer Science","OOP, DSA, networks and problem solving"],
];

export default function Learning() {
  return <section id="notes" className="relative py-32 bg-[#090d19] text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(90deg,transparent_0,transparent_49%,#fff1_50%,transparent_51%)] bg-[size:80px_80px]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div><p className="text-neutral-300 font-semibold tracking-wider mb-3">LEARNING / NOTES</p><h2 className="text-4xl md:text-6xl font-bold">I learn in public,<br/><span className="bg-gradient-to-r from-neutral-300 to-white bg-clip-text text-transparent">one system at a time.</span></h2><p className="mt-6 text-slate-400 text-lg leading-relaxed">I write and collect notes on the things I&apos;m actively learning — especially system design, DBMS, OS, AI and software engineering.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://hashnode.com/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">Read on Hashnode ↗</a><span className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-400">More notes coming</span></div></div>
        <div className="space-y-0 border-t border-white/10">{notes.map(([title,desc],i)=><motion.div key={title} initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} transition={{delay:i*.07}} viewport={{once:true}} className="grid grid-cols-[50px_1fr_20px] gap-4 items-center py-5 border-b border-white/10"><span className="text-slate-600 font-mono text-xs">0{i+1}</span><div><h3 className="font-semibold text-lg">{title}</h3><p className="text-slate-500 text-sm mt-1">{desc}</p></div><span className="text-slate-600">↗</span></motion.div>)}</div>
      </div>
    </div>
  </section>;
}