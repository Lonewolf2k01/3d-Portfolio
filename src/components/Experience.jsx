import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <motion.div className='flex justify-center items-center w-full h-full'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.78, delay: 0.1 }}
          
        >
          <img src={experience.icon} alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.78, delay: 0.1 }}
      >
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </motion.div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <motion.li
            initial={{ y: 10 * index, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.78, delay: 0.1 }}
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </motion.li>
        ))}
      </ul>

    </VerticalTimelineElement>
  )


}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>

      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              />
            ))
          }
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")