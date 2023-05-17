import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';


const History = () => {

  const { ref : about, inView : isAboutVisible  } = useInView();
  const { ref : about2, inView : isAboutVisible2  } = useInView();
  const { ref : about3, inView : isAboutVisible3  } = useInView();


  return (
    <div className='h-368 sm:h-128 m-4 mt-16 mb-16 flex flex-col justify-center  text-center'>
        <div className='mb-12 text-2xl'><h1>Work History</h1></div>
 <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor:'green'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <div 
          ref={about}
          className={`${ isAboutVisible ? 'slideInRight' : null}`}
          >
          <Typography variant="h6" >
            Urban Gifts
          </Typography>
          <Typography sx={{ color: 'grey' ,}} component="span">
            Wordpress Developer
          </Typography>
          <br />
          <Typography variant='caption' >I solved complex issues at Urban Gifts by
creating an E-commerce site to help them reach their target 
audience and constantly updating and maintaining the site. this experience provided me with a wealth of 
knowledge that has enhanced my capabilities</Typography>
           </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor : 'blue'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <div 
          ref={about2}
          className={`${ isAboutVisible2 ? 'slideInLeft' : null}`}
          >
          <Typography variant="h6" >
            TechKit
          </Typography>
          <Typography sx={{ color: 'grey' ,}} component="span">
          Frontend Engineer
          </Typography>
          <br />
          <Typography variant='caption'  >
          At Techkit I had the opportunity to successfully utilize my 
skills to design & develop a top-tier online presence for the 
company with the help of nextjs , sanity and tailwind css ,therefore making it possible to attract a larger audience and 
new potential customers
          </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor:'red'}}  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <div 
          ref={about3}
          className={`${ isAboutVisible3 ? 'slideInRight2' : null}`}
          >
          <Typography variant="h6" >
          Fiverr , Upwork & Others
          </Typography>
          <Typography sx={{ color: 'grey' ,}} component="span">
          Freelance Developer 
          </Typography>
          <br />
          <Typography  variant='caption' > 
          Freelancing as a developer taught me valuable skills in NFT sites, landing pages, and project management. It was an awesome experience that enhanced my skills and understanding of the field
          </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  )
}

export default History


/*



*/