import React from 'react'
import icon1 from '../../public/extras/icon1.png'
import icon2 from '../../public/extras/icon2.png'
import icon3 from '../../public/extras/icon3.png'
import Image from 'next/image'
import Link from 'next/link';


const Footer : React.FC = () => {
  return (
    <div
     className='mt-32  h-full'>
      <div className='bg-black w-screen h-24 flex flex-row justify-around items-center'>
        <div className='text-white hidden sm:block'>© Faiz Shariff 2023</div>
        <div className='flex flex-row'>
        <Link href="https://www.instagram.com/shariff9794/">
        <Image
    key={`row1`}
    src={icon1}
    alt='Avatar'
    width={0}
    height={0}
    sizes='100vw'
    className='w-fit h-8 sm:h-8 lg:h-10 mx-3 sm:mx-4 lg:mx-2'
  />
  </Link>
  <Link href="mailto:faizshariff540@gmail.com" passHref>
   <Image
    key={`row2`}
    src={icon2}
    alt='Avatar'
    width={0}
    height={0}
    sizes='100vw'
    className='w-fit h-8 sm:h-8 lg:h-10 mx-3 sm:mx-4 lg:mx-2'
  />
    </Link>
    <Link href="https://www.linkedin.com/in/faiz-shariff/">
   <Image
    key={`row3`}
    src={icon3}
    alt='Avatar'
    width={0}
    height={0}
    sizes='100vw'
    className='w-fit h-8 sm:h-8 lg:h-10 mx-3 sm:mx-4 lg:mx-2'
  />
  </Link>
        </div>
      </div>
     </div>
  )
}

export default Footer