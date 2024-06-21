import React from 'react'
import Link from 'next/link'
import About from '../about/page'

export default function Header() {
  return (
      <nav className='bg-cyan-300 flex justify-end rounded-xl'>
        <div className='flex border-r me-2 items-center'>
              <Link href={"/about"}>
                <p className='p-4 hover:bg-gray-700 w-full transition duration-500 ease-in-out'>About</p>
              </Link>
              <Link href={"/experience"} className=' '>
                <p className='p-4 hover:bg-gray-700 w-full transition duration-500 ease-in-out'>Experience</p>
              </Link>
              <Link href={"/project"} className=' '>
                <p className='p-4 hover:bg-gray-700 w-full transition duration-500 ease-in-out'>Project</p>
              </Link>
              <Link href={"/contact"} className=' '>
                <p className='p-4 hover:bg-gray-700 w-full transition duration-500 ease-in-out'>Contact</p>
              </Link>
        </div>

        <button className='bg-red-50 rounded-2xl ps-4 pe-4 m-3'>Dowload CV</button>
      </nav>
  )
}
