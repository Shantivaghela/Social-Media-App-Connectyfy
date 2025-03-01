import React, { useState } from 'react'
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

function Home() {
    // const [isdrop, setdrop] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [addStory, setAddStory] = useState(false);
    const [key, setKey] = useState();




    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <>

            {isOpen && <StoryModel open={setOpen} id={key} />}
            {addOpen && <AddStory open={setAddOpen}/>}
            <div className='justify-between flex items-start  top-0 w-full mb-7'>
                {/* <ProfileCard name="Vaghela Shanti" desc="full stack dev" followers="34456354" following="7" posts="35345"/> */}

                <section className='mb-5 mt-22 md:ml-[25%]   min-h-screen  md:max-w-[50%] min-w-full md:min-w-[50%]  rounded-lg shadow-sm  md:block overflow-hidden col-span-2'>
                    <div className='flex items-start  top-0 p-3 '>


                        <Link href="" onClick={()=>setAddOpen(true)} className={`overflow-hidden md:max-w-25 md:min-w-25 min-w-20 max-w-20 shadow-lg text-2xl md:text-2xl shadow-gray-800  md:h-35 h-30 md:b snap-start rounded-lg    bg-[url(${assets.demoimg})]`} >
                            <i className="fa-solid fa-circle-plus fa-2xl z-9 absolute md:ml-7 ml-4 mt-19 hover:text-[#48a6a6] hover:scale-110 transition delay-120 duration-300 ease-in-out  md:mt-22 items-center text-white"></i>
                            <img src={assets.demoimg} alt="" className='h-full z-10 brightness-50 hover:contrast-50' />
                        </Link>


                        <div className='md:ml-3 ml-2  flex md:h-40 h-35 rounded-lg overflow-scroll scrollbar-hide w-full   gap-3 pl-3 md:pl-5'>
                            {/* <Slider {...settings} className='w-full'> */}
                            {story.map((items, index) => (

                                <Link to="" key={items.id} onClick={() => { setOpen(true), setKey(index) }} className={`flex overflow-hidden relative md:border-4 border-3 border-[#48a6a6] dark:border-gray-400 md:max-w-25 md:min-w-25 max-w-20 min-w-20 md:h-35 h-30 shadow-md rounded-lg shadow-gray-800 md:block bg-amber-900`}>
                                    <span className='text-[10px] md:text-sm mt-1 ml-1 absolute z-18 text-white max-w-15 md:max-w-22 '>{items.Name}</span>
                                    {items.url.map((media, i) => (
                                        <div key={i}>

                                            {media.type === "Image" ? (

                                                <img src={media.src} alt="" className='brightness-50 h-[150px] z-10 object-cover ' />
                                            ):(
                                                <video src={media.src} alt="" className='brightness-50 h-full z-10 object-cover ' />
                                            )}
                                            </div>
                                        ))}
                                            <p></p>
                                        </Link>
                                    ))}
                                    <div className="flex flex-col justify-center items-center">
                                        <p>

                                            No more items
                                        </p>
                                    </div>
                                    {/* </Slider> */}
                                </div>
                    </div>
                        <PostLayout />
                        <PostLayout />
                        <PostLayout />

                </section>
                <ProfileCard name="Parth Nandha " desc="full stack dev" followers="34456354" following="7" posts="35345" />

            </div>
        </>
    )
}

export default Home
