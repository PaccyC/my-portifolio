import React from 'react'
import Image from 'next/image'
const Skills = () => {
  return (
    <div id='skills' className=' lg:h-screen w-full p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
     <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
     <h1 className='py-4'>What I can do</h1>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/html.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>HTML</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/css.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>CSS</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/html.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>HTML</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/javascript.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>JavaScript</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/firebase.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>FIREBASE</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/node.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>Nodejs</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/mongo.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>MongoDB</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/react.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>React</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/nextjs.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>Next</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/github1.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>Github</h3>
                </div>
            </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src='/../public/assets/skills/tailwind.png' width={50} height={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3>TailwindCSS</h3>
                </div>
            </div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Skills
