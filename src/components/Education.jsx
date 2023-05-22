import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <motion.div className='flex justify-center items-center w-full h-full'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.78, delay: 0.1 }}

        >
          <img src={education.icon} alt={education.name}
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
        <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {education.name}
        </p>
      </motion.div>

      <motion.ul
        initial={{ y: 30 , opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.78, delay: 0.1 }}
        className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <motion.li
            
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>

    </VerticalTimelineElement>
  )


}

const Education = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>

      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {
            education.map((education, index) => (
              <EducationCard
                key={index}
                education={education}
              />
            ))
          }
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Education, "education")