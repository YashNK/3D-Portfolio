import React, { PureComponent, useState } from 'react'
import { SectionWrapper } from '../hoc'
import { instagram } from '../assets'
import { github } from '../assets'
import linkedin  from '../assets/linkedin.png'
const Links = () => {
const [isHovering, setIsHovering] = useState(false);

const handleMouseOver = () => {
    setIsHovering(true);
};

const handleMouseOut = () => {
    setIsHovering(false);
  };

  return(
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='relative w-full h-[70px] flex justify-center items-center bg-gray-900'>
        <div className=''>
            <img src={github} className='w-8 cursor-pointer' alt='github' onClick={() => window.open("https://github.com/YashNK")}/>
        </div>
        <div className='ml-10 mr-10'>
            <img src={instagram} className='w-8 cursor-pointer' onClick={() => window.open("https://www.instagram.com/yash_kamnani/")}/>
        </div>
        <div className=''>
            <img src={linkedin} className='w-8 cursor-pointer'/>
        </div>

        
      </div>
    )
}

export default Links