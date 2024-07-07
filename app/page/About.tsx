'use client'
import React from 'react'
import ToggleContent from '../components/Toggle';


const About: React.FC = () => {
  return (
    <section id='about' className='bg-gray-400 dark:bg-gray-900'>
      <div className='flex flex-col pt-16 pb-5 items-center'>
        <h5 className='bg-gray-300 dark:bg-gray-700 px-4 py-1 rounded-full mb-5 text-black dark:text-white'>About me</h5>
        <button className='bg-orange-500 p-2 rounded-full pl-9 pr-9'>
          <a
            href="/Frontend_TieuAnhKhoa.pdf"
            download="Frontend_TieuAnhKhoa.pdf"
          >Download CV</a>
        </button>
      </div>

      <div className='pb-10'>
        <ToggleContent />
      </div>

    </section>
  )
}

export default About;
