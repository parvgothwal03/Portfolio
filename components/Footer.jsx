import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 text-gray-900 dark:text-white'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-45 mx-auto mb-1' />

        <div className='w-max max-w-full flex items-center justify-center gap-2 mx-auto text-sm sm:text-base'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            parvgothwal0310@gmail.com
        </div>
      </div>

        <div className='text-center sm:flex items-center justify-between 
        border-t border-gray-400 mx-[5%] sm:mx-[10%] mt-12 py-6'>
            <p className='text-sm sm:text-base'>&copy; 2026 Parv Gothwal. All rights reserved.</p>
            <ul className='flex flex-wrap items-center gap-4 sm:gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a href='https://github.com/parvgothwal03' target='_blank' rel='noopener noreferrer'>
                        Github
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/parv-gothwal' target='_blank' rel='noopener noreferrer'>
                        Linkedin
                    </a>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Footer
