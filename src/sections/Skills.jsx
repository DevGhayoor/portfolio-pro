import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      level: 95,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      level: 92,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "text-yellow-400",
      level: 88,
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
      level: 90,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-red-500",
      level: 80,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-white",
      level: 85,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "text-violet-500",
      level: 88,
    },
    {
      name: "UI / UX",
      icon: <FaFigma />,
      color: "text-pink-500",
      level: 75,
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#050816] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white mb-5"
        >
          My Skills
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, responsive and
          high-performance web applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-4">

                <div className={`text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>

                <span className="text-violet-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.name}
              </h3>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                  }}
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;