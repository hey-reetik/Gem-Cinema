import React, { useEffect, useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';

import YouTube from 'react-youtube';
import { VideoPlayer } from '../components';



const Movies = () => {

    const backgroundImageUrl1 = 'https://i.ibb.co/XLtSbv2/upcoming-bg.png';

    const backgroundImageUrl2 = 'https://i.ibb.co/w74ZgJP/movie-detail-bg.png';
    return (
        <>
            <div className={`absolute h-screen w-screen  filter brightness-50 -z-10 bg-gray-800`}>
                <section className=' flex justify-center items-center w-screen  bg-cover bg-center h-screen' style={{ backgroundImage: `url(${backgroundImageUrl1})` }} >
            

                </section>



                <section className='flex justify-center items-center w-screen h-screen bg-cover bg-center  ' style={{ backgroundImage: `url(${backgroundImageUrl2})` }} >
                    <h1>Hello</h1>
                </section>


            </div>
        </>
    )
}

export default Movies

