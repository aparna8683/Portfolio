import { motion } from "framer-motion";

const achievements = [
  { label: "COMPETITION", title: "Amazon ML Challenge 2026", detail: "Ranked in the Top 10 among women teams." },
  { label: "HACKATHON", title: "Google Girl Hackathon", detail: "Semi-finalist among 300+ teams after national-level technical rounds." },
  { label: "INNOVATION", title: "BNY Mellon Innovation Challenge", detail: "Semi-finalist among 200+ participants." },
  { label: "PROBLEM SOLVING", title: "600+ DSA problems", detail: "Across LeetCode, CodeChef (200+), and GeeksforGeeks." },
  { label: "OPEN SOURCE", title: "GirlScript Summer of Code", detail: "Selected contributor; worked on bug fixes and feature enhancements." },
  { label: "CERTIFICATIONS", title: "AI Impact Buildathon & Generative AI Mastermind", detail: "India AI Impact Buildathon 2026 (GUVI & HCL); Generative AI Mastermind covering prompt engineering and LLMs." },
  { label: "CLOUD AI", title: "AI Azure Internship", detail: "Four-week virtual internship under a Microsoft initiative with Edunet Foundation and AICTE (June–July 2025)." }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-[#080808] text-white border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="section-kicker">04 / MILESTONES</p>
        <h2 className="display-title mt-3 mb-12">Recognition &<br /><em>continuous learning.</em></h2>
        <div className="grid md:grid-cols-2 gap-px bg-white/[.08] border border-white/[.08]">
          {achievements.map((item, i) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * .04 }} viewport={{ once: true }}
              className="bg-[#0b0b0b] p-6 md:p-8">
              <p className="text-[10px] tracking-[.14em] text-neutral-600">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-[-.02em]">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-500 leading-7">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
