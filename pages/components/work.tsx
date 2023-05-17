import React, { useEffect , useState} from 'react';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import link from './Content/link.svg';
import Image from 'next/image';
import { getAllProjects } from '../../public/extras/client'
import { useInView } from 'react-intersection-observer';




const Work = () => {

  const [items, Setitems] = useState<any | null>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAllProjects();
        Setitems(result)
      } catch (error) {
        console.error('Error fetching projects:', error);
        // handle error here
      }
    }
    fetchData();
  }, []);
  

  const { ref : about, inView : isAboutVisible  } = useInView();

  
  return (
    <>
      <section id='employee-section'>
        <div className='flex flex-col mt-12  mb-12 sm:mb-20 overflow-x-hidden' >
          <Grid className='ml-8vw mb-12 sm:mb-12 lg:mb-10 flex flex-row'>
            <p className='mr-4 text-2xl sm:text-3xl lg:text-4xl font-medium'> Recent Work </p>
            <div 
            ref={about}
            className={`${isAboutVisible ? 'animateRocket' : null} rocket`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </div>
          </Grid>
          <div className='hidden lg:block'>
          <motion.div drag='x' dragConstraints={{ right:0 , left : -1500 }}>
            <div className='ml-40vw sm:ml-35vw lg:ml-45vw flex flex-row'>
              {items.map((project : any, ) => (
                <Grid key={project.id} sx={{ marginRight : '3vw' }}>
                  <div className='image-container mb-3 cursor-grab relative w-70vw sm:w-96'>
                    <img
                    key={project.id}
                      alt={`image-${project.id}`}
                      src={project.imageUrl}
                      className="rounded-md pointer-events-none w-full h-52 sm:h-56 lg:h-56 object-cover"
                    />
                    <div className='project-link flex flex-row justify-between text-white'>
                      <h1>{project.title}</h1>
                      <a target='null' href={project.projectLink}>
                        <Image className="mr-3" src={link} alt="Vercel" width={24} height={24}  />
                      </a>
                    </div>
                  </div>
                  <h3 className='font-semibold mb-1 text-transparent'>{project.description}</h3>
                </Grid>
              ))}
            </div>
          </motion.div>
          </div>
          <div className='hidden sm:block lg:hidden'>
          <motion.div drag='x' dragConstraints={{ right:0 , left : -1800 }}>
            <div className='ml-40vw sm:ml-35vw lg:ml-45vw flex flex-row'>
              {items.map((project : any, ) => (
                <Grid key={project.id} sx={{ marginRight : '3vw' }}>
                  <div className='image-container mb-3 cursor-grab relative w-70vw sm:w-96'>
                    <img
                    key={project.id}
                      alt={`image-${project.id}`}
                      src={project.imageUrl}
                      className="rounded-md pointer-events-none w-full h-52 sm:h-56 lg:h-56 object-cover"
                    />
                    <div className='project-link flex flex-row justify-between text-white'>
                      <h1>{project.title}</h1>
                      <a target='null' href={project.projectLink}>
                        <Image className="mr-3" src={link} alt="Vercel" width={24} height={24}  />
                      </a>
                    </div>
                  </div>
                  <h3 className='font-semibold mb-1 text-transparent'>{project.description}</h3>
                </Grid>
              ))}
            </div>
          </motion.div>
          </div>
          <div className='block sm:hidden'>
          <motion.div drag='x' dragConstraints={{ right:0 , left : -1220 }}>
            <div className='ml-40vw sm:ml-35vw lg:ml-45vw flex flex-row'>
              {items.map((project : any, ) => (
                <Grid key={project.id} sx={{ marginRight : '3vw' }}>
                  <div className='image-container mb-3 cursor-grab relative w-70vw sm:w-96'>
                    <img
                    key={project.id}
                      alt={`image-${project.id}`}
                      src={project.imageUrl}
                      className="rounded-md pointer-events-none w-full h-52 sm:h-56 lg:h-56 object-cover"
                    />
                    <div className='project-link flex flex-row justify-between text-white'>
                      <h1>{project.title}</h1>
                      <a target='null' href={project.projectLink}>
                        <Image className="mr-3" src={link} alt="Vercel" width={24} height={24}  />
                      </a>
                    </div>
                  </div>
                  <h3 className='font-semibold mb-1 text-transparent'>{project.description}</h3>
                </Grid>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;


/*

[
    {
      id: 1,
      title: "Slide 1",
      image: "https://picsum.photos/id/1018/800/400",
      link: "https://picsum.photos/id/1018/800/400",
    },
    {
      id: 2,
      title: "Slide 2",
      image: "https://picsum.photos/id/1015/800/400",
      link: "https://picsum.photos/id/1015/800/400",
    },
    {
      id: 3,
      title: "Slide 3",
      image: "https://picsum.photos/id/1019/800/400",
      link: "https://picsum.photos/id/1019/800/400",
    },
    {
      id: 4,
      title: "Slide 4",
      image: "https://picsum.photos/id/1019/800/400",
      link: "https://picsum.photos/id/1019/800/400",
    },
  ];



  import { GetStaticProps } from 'next';
import { getAllProjects } from '../client';

interface Props {
  projects: any[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getAllProjects();
  return { props: { projects } };
};


{ projects }: Props




const items = [
  {
    id: 1,
    title: "Slide 1",
    image: "https://picsum.photos/id/1018/800/400",
    link: "https://picsum.photos/id/1018/800/400",
  },
  {
    id: 2,
    title: "Slide 2",
    image: "https://picsum.photos/id/1015/800/400",
    link: "https://picsum.photos/id/1015/800/400",
  },
  {
    id: 3,
    title: "Slide 3",
    image: "https://picsum.photos/id/1019/800/400",
    link: "https://picsum.photos/id/1019/800/400",
  },
  {
    id: 4,
    title: "Slide 4",
    image: "https://picsum.photos/id/1019/800/400",
    link: "https://picsum.photos/id/1019/800/400",
  },
];







  const [items, Setitems] = useState<any>([]);

  useEffect(() => {
    getAllProjects()
      .then((result) => {
        Setitems(result);
        console.log(items);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        // handle error here
      });
  }, []);

*/