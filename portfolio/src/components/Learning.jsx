import { motion } from "framer-motion";

const HASHNODE="https://hashnode.com/@aparnasingh";

const notes = [
  ["System Design","Architecture, APIs, scalability, LLD/HLD","https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"],
  ["DBMS","SQL, data modeling, indexing, transactions","https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80"],
  ["Operating Systems","Processes, threads, memory, scheduling","https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"],
  ["AI / LLMs","GenAI, RAG, agents, prompting, integrations","https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"],
  ["Web Engineering","React, Next.js, Node.js, REST APIs","https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"],
  ["Computer Science","OOP, DSA, networks and problem solving","https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80"]
];

export default function Learning() {
  return <section id="notes" className="relative py-32 bg-[#0a0a09] text-[#f2f0ea] overflow-hidden border-t border-[#282721]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-kicker">03 / NOTES & LEARNING</p>
          <h2 className="display-title">I learn in public,<br/><em>one system at a time.</em></h2>
          <p className="mt-6 text-[#98948b] text-base leading-8 max-w-xl">I write and collect notes on the things I’m actively learning — especially system design, DBMS, OS, AI and software engineering.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={HASHNODE} target="_blank" rel="noreferrer" className="px-5 py-3 border border-[#282721] bg-[#11110f] hover:border-[#4a473f] transition">Read my Hashnode ↗</a>
            <span className="px-5 py-3 border border-[#282721] text-[#706d66]">More notes coming</span>
          </div>
        </div>

        <div className="space-y-3">
          {notes.map(([title,desc,image],i)=><motion.a key={title} href={HASHNODE} target="_blank" rel="noreferrer" initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} transition={{delay:i*.07}} viewport={{once:true}} className="group grid grid-cols-[88px_1fr_20px] gap-4 items-center p-3 border border-[#282721] bg-[#11110f] hover:bg-[#151512] hover:border-[#454239] transition-colors">
            <img src={image} alt="" loading="lazy" decoding="async" className="note-image w-[88px] h-16 object-cover" />
            <div><div className="flex items-center gap-3"><span className="text-[#706d66] text-[10px] font-semibold">0{i+1}</span><h3 className="font-['Space_Grotesk'] font-medium text-lg tracking-[-.02em]">{title}</h3></div><p className="text-[#817e76] text-sm mt-1 leading-6">{desc}</p><span className="inline-block mt-2 text-[10px] font-semibold tracking-[.12em] text-[#b8a06a]">READ NOTES ↗</span></div>
            <span className="text-[#706d66] group-hover:text-[#f2f0ea] transition">↗</span>
          </motion.a>)}
        </div>
      </div>
    </div>
  </section>;
}