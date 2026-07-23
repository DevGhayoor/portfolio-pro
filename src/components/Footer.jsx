import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";


function Footer() {

  return (

    <footer className="
    relative
    bg-[#050816]
    border-t
    border-white/10
    py-12
    px-6
    overflow-hidden
    ">


      {/* Glow */}

      <div className="
      absolute
      -top-20
      left-1/2
      -translate-x-1/2
      w-96
      h-96
      bg-violet-600/20
      blur-[120px]
      rounded-full
      " />



      <div className="
      max-w-7xl
      mx-auto
      relative
      z-10
      ">



        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          grid
          md:grid-cols-3
          gap-10
          "

        >



          {/* Logo */}

          <div>


            <h2 className="
            text-3xl
            font-black
            text-white
            ">

              Ghayoor<span className="text-violet-500">.</span>

            </h2>


            <p className="
            mt-4
            text-gray-400
            leading-7
            ">

              Full Stack Developer creating modern,
              responsive and scalable web experiences.

            </p>


          </div>





          {/* Navigation */}


          <div>


            <h3 className="
            text-white
            font-bold
            text-xl
            mb-5
            ">

              Quick Links

            </h3>


            <div className="
            space-y-3
            text-gray-400
            ">


              <a href="#home" className="block hover:text-violet-400 transition">
                Home
              </a>


              <a href="#about" className="block hover:text-violet-400 transition">
                About
              </a>


              <a href="#projects" className="block hover:text-violet-400 transition">
                Projects
              </a>


              <a href="#contact" className="block hover:text-violet-400 transition">
                Contact
              </a>


            </div>


          </div>





          {/* Social */}


          <div>


            <h3 className="
            text-white
            font-bold
            text-xl
            mb-5
            ">

              Connect

            </h3>



            <div className="
            flex
            gap-4
            ">


              <SocialIcon
                icon={<FaGithub/>}
                link="https://github.com/DevHGhayoor"
              />


              <SocialIcon
                icon={<FaLinkedin/>}
                link="https://linkedin.com/in/ghayoor-mastoi-6280373a5"
              />


              <SocialIcon
                icon={<FaEnvelope/>}
                link="mailto:ghayoormastoi1531@gmail.com"
              />


            </div>


          </div>



        </motion.div>





        {/* Bottom */}


        <div className="
        border-t
        border-white/10
        mt-10
        pt-6
        text-center
        text-gray-400
        text-sm
        ">


          <p>

            © {new Date().getFullYear()} Ghayoor Khan.
            Built with <FaHeart className="inline text-red-500 mx-1"/>
            using React.

          </p>


        </div>



      </div>


    </footer>

  );

}





function SocialIcon({icon,link}){


  return (

    <a

      href={link}

      target="_blank"

      rel="noreferrer"

      className="
      w-12
      h-12
      rounded-xl
      bg-white/5
      border
      border-white/10
      flex
      items-center
      justify-center
      text-gray-300
      text-xl
      hover:text-white
      hover:bg-violet-600
      hover:-translate-y-2
      transition
      "

    >

      {icon}

    </a>

  );

}


export default Footer;