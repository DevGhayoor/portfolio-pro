import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-violet-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500 text-violet-300 text-sm">
            🟢 Available For Freelance
          </span>

          <h2 className="mt-8 text-gray-300 text-xl">
            Hello, I'm
          </h2>

          <h1 className="mt-2 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Ghayoor <br />
            <span className="text-violet-500">Khan</span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-cyan-400 h-10">
            <Typewriter
              words={[
                "Frontend React Developer",
                "Responsive Website Expert",
                "UI / UX Designer",
                "Freelancer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <p className="mt-6 max-w-xl text-gray-400 leading-8">
            I build modern, responsive and high-performance websites
            using React, JavaScript and Tailwind CSS with clean code
            and premium user experience.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 hover:shadow-[0_0_35px_rgba(139,92,246,.6)] transition-all duration-300 px-7 py-4 rounded-xl text-white font-semibold"
            >
              Hire Me
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-violet-500 hover:bg-violet-600 hover:shadow-[0_0_35px_rgba(139,92,246,.6)] transition-all duration-300 px-7 py-4 rounded-xl text-white font-semibold"
            >
              Download CV
              <FaDownload />
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/DevHGhayoor"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-white hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-3xl text-gray-400 hover:text-blue-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-violet-600 blur-3xl opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-72 md:w-[420px] rounded-full border-4 border-violet-500 shadow-[0_0_60px_rgba(139,92,246,.6)]"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >

        <a href="#about">

          <div className="w-7 h-12 border-2 border-violet-400 rounded-full flex justify-center">

            <div className="w-1.5 h-3 bg-violet-400 rounded-full mt-2"></div>

          </div>

          <p className="text-gray-400 text-sm mt-2">
            Scroll Down
          </p>

        </a>

      </motion.div>

    </section>
  );
}

export default Hero;