import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import Props from '../Components/Props';
import Vector1 from "../assets/vector.png";
import Vector2 from '../assets/vector1.png';
import vector3 from '../assets/vector3.png';
import vector5 from '../assets/vector5.png';
import vector6 from '../assets/vector6.png';
import vector7 from '../assets/vector7.png';
import vector8 from '../assets/vector8.png';
import vector9 from '../assets/vector9.png';
import vector10 from '../assets/vector10.png';
import vector11 from '../assets/vector11.png';
import vector12 from '../assets/vector12.png';
 

function Home() {
  return (
    <>
    <div className=' container w-full h-[200vh]'>
       <div className='p-40'>
        <h1 className='text-white text-3xl font-bold'>FIND MOVIES</h1>
        <h2 className=' text-3xl bg-gradient-to-r from-blue-800 to-red-500 text-transparent bg-clip-text font-semibold'>TV SHOWS AND MORE</h2>
       
       <div>
        <p className='text-gray-400  mt-4 w-[400px]'>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Temporibus architecto 
            ex sequi excepturi nobis quo nostrum sint? At, odit voluptatum 
            corporis soluta ab ullam perspiciatis et harum dolorem aperiam aut.</p>
            </div>
       
       <div className='border-2 border-white flex gap-5 items-center p-2 w-[200px] rounded-lg mt-4'>
       <IoLogoYoutube className='text-white rounded-md'/>
        <h2 className='text-white'>Watch Tutorial</h2>
       </div>
       </div>
       <div className=' px-40 justify-between flex'>
        <div className='flex gap-5 items-center '>
       <FaFireAlt className='text-yellow-200 ' />
       <h2 className='text-white font-bold'>Trending</h2>
       </div>
       <div>
        <p className='text-white'>See more</p>
       </div>
       </div>
       <div className='w-[100%] justify-center items-center flex gap-5 lg:px-40 mt-5 '>
        <div className='w-[16%] h-[40vh]  border-box border-2 border-red-400 mt-5'>
          <div>
            <img src={Vector1} alt=""></img>
          </div>
          <Props text="Guardians of the galaxy"></Props>
        </div>
        <div className='w-[16%] h-[40vh] border-box  border-2 border-red-400 mt-5 '>
          <img src={Vector2}>
          </img>
          <Props text="Shazam"></Props>
        </div>
        <div className='w-[16%]  h-[40vh]  border-box border-2 border-red-400 mt-5'>
        <img src={vector3}>
          </img>
          <Props text="Dungeons"></Props>
        </div>
        <div className='w-[16%]  h-[40vh] border-box border-2 border-red-400 mt-5'>
        <img src={vector5}>
          </img>
        <Props text="Tyler Pierry's Sister"></Props>
        </div>
        <div className='w-[16%]  h-[40vh]  border-box border-2 border-red-400 mt-5'>
        <img src={vector6}>
          </img>
          <Props text="The Cube"></Props>
        </div>
        <div className='w-[16%]  h-[40vh] border-box  border-2 border-red-400 mt-5'>
        <img src={vector7}>
          </img>
          <Props text="The cube"></Props>
        </div>

       </div>
       <div className='w-[100%] justify-center items-center flex  gap-5 lg:px-40 '>
        <div className='w-[20%] h-[40vh]  border-box border-2 border-red-400 mt-5'>
        <img src={vector8}>
          </img>
        </div>
        <div className='w-[20%] h-[40vh]  border-box  border-2 border-red-400 mt-5'>
        <img src={vector9}>
          </img>
        </div>
        <div className='w-[20%]  h-[40vh]  border-box  border-2 border-red-400 mt-5'>
        <img src={vector10}>
          </img>
        </div>
        <div className='w-[20%]  h-[40vh]  border-box  border-2 border-red-400 mt-5'>
        <img src={vector11}>
          </img>
        </div>
        <div className='w-[20%]  h-[40vh]  border-box  border-2 border-red-400'>
        <img src={vector12}>
          </img>
        </div>
        <div className='w-[20%]  h-[40vh]  border-box border-2 border-red-400'>
          division 1
        </div>

       </div>
       <div className='text-white'>

     <Props text='pivot' img="vector.png"></Props>
     </div>

    </div>
    </>
  )
}

export default Home