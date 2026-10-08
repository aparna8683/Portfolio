import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  ["About","about"],["Skills","skills"],["Projects","projects"],["Notes","notes"],["Play","play"]
];

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>30); window.addEventListener("scroll",onScroll); return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <motion.header initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-[#080808]/90 backdrop-blur-xl border-b border-white/10":"bg-transparent"}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
      <a href="#home" className="font-mono text-sm tracking-[.18em] text-white">AS<span className="text-neutral-500">/</span>26</a>
      <nav className="hidden md:flex items-center gap-7 text-xs text-neutral-500 font-mono">
        {links.map(([label,id])=><a key={id} href={`#${id}`} className="hover:text-white transition-colors">{label}</a>)}
      </nav>
      <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-xs font-mono text-neutral-200 hover:bg-white hover:text-black transition-all">Let&apos;s talk ↗</a>
    </div>
  </motion.header>
}