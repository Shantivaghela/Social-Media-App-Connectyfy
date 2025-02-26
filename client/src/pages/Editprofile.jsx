import React from 'react'
import { assets } from '../assets/assets'

function Editprofile() {
  return (
    <>
     <section className='flex mt-22   mb-12 pb-2 bg-white md:ml-[25%] flex-col dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>
        <div className="flex justify-center items-center w-full">
        <span className='text-3xl border-b-2 border-[#48a6a6] dark:text-white'>edit profile</span>
        </div>
        <div className="">
            <div className="w-full h-full">
                <img src={assets.demos} alt="" className='h-[43%] w-full' />
            </div>
        </div>
    </section> 
    </>
  )
}

export default Editprofile
