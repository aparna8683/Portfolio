import { motion } from "framer-motion";
import { FaReact,FaNodeJs,FaPython,FaHtml5,FaCss3Alt,FaJs,FaBrain,FaGitAlt } from "react-icons/fa";
import { SiCplusplus,SiMongodb,SiExpress,SiTailwindcss,SiFirebase,SiMysql } from "react-icons/si";

const skillCategories=[
 {title:"Frontend",skills:[["React",<FaReact/>],["JavaScript",<FaJs/>],["HTML5",<FaHtml5/>],["CSS3",<FaCss3Alt/>],["Tailwind",<SiTailwindcss/>]]},
 {title:"Backend",skills:[["Node.js",<FaNodeJs/>],["Express.js",<SiExpress/>],["MongoDB",<SiMongodb/>],["Firebase",<SiFirebase/>],["MySQL",<SiMysql/>]]},
 {title:"Programming",skills:[["C++",<SiCplusplus/>],["Python",<FaPython/>],["SQL",<SiMysql/>],["Git",<FaGitAlt/>]]},
 {title:"Computer Science",skills:[["DSA",<FaBrain/>],["OOP",<FaBrain/>],["System Design",<FaBrain/>],["DBMS",<FaBrain/>],["Operating Systems",<FaBrain/>],["Computer Networks",<FaBrain/>]]},
 {title:"AI, LLMs & Systems",skills:[["Artificial Intelligence",<FaBrain/>],["Machine Learning",<FaBrain/>],["Prompt Engineering",<FaBrain/>],["RAG & AI Agents",<FaBrain/>],["FastAPI",<FaBrain/>],["System Design",<FaBrain/>]]}
];

export default function Skills(){
 return <section id="skills" className="relative py-32 bg-[#0a0a09] text-[#f2f0ea] border-t border-[#282721]">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
   <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} viewport={{once:true}} className="mb-16">
    <p className="section-kicker">02A / TOOLKIT</p>
    <h2 className="display-title">Tools I use to<br/><em>turn ideas into software.</em></h2>
    <p className="mt-6 text-[#817e76] text-base leading-8 max-w-2xl">A practical stack across full-stack development, AI systems and core computer science — with an emphasis on understanding the fundamentals behind the tools.</p>
   </motion.div>
   <div className="grid lg:grid-cols-2 gap-3">
    {skillCategories.map((category,index)=><motion.div key={category.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:index*.06}} viewport={{once:true}} className="border border-[#282721] bg-[#11110f] p-7 hover:border-[#454239] transition-colors">
      <h3 className="font-['Space_Grotesk'] text-xl font-medium mb-7">{category.title}</h3>
      <div className="grid grid-cols-2 gap-2">{category.skills.map(([name,icon])=><div key={name} className="flex items-center gap-3 p-3 border border-[#282721] bg-[#0a0a09]"><span className="text-lg text-[#aaa69d]">{icon}</span><span className="text-sm text-[#b8b4ac]">{name}</span></div>)}</div>
    </motion.div>)}
   </div>
  </div>
 </section>
}