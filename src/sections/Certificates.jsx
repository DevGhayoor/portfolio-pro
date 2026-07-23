import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "Self Learning",
    year: "2024",
  },
  {
    title: "JavaScript Development",
    issuer: "Self Learning",
    year: "2025",
  },
  {
    title: "React.js Development",
    issuer: "Self Learning",
    year: "2026",
  },
  {
    title: "Tailwind CSS",
    issuer: "Self Learning",
    year: "2026",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-violet-500 transition"
            >
              <FaAward className="text-5xl text-yellow-400 mx-auto mb-5" />

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="text-gray-400 mt-2">{item.issuer}</p>

              <span className="inline-block mt-5 px-4 py-2 rounded-full bg-violet-600/20 text-violet-300 text-sm">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;