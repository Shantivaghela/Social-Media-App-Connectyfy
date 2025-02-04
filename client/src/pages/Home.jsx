import React, { useState } from 'react'
import Sideprofile from './sideprofile'
import ProfileCard from '../components/ProfileCard';
import SuggeCard from '../components/SuggeCard';
import Sidemenu from '../components/Sidemenu';

function Home() {
    // const [isdrop, setdrop] = useState(false);
    return (
        <>
            <div className='justify-between flex items-start  top-0 w-full'>
                {/* <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/> */}
                <Sidemenu/>
                <section className='mt-3 max-w-full md:max-w-[50%] bg-amber-400 rounded-lg shadow-sm  md:block overflow-hidden col-span-2'>
                    <div className='flex items-start  sticky top-0'>
                        <a href="" className='min-w-32   h-35 md:b snap-start   bg-amber-900'>ssafda</a>
                        <div className='ml-3 snap-x flex w-full  bg-black overflow-x-scroll scrollbar-hide gap-3'>

                            <a href="" className='min-w-25 h-35  md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
                            <a href="" className='min-w-25 h-35 md:block  snap-start  bg-amber-900'>ssafda</a>
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
