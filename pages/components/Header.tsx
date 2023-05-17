import React , {useState} from 'react'
import Image from 'next/image'
import avatar from './Content/avatar.png'
import { Button } from '@mui/material'
import resume from './Content/resume.svg'
import call from './Content/call.svg'
import useDownloader from 'react-use-downloader';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion'




const Header : React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event?: any , reason?: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  const [copySuccess, setCopySuccess] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(true);
    navigator.clipboard.writeText(phoneNumber);
    setCopySuccess(true);
  };

  const phoneNumber = '+91-9620964210';

  const { download } = useDownloader();

  const fileUrl = 'http://localhost:3000/resumepdf.pdf'
  const filename = 'resumepdf.pdf';

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  const slideInDownVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };



  return (
    <>

<div className="relative h-96 mb-0 sm:mb-8 md:mb-12 lg:mb-24 xl:mb-12">

  <motion.div
   initial="hidden"
   animate="visible"
   variants={slideInDownVariant}
   transition={{ duration: 1, delay: 0.2 }}
  >

    <div className="absolute top-20 md:top-28 lg:top-32 left-12 md:left-24 z-10">
      <div className="relative w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden">
      <Image
            src={avatar}
            alt="Avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
      </div>
    </div>

    <div className="hidden lg:block min-w-screen-xl  top-0 left-0 right-0 h-28 md:h-48 lg:h-52 bg-no-repeat bg-cover bg-center bg-[url('../pages/components/Content/background.png')]"></div>


    <div className="absolute top-40 md:top-64 lg:top-64 pt-0 md:pt-0 lg:pt-4 left-10 md:left-24">
      <h1 className="text-xl md:text-3xl font-bold text-black Header-Title">Faiz Shariff</h1>
      <p className="pt-1vh text-base md:text-lg text-gray-400">User-centric Software Designer and Developer</p>
    </div>


    </motion.div>

 {/* Buttons */}

 <div className="absolute top-18rem sm:top-19rem md:top-19rem lg:top-19rem pt-0 md:pt-0 lg:pt-4 left-5 md:left-2/3 lg:left-2/3 flex flex-row ">
        <Button
        className='rubberBand'
        onClick={() => download(fileUrl, filename)}
          sx={{
            marginRight: {
              xxs: '15vw', // small phone
              xs: '15vw', // phone
              sm: '2vw', // tablets
              md: '2vw', // small laptop
              lg: '3vw', // desktop
              xl: '3vw', // l
            },
            color: 'black',
            borderColor: 'black',
          }}
          variant="outlined"
        >
          <Image className="mr-3" src={resume} alt="Resume" width={12} height={12} priority />
          Resume
        </Button>
        <div>
    <button
      className='rubberBand header-button w-28 rounded-md text-center justify-center align-middle flex'
      onClick={handleClick}
    >
      <Image
        className='mr-3'
        src={call}
        alt='Vercel'
        width={12}
        height={12}
        priority
      />
      Call
    </button>
    {copySuccess &&  <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Number Copied to clipboard"
        action={action}
      /> }
  </div>
    </div>
  </div>

  </>
  )
}

export default  Header
