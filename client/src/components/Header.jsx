import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contextAPI/index.jsx';
import DarkMode from './DarkMode';

function Header() {
  const theme = document.getElementById("theme").className
  const [Mode, setMode] = useState(theme)

  const { isLoggedIn } = useAuth();

  const modeHandl = () => {

    setMode(Mode === "dark bodyDark" ? "light" : "dark bodyDark");

  }
  useEffect(() => {
    document.body.className = Mode;
  }, [Mode])

  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-screen top-0 z-13 ">
      <div className=" flex  items-center justify-between mx-auto px-5 py-4 ">
        <div>
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={assets.logo} className="h-9" alt="Flowbite Logo" />
            {/* <img src={assets.connectyfy} className="h-6 md:h-11 " alt="Flowbite Logo" /> */}
            <h1 className='roboto-condensed text-2xl dark:text-white'>Connectyfy</h1>

          </Link>
        </div>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium  flex flex-co float-right text-sm md:text-lg  md:p-0 border border-gray-100 rounded-lg  md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className=''>
              <Link to="#" onClick={modeHandl} className=" md:hidden  block  py-1 md:py-2 px-2 md:px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className={`${Mode === "light" ? 'fa-solid fa-moon fa-lg' : 'fa-solid fa-sun fa-lg'} hover:text-[#2973b2] fa-solid fa-envelope fa-xl text-[#48a6a6] `}></i>

              </Link>
            </li>
            <li>
              <NavLink to="/notification" className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} block rounded-sm px-3 py-1 md:py-2 md:px-3   hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}><i className="hover:text-[#2973b2] fa-solid fa-bell fa-xl transition delay-120 duration-300 ease-in-out"></i></NavLink>
            </li>
            <li>
              <NavLink to="/message" className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} md:block hidden px-2 py-1 md:py-2 md:px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}><i className="hover:text-[#2973b2] fa-solid fa-envelope fa-xl   transition delay-50 duration-300 ease-in-out"></i></NavLink>
            </li>

            

              {isLoggedIn ?
                (
                  <li>
                  <NavLink to="/profile" className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} block px-3 py-1 md:py-2 md:px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} ><i className="hover:text-[#2973b2] fa-solid fa-circle-user fa-xl   transition delay-120 duration-300 ease-in-out"></i></NavLink>
                  </li>
                ) : (
                  <li>
                  <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} block px-3 py-1 md:py-2 md:px-1   rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} ><span className='border-2 border-[#48a6a6] rounded-sm hover:border-[#2973b2] px-2 py-1 transition delay-120 duration-300 ease-in-out'>Login</span></NavLink>
                  </li>
                )}
            

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header
