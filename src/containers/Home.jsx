import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';

import YouTube from 'react-youtube';
import { VideoPlayer } from '../components';



const theme = createTheme({
  palette: {
    primary: {
      main: '#ff1706',
    },

  },
});

// const videoId = 'qh_KhxQvu08';

const Home = () => {
  return (
    <>
      <div className="absolute h-screen w-screen bg-[url('https://img.nowrunning.com/content/movie/2010/Kaalo/bg4.jpg')] bg-cover bg-center filter brightness-50 -z-10"></div>
      <div className="flex justify-center items-center h-screen gap-20  z-20   " >

        <div className='flex flex-col p-20 md:w-9/12 '>
          <h1 className='font-bold text-8xl text-stone-50 ' >Wakanda Forever</h1>
          <h3 className='font-bold text-lg mt-5 text-stone-50' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt tenetur animi fugiat sit quidem, fuga architecto <br></br>blanditiis reprehenderit repellat totam quos fugit corporis enim aliquid amet, quasi harum nostrum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quisquam provident distinctio facere fuga ea autem incidunt! Incidunt assumenda, ratione eveniet, laborum neque, consectetur distinctio quos totam ipsum reprehenderit quod!
          </h3>
          <div className='flex gap-20 mt-10' >
            <ThemeProvider theme={theme}>
              <Button size='large' variant="contained">Watch Now</Button>
              <Button size='large' variant="outlined" >
                Watch Trailer
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className='md:flex hidden' >
          <img className='bg-cover bg-center size-2/3 rounded-3xl' src="https://img.indiaforums.com/media/640x0/11/2021-poster-of-the-movie-kaalo.jpg" alt="" srcset="" />
        </div>


        {/* <VideoPlayer videoId={videoId} /> */}
        
      </div>
    </>
  )
}

export default Home

