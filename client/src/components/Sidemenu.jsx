import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import SuggeCard from './SuggeCard'

function Sidemenu() {
    const [Mode,setMode] = useState(false);
    const bodyClass = document.getElementById("theme");
  
  const darkModeHandler = () => {
    if(!Mode){
      bodyClass.className="dark bodyDark"
    }
    else{
      bodyClass.className="light"
    }
    

}
    return (
        <>
            <section className='sticky top-19 ml-5 mr-2 md:block mt-3 w-[25%] hidden'>


                <aside id="sidebar-multi-level-sidebar" className=" w-full   md:blcok md:h-50%" aria-label="Sidebar">
                    <div className="md:block h-full bottom-0 md:top-0 px-3 py-4 overflow-y-auto  rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                        <ul className="space-y-2 flex md:block font-medium">
                            <li>
                                <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                                    <i className="fa-solid fa-images fa-lg  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"></i>
                                    <span className="ms-3">Feed</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                                    <i className="fa-solid fa-square-plus fa-lg  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"></i>
                                    <span className="ms-3">Post</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                                    <i className="fa-solid fa-magnifying-glass fa-lg  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"></i>
                                    <span className="ms-3">Find</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                                    <i className="fa-solid fa-video fa-lg  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"></i>
                                    <span className="ms-3">Videos</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                                    <i className="fa-solid fa-user-group fa-lg  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"></i>
                                    <span className="ms-3">Friends</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={()=>setMode(!Mode,darkModeHandler())} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                                    <i className={ `${Mode ? 'fa-solid fa-moon fa-lg' : 'fa-solid fa-sun fa-lg' } text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white`}></i>
                                    <span className="ms-3" >
                                        {
                                            Mode ? "Dark Mode" : "Light Mode"
                                        }
                                    </span>
                                </Link>
                            </li>


                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </aside>
                <SuggeCard />
            </section>
           
        </>
    )
}

export default Sidemenu
