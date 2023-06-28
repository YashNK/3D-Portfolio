import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles } from '../styles'
import { navLinks } from '../constants'
import {logo, menu , close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return(
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}> 
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/"
        className='flex items-center gap-2'
        onClick={() => {
        setActive("")
        window.scrollTo(0,0);
        }}>
          <img src={logo} alt='logo' className='w-8 object-contain'  />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Yash Kamnani &nbsp; 
            <span className='sm:block hidden'>| Web Developer</span>
            </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li key={Link.id}
            className={`${active === Link.title
            ? "text-white" 
            : "text-secondary" } 
            hover:text-white text-[18px] font-medium cursor pointer`}
            onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[20px] h-[20px] obect-contain curson-pointer' onClick={() => setToggle(!toggle)} />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-0 mx-4 my-1 min-w-[100px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-ens items-start flex-col gap-4'>
          {navLinks.map((Link) => (
            <li key={Link.id}
            className={`${active === Link.title
            ? "text-white" 
            : "text-secondary" } 
            font-poppins text-white text-[16px] font-medium cursor pointer`}
            onClick={() => {setActive(Link.title);
            setToggle(!toggle);}}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
     </div>

    </nav>
  )
}

export default Navbar