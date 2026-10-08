import { motion } from "framer-motion";
export default function Contact(){
  return <section id="contact" className="py-28 bg-[#0a0a09] text-[#f2f0ea] border-t border-[#282721]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="border border-[#282721] bg-[#11110f] p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div><p className="section-kicker">06 / CONTACT</p><h2 className="display-title">Have a problem worth<br/><em>building?</em></h2><p className="text-[#817e76] max-w-lg mt-5 leading-7">I’m open to internships, software roles, interesting AI projects and conversations about things worth building.</p></div>
        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/aparna8683" target="_blank" rel="noreferrer" className="px-5 py-3 border border-[#282721] text-sm text-[#d1cec6] hover:bg-[#f2f0ea] hover:text-[#0a0a09] transition">GitHub ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-5 py-3 bg-[#f2f0ea] text-[#0a0a09] text-sm font-semibold hover:bg-white transition">LinkedIn ↗</a>
        </div>
      </div>
      <footer className="pt-8 flex flex-wrap justify-between gap-4 text-[10px] font-semibold tracking-[.12em] text-[#514f48]"><span>APARNA SINGH / AI + FULL STACK</span><span>BUILT WITH REACT + VITE</span></footer>
    </div>
  </section>
}