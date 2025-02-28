import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link,useNavigate } from 'react-router-dom'

function Editprofile() {
  const [show, setShow] = useState(false)
  let navigate = useNavigate();
  return (
    <>
      <section className='flex mt-22 relative mb-12 pb-2 bg-white md:ml-[25%] flex-col dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>
        <div className="flex justify-center items-center w-full pt-5 relative flex-col">
        <button onClick={() => navigate(-1)} className='dark:text-white cursor-pointer w-full px-3'><i className="fa-solid fa-arrow-left fa-xl float-left"></i></button>
          <span className='text-3xl border-b-2 border-[#48a6a6] dark:text-white'>Edit Profile</span>
        </div>
        <div className="relative h-full mt-5">
            <Link className='h-[80px] w-[80px] bg-gray-500/50 z-2 absolute p-2 flex rounded-xl justify-center items-center hover:bg-gray-400/50 text-white hover:text-[#48a6a6]'><i class="fa-solid fa-pen fa-flip-horizontal fa-lg"></i></Link>
          <img src={assets.demos} alt="" className='h-[250px]  w-full object-cover absolute z-0 ' />

          <div className="relative  mt-45 z-3 ">
            <Link className='ml-5 mt-5 h-[30px] w-[30px] bg-gray-500/50 absolute  p-2 flex rounded-full justify-center items-center hover:bg-gray-400/50 text-white hover:text-[#48a6a6]'><i class="fa-solid fa-pen fa-flip-horizontal fa-md"></i></Link>
            <img src={assets.demoimg} alt="photo" className='z-3 h-30 w-30 shadow-xl border-2 border-white rounded-full ml-3 mb-20 object-cover' />

          </div>


          <form class="max-w-xl mx-auto px-5">
            <div class="mb-5 flex  justify-between">
              <div className="w-[45%]">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Update name" required />
              </div>
              <div className="w-[45%]">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@Connectyfy.com" required />
              </div>
            </div>
            <div className="mb-5">

              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            </div>
            <div class="mb-5">
              <label htmlFor="Lpassword" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Update password</label>
              <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input type={`${show ? 'text' : 'password'}`} id="Lpassword" className="focus:outline-none w-full" required placeholder='password' />
                <Link onClick={() => { setShow(!show) }}>
                  {!show && <i class="fa-solid fa-eye-slash"></i>}
                  {show && <i class="fa-solid fa-eye"></i>}
                </Link>
              </div>
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Update</button>
            </form>

        </div>
      </section>
    </>
  )
}

export default Editprofile
