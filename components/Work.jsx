import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[6%] sm:px-[12%] py-10 scroll-mt-20 text-gray-900 dark:text-white'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
       whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>

      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className='text-center text-4xl sm:text-5xl font-Ovo'>My Projects</motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base'>
        Welcome to my web development portfolio! Explore a Collection of projects showcasing
        my experience in full stack development.
      </motion.p>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className='grid grid-cols-auto md:grid-cols-2 xl:grid-cols-3 my-10 gap-6 dark:text-black'>
        {workData.map((project, index) => (
          <motion.a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          key={index} 
          className='aspect-square overflow-hidden rounded-lg relative cursor-pointer group
          shadow-sm transition-transform duration-500 hover:scale-[1.02] bg-white block'
          style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className='bg-white w-[90%] sm:w-10/12 rounded-md absolute bottom-3 sm:bottom-5 left-1/2
            -translate-x-1/2 py-3 px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 duration-500 group-hover:bottom-4 sm:group-hover:bottom-7'>
            <div>
              <h2 className='font-semibold'>{project.title}</h2>
              <p className='text-sm text-gray-700'>{project.description}</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square
            flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <Image src={assets.send_icon} alt='send icon' className='w-5'/>
             </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      <motion.a
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 1.1, duration: 0.5}}
      href='' className='w-max flex items-center justify-center gap-2 text-gray-700
      border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-15 hover:bg-[#fcf4ff] duration-500
      dark:text-white dark:border-white dark:hover:bg-[#2a004a]/50'>
        Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow'
        className='w-4'/>
      </motion.a>
      </motion.div>
  )
}

export default Work
