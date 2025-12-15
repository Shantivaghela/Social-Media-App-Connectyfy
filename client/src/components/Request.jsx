import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contextAPI';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_API_URL;

function Request() {
    const { allusers, user, userdata, getuserdata,getAllUsers} = useAuth();
    const [followingIds, setFollowingIds] = useState([]);
    const [followreqs, setFollowereqs] = useState([]);



    useEffect(() => {

        if (userdata && userdata.following) {
            const ids = userdata.following.map((follow) => follow._id);

            setFollowingIds(ids);
        }

        if (userdata) {
            const followreq = userdata.requests.map(follow => follow._id);
            const getFlw = allusers.filter(user =>
                followreq.includes(user._id));



            setFollowereqs(getFlw);



        }


    }, [userdata, allusers])


    const addfollow = async (conformId) => {
        // e.preventDefault();

        try {
            const currentUserid = user._id;
            console.log(currentUserid);


            const response = await fetch(`${API}/api/user/conformreq/${currentUserid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    conformId: conformId,

                }),

            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Conform Request");
                getuserdata();
                getAllUsers();



            } else {
                toast.error("Bad Request");
                // console.log(data);

            }



        } catch (error) {
            // console.error("Error submitting profile:", error);
            toast.error("Error submitting profile!");
            console.log(error);

        }


    }

    const unfollow = async (conformId) => {
        // e.preventDefault();
        // console.log(e);


        try {
            const currentUserid = user._id;
            // console.log(currentUserid);


            const response = await fetch(`${API}/api/user/unfollow/${currentUserid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    unfollowid: conformId,

                }),

            });

            const data = await response.json();
            if (response.ok) {


                toast.success("User Deleted from Request");

                getuserdata();
                getAllUsers();


            } else {
                toast.error("Error form backend");
                console.log(data);

            }



        } catch (error) {
            console.error("Error submitting profile:", error);
            toast.error("Error Updating profile!");
        }


    }

    return (
        <>
            <div className="w-full h-60 overflow-y-scroll hidden md:block trnasition-bg scobar   max-w-md p-2 mt-3 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between pb-5">
                    <h6 className="text-base font-bold leading-none  text-gray-900 dark:text-white">Recent Request</h6>
                    {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a> */}
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                        {followreqs.length > 0 ? followreqs.map(user => (
                            <li key={user._id} className="py-3 sm:py-4 flex justify-between">
                                <NavLink to={`/userprofile/${user._id}`} className="flex items-center">
                                    <div className="shrink-0">
                                        <img className="w-10 h-10 rounded-full" src={user.alldatas && user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage} ` : assets.profileIcon} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.username}
                                        </p>
                                        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                </NavLink>
                                <div className="inline-flex gap-2 items-center text-sm font-semibold ">
                                    {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                                    <button onClick={() => addfollow(user._id)} className='cursor-pointer'><i className="fa-regular fa-circle-check  fa-xl text-gray-900 dark:text-white hover:text-[#48a6a6] "></i></button>
                                    <button onClick={() => unfollow(user._id)} className='cursor-pointer'><i className="fa-regular fa-circle-xmark  fa-xl text-red-400 hover:text-red-600 "></i></button>
                                </div>
                            </li>

                        )) :(
                            <div className="dark:text-white mt-3 flex w-full justify-center items-center ">
                                <p>No Request yet</p>
                            </div>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Request
