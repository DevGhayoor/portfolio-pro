import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function Loader() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);


    return () => clearTimeout(timer);

  }, []);



  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{
            opacity:1
          }}

          exit={{
            opacity:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-[#050816]
          "

        >


          <div className="text-center">


            <motion.div

              animate={{
                rotate:360
              }}

              transition={{
                duration:1.2,
                repeat:Infinity,
                ease:"linear"
              }}

              className="
              w-24
              h-24
              rounded-full
              border-4
              border-violet-500
              border-t-transparent
              mx-auto
              "

            />



            <motion.h1

              animate={{
                opacity:[0.5,1,0.5]
              }}

              transition={{
                duration:1.5,
                repeat:Infinity
              }}

              className="
              mt-8
              text-4xl
              font-black
              text-white
              "

            >

              Ghayoor<span className="text-violet-500">.</span>

            </motion.h1>



            <p className="
            mt-3
            text-gray-400
            ">

              Full Stack Developer

            </p>


          </div>


        </motion.div>

      )}

    </AnimatePresence>

  );

}


export default Loader;