import React from 'react'
import { NavLink } from 'react-router-dom'

function Bottommenu() {
    return (
        <>
            <section>


                <nav className="bg-white items-center  border-gray-200 dark:bg-gray-900 md:hidden block fixed bottom-0 w-[100%] justify-center">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">


                        <div className="items-center justify-center w-full h-10 hb-20 flex md:w-auto md:order-1 " id="navbar-user">
                            <ul className="flex w-full  font-medium items-center justify-between  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink to="/profile" className={({ isActive }) => `${isActive ? "rounded-full text-white  bg-[#48a6a6] border-5 border-white " : "text-gray-900"} block min-w-[20%] p-3  text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                                        <i className="  fa-solid fa-square-plus fa-xl"></i>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/find" className={({ isActive }) => `${isActive ? "rounded-full text-white  bg-[#48a6a6] border-5 border-white " : "text-gray-900"} block min-w-[20%]  p-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                                    </NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/" className={({ isActive }) => `${isActive ? "rounded-full text-white  bg-[#48a6a6] border-5 border-white " : "text-gray-900"} block min-w-[20%] p-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                                        <i className="  fa-solid fa-home fa-xl "></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/videos" className={({ isActive }) => `${isActive ? "rounded-full text-white  bg-[#48a6a6] border-5 border-white " : "text-gray-900"} block min-w-[20%] p-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                                        <i className="fa-solid fa-video fa-xl"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/message" className={({ isActive }) => `${isActive ? "rounded-full text-white  bg-[#48a6a6] border-5 border-white " : "text-gray-900"} block min-w-[20%] p-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
                                        <i className="fa-solid fa-envelope fa-xl"></i>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </section>
        </>
    )
}

export default Bottommenu
