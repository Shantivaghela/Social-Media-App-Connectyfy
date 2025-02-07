import React, { useState } from 'react'
import { assets } from '../assets/assets'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';
// import './App.css'

function PostLayout() {
    const [isOpen, seOpen] = useState(false);


    return (
        <>
            <section className='max-h-[50%] bg-white dark:bg-gray-800 mt-3 '>

                <div className="flex items-center gap-4 pl-4  h-15 ">
                    <img className="w-10 h-10 rounded-full" src={assets.logo} alt="" />
                    <div className="md:font-medium text-sm dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">August 2014</div>
                    </div>
                </div>
                <div className='max-h-[50%] object-contain '>
                    <img src={assets.demos} alt="" />
                </div>
                <div className=" w-full h-full  ">
                    <div className='flex h-10 md:h-full mt-2 md:mt-1  md:w-[25%] items-center justify-between w-full md:float-end      px-3'>
                        <Link className=' justify-center items-center float-end hover:text-red-500 dark:text-white'>
                            <i className="fa-regular fa-thumbs-up fa-2xl  "></i>
                            <p className='text-[10px] mt-1'>2334</p>
                        </Link>
                        <Link className=' justify-center items-center float-end hover:text-green-600 dark:text-white'>
                            <i className="fa-regular fa-message fa-xl"></i>
                            <p className='text-[10px] mt-1'>2334</p>
                        </Link>
                        <Link className=' justify-center items-center float-end hover:text-blue-700 dark:text-white'>
                            <i className="fa-regular fa-paper-plane fa-xl"></i>
                            <p className='text-[10px] pt-1'>2334</p>
                        </Link>
                    </div>
                    <div className=' w-[75%] p-3 text-sm md:tex-lg md:h-full dark:text-white'>
                        <ReactReadMoreReadLess

                            charLimit={50}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                        >


                            "Natural" redirects here. For other uses, see Natural (disambiguation) and Nature (disambiguation).

                            A timelapse composite panorama of different natural phenomena and environments around Mount Bromo, Indonesia.
                            Nature is an inherent character or constitution,[1] particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life. Although humans are part of nature, human activity or humans as a whole are often described as at times at odds, or outright separate and even superior to nature.
                        </ReactReadMoreReadLess>

                    </div>

                    <form className='p-1'>
                        <div className="flex w-[50%] border border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">
                            
                            <input type="search" id="search" className="block rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send comment..." required />
                            <button type="submit" className="text-white   end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                        </div>
                    </form>

                </div>
            </section>

        </>
    )
}

export default PostLayout
