
import React, { useEffect, useState } from 'react'

import Sideprofile from './sideprofile'
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import SuggeCard from '../components/SuggeCard';
import Sidemenu from '../components/Sidemenu';
import { assets } from '../assets/assets';
import PostLayout from '../components/PostLayout';
import { videoInfo, story } from '../assets/videosInfo';
import StoryModel from '../components/StoryModel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddStory from '../components/AddStory';
import { useAuth } from '../contextAPI/index.jsx';


function Home() {
    // const [isdrop, setdrop] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [addStory, setAddStory] = useState(false);
    const [key, setKey] = useState();
    const { isLoggedIn, user, userdata, posts,stories} = useAuth();
    const [count, setCount] = useState(0);


    const preButton = (userId) => {
        const getuser = allposts.find(f => f.userId === userId);
        const getLength = getuser.media.length;
        if (count > 0) setCount(count - 1)


    }
    const nextButton = (userId) => {
        const getuser = allposts.find(f => f.userId === userId);
        const getLength = getuser.media.length;

        if (count === getLength - 1) setCount(0)
        else if (count < getLength - 1) setCount(count + 1)
    }


    return (
        <>

            {isOpen && <StoryModel open={setOpen} id={key} />}
            {addOpen && <AddStory open={setAddOpen} />}
            <div className='justify-between flex items-start  top-0 w-full mb-7'>
                {/* <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/> */}

                <section className={`md:ml-[25%] mb-5 mt-22    min-h-screen  md:max-w-[50%] min-w-full md:min-w-[50%]  rounded-lg shadow-sm  md:block overflow-hidden col-span-2`}>
                    <div className='flex items-start  top-0 p-3 '>


                        <Link href="" onClick={() => setAddOpen(true)} className={`overflow-hidden md:max-w-25 md:min-w-25 min-w-20 max-w-20 shadow-lg text-2xl md:text-2xl shadow-gray-800  md:h-35 h-30 md:b snap-start rounded-lg    bg-[url(${assets.demoimg})]`} >
                            <i className="fa-solid fa-circle-plus fa-2xl z-9 absolute md:ml-7 ml-4 mt-19 hover:text-[#48a6a6] hover:scale-110 transition delay-120 duration-300 ease-in-out  md:mt-22 items-center text-white"></i>
                            <img src={userdata && userdata.pimage ? `http://localhost:8080${userdata.pimage}` : assets.profileIcon} alt="" className='h-full bg-gray-200 z-10 brightness-50 object-cover hover:contrast-50' />
                        </Link>

                        <div className="">
                            {/* <button onClick={() => preButton(post.userId)} disabled={count === 0} className={`${count === 0 ? "opacity-50" : ""}  z-10 -[90%] absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                                <i class="fa-solid fa-arrow-left m-2"></i>
                            </button> */}
                            <div className='md:ml-3 ml-2  flex md:h-40 h-35 rounded-lg overflow-scroll scrollbar-hide w-full   gap-3 pl-3 md:pl-5'>
                                {/* <Slider {...settings} className='w-full'> */}
                                {stories
                                .filter(itmes => itmes.userId?._id !== user?._id)
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((items, index) => (

                                    <Link to="" key={items.id} onClick={() => { setOpen(true), setKey(index) }} className={`flex overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block s`}>
                                        <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-18 text-white max-w-15  md:max-w-22 object-contain'>{items.userId?.username}</span>
                                        {items.media.map((media, i) => (
                                            <div key={i}>

                                                {media.type === "image" ? (

                                                    <img  src={media.url} alt="" className='brightness-50 hover:brightness-100 h-[150px] z-10 object-cover ' />
                                                ) : (
                                                    <video src={media.url} alt="" className='brightness-50 hover:brightness-100  bg-gray-100 h-50 z-10 object-cover ' />
                                                )}
                                            </div>
                                        ))}
                                        <p></p>
                                    </Link>
                                ))}
                                <div className="flex flex-col justify-center dark:text-white w-full  items-center">
                                    <p>

                                        No more items
                                    </p>
                                </div>
                                {/* </Slider> */}

                            </div>
                            {/* <button onClick={() => nextButton(post.userId)} disabled={count === post.media.length - 1} className={`${count === post.media.length - 1 ? "opacity-50" : ""}  ml-[94%]  z-14 absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                                <i class="fa-solid fa-arrow-right m-2"></i>
                            </button> */}
                        </div>
                    </div>
                    <PostLayout />


                </section>
                <ProfileCard name="Parth Nandha " desc="full stack dev" followers="34456354" following="7" posts="35345" />

            </div>
        </>
    )
}

export default Home
