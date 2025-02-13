import React,{useState} from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';

function Chatbox() {
    const [isdrop, setdrop] = useState(false);
    const [profielpage, setPrfilepage] = useState(1);

    const pagecontant = (id) => {

        setPrfilepage(id);

    }
    return (
      <>
            <div className='flex mt-22   mb-12 pb-2 bg-white md:ml-[25%] dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>

                <section className='float-end flex  flex-col md:ml-  w-full  h-full '>


                    <div className="md:min-w-full pb-2 relative max-w-full bg-white  overflow-hidden    dark:bg-gray-800 ">
                        <div className="flex justify-end md:px-4 md:pt-4 z-8">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`block z-11 rounded-lg text-gray-300 hover:text-black  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                                <i className={`${isdrop ? "fa-solid fa-xmark fa-xl" : " fa-solid fa-bars fa-xl"}`}></i>

                            </button>

                            <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'}  absolute z-10 text-base list-none bg-white divide-y divide-gray-100  w-44 dark:bg-gray-700`}>
                                {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block z-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none overflow-hidden focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <i className=''></i>
                  </button> */}
                                <ul className="md:py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <Link to="#" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="block px-4 md:py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10  ">
                            <img className="w-24 h-24  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={assets.demoimg} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Parth Nandha</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">web developers</span>
                            
                        </div>
                    </div>
                    
                    <form className='fixed bottom-12 md:bottom-2 w-[95%] ml-2 md:ml-0 md:w-[75%]   '>
                        <div className="flex w-[100%]  border bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-800 rounded-2xl p-1 gap-1">
                                    <div className="items-center flex justify-center pl-1 gap-3 dark:text-white">
                                    <label htmlFor="file" className='cursor-pointer mr-2 '>
                                    <i class="fa-solid fa-photo-film fa-lg"></i>
                                    
                                       
                                        <input type="file" id='file' name='shanti '  className='hidden rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                    </label>
                                    {/* <label htmlFor="emoji" className='cursor-pointer '>
                                    
                                    <i class="fa-solid fa-face-smile fa-lg"></i>
                                        <input type="emoji" className='hidden' id='emoji' />
                                    </label> */}
                                    </div>
                            <input type="text" id="search" className="block rounded-lg w-full p-2 ps-1 text-sm md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find..." required />
                            <button type="submit" className="text-white   end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-magnifying-glass fa-arrow-up fa-lg"></i></button>
                        </div>
                    </form>
                </section>
            </div>
            </>
            );
}

            export default Chatbox
