import { motion } from "framer-motion";
import profile from "../assets/aparna.png";

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden bg-[#07080f] text-white flex items-center">
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute -right-24 top-20 w-[620px] h-[620px] rounded-full border border-cyan-300/10 animate-[spin_18s_linear_infinite]" />
      <div className="absolute -left-40 bottom-0 w-[560px] h-[560px] rounded-full border border-violet-300/10 animate-[spin_24s_linear_infinite_reverse]" />
    </div>
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="absolute right-0 top-0 w-[420px] h-[420px] grid grid-cols-8">{Array.from({length:64}).map((_,i)=><span key={i} className={((Math.floor(i/8)+i)%2===0)?"bg-white/15":"bg-transparent"} />)}</div>
      <div className="absolute left-0 bottom-0 w-[360px] h-[360px] grid grid-cols-9">{Array.from({length:81}).map((_,i)=><span key={i} className="border border-white/10 grid place-items-center text-[9px] text-slate-400">{((i*5+2)%9)+1}</span>)}</div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full relative z-10">
      <div className="grid lg:grid-cols-[1.35fr_.65fr] gap-14 items-center">
        <motion.div initial={{opacity:0,x:-45}} animate={{opacity:1,x:0}} transition={{duration:.8}}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-slate-300"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Building with AI + full-stack systems</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[.96] tracking-tight">Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">Aparna Singh</span>.</h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">AI/ML Engineer • Full Stack Developer • Problem Solver</h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">I build practical AI products, intelligent web experiences, and backend workflows — from LLM integrations and agents to APIs, interfaces, and deployment.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 hover:scale-105 transition-all font-semibold">Explore My Work ↓</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">Download Resume</a>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
            {["GenAI · RAG · Agents","React · Next.js · Node","DSA · DBMS · OS · Design"].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{x}</div>)}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:1}} className="flex justify-center lg:justify-end">
          <motion.div animate={{y:[0,-12,0],rotate:[0,1,-1,0]}} transition={{repeat:Infinity,duration:5,ease:"easeInOut"}} className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-2xl"/>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[32px] border border-white/10 bg-white/5 p-2 backdrop-blur-md overflow-hidden">
              <img src={profile} alt="Aparna Singh" className="w-full h-full object-cover rounded-[26px]" />
            </div>
            <div className="absolute -left-6 bottom-8 rounded-2xl border border-white/10 bg-[#0e111b]/90 px-4 py-3 text-xs text-slate-300 backdrop-blur-md">♟ Think ahead<br/><span className="text-cyan-300">▦ Respect constraints</span></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);
export default Hero;