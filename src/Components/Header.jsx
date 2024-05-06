import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
         <div className="flex h-16 items-center justify-between  z-10 bg-black w-full top-0">
          <div   className="md:flex md:items-center md:gap-12">
            <h2 className='block text-white font-semibold text-3xl lg:p-20'>Movies Brazer</h2>              
          </div>
          <div className='hidden md:block'>
            <nav>
            <ul className="flex items-center gap-6  text-xl">
            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/"> Home </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/explore"> Explore </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/genre"> Genre </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/news"> News </Link>
            </li>
            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/movies">Movies </Link>
            </li>
            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/tvShows"> TV Shows </Link>
            </li>
          </ul> 
            </nav>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header