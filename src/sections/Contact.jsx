import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";


function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");



  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_hp4f9h2",
      "template_fof8s8y",
      form.current,
      "Hm-JAjotW69CMAvKs"
    )

    .then(() => {

      setStatus("success");
      form.current.reset();

    })

    .catch(() => {

      setStatus("error");

    })

    .finally(() => {

      setLoading(false);

    });

  };



  return (

    <section
      id="contact"
      className="
      relative
      bg-[#050816]
      py-24
      px-6
      overflow-hidden
      "
    >


      <div className="
      absolute
      top-0
      left-0
      w-96
      h-96
      bg-violet-600/20
      blur-[130px]
      rounded-full
      " />


      <div className="
      absolute
      bottom-0
      right-0
      w-96
      h-96
      bg-cyan-500/20
      blur-[130px]
      rounded-full
      " />



      <div className="
      max-w-7xl
      mx-auto
      grid
      lg:grid-cols-2
      gap-16
      relative
      z-10
      ">



        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

        >


          <p className="
          text-violet-400
          font-semibold
          tracking-widest
          mb-4
          ">
            CONTACT ME
          </p>



          <h2 className="
          text-5xl
          md:text-6xl
          font-black
          text-white
          leading-tight
          ">

            Let's Build

            <span className="text-violet-500">
              {" "}Something Amazing
            </span>

          </h2>



          <p className="
          mt-6
          text-gray-400
          leading-8
          max-w-lg
          ">

            Have a project idea? 
            Send me a message and let's create a modern,
            responsive and professional web experience.

          </p>



          <div className="
          mt-10
          space-y-6
          ">


            <ContactInfo
              icon={<FaEnvelope />}
              text="ghayoormastoi1531@gmail.com"
            />


            <ContactInfo
              icon={<FaGithub />}
              text="github.com/DevHGhayoor"
            />


            <ContactInfo
              icon={<FaLinkedin />}
              text="linkedin.com/in/ghayoor-mastoi-6280373a5"
            />


          </div>


        </motion.div>




        {/* FORM */}


        <motion.form

          ref={form}

          onSubmit={sendEmail}

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          "

        >


          <input

            type="text"

            name="user_name"

            placeholder="Your Name"

            required

            className="
            w-full
            mb-6
            p-4
            rounded-xl
            bg-black/30
            text-white
            border
            border-white/10
            outline-none
            focus:border-violet-500
            transition
            "

          />



          <input

            type="email"

            name="user_email"

            placeholder="Your Email"

            required

            className="
            w-full
            mb-6
            p-4
            rounded-xl
            bg-black/30
            text-white
            border
            border-white/10
            outline-none
            focus:border-violet-500
            transition
            "

          />



          <textarea

            name="message"

            rows="6"

            placeholder="Your Message"

            required

            className="
            w-full
            mb-6
            p-4
            rounded-xl
            bg-black/30
            text-white
            border
            border-white/10
            outline-none
            focus:border-violet-500
            transition
            resize-none
            "

          />



          <button

            disabled={loading}

            className="
            w-full
            flex
            justify-center
            items-center
            gap-3
            bg-violet-600
            hover:bg-violet-700
            py-4
            rounded-xl
            text-white
            font-semibold
            transition
            "

          >

            {
              loading ?

              <>
                <FaSpinner className="animate-spin"/>
                Sending...
              </>

              :

              <>
                <FaPaperPlane/>
                Send Message
              </>
            }


          </button>



          {
            status==="success" &&

            <p className="
            mt-5
            flex
            items-center
            gap-2
            text-green-400
            ">

              <FaCheckCircle/>
              Message sent successfully!

            </p>

          }



          {
            status==="error" &&

            <p className="
            mt-5
            text-red-400
            ">

              Failed to send message.

            </p>

          }


        </motion.form>



      </div>


    </section>

  );

}



function ContactInfo({icon,text}){

  return (

    <div className="
    flex
    items-center
    gap-4
    text-gray-300
    ">

      <span className="
      text-violet-400
      text-xl
      ">
        {icon}
      </span>

      <span>
        {text}
      </span>


    </div>

  );

}


export default Contact;