import React, { useEffect, useState } from 'react'
import Sidemenu from './Sidemenu'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useAuth } from '../contextAPI'
import { assets } from '../assets/assets';

function SuggeCard() {
    const { allusers,user,userdata} = useAuth();
    const [followingIds, setFollowingIds] = useState([]);
    // console.log(allusers.userProfile.gender);
    const { userId } = useParams();
    
    
    useEffect(()=>{
        
            if (userdata && userdata.following) {
                const ids = userdata.following.map((follow) => follow._id);

                setFollowingIds(ids);
              }
       
              if(userdata){
                const followerIds = userdata.followers.map(follow => follow._id);
                const folloingIds = userdata.following.map(follow => follow._id);
                const getFlw = allusers.filter(user =>
                followerIds.includes(user._id));
               
            //    console.log(folloingIds);
               
            //    setFollowers(getFlw);
               setFollowingIds(folloingIds);
               
               
            }
          
       
    },[userId,userdata])
    // console.log(followingIds);
    

    
    
    
    return (
        <>

            <div className="w-full hidden md:block h-65 overflow-y-scroll scobar trnasition-bg   max-w-md p-2 mt-3 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h6 className="text-base font-bold leading-none  text-gray-900 dark:text-white">Suggestions</h6>
                    {/* <Link to="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </Link> */}
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className="flow-root">
                    <ul role="list" className={`   divide-y divide-gray-200 dark:divide-gray-700 `}>
                        {allusers.filter(itmes => itmes._id !== user._id && !followingIds.includes(itmes._id))
                         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                         .slice(0, 10)
                         .map((user) => (
                            <li key={user._id} className="  rounded-lg  w-full">
                                <div className="flex items-center  justify-between ">
                                        
                                            
                                    
                                    <NavLink  to={`/userprofile/${user._id}`} className={({isActive}) => ` ${isActive ? "bg-gray-400/50" : ""}  shrink-0 flex w-full px-2 mr-2 rounded-lg py-3 `}>

                                        
                                        
                                            <img className="w-10 h-10 rounded-full" src={user.alldatas && user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage} `:assets.profileIcon}alt="Neil image" /> 
                                        

                                            
                                    
                                    <div className="flex-1 min-w-0 ms-4 w-full">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.username}
                                        </p>
                                        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                    </NavLink>
                                           

                                    
                                    {/* <div className="inline-flex w-[20%]  items-center text-sm font-semibold text-gray-900 dark:text-white">
                                        <Link to="#"><i className="fa-solid fa-user-plus  fa-lg hover:text-[#48a6a6] "></i></Link>
                                    </div> */}
                                </div>
                            </li>
                        ))}


                    </ul>
                </div>
            </div>

        </>
    )
}

export default SuggeCard
