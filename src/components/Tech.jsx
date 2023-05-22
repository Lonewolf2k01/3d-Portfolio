import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion";



const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className={styles.sectionSubText}>What I have Experience working in</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>

      </motion.div>

      <div className='flex flex-row flex-wrap justify-center mt-8 gap-10'>
        {technologies.map((technology, index) => (
          <motion.div
            initial={{ y: -20 * index, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}        
      </div>

     
    </>
  )
}

export default SectionWrapper(Tech, "")