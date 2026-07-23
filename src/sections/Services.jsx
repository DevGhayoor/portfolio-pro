import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={35} />,
    title: "Website Development",
    desc: "Modern, responsive and fast websites using React & Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt size={35} />,
    title: "Responsive Design",
    desc: "Websites that work perfectly on mobile, tablet and desktop.",
  },
  {
    icon: <FaPaintBrush size={35} />,
    title: "UI / UX Design",
    desc: "Beautiful interfaces with smooth user experience.",
  },
  {
    icon: <FaRocket size={35} />,
    title: "Performance Optimization",
    desc: "Fast loading websites optimized for SEO and speed.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#050816] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          My Services
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Services I provide for businesses and personal brands.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
            >

              <div className="text-violet-500 flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;