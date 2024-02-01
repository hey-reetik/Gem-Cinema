import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute z-20 w-full mt-5'>

      <div className='flex justify-between gap-96 px-10 text-stone-50' >
        <div className=' md:flex font-bold text-2xl hidden ' >Gem Cinema</div>
        <div className='flex gap-10 font-bold text-2xl ' >
          <Link className='hover:text-red-500' > Home </Link>
          <Link className='hover:text-red-500' >Movies</Link>
          <Link className='hover:text-red-500'>About</Link>

        </div>

      </div>
    </div>
  )
}

export default Navbar
