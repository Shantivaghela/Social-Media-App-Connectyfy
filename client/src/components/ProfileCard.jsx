import React,{useState} from 'react'
import SuggeCard from './SuggeCard';
import Request from './Request';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function ProfileCard(props) {
    const [isdrop, setdrop] = useState(false);
    return (
        <>
        <div className='w-full'>
            <section className='fixed  top-19 ml-4 mr-2 md:block md:w-[23%] hidden mt-3 '>


                <div className="md:w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`${isdrop ? 'hidden' : 'block'}inline-block text-gray-500 dark:text-gray-400  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                            <i className='fa-solid fa-bars fa-xl'></i>

                        </button>

                        <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'} absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <i className='fa-solid fa-xmark fa-xl'></i>
                            </button>
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
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


                <Request/>

            </section>
            </div>
        </>
    )
}

export default ProfileCard
