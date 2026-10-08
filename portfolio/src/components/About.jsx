import { motion } from "framer-motion";

const cards = [
  { number: "01", label: "EDUCATION", title: "B.Tech — AI & ML", desc: "ABES Engineering College · 2023–2027" },
  { number: "02", label: "FOCUS", title: "AI + Full Stack", desc: "LLMs, agents, APIs, React and scalable software" },
  { number: "03", label: "LEARNING", title: "Systems thinking", desc: "System design, DBMS, OS, DSA and practical architecture" },
  { number: "04", label: "BUILDING", title: "Ideas → Products", desc: "Turning experiments into useful, explainable software" }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid-lines" aria-hidden="true" />

      <div className="about-floating-words" aria-hidden="true">
        <span className="about-word word-curious">CURIOUS</span>
        <span className="about-word word-build">BUILD</span>
        <span className="about-word word-learn">LEARN</span>
        <span className="about-word word-iterate">ITERATE</span>
      </div>

      <div className="about-inner">
        <div className="about-heading-column">
          <div className="about-index">
            <span>01</span>
            <i />
            <span>ABOUT ME</span>
          </div>

          <h2 className="about-title">
            I like to understand
            <span className="about-title-accent"> why.</span>
          </h2>

          <p className="about-title-note">
            Curiosity first. <br />
            Code second.
          </p>
        </div>

        <div className="about-content-column">
          <p className="about-lead">
            I’m <strong>Aparna</strong> — an AI/ML student and full-stack developer
            who enjoys turning <em>“what if?”</em> into something that actually works.
          </p>

          <p className="about-copy">
            I like being close to the whole process: understanding the problem,
            designing the system, writing the code, connecting the AI layer,
            and eventually putting the product in someone’s hands. I’m especially
            interested in the space where <span>AI meets practical software engineering.</span>
          </p>

          <div className="about-personal-line">
            <span className="personal-dot" />
            <span>When I’m away from the editor</span>
            <strong>Chess · Sudoku · Piano</strong>
          </div>

          <div className="about-cards">
            {cards.map((card, i) => (
              <motion.article
                key={card.number}
                className="about-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="about-card-top">
                  <span>{card.number}</span>
                  <span>{card.label}</span>
                </div>
                <strong>{card.title}</strong>
                <p>{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
