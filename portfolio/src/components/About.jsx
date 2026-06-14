import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🎓",
    title: "Education",
    desc: "B.Tech in Artificial Intelligence & Machine Learning\nABES Engineering College\n2023 - 2027",
  },
  {
    emoji: "💻",
    title: "Problem Solving",
    desc: "Solved 600+ DSA problems across multiple platforms.",
  },
  {
    emoji: "🏆",
    title: "Achievements",
    desc: "2nd Prize Winner at IMS Ghaziabad Web-a-thon.",
  },
  {
    emoji: "🚀",
    title: "Hackathons",
    desc: "Smart India Hackathon Participant and national-level competitions.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#0B1020] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 font-semibold tracking-wider mb-3">
              ABOUT ME
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Passionate About Building
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                Impactful Technology
              </span>
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              I'm Aparna Singh, a B.Tech student specializing in Artificial
              Intelligence & Machine Learning at ABES Engineering College.
            </p>

            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              I enjoy building full-stack applications, exploring AI, solving
              challenging DSA problems, and participating in hackathons that
              push me beyond my comfort zone.
            </p>

            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              My goal is to create innovative products that solve real-world
              problems and contribute meaningfully to the future of technology.
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{card.emoji}</div>

                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>

                <p className="text-slate-400 whitespace-pre-line">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
