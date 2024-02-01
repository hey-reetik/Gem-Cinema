import React, { useEffect, useState } from 'react'

import { VideoPlayer } from '../components';
import { useParams } from 'react-router-dom';
   

const Watch = () => {

  const [videoId,setVideoId] = useState(null);
  const [bg,setBg] = useState('');
  const {id} = useParams('id');

useEffect(()=>{
 fetch(`http://localhost:5000/movie/${id}`).then((res)=>{
  res.json().then((data)=>{
      setVideoId(data.movie_url)
      setBg(data.bg_poster_url);
  })
 })
},[])

  return (
    <>
     <div className={`absolute h-screen w-screen  filter brightness-50 -z-10`}><img className='bg-cover bg-center object-cover w-full h-full ' src={`${bg}`} alt="photo"  /></div>
      <div className='flex justify-center items-center h-screen' >
         <VideoPlayer videoId={videoId} />
      </div>
    </>
  )
}

export default Watch

