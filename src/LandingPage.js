import React, {useEffect, useState, useContext} from 'react';
import { AppBar, HomePage, Work, Contact, Experience, Certification, ResumeButton } from './components';

import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { UserContext } from './contexts/UserContext';

function LandingPage() {

  const {myData} = useContext(UserContext);
  
  let lastYOffset = 0;
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollZero, setScrollZero] = useState(true);
  
  const onScroll = (event) => {
    
    const yoff = window.pageYOffset;
    
    if (yoff === 0){
      setScrollUp(true);
      setScrollZero(true);
      lastYOffset = 0;
    }else{
      setScrollZero(false);
      if (yoff > lastYOffset){
        setScrollUp(false);
        lastYOffset = window.pageYOffset;
      }else{
        setScrollUp(true);
        lastYOffset = window.pageYOffset;
      }
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onScroll={onScroll} className="flex flex-col bg-light-1 px-4 md:px-20 items-center scroll-smooth gap-6">
      <div className="flex flex-col w-full items-center justify-center md:min-h-screen px-0 md:px-12 pt-24 md:pt-4">
        <AppBar scrolldown={!scrollUp} scrollZero={scrollZero}/>
        <ResumeButton/>
        <HomePage/>
      </div>
      <Work/>
      <Experience/>
      <Certification/>
      <Contact/>
      
      <div className='flex flex-col items-center'>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
          <a className="text-md text-darker-2 font-medium" href='mailto:surafel.mulaw@gmail.com'>
            {`surafelkindu01@gmail.com`}
          </a>
          <div className="text-md text-darker-2 font-medium">
            {`+2519 86 214 242`}
          </div>
          <div className="text-md text-darker-2 font-medium">
            {`Eritrea St. ${myData?.location}`}
          </div>
        </div>
        <div className="text-darker-2 flex justify-center mb-6 mt-2 text-md">
          Made with ❤ by <a href={`${myData?.github}`} className="ml-2 text-red-600 font-medium"> Surafel Kindu</a>
          </div>
      </div>

      <div className="hidden md:flex fixed z-200 bottom-0 left-0 flex-col justify-center items-center px-4 md:px-8 gap-6 min-h-screen">
        <div className="grow w-0.5 h-full bg-red-500 invisible md:visible md:mt-36 mb-2 bg-gradient-to-t from-slate-500 to-light-1 rounded-full"></div>
        {/* <div className="visible grow md:invisible"></div> */}

        <a href={`${myData?.github}`} className='w-6 h-6 group'>
          <FaGithub className='w-6 h-6 text-darker-2 group-hover:text-red-400 duration-300 group-hover:-mt-2'/>
        </a>

        <a href={`${myData?.instagram}`} className='w-6 h-6 group'>
          <FaInstagram className='w-6 h-6 text-darker-2 group-hover:text-red-400 duration-300 group-hover:-mt-2'/>
        </a>

        <a href={`${myData?.linkedin}`} className='w-6 h-6 group'>
          <FaLinkedinIn className='w-6 h-6 text-darker-2 group-hover:text-red-400 duration-300 group-hover:-mt-2'/>
        </a>

        <a href={`${myData?.twitter}`} className='w-6 h-6 group'>
          <FaTwitter className='w-6 h-6 text-darker-2 group-hover:text-red-400 duration-300 group-hover:-mt-2'/>
        </a>

        <div className="grow"></div>
      </div>

      <div className="hidden md:flex fixed z-0 bottom-0 right-0 flex-col justify-center items-center px-2 py-4 min-h-screen">
        <div className="grow"></div>
        <div className="rounded-full text-slate-500 rotate-90 font-roboto font-bold text-xl tracking-widest"> 2023 </div>
        <div className="grow w-0.5 h-full invisible md:visible bg-red-500 mt-10 bg-gradient-to-t from-light-1 to-slate-500 opacity-50 rounded-full"></div>
      </div>

    </div>
  );
}

export default LandingPage;
