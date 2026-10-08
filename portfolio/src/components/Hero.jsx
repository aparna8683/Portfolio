import { motion } from "framer-motion";
import profile from "../assets/aparna.png";

export default function Hero(){
  return <section id="home" className="relative min-h-screen bg-[#0a0a09] text-[#f2f0ea] flex items-center overflow-hidden">
    <div className="absolute inset-0 opacity-[.035] pointer-events-none" style={{backgroundImage:"linear-gradient(#f2f0ea 1px,transparent 1px),linear-gradient(90deg,#f2f0ea 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
    <div className="absolute right-[-12vw] top-[18%] w-[42vw] h-[42vw] rounded-full border border-[#f2f0ea]/[.06]"/>
    <div className="absolute right-[-4vw] top-[27%] w-[27vw] h-[27vw] rounded-full border border-[#f2f0ea]/[.04]"/>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 w-full relative z-10">
      <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-16 items-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[.14em] text-[#706d66] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#b8a06a] animate-pulse"/> Available for opportunities
          </div>
          <h1 className="mt-7 font-['Space_Grotesk'] text-[clamp(56px,8vw,112px)] leading-[.86] tracking-[-.075em] font-medium">
            Aparna<br/><span className="text-[#8e8a82]">Singh.</span>
          </h1>
          <p className="mt-9 font-['Space_Grotesk'] text-xl md:text-2xl text-[#d1cec6] max-w-2xl tracking-[-.02em] leading-[1.3]">AI/ML & Full-Stack Developer building intelligent products, clean interfaces, and systems that solve real problems.</p>
          <p className="mt-5 text-sm text-[#706d66] max-w-xl">Currently exploring LLM applications, AI agents, system design and production-minded web engineering.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 bg-[#f2f0ea] text-[#0a0a09] text-sm font-semibold hover:bg-white transition">View projects ↘</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-3 border border-[#282721] text-sm text-[#d1cec6] hover:border-[#514f48] transition">Resume ↗</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-semibold tracking-[.13em] text-[#706d66]"><span>REACT</span><span>NODE.JS</span><span>PYTHON</span><span>LLMs</span><span>SQL</span><span>AZURE</span></div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.9}} className="relative flex justify-center lg:justify-end">
          <div className="relative w-64 md:w-80">
            <div className="absolute -inset-8 bg-[#b8a06a]/[.04] blur-3xl rounded-full"/>
            <div className="relative border border-[#282721] bg-[#11110f] p-2">
              <img src={profile} alt="Aparna Singh" loading="eager" decoding="async" className="w-full aspect-[4/5] object-cover grayscale-[20%]"/>
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-[9px] font-semibold tracking-[.1em] text-[#aaa69d]"><span>AI / ML<br/>FULL STACK</span><span>2026</span></div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-6 lg:left-12 right-6 flex justify-between text-[9px] font-semibold tracking-[.16em] text-[#514f48]"><span>SCROLL TO EXPLORE</span><span>CHESS × SUDOKU × CODE</span></div>
    </div>
  </section>
}