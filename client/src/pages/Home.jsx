import React, { useState } from 'react'
import Sideprofile from './sideprofile'
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import SuggeCard from '../components/SuggeCard';
import Sidemenu from '../components/Sidemenu';
import { assets } from '../assets/assets';
import PostLayout from '../components/PostLayout';

function Home() {
    // const [isdrop, setdrop] = useState(false);
    return (
        <>
        
            <div className='justify-between flex items-start  top-0 w-full mb-7'>
                {/* <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/> */}
                <Sidemenu/>
                <section className='mb-5 mt-3 min-h-screen  md:max-w-[50%] min-w-full md:min-w-[50%]  rounded-lg shadow-sm  md:block overflow-hidden col-span-2'>
                    <div className='flex items-start  sticky top-0 p-3 '>
                        
                            
                        <Link href="" className={`overflow-hidden md:max-w-25 md:min-w-25 min-w-20 max-w-20 shadow-lg text-2xl md:text-2xl shadow-gray-800  md:h-35 h-30 md:b snap-start rounded-lg    bg-[url(${assets.demoimg})]`} >
                            <i className="fa-solid fa-circle-plus fa-2xl z-20 absolute md:ml-7 ml-4 mt-19 hover:text-[#48a6a6] hover:scale-110 transition delay-120 duration-300 ease-in-out  md:mt-22 items-center text-white"></i>
                            <img src={assets.demoimg} alt="" className='h-full z-10 brightness-50 hover:contrast-50' />
                            </Link>
                        
                            
                        <div className='md:ml-3 ml-2  flex w-full md:h-40 h-35 rounded-lg  overflow-x-scroll  scrollbar-hide gap-3 pl-3 md:pl-5'>

                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            <Link to="" className='overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>
                            <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-20 text-white max-w-15 md:max-w-22 '>Vaghela Shanti </span>
                            <img src={assets.demos} alt="" className='brightness-50 h-full z-10 object-cover rounded-lg' />
                            </Link>
                            

                            
                        </div>
                    </div>
                    <PostLayout/>
                    <PostLayout/>
                    <PostLayout/>

                </section>
                <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/>

            </div>
        </>
    )
}

export default Home
