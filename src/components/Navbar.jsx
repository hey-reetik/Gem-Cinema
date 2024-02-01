import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute z-20 w-full'>

      <div className='flex justify-between gap-96 px-10 ' >
        <div className=' md:flex font-bold text-2xl hidden ' >Gem Cinema</div>
        <div className='flex gap-10 font-bold text-2xl ' >
          <Link>Home</Link>
          <Link>Movies</Link>
          <Link>About</Link>

        </div>

      </div>
    </div>
  )
}

export default Navbar
