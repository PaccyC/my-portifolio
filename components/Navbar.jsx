
 import React,{useEffect, useState} from 'react'
 import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMail,AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from  'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
 const Navbar = () => {
  const [nav,setNav]=useState(false)
  const [shadow,setShadow]=useState(false)
  const [navBg,setNavBg]=useState('#ecf0f3');
  const [linkColor,setLinkColor]=useState('#1f2937');
const router=useRouter();
  useEffect(()=>{

    if(router.asPath ==='/stockManager' ||
    router.asPath ==='/medical'
    ){
      setNavBg("transparent");
      setLinkColor("#ecf0f3")
    }
    else{
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937")
    }

  },[router])
  const handleShadow=()=>{
    if(window.scrollY>=90){
      setShadow(true)
    }
    else{
      setShadow(false)
    }
  }
  // window.addEventListener('scroll',handleShadow);

  const handleNav=()=>{
    setNav(!nav);
  }
   return (
     <div style={{ backgroundColor: `${navBg}`}} className={ shadow ?`w-full fixed shadow-xl h-20 z-[100]`:`w-full fixed h-20 z-[100]`}>
        <div className='flex justify-between items-center h-full w-full px-2 2xl:px-16'>
        <Image  src="/../public/assets/navLogo.png" width={125} height={50}/>

        <div className=''>
            <ul className='hidden md:flex'>

            <Link href='/#home'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contacts'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contacts</li>
            </Link>
            </ul>
        <div onClick={handleNav} className=' md:hidden' >
            <AiOutlineMenu size={25}/>
        </div>
        </div>
     </div>
     <div className={nav ? `md:hidden fixed top-0 w-full h-screen bg-black/70` : ''}>
     <div className={nav ? `fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen p-10 ease-in duration-500`:
                           `fixed top-0 left-[-100%] p-10 ease-in duration-500`
    }>
      <div >
        <div className='flex justify-between items-center w-full' >
            <Image src='/../public/assets/navLogo.png' width={87} height={50}/>
            <div className='shadow-lg shadow-gray-400 rounded-full cursor-pointer p-3' onClick={handleNav}>
                <AiOutlineClose/>
            </div>
        </div>
        <div className='border-b border-gray-300 my-4'>
        <p className='w-[85%] md:w-[90%] py-4'>
          Let's build something legendary</p>
        </div>
      </div>
      <div className='flex flex-col my-4'>
        <ul style={{color: `${linkColor}`}} className=' uppercase'>
          <Link href='/'>
          <li onClick={()=>setNav(false)} className=' text-sm py-3'>Home</li>
          </Link>
          <Link href='/'>
          <li onClick={()=>setNav(false)} className=' text-sm py-3'>About</li>
          </Link>
          <Link href='/#skills'>
          <li onClick={()=>setNav(false)} className=' text-sm py-3'>Skills</li>
          </Link>
          <Link href='/'>
          <li onClick={()=>setNav(false)} className=' text-sm py-3'>Projects</li>
          </Link>
          <Link href='/#contacts'>
          <li onClick={()=>setNav(false)} className=' text-sm py-3'>Contacts</li>
          </Link>
        </ul>

        <div className='pt-40'>
          <p className=' uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
          <div className='flex justify-between my-4 w-full sm:w-[80%]'>

          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
            <FaLinkedinIn/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
            <FaGithub/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
            <AiOutlineMail/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
            < BsFillPersonLinesFill/>
          </div>
          </div>
        </div>

      </div>

     </div>
     </div>
       
     </div>
   )
 }
 
 export default Navbar
 