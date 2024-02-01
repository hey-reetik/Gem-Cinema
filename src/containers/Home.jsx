import React, { useEffect, useState } from 'react'

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
  const [movieData,setMovieData] = useState({});
  
  useEffect(()=>{
    fetch("http://localhost:5000/movies",{
      method:'GET',
    }).then((response)=>{
      response.json().then((data)=>{
        setMovieData(data[0]);
      })
    })
  },[])

  return (
    <>
      <div className={`absolute h-screen w-screen  filter brightness-50 -z-10`}><img className='bg-cover bg-center object-cover w-full h-full ' src={`${movieData.bg_poster_url}`} alt="photo"  /></div>
      <div className="flex justify-center items-center h-screen gap-20  z-20   " >

        <div className='flex flex-col p-20 md:w-9/12 '>
          <h1 className='font-bold text-8xl text-stone-50 '>{movieData.name}</h1>
          <h3 className='font-bold text-lg mt-5 text-stone-50' >{
            movieData.description
          }
          </h3>
          <div className='flex gap-20 mt-10' >
            <ThemeProvider theme={theme}>
              <Button href='/movie/abc' size='large' variant="contained">Watch Now</Button>
              <Button size='large' variant="outlined" >
                Watch Trailer
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className='md:flex hidden' >
          <img className='bg-cover bg-center size-2/3 rounded-3xl' src={`${movieData.poster_url}`} alt="photo"  />
        </div>


        {/* <VideoPlayer videoId={videoId} /> */}
        
      </div>
    </>
  )
}

export default Home

