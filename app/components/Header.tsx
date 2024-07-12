import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const menuItems = [
  { link: '#about', text: 'About' },
  { link: '#experience', text: 'Experience' },
  { link: '#project', text: 'Project' },
  { link: '#contact', text: 'Contact' },
];

const Header: React.FC = () => {
  return (
    <div className='flex justify-between fixed container text-black dark:text-white top-0 bg-gray-400 dark:bg-gray-950 z-10'>
      <div className='m-4 ms-5 cursor-pointer'>
        <Link href={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </Link>
      </div>

      <nav className='flex'>{
        menuItems.map((item, index) => (
          <MenuItem key={index} link={item.link} text={item.text} />
        ))
      }
        <ThemeSwitch />
      </nav>
    </div>

  );
}

export default Header;