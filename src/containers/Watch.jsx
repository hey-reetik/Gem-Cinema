import React, { useEffect, useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';

import YouTube from 'react-youtube';
import { VideoPlayer } from '../components';





const videoId = 'Yk2WmwXekQE';


   

const Watch = () => {
 

  return (
    <>
     <div className={`absolute h-screen w-screen  filter brightness-50 -z-10`}><img className='bg-cover bg-center object-cover w-full h-full ' src={"https://img.nowrunning.com/content/movie/2010/Kaalo/bg4.jpg"} alt="photo"  /></div>
      <div className='flex justify-center items-center h-screen' >
         <VideoPlayer videoId={videoId} />
      </div>
    </>
  )
}

export default Watch

