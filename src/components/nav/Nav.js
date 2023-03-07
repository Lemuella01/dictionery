import React, { useState } from 'react'
import { BiBook} from 'react-icons/bi';
import DarkMode from './DarkMode';
// import { AiOutlineDown} from 'react-icons/ai';
import Font from './Font';

const Nav = () => {

  
  return (
    <div className='flex justify-between px-96 w-full'> 
      <div className=" text-5xl   text-gray-400 "><BiBook/> </div>
      <div className=" flex">
      
  
        <Font/>
    
        <DarkMode />
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia illo a excepturi quaerat! Dignissimos repudiandae magni, blanditiis ut quia autem sit nostrum commodi eveniet, possimus quaerat at reprehenderit facilis.</h1>
    </div>

  )
}

export default Nav