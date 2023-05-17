import React from 'react';
import Gif from './Content/Gif.gif'
import Image from 'next/image';
import {  forwardRef } from 'react';

interface AboutmeProps {
  IsVisible: boolean;
}

const Aboutme = forwardRef<any, AboutmeProps>(({ IsVisible }, about ) => {

  return (
    <>
    <div ref={about} className={`${ IsVisible ? 'fadeIn' : null }`}>
     <div  className='flex justify-center items-center mt-10 sm:mt-0'>
    <div className='block sm:hidden ml-8 sm:ml-16 md:ml-20 lg:ml-52 h-160  lg:h-screen '>
       <h1 className="text-4xl md:text-7xl text-transparent outline">About<span> </span><br className='block sm:hidden' /> <span className='text-black'>Me</span></h1>
       <div className='ml-35vw sm:ml-96 lg:ml-128 mt-0 sm:mt-4 lg:mt-12 mr-4'>
       <Image
       priority={true}
            src={Gif}
            alt="Avatar"
            width={0}
            height={0}
            sizes='100vw'
            className="w-fit h-28  sm:h-48 lg:h-60 rounded-full"
          />
       </div>
       <div className='description mt-8 sm:mt-12 lg:mt-24 w-11/12 sm:w-3/4 lg:w-3/4 mr-6 sm:mr-0'>
        <p>
        Im a tech-savvy individual who loves staying up-to-date with the latest technology trends, living life one code commit at a time. A developer and sometimes a designer who is always on the lookout for new challenges and creative ways to solve problems . 
I excel in crafting web apps , desktop apps and mobile application and i am well equipped with latest frameworks like Nextjs , tailwind css , etc . My goal is to help others and grow in the process
        </p>
       </div>
    </div>
    </div>
      <div className='hidden sm:flex gap-5 justify-items-start justify-center flex-col sm:flex-row mt-8 sm:mt-8 lg:mt-8 w-screen h-screen sm:h-128 rounded-3xl'>
        <div  className='hidden ml-3 sm:ml-8 h-80 sm:h-112 p-8 sm:pl-12 rounded-3xl description abt-bg w-11/12 sm:w-6/12 lg:w-6/12'>
          <h1 className='mt-1 sm:mt-8 mb-8 sm:mb-16 sm:text-5xl  lg:text-7xl text-white About-title leading-10'>
            <span>About Me</span>
          </h1>
          <p className='w-11/12w-5/6 text-white sm:leading-6 lg:leading-6 text-xs sm:text-base lg:text-lg'>
          Im a tech-savvy individual who loves staying up-to-date with the latest technology trends, living life one code commit at a time . A developer and sometimes a designer who is always on the lookout for new challenges and creative ways to solve problems . 
I excel in crafting web apps , desktop apps and mobile application and i am well equipped with latest frameworks like Nextjs , tailwind css , etc . my goal is to help others and grow in the process
          </p>
        </div>
        <div className='flex flex-col  gap-2 sm:gap-5 '>
          <div className='div-one h-44 w-30vw ml-4 sm:ml-0 rounded-3xl'></div>
          <div className='div-two  grid items-center h-64 w-30vw rounded-3xl text-center '>
            Responsive
            <br />
             Code
          </div>
        </div>
      </div>
      </div>
    </>
  );
})

export default Aboutme;
