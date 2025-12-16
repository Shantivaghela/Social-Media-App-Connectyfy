import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contextAPI';
import { useSocketContext } from '../contextAPI/socketContext';
const API = import.meta.env.VITE_API_URL;

function Message() {
    const { allusers, user, userdata } = useAuth();
    const [followingIds, setFollowingIds] = useState([]);
    const { socket, onlineusers } = useSocketContext();
    const [isOpen, setIsOpen] = useState(false);
    const [userImg, setUserImg] = useState("")
    const [message, setMessages] = useState([]);
    const [recentUser, setRecentUser] = useState([]);


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
    const location = useLocation();

    // console.log(userImg);
    useEffect(() => {
        
       
        const allMessages = async () => {
            try {
                const response = await fetch(`${API}/api/message/messages/getAll`, {
                    method: "GET"
                });
                if (response.ok) {
                    const data = await response.json();
                    // console.log({data});
                    setMessages(data)
                    const sendermessages = allusers.map(f => f._id);
                    const getmessages = data.filter(f=>f.receiverId ===  user._id ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(f => f.senderId);
                    setRecentUser(getmessages);
                    console.log(getmessages);
                    
                    
 

                }
                else {
                    console.log(response);

                }
            } catch (error) {
                console.log(error);
            }
        }
        allMessages();

    }, []);
    return (
        <>
            <section className="md:ml-96 h-full mt-22 relative flex justify-center flex-col overflow-y-scroll scobar">
                <div className="flex   w-[80%] mb-5 p-4 rounded-xl items-center dark:bg-gray-800 bg-[#f2efe6]  z-12 md:gap-10 gap-5 mx-2 dark:text-white">
                    <button onClick={() => navigate(-1)} className='cursor-pointer '>
                        <i class="fa-solid fa-arrow-left text-2xl md:text-3xl"></i>
                    </button>
                    <h1 className='text-2xl md:text-3xl '>Messages</h1>
                </div>
                <div className="flow-root  px-3 h-full overflow-hidden overflow-y-scroll scobar ">


                    <ul role="list" className="  mb-2 rounded-lg  overflow-hidden overflow-y-scroll scobar   w-[100%] flex flex-col divide-y gap-3 divide-gray-200 dark:divide-gray-700 mr-3" >
                        {allusers.filter(itmes => itmes._id !== user._id)
                            .sort((a, b) => {
                                const isAFollowed = followingIds.includes(a._id);
                                const isBFollowed = followingIds.includes(b._id);
                                const indexA = recentUser.indexOf(a._id);
                                const indexB = recentUser.indexOf(b._id);

                                if (indexA === -1 && indexB !== -1) return 1;
                                if (indexA !== -1 && indexB === -1) return -1;
                                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                                if (isAFollowed !== isBFollowed) {
                                    return isBFollowed - isAFollowed; // Followed users come first
                                }

                                return new Date(b.createdAt) - new Date(a.createdAt); // Newest users next
                            })
                            .map((user) => (
                                <li className="py-3 px-2  rounded-xl sm:py-4 flex w-full bg-white dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800" data-aos="flip-down">
                                    <button onClick={() => { setUserImg(user.alldatas && user.alldatas.pimage ? `${API}${user.alldatas.pimage} ` : assets.profileIcon), setIsOpen(true) }} className="z-12 shrink-0 relative cursor-pointer">
                                        <div className={`${onlineusers.includes(user._id) ? "block" : "hidden"} h-3 w-3 bg-green-500 absolute rounded-full`}></div>
                                        <img className="w-9 h-9 rounded-full" src={user.alldatas && user.alldatas.pimage ? `${API}${user.alldatas.pimage} ` : assets.profileIcon} alt="Neil image" />
                                    </button>
                                    <Link to={`/chat/${user._id}`} className="flex w-full items-center">
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {user.username}
                                            </p>
                                            <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                                {user.email}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                            <Link to={`/chat/${user._id}`}><i className="fa-solid fa-arrow-right  fa-lg hover:text-[#48a6a6] "></i></Link>
                                        </div>
                                    </Link>
                                </li>
                            ))}

                    </ul>


                </div>
            </section>
            <button onClick={() => { setIsOpen(!isOpen) }} className={`${isOpen ? "scale-101 opacity-100" : "scale-0 opacity-0 "} flex-col cursor-pointer  h-screen w-full bg-black/40 fixed top-0 flex justify-center items-center transition-all ease delay-150 duration-200`}>
                <div className="w-full flex float-start  mb-25 p-5">
                    <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>

                        <i className="fa-solid fa-xmark text-2xl md:text-3xl border-2 p-1 text-white rounded-sm"></i>
                    </button>
                </div>
                <div>
                    {userImg ?
                        <img src={userImg} alt="Profile Image" className='h-50 w-50 md:h-100 md:w-100 object-cover rounded-md' />
                        :
                        <img src={assets.profileIcon} alt="Profile Image" className='h-50 w-50 md:h-100 md:w-100 object-cover rounded-md' />
                    }
                </div>
            </button>
        </>
    )
}

export default Message;
