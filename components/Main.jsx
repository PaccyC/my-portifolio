import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from  'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Main = () => {
  return (
    <div id='home' className='h-screen text-center w-full'>
      <div className=' max-w-[1240px] w-full h-full flex mx-auto p-2 justify-center items-center'>
        <div>
           <p className=' uppercase text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>   
           <h1 className=' text-gray-700'>Hi, I'm <span className=' text-[#5651e5]'>Paccy</span></h1>
           <h1 className='py-2 text-gray-700'>A Back-end Web Developer</h1>
           <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I'm a backend developer who is highly committed in creating best secure applications using 
            exceptional knowledge that I have but also 
            I do Front-end and I really know new texhnologies used in front-end web development.  
           </p>

           <div className='flex justify-between items-center max-w-[330px] py-4 m-auto'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
            <FaLinkedinIn/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
            <FaGithub/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
            <AiOutlineMail/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
            <BsFillPersonLinesFill/>
          </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Main
