import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "Frontend React Developer",
    desc: "Building modern responsive websites using React, Tailwind CSS and JavaScript.",
  },
  {
    year: "2025",
    title: "UI/UX Designer",
    desc: "Designed clean, modern and responsive user interfaces.",
  },
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Started learning HTML, CSS, JavaScript and modern web technologies.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <span className="text-violet-400 font-bold">{item.year}</span>
              <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;