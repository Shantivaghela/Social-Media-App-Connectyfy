import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contextAPI';
import { useSocketContext } from '../contextAPI/socketContext';

function Message() {
    const { allusers, user, userdata } = useAuth();
    const [followingIds, setFollowingIds] = useState([]);

    const {socket,onlineusers} = useSocketContext();
    
    useEffect(() => {

        if (userdata && userdata.following) {
            const ids = userdata.following.map((follow) => follow._id);

            setFollowingIds(ids);
        }

        if (userdata) {
            const followerIds = userdata.followers.map(follow => follow._id);
            const folloingIds = userdata.following.map(follow => follow._id);
            const getFlw = allusers.filter(user =>
                followerIds.includes(user._id));

            //    console.log(folloingIds);

            //    setFollowers(getFlw);
            setFollowingIds(folloingIds);


        }
        


    }, [userdata])
    // console.log(allusers);
    let navigate = useNavigate();


    return (
        <>
            <section className="md:ml-96 h-full mt-22 relative ">
                <div className="flex   w-[75%] p-4 rounded-xl items-center  z-12 md:gap-10 gap-5 ml-3 dark:text-white">
                    <button onClick={() => navigate(-1)} className='cursor-pointer'>
                        <i class="fa-solid fa-arrow-left text-2xl md:text-3xl"></i>
                    </button>
                    <h1 className='text-2xl md:text-3xl '>Messages</h1>
                </div>
                <div className="flow-root px-3 h-full overflow-hidden mt-0">


                    <ul role="list" className="  mb-2 rounded-lg h- overflow-hidden   w-[100%] flex flex-col divide-y gap-3 divide-gray-200 dark:divide-gray-700 mr-3" >
                        {allusers.filter(itmes => itmes._id !== user._id)
                            .sort((a, b) => {
                                const isAFollowed = followingIds.includes(a._id);
                                const isBFollowed = followingIds.includes(b._id);

                                if (isAFollowed !== isBFollowed) {
                                    return isBFollowed - isAFollowed; // Followed users come first
                                }

                                return new Date(b.createdAt) - new Date(a.createdAt); // Newest users next
                            })
                            .map((user) => (
                                <li className="py-3 px-2 rounded-xl sm:py-4 w-full bg-white dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800" data-aos="flip-down">
                                    <Link to={`/chat/${user._id}`} className="flex items-center">
                                        <div className="shrink-0 relative">
                                            <div className={`${onlineusers.includes(user._id) ? "block" : "hidden"} h-3 w-3 bg-green-500 absolute rounded-full`}></div>
                                            <img className="w-9 h-9 rounded-full" src={user.alldatas && user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage} ` : assets.profileIcon} alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {user.username}
                                            </p>
                                            <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                            {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                                            <Link to={`/chat/${user._id}`}><i className="fa-solid fa-arrow-right  fa-lg hover:text-[#48a6a6] "></i></Link>
                                        </div>
                                    </Link>
                                </li>
                            ))}

                    </ul>


                </div>
            </section>
        </>
    )
}

export default Message
