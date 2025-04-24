import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAuth } from '../contextAPI';
import { toast } from 'react-toastify';

function Followings(props) {
    const [following,setFollowing] = useState([]);
    // const [userId,setUserid] = useState("");
    
        
        const { allusers, user, userdata,getAllUsers,getuserdata } = useAuth();
    
        
        useEffect(()=>{
            const getUpadate = () =>{

                if(userdata){
                    const followingIds = userdata.following.map(follow => follow._id);
                   const getFlw = allusers.filter(user =>
                    followingIds.includes(user._id)
                );
                //    console.log(getFlw.map(i=>i.username));
                   
                setFollowing(getFlw);
                   
                }
            }
    
            getUpadate();
    
        },[allusers,userdata]);



         const unfollow = async (userId) => {
                // e.preventDefault();
                // console.log(e);
                
        
                try {
                    const currentUserid = user._id;
                    // console.log(currentUserid);
                    
        
                    const response = await fetch(`http://localhost:8080/api/user/unfollow/${currentUserid}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            unfollowid: userId,
                            
                        }),
        
                    });
        
                    const data = await response.json();
                    if (response.ok) {
        
                        // console.log("upadted data is :",data);
                        // navigate("/profile");
                        toast.success("User is Unfollowed");
                        // getUpadate();
                        getuserdata();                        
        
        
                    }else{
                        toast.error("Error form backend");
                    }
        
        
        
                } catch (error) {
                    console.error("Error submitting profile:", error);
                    toast.error("Error Updating profile!");
                }
        
        
            }
  return (
    <>
      <div className={`${props.view === 2 ? "block" : "hidden"} `}>
      <ul role="list" className="">
        {following.length > 0 ? (following.map(user=>(
                            <li className="py-3 sm:py-4 bg-white px-2 flex justify-between  mb-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800  w-[99%] divide-y divide-gray-200 dark:divide-gray-700 mr-5s" data-aos="flip-down">
                                <Link to={`/userprofile/${user._id}`} className="flex items-center">
                                    <div className="shrink-0">
                                        <img className="w-9 h-9 rounded-full object-cover" src={user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage}` : (assets.profileIcon)} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.username}
                                        </p>
                                        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                </Link>
                                    {/* <input type="text" className='hidden' value={user._id} /> */}
                                    <div className="inline-flex items-center text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                                        {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                                        <button onClick={()=> unfollow(user._id)}  className="bg-transparent text-green-600 cursor-pointer hover:text-[#48a6a6] focus:ring-4 focus:outline-none border-2 border-[#48a6a6] focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:text-green-600 dark:hover:text-[#48a6a6] dark:focus:ring-green-800">Unfollow</button>                                    
                                        </div>
                            </li>
                            ))) : (<p>You are not following at this time</p>)}
                        </ul>
                        </div>
    </>
  )
}

export default Followings
