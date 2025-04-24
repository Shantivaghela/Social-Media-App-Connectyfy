import { assets } from '@/assets/assets'
import { useAuth } from '@/context/Admincontext'
import React from 'react'

function Adminprofile() {
  const {user} = useAuth();
  return (
    <>
      <section className=" px-5 pb-5 rubik flex flex-col items-center justify-center">


        <h1 className='text-2xl dark:text-white font-bold'>Profile</h1>
        <div className="mt-4 w-full flex flex-col gap-4">
          <span className="flex dark:text-white">Admin UserName :- <p className="pl-2">{user.username}</p></span>
          <span className="flex dark:text-white">Admin Email :- <p className="pl-2">{user.email}</p></span>
          <ul>
            <li className=' dark:text-gray-100 '>Developers :-
              <div className='flex  justify-evenly items-center'>
                <div className="flex flex-col justify-center items-center">
                  <img src={assets.profileIcon} alt="" className='h-[110px] w-[110px] rounded-full ' />
                  <h1 className="dark:text-white text-sm">Nidhi Trivedi</h1>
                  <p className="dark:text-white text-[11px]">Web Developer</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={assets.profileIcon} alt="" className='h-[110px] w-[110px] rounded-full ' />
                  <h1 className="dark:text-white text-sm">Parth Nandha</h1>
                  <p className="dark:text-white text-[11px]">Web Developer</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={assets.profileIcon} alt="" className='h-[110px] w-[110px] rounded-full ' />
                  <h1 className="dark:text-white text-sm">Shanti Vaghela</h1>
                  <p className="dark:text-white text-[11px]">Web Developer</p>
                </div>

              </div>
            </li>

          </ul>
          <button  className="mt-6 dark:text-white py-2 rounded-lg text-white hover:bg-blue-400  bg-[#48a6a6]" fullWidth>
            Update Profile
          </button>
        </div>
      </section>
      <section className="px-5 pb-5 rubik fle hidden flex-col items-center justify-center">


        <h1 className='text-2xl dark:text-white font-bold'>Profile</h1>
        <div className="mt-4 w-full flex flex-col gap-4">
          <span className="flex dark:text-white">Admin UserName :- <input type="text" className="dark:bg-transparent border-2 border-black/50 rounded-md ml-3" /></span>
          <span className="flex dark:text-white">Admin Email :- <input type="email" className="dark:bg-transparent border-2 border-black/50 rounded-md ml-3" /></span>
          <ul>
            <li className=' dark:text-gray-100 '>Developers :-
              <div className='flex  justify-evenly items-center'>
                <div className="flex flex-col justify-center items-center">
                  <label htmlFor="pimage">
                  <input id='pimage' type="file" className='hidden' />
                   <img src={assets.profileIcon} alt="" className='h-[110px] w-[110px] rounded-full ' />
                  </label>
                  <h1 className="dark:text-white text-sm">Nidhi Trivedi</h1>
                  <p className="dark:text-white text-[11px]">Web Developer</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={assets.profileIcon} alt="" className='h-[110px] w-[110px] rounded-full ' />
                  <h1 className="dark:text-white text-sm">Parth Nandha</h1>
                  <p className="dark:text-white text-[11px]">Web Developer</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={assets.profileIcon} alt="" className='h-[110px] w-[110px] rounded-full ' />
                  <h1 className="dark:text-white text-sm">Shanti Vaghela</h1>
                  <p className="dark:text-white text-[11px]">Web Developer</p>
                </div>

              </div>
            </li>

          </ul>
          <button className="mt-6 dark:text-white py-2 rounded-lg text-white hover:bg-blue-400  bg-[#48a6a6]" fullWidth>
            Update Profile
          </button>
        </div>
      </section>
    </>
  )
}

export default Adminprofile
