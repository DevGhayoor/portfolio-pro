import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaTimes,
} from "react-icons/fa";

import mobile from "../assets/images/mobile-shop.png";
import portfolio from "../assets/images/portfolio.png";
import dashboard from "../assets/images/dashboard.png";


function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: "Shakoor Mobile Shop",
      image: mobile,
      featured: true,
      description:
        "Modern mobile shop website with responsive UI, wishlist, cart, search, filtering and premium user experience.",
      tech: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
      github: "https://github.com/DevHGhayoor",
      live: "#",
    },{
  title: "Developer Portfolio",
  image: portfolio,
  featured: false,
  description:
    "Modern developer portfolio with animations, responsive design and premium UI components.",
  tech: [
    "React",
    "Framer Motion",
    "Tailwind CSS",
  ],
  github: "https://github.com/DevHGhayoor",
  live: "https://portfolio-8iby00exc-ghayoor-labs.vercel.app",
},
    {
      title: "Education Dashboard",
      image: dashboard,
      featured: false,
      description:
        "Analytics dashboard with charts, responsive layout and clean user interface.",
      tech: [
        "React",
        "Chart.js",
        "CSS",
      ],
      github: "https://github.com/DevHGhayoor",
      live: "#",
    },
  ];


  return (

    <section
      id="projects"
      className="relative bg-[#050816] py-24 px-6 overflow-hidden"
    >

      {/* Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"></div>



      <div className="max-w-7xl mx-auto relative z-10">


        <motion.h2

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="text-center text-5xl md:text-6xl font-black mb-6"

        >

          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

            My Projects

          </span>


        </motion.h2>



        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">

          Modern responsive web applications built with clean code,
          attractive UI and latest technologies.

        </p>




        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">


          {projects.map((project,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:60
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index*0.15
              }}

              whileHover={{
                y:-15
              }}

              className="
              group
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              hover:border-violet-500
              hover:shadow-[0_0_40px_rgba(139,92,246,.4)]
              transition
              "


            >



              <div className="relative">


                {project.featured && (

                  <div className="
                  absolute
                  top-4
                  left-4
                  z-10
                  flex
                  items-center
                  gap-2
                  bg-yellow-400
                  text-black
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-bold
                  ">

                    <FaStar/>
                    Featured

                  </div>

                )}



                <img

                  src={project.image}

                  alt={project.title}

                  className="
                  w-full
                  h-64
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                  "

                />


                <div className="
                absolute
                inset-0
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition
                flex
                items-center
                justify-center
                ">


                  <button

                    onClick={()=>setSelectedProject(project)}

                    className="
                    px-6
                    py-3
                    rounded-xl
                    bg-violet-600
                    text-white
                    font-semibold
                    "

                  >

                    View Details

                  </button>


                </div>


              </div>




              <div className="p-7">


                <h3 className="
                text-2xl
                font-bold
                text-white
                group-hover:text-violet-400
                transition
                ">

                  {project.title}

                </h3>



                <p className="mt-4 text-gray-400 leading-7">

                  {project.description}

                </p>



                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech,i)=>(

                    <span

                      key={i}

                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-violet-500/20
                      border
                      border-violet-500/30
                      text-violet-300
                      text-sm
                      "

                    >

                      {tech}

                    </span>

                  ))}

                </div>



                <div className="flex gap-4 mt-8">


                  <a

                    href={project.live}

                    className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-700
                    text-white
                    "

                  >

                    <FaExternalLinkAlt/>

                    Demo

                  </a>




                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-gray-600
                    hover:border-violet-500
                    text-white
                    "

                  >

                    <FaGithub/>

                    Code

                  </a>



                </div>


              </div>


            </motion.div>


          ))}


        </div>


      </div>




      {/* MODAL */}


      {selectedProject && (

        <div className="
        fixed
        inset-0
        z-50
        bg-black/70
        backdrop-blur-md
        flex
        items-center
        justify-center
        px-6
        ">


          <div className="
          max-w-lg
          w-full
          bg-[#111827]
          rounded-3xl
          p-8
          border
          border-white/10
          ">


            <button

              onClick={()=>setSelectedProject(null)}

              className="float-right text-white text-xl"

            >

              <FaTimes/>

            </button>



            <img

              src={selectedProject.image}

              className="rounded-xl mb-6"

            />



            <h3 className="text-3xl font-bold text-white">

              {selectedProject.title}

            </h3>



            <p className="text-gray-400 mt-4">

              {selectedProject.description}

            </p>



          </div>


        </div>

      )}



    </section>

  );

}


export default Projects;