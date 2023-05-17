import React from 'react';
import Image from 'next/image';

import logo1 from './Content/logo1.png';
import logo2 from './Content/logo2.png';
import logo3 from './Content/logo3.png';
import logo4 from './Content/logo4.png';
import logo5 from './Content/logo5.png';
import logo6 from './Content/logo6.png';
import logo7 from './Content/logo7.png';
import logo8 from './Content/logo8.png';
import logo9 from './Content/logo9.png';
import logo10 from './Content/logo10.png';
import logo11 from './Content/logo11.png';
import logo12 from './Content/logo12.png';
import logo13 from './Content/logo13.png';
import logo14 from './Content/logo14.png';
import logo15 from './Content/logo15.png';
import logo16 from './Content/logo16.png';
import logo17 from './Content/logo17.png';
import logo18 from './Content/logo18.png';
import { useInView } from 'react-intersection-observer';



const logos1 = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];




const logos2 = [
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const logos3 = [
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
];







const Skills: React.FC = () => {

  const { ref : about, inView : isAboutVisible  } = useInView();



  
const cardset2 =  <>{logos2.map((logo ,i) => (
  <div
  key={`row2-${i}`}
  ref={about}
  className={`${ isAboutVisible ? 'zoomIn' : null }`}
  >
  <Image
    src={logo}
    alt='Avatar'
    width={0}
    height={0}
    sizes='100vw'
    className='w-fit h-8 sm:h-12 lg:h-12 mx-2 sm:mx-4 lg:mx-6'
  />
  </div>
))}
</>

const cardset3 = <> {logos3.map((logo , i) => (
  <div
  key={`row3-${i}`}
  ref={about}
  className={`${ isAboutVisible ? 'zoomIn' : null }`}
  >
  <Image
    src={logo}
    alt='Avatar'
    width={0}
    height={0}
    sizes='100vw'
    className='w-fit h-8 sm:h-12 lg:h-12 mx-2 sm:mx-4 lg:mx-6'
  />
  </div>
))}</>


const cardset1 =  <>{logos1.map((logo , i) => (
  <div
  key={`row1-${i}`}
  ref={about}
  className={`${ isAboutVisible ? 'zoomIn' : null }`}
  >
  <Image
    src={logo}
    alt='Avatar'
    width={0}
    height={0}
    sizes='100vw'
    className='w-fit h-8 sm:h-12 lg:h-12 mx-2 sm:mx-4 lg:mx-6'
  />
  </div>
))}
</>





  return (
    <div className='mt-40 sm:mt-12 sm:h-full'>
      <div className='logo-outer w-full' >
        <div className=' flex flex-col items-center'>
          <div
          className={` logo-slide  flex flex-row mb-2 items-center sm:mb-6 lg:mb-8`}>
            {cardset1}
          </div>
          <div className='logo-slide flex flex-row-reverse items-center mb-2 sm:mb-6 lg:mb-8'>
            {cardset2}
          </div>
          <div className='logo-slide flex flex-row items-center'>
            {cardset3}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;



















