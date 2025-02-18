import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function Notifications() {
    return (
        <>
           

                <section className=' md:ml-96 mt-22'>
                    <div className="flex items-center md:gap-10 gap-5 ml-3 dark:text-white">
                                        <Link to="/">
                                        <i class="fa-solid fa-arrow-left text-2xl md:text-3xl"></i>
                                        </Link>
                                        <h1 className='text-2xl md:text-3xl '>Notifications</h1>
                        </div>
                <div className="flow-root px-3  mt-3">
                        <ul role="list" className="bg-white px-2 mb-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800 w-[100%] divide-y divide-gray-200 dark:divide-gray-700 mr-3">
                            <li className="py-3 sm:py-4">
                                <Link to="/chat" className="flex items-center">
                                    <div className="shrink-0">
                                        <img className="w-9 h-9 rounded-full" src={assets.logo} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                        {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                                        <Link to="#"><i className="fa-solid fa-xmark  fa-2xl hover:text-[#48a6a6] "></i></Link>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                        </div>
                </section>
            
        </>
    )
}

export default Notifications
