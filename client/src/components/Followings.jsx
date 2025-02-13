import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function Followings(props) {
  return (
    <>
      <div className={`${props.view === 2 ? "block" : "hidden"} `}>
      <ul role="list" className="bg-white px-2   mb-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800  w-[99%] divide-y divide-gray-200 dark:divide-gray-700 mr-5s">
                            <li className="py-3 sm:py-4">
                                <Link to="/chat" className="flex items-center">
                                    <div className="shrink-0">
                                        <img className="w-9 h-9 rounded-full" src={assets.logo} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Vaghela Shanti
                                        </p>
                                        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                                        {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                                        <Link to="#"><i className="fa-solid fa-ellipsis-vertical   hover:text-[#48a6a6] "></i></Link>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                        </div>
    </>
  )
}

export default Followings
