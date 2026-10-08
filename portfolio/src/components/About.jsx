import { motion } from "framer-motion";

const cards=[
 {label:"EDUCATION",title:"B.Tech — AI & ML",desc:"ABES Engineering College · 2023–2027"},
 {label:"FOCUS",title:"AI + Full Stack",desc:"LLMs, agents, APIs, React and scalable software"},
 {label:"CURRENTLY LEARNING",title:"Systems thinking",desc:"System design, DBMS, OS, DSA and practical architecture"},
 {label:"BUILDING",title:"From idea to deployment",desc:"Turning experiments into useful, explainable products"}
];

export default function About(){
 return <section id="about" className="relative py-32 bg-[#090909] text-white overflow-hidden">
   <div className="absolute inset-0 pointer-events-none">
     <div className="about-float float-a">CURIOUS</div><div className="about-float float-b">BUILD</div><div className="about-float float-c">LEARN</div><div className="about-float float-d">ITERATE</div>
   </div>
   <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-20">
      <div><p className="section-kicker">01 / ABOUT</p><h2 className="display-title">A developer who likes to understand <em>why</em>.</h2></div>
      <div>
        <p className="about-lead">I’m Aparna, an AI/ML student and full-stack developer. I enjoy taking an idea from a rough problem statement to a working product — and understanding the engineering underneath it.</p>
        <p className="about-copy">Outside the code editor, I play chess and sudoku. Nothing dramatic — chess keeps me thinking ahead, while sudoku makes me comfortable with constraints and patterns. That same mindset shows up in how I approach software.</p>
        <div className="about-cards">{cards.map((c,i)=><motion.article key={c.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*.08}} viewport={{once:true}} className="about-card"><span>{c.label}</span><strong>{c.title}</strong><p>{c.desc}</p></motion.article>)}</div>
      </div>
    </div>
   </div>
 </section>
}