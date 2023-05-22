import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <motion.section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${styles.heroHeadText} text-white`}>
            Hi!! I'm <span className='text-[#915EFF]'>Adarsh</span>
          </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8}}
            className={`${styles.heroSubText} mt-3 mb-3 text-white-100`}>
            I am a Full-Stack Developer <br className='sm:block hidden' />
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <div
        className="absolute xs:bottom-6 bottom-8 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2.5 h-2.5 rounded-full bg-secondary mb-1'
            >

            </motion.div>
          </div>
        </a>
      </div>

    </motion.section>
  )
}

export default Hero
