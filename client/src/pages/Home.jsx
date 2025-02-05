import React, { useState } from 'react'
import Sideprofile from './sideprofile'
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import SuggeCard from '../components/SuggeCard';
import Sidemenu from '../components/Sidemenu';
import { assets } from '../assets/assets';

function Home() {
    // const [isdrop, setdrop] = useState(false);
    return (
        <>
        <Header/>
            <div className='justify-between flex items-start  top-0 w-full'>
                {/* <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/> */}
                <Sidemenu/>
                <section className='mt-3 max-w-full md:max-w-[50%]  rounded-lg shadow-sm  md:block overflow-hidden col-span-2'>
                    <div className='flex items-start  sticky top-0 p-3 '>
                        
                            
                        <a href="" className={`overflow-hidden md:max-w-25 md:min-w-25 min-w-20 max-w-20 shadow-lg text-2xl md:text-2xl shadow-gray-800  md:h-35 h-30 md:b snap-start rounded-lg    bg-[url(${assets.demoimg})]`} >
                            <i className="fa-solid fa-circle-plus fa-2xl z-20 absolute md:ml-7 ml-4 mt-19 hover:text-[#48a6a6] hover:scale-110 transition delay-120 duration-300 ease-in-out  md:mt-22 items-center text-white"></i>
                            <img src={assets.demoimg} alt="" className='h-full z-10 brightness-50 hover:contrast-50' />
                            </a>
                        
                            
                        <div className='md:ml-3 ml-2  flex w-full h-40 rounded-lg  overflow-x-scroll  scrollbar-hide gap-3 pl-3 md:pl-5'>

                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block  snap-start  bg-amber-900'>ssafda</a>
                        </div>
                    </div>
                    <div className=' md:flex '><h1 className='h-[1000px] '>posts</h1></div>

                </section>
                <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/>

            </div>
        </>
    )
}

export default Home
