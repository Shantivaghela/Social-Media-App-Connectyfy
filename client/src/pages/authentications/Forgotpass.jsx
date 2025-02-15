import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

function Forgotpass(props) {
  // const [authpage, setAuthpage] = useState("login");
  const [show,setShow] = useState(false)
  
  return (
    <>
      {/* <div className={`${props.view == 3 ? "block" : "hidden"} rounded-xl md:rounded-none w-full md:w-[50%] justify-center md:h-full h-screen bg-white flex flex-col items-center dark:bg-gray-900 `}> */}
        <div className={`${props.view == 3 ? "block" : "hidden"} w-full items-center flex flex-col`}>
          <div className={` mb-4`}>
            <h1 className='dark:text-white border-b-3 border-[#48a6a6] text-3xl '>Forgot Password</h1>
          </div>


          <form className="w-[80%] h-[80%] mx-auto ">

            <div className="mb-5">
              <label htmlFor="Femail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="Femail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Submit</button>
          </form>

          {/* <div className="w-full flex justify-start items-center gap-7 ml-20 md:ml-27 mt-4">
            
            <Link to="#" onClick={() => { setAuthpage(1) }} className='hover:text-[#48a6a6] dark:text-white'>
              Login
            </Link>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Forgotpass
