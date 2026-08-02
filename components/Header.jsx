import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-[92%] sm:w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col
    items-center justify-center gap-4 px-2 text-gray-900 dark:text-white'>
      <motion.div 
      initial={{scale: 0}}
      whileInView={{scale:1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-24 sm:w-32' />  
      </motion.div>
      <motion.h3
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
       className='flex items-end justify-center gap-2 text-xl sm:text-2xl mb-3 font-Ovo'>
            Hi! I am Parv Gothwal <Image src={assets.hand_icon} alt='' className='w-6' />
        </motion.h3>
        <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='text-3xl sm:text-5xl lg:text-[66px] font-Ovo leading-tight'>
           Full Stack Web Developer based in Delhi, India.
        </motion.h1>
        <motion.p
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo text-sm sm:text-base px-2'>
            I am a Full stack Web Developer with experience in 
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto'>
            <motion.a
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href='#contact'
            className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2 dark:bg-transparent'>
            Contact Me <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} alt='' 
            className='w-4' /> </motion.a>

            <motion.a
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href='/Parv_Gothwal.pdf' download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
            bg-white text-gray-900 dark:text-black dark:border-white/50'>
            My Resume<Image src={assets.download_icon} alt='' 
            className='w-4' /> </motion.a>
        </div>
    </div>
  )
}

export default Header
