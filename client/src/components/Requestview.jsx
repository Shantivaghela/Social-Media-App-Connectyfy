import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAuth } from '../contextAPI';
import { toast } from 'react-toastify';
// import { unfollow } from '../../../server/controllers/userdata-controller';


function Requestview(props) {

    const [requ, setRequ] = useState([]);


    const { allusers, user, userdata, getAllUsers, getuserdata } = useAuth();


    useEffect(() => {
        if (userdata) {

            const followreq = userdata.requests.map(follow => follow._id);

            const getReq = allusers.filter(user =>
                followreq.includes(user._id));
            // console.log(getReq);


            setRequ(getReq);

        }



    }, [allusers, userdata]);


    const addfollow = async(conformId) => {
            // e.preventDefault();
    
            try {
                const currentUserid = user._id;
                console.log(currentUserid);
    
    
                const response = await fetch(`http://localhost:8080/api/user/conformreq/${currentUserid}`, {
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
                    
    
    
                }else{
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
                                
                    
                                const response = await fetch(`http://localhost:8080/api/user/unfollow/${currentUserid}`, {
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
                    
                    
                                }else{
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
            <div className={`${props.view === 3 ? "block" : "hidden"} `} >
                <ul role="list" className="">

                    {requ.length > 0 ? (
                        requ.map(user => (

                            <li key={user._id} className="py-3 sm:py-4 bg-white px-2 flex justify-between  mb-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800  w-[99%] divide-y divide-gray-200 dark:divide-gray-700 mr-5s" data-aos="flip-down">
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
                                <div className="inline-flex items-center gap-2 text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                                    <button onClick={()=>addfollow(user._id)} className="text-white bg-blue-700 cursor-pointer hover:bg-[#48a6a6] focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Accept</button>

                                    <button onClick={() => unfollow(user._id)} className="bg-gray-300  cursor-pointer focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:text-black  dark:focus:ring-gray-800">Delete</button>

                                </div>
                            </li>
                        ))
                    ) : (
                        <p>Not request yet...</p>
                    )
                    }

                </ul>
            </div>

        </>
    )
}

export default Requestview
