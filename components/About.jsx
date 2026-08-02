import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    id='about' className='w-full px-[6%] sm:px-[12%] py-10
    scroll-mt-20 text-gray-900 dark:text-white'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}>
      <motion.h4
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-4xl sm:text-5xl font-Ovo'>About Me</motion.h2>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-10'>
        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        className='w-56 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
            <p className='mb-10 max-w-2xl text-sm sm:text-base'>I am a highly motivated entry-level Full Stack Developer
            passionate about crafting seamless user experiences and efficient
            server-side logic. With hands-on experience developing personal
            projects across the entire web stack, I am comfortable working with databases,
            APIs, and modern styling frameworks like Tailwind CSS. I am excited to kickstart
            my professional journey and contribute to high-impact development teams.</p>

            <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.li
                whileHover={{scale: 1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl
                p-6 cursor-pointer transition-all duration-500 ease-out
                hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]
                dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50'
                key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                     <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>
                        {title}
                     </h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.3, duration: 0.5}}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Skills Set</motion.h4>

            <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.5, duration: 0.6}}
            className='flex flex-wrap items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) => (
                    <motion.li
                    whileHover={{ scale : 1.1 }}
                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                    border-gray-400 rounded-lg cursor-pointer duration-500 ease-out hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]' 
                    key={index}>
                        <Image src={tool} alt={tool} className='w-5 sm:w-7'/>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
