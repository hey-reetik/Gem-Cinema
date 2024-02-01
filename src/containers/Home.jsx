import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff1706',
    },

  },
});

const Home = () => {
  return (
  <>
   
    <div className="flex justify-center items-center h-screen gap-20 bg-[url('@assets/bg.jpg')] bg-cover bg-center bg-opacity-50 filter brightness-50 " >
        
      <div className='flex flex-col p-20 md:w-9/12 '>
        <h1 className='font-bold text-8xl' >Wakanda Forever</h1>
        <h3 className='font-bold text-lg mt-5 ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt tenetur animi fugiat sit quidem, fuga architecto <br></br>blanditiis reprehenderit repellat totam quos fugit corporis enim aliquid amet, quasi harum nostrum.
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
        <img className='bg-cover bg-center size-2/3 rounded-3xl' src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg" alt="" srcset="" />
      </div>
    </div>
    </>
  )
}

export default Home

