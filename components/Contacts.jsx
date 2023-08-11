import React from 'react'
import Image from 'next/image'
import contactImage from '../public/assets/contact.jpg'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from  'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
const Contacts = () => {
  return (
    <div id='contacts' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className=' text-xl tracking-widest uppercase text-[#5651e5]'>Contacts</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className=' grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className=' lg:p-4 h-full'>
                <div>
                    <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImage} alt="" />
                </div>
                <div>
                    <h2 className='py-2'>Name Here</h2>
                    <p>Back-End Web developer </p>
                    <p className='py-4'>I am available for freelance position.Contact me and let's talk</p>
                </div>
            
            <div>
                <p className=' uppercase pt-8'>Connect with Me</p>
                <div className='flex items-center justify-between py-4'>
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

          {/* Right */}
          <div className=' col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 '>
           
            <div className='p-4'>
              
                <form>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                        <label htmlFor="" className='uppercase text-sm py-2'>Name</label>
                        <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex'/>
                        </div>
                        <div className='flex flex-col'>
                        <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
                        <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex'/>
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                    <label htmlFor="" className='uppercase text-sm py-2'>Email</label>
                        <input type="email" className='border-2 rounded-lg p-3 border-gray-300 flex'/>
                    </div>
                    <div className="flex flex-col py-2">
                    <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
                        <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex'/>
                    </div>
                    <div className="flex flex-col py-2">
                    <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-b rounded-lg p-3 border-gray-300' rows="10"></textarea>
                    </div>
                    <button className='p-4 w-full text-gray-100 mt-4'>SEND MESSAGE</button>
                </form>
            </div>
           </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link href='' >
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500'>

                <HiOutlineChevronDoubleUp size={30} className=' text-[#5651e5]'/>
                </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Contacts
