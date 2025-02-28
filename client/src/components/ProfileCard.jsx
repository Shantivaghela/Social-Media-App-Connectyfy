import React, { useState } from 'react'
import SuggeCard from './SuggeCard';
import Request from './Request';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function ProfileCard(props) {
    const [isdrop, setdrop] = useState(false);
    return (
        <>
            <div className='w-full'>
                <section className='fixed  top-19 ml-4 mr-2 md:block md:w-[23%] hidden mt-3 ' data-aos="slide-left">


                    <div className="md:w-full relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-end md:px-4 md:pt-4 z-8">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`block z-11 rounded-lg text-gray-300 hover:text-black  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                                <i className={`${isdrop ? "fa-solid fa-xmark fa-xl" : " fa-solid fa-bars fa-xl"}`}></i>

                            </button>

                            <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'} rounded-xl     absolute  text-base list-none bg-white divide-y divide-gray-100  w-44 dark:bg-gray-700`}>
                                {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block z-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none overflow-hidden focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                          <i className=''></i>
                                        </button> */}
                                <ul className="md:py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <Link to="/Editprofile" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="block px-4 md:py-2 text-sm text-red-600 hover:bg-red-100  dark:text-red-600 ">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src={assets.demoimg} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{props.desc}</span>
                            <div className="flex mt-4 md:mt-6  gap-10">
                                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                                    <span className='text-lg'>{props.followers}</span>
                                    <span className='text-[10px]'>followers</span>
                                </Link>
                                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                                    <span className='text-lg'>{props.following}</span>
                                    <span className='text-[10px]'>following</span>
                                </Link>
                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                            </div>
                            <div className="flex mt-4 md:mt-6  gap-10 ">
                                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                                    <span className='text-sm'>{props.posts}</span>
                                    <span className='text-xl'>Posts</span>
                                </Link>

                            </div>
                        </div>
                    </div>


                    <Request />

                </section>
            </div>
        </>
    )
}

export default ProfileCard
