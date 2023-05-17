import Aboutme from './components/Aboutme'
import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './components/Skills'
import Work from './components/work'
import History from './components/History'
import { Inter } from 'next/font/google'
import {  useState , useEffect , useRef } from 'react'
import { useInView } from 'react-intersection-observer';
 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [IsVisible, setIsVisible] = useState(false);
  const { ref : about, inView : isAboutVisible  } = useInView();

  useEffect(() => {
    setIsVisible(isAboutVisible);
  }, [isAboutVisible]);

  return (
    <main>
      <Header  />
      <div  style={{
        width: '90vw',
        overflow: 'hidden',
        marginLeft:'3vw'
    }}>
         <hr
        style={{
            backgroundColor: 'gray',
            height: 1.4,
            width: '100vw',
            position: 'relative',
            marginBottom:'3vh'
        }}
    />
    <div className='relative'>
    <p className="marquee">
  <span className='font-bold' > Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop  -&nbsp;</span>
</p>
<p className="marquee marquee2">
  <span className='font-bold'> Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop • Discover • Design • Develop  -&nbsp;</span>
</p>
    </div>
   
<hr
        style={{
            backgroundColor: 'gray',
            height: 1.4,
            width: '100vw',
            position: 'relative',
            marginTop:'10vh',
        }}
        className='block  mb-0 sm:mb-24'
    />
    </div>
      <Aboutme ref={about} IsVisible={IsVisible} />
      <Work   />
      <History />
      <Skills />
      <Footer />
    </main>
  )
}

