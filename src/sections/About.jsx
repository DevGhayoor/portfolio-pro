import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  const stats = [
    {
      number: "10+",
      title: "Projects Completed",
    },
    {
      number: "2+",
      title: "Years Learning",
    },
    {
      number: "100%",
      title: "Responsive Design",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0b1120] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-violet-500 blur-3xl opacity-40 rounded-full"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-72 md:w-96 rounded-3xl border-2 border-violet-500 shadow-[0_0_50px_rgba(139,92,246,.5)]"
              />

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-violet-400 font-semibold uppercase tracking-widest">
              About Me
            </span>

            <h3 className="mt-4 text-4xl font-bold text-white">
              Frontend React Developer
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              I'm Ghayoor Khan, a passionate web developer focused on
              creating modern, responsive and high-performance websites.
              I enjoy building clean user interfaces and transforming
              ideas into professional web experiences.
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <FaGraduationCap className="text-violet-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    BS Computer Science
                  </h4>
                  <p className="text-gray-400">
                    Currently expanding my knowledge in software development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaLaptopCode className="text-violet-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Frontend Development
                  </h4>
                  <p className="text-gray-400">
                    HTML, CSS, JavaScript, React, Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaRocket className="text-violet-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Goal
                  </h4>
                  <p className="text-gray-400">
                    Building premium websites for international clients.
                  </p>
                </div>
              </div>

            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "Tailwind",
                "HTML",
                "CSS",
                "Git",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-violet-500 text-violet-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="inline-block mt-10 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition-all text-white font-semibold"
            >
              Let's Work Together
            </a>

          </motion.div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-violet-500 transition"
            >
              <h3 className="text-5xl font-bold text-violet-400">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;