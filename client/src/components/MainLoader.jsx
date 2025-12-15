import React from 'react'
import { assets } from '../assets/assets'
import '../loder.css';


function MainLoader() {
  return (
    <>
      <section className=' h-screen w-screen flex flex-col gap-3 justify-center items-center'>
        <div className="flex justify-center items-center relative">

        <img className='h-40 w-40  md:h-50 md:w-50 z-1' src={assets.logo1} alt="" />
        <div className="h-41  w-41 md:h-51 md:w-51 border-t-4 z-6 border-5 border-t-black  border-black/30 animate-spin rounded-[70%] absolute"></div>
        </div>
        <span className='text-md '>Loading
            <span className='animate-ping'>.</span>
            <span className='animate-ping'>.</span>
            <span className='animate-ping'>.</span>
            <span className='animate-ping'>.</span>
            
        </span>
      </section>
    </>
  )
}

export default MainLoader
