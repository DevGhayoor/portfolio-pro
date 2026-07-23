import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "services",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;
        const height = element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-2xl shadow-2xl border-b border-violet-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: .95 }}
          className="cursor-pointer select-none"
        >
          <h1 className="text-4xl font-black tracking-wide">

            <span className="text-white transition">
              Gha
            </span>

            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,.9)]">
              Yoor
            </span>

            <span className="text-violet-500">.</span>

          </h1>
        </motion.a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-9">

          {links.map((link) => (

            <li
              key={link.name}
              className="relative group"
            >

              <a
                href={link.href}
                className={`font-medium transition duration-300 ${
                  active === link.href.replace("#", "")
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>

              <span
                className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 ${
                  active === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10"
        >

          <ul className="py-6 px-8 space-y-6">

            {links.map((link) => (

              <li key={link.name}>

                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg transition ${
                    active === link.href.replace("#", "")
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>

              </li>

            ))}

          </ul>

        </motion.div>

      )}

    </nav>
  );
}

export default Navbar;