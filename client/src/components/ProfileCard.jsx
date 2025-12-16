import React, { useEffect, useState } from 'react'
import SuggeCard from './SuggeCard';
import Request from './Request';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAuth } from '../contextAPI/index';
// import ShowpImage from './ShowpImage';
const API = import.meta.env.VITE_API_URL;



function ProfileCard(props) {
    const [isdrop, setdrop] = useState(false);
    const { isLoggedIn } = useAuth();
    const [showimage,setShowImage] = useState(false);
    const [getpost,setgetPost] = useState(0);

    const {user,userdata,allposts} = useAuth();
   

    function formatFollowers(count) {
        if (count >= 1000000000) {
            return (count / 1000000000).toFixed(1) + "B"; // Billion
        } else if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + "M"; // Million
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + "K"; // Thousand
        }
        return count.toString(); // Less than 1K
    }
    useEffect(()=>{
        const findpost = allposts.filter(post => post.userId._id === user._id);
        setgetPost(findpost.length);
        
    },[user,allposts])
    return (
        <>
            <div className={` w-full `}>
            {/* <ShowpImage/> */}
                <section className='fixed  top-19 ml-4 mr-2 md:block md:w-[23%] hidden mt-3 ' data-aos="slide-left">


                    <div className="md:w-full md:pt-7 relative max-w-sm trnasition-bg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        
                        <div className="flex flex-col items-center pb-5">
                            {isLoggedIn && userdata && userdata.pimage ? <NavLink onClick={()=>setShowImage(!showimage)}><img className={`${showimage ? "w-50 h-50 " : "w-24 h-24"} mb-3 rounded-full shadow-lg object-cover`} src={`${API}${userdata.pimage}`} alt="Bonnie image "/></NavLink> :
                            <NavLink onClick={()=>setShowImage(!showimage)}><img className={`${showimage ? "w-50 h-50 " : "w-24 h-24"} mb-3 rounded-full shadow-lg object-cover`} src={assets.profileIcon} alt="Bonnie image "/></NavLink>}
                             {isLoggedIn && user.username ? <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.username}</h5> :""}
                             {isLoggedIn && userdata && userdata.description ? <span className="text-sm text-gray-500 dark:text-gray-400">{userdata.description}</span> :
                             <span className="text-sm text-gray-500 dark:text-gray-400">Add  your Description</span>}
                                
                            <div className="flex mt-4 md:mt-6  gap-10">
                                <Link to="/friends" className='flex flex-col items-center justify-center dark:text-white'>
                                    <span className='text-lg'>{userdata && userdata.followers ? formatFollowers(userdata.followers.length)  : 0}</span>
                                    <span className='text-[10px]'>followers</span>
                                </Link>
                                <Link to="/friends" className='flex flex-col items-center justify-center dark:text-white'>
                                    <span className='text-lg'>{userdata && userdata.following ? formatFollowers(userdata.following.length) : 0}</span>
                                    <span className='text-[10px]'>following</span>
                                </Link>
                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                            </div>
                            <div className="flex mt-4 md:mt-6  gap-10 ">
                                <Link to="/profile" className='flex flex-col items-center justify-center dark:text-white'>
                                    <span className='text-sm'>{getpost ? formatFollowers(getpost) : 0}</span>
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
