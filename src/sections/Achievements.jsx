import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaCode, FaRocket } from "react-icons/fa";

const data = [
  {
    icon: <FaProjectDiagram />,
    number: "15+",
    title: "Projects Completed",
  },
  {
    icon: <FaCode />,
    number: "20K+",
    title: "Lines of Code",
  },
  {
    icon: <FaLaptopCode />,
    number: "10+",
    title: "Technologies",
  },
  {
    icon: <FaRocket />,
    number: "100%",
    title: "Passion",
  },
];

function Achievements() {
  return (
    <section className="py-24 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-16">
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {data.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="text-5xl text-violet-400 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-black">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;