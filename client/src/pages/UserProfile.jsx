import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
// import Sidemenu from '../components/Sidemenu';
import Postpage from './Postpage';
import Profilevideos from './Profilevideos';
import Tags from './Tags';
import { useAuth } from '../contextAPI';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { userdata } from '../../../server/controllers/userdata-controller';


function UserProfile(props) {
    const [isdrop, setdrop] = useState(false);
    const [profielpage, setPrfilepage] = useState(1);
    const [userdetails, setUserDetails] = useState("")
    const [isFollowed,setIsfollowed] = useState(false)
    const [request,setRequest] = useState("");
    const [follow,setFollow] = useState("");

    const { userId } = useParams();

    // console.log(userdata);

    const { allusers, user, userdata,getAllUsers } = useAuth();

    //   console.log(user._id);
    // console.log(userdata.following);
    

    
    useEffect(() => {
        const getdata = () => {
            const users = allusers.find(alluser => alluser._id === userId);
            setUserDetails(users);
            
            const getcurrentuser = allusers.find(a => a._id === user._id);
            // console.log(getcurrentuser);
            
            if(getcurrentuser){

                const findReq = getcurrentuser.alldatas.requests.find((i) => i._id.toString() === userId);
                const findFoll = getcurrentuser.alldatas.followers.find((i) => i._id.toString() === userId);
    
                if(findReq || findFoll){
                    setRequest(findReq)
                    setFollow(findFoll)
                }else{
                    setRequest("");
                    setFollow("");
                }
            }
            // console.log(getcurrentuser);
            if(getcurrentuser){
            const findid = getcurrentuser.alldatas.following.some((i) => i._id.toString() === userId);
            // const findFollw = getcurrentuser.alldatas.followers.find((i) => i._id.toString() === userId);
            // console.log(findFollw);
                
    
                if(findid ) {
    
                    setIsfollowed(true);
                }else{
                    setIsfollowed(false)
                }
            }   
            
        }
        getdata();
        
    }, [userId, allusers,userdata,user]);
    


    if (!userdetails || !userdetails.alldatas) {
        return <p className="text-center text-white ml-96">Loading user data...</p>;
    }

    const addfollow = async (e) => {
        e.preventDefault();

        try {
            const currentUserid = user._id;
            // console.log(currentUserid);


            const response = await fetch(`http://localhost:8080/api/user/follow/${currentUserid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                    username: user.username,
                    email: user.email
                }),

            });

            const data = await response.json();
            if (response.ok) {

                // console.log("upadted data is :",data.updateData);
                // navigate("/profile");
                toast.success(data.message+" "+userdetails.username);
                // setIsfollowed(true);
                getAllUsers();


            }else{
                toast.error(data.message+" "+userdetails.username);
            }



        } catch (error) {
            // console.error("Error submitting profile:", error);
            toast.error("Error submitting profile!");
        }


    }
    const unfollow = async (e) => {
        e.preventDefault();

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
                toast.success(data.message+" "+userdetails.username);
                // setIsfollowed(true);
                getAllUsers();


            }else{
                toast.error(data.message+" "+userdetails.username);
            }



        } catch (error) {
            console.error("Error submitting profile:", error);
            toast.error("Error Updating profile!");
        }


    }

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

    return (
        <>
            <div className='flex mt-22   mb-12 pb-2 bg-white md:ml-[25%] dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>

                <section className='float-end flex  flex-col md:ml-  w-full  h-full '>


                    <div className="md:min-w-full pb-2 relative max-w-full bg-white  overflow-hidden    dark:bg-gray-800 ">
                        {userdetails.alldatas && userdetails.alldatas.bimage ? <img src={`http://localhost:8080${userdetails.alldatas.bimage}`} className="w-full object-cover   h-[43%] md:h-[45%] absolute z-0" /> :
                            <img src={assets.AddBanner} className="w-full object-cover   h-[43%] md:h-[45%] absolute z-0" />}

                        <div className="flex flex-col justify-center items-center mt-27  ">
                            {userdetails.alldatas && userdetails.alldatas.pimage ? <img className="w-24  md:w-35 md:h-35  h-24  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={`http://localhost:8080${userdetails.alldatas.pimage}`} alt="Bonnie image" /> :
                                <img className="w-24  md:w-35 md:h-35  h-24  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={assets.profileIcon} alt="Bonnie image" />}
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userdetails.username}</h5>
                            {userdetails.alldatas && userdetails.alldatas.description ? <span className="text-sm text-gray-500 dark:text-gray-400">{userdetails.alldatas.description}</span> :
                                <span className="text-sm text-gray-500 dark:text-gray-400">Add your Description</span>}
                            <div className="flex flex-col justify-between w-full items-center">

                            <div className="flex w-full  mt-4 md:mt-6   justify-evenly md:justify-center ">
                                <div className="w-[20%] flex justify-center items-center">
                                    
                                <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300  md:font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Message</button>
                                </div>
                                {isFollowed ? 

                                <div className="w-[20%] flex justify-center items-center">
                                <button onClick={unfollow}  className="bg-transparent text-green-600 cursor-pointer hover:text-[#48a6a6] focus:ring-4 focus:outline-none border-2 border-[#48a6a6] focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:text-green-600 dark:hover:text-[#48a6a6] dark:focus:ring-green-800">Unfollow</button> 
                                </div>:
                                <div className="w-[20%] flex justify-center items-center">
                                <button onClick={addfollow} className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">{request || follow ? "Follow Back" : "Follow"}</button>
                                </div>
                                 }
                                <div className="w-[20%] flex justify-center items-center">

                                <button className="text-white cursor-pointer  bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">Block</button>
                                    </div>
                            </div>
                            <div className="flex w-full  mt-4 md:mt-6  justify-evenly md:justify-center">
                                <Link to="" className='flex flex-col items-center justify-center w-[20%] text-center  dark:text-white'>
                                    <span className='md:text-xl tex-lg '>213</span>
                                    <span className='text-[15px]'>Posts</span>
                                </Link>
                                <Link to="/friends" className='flex flex-col items-center  w-[20%] justify-center dark:text-white'>
                                    <span className='md:text-xl tex-lg'>{userdetails.alldatas.followers ? formatFollowers(userdetails.alldatas.followers.length)  : 0}</span>
                                    <span className='text-[15px]'>followers</span>
                                </Link>
                                <Link to="/friends" className='flex flex-col items-center w-[20%] justify-center dark:text-white'>
                                    <span className='md:text-xl tex-lg'>{userdetails.alldatas.following ? formatFollowers(userdetails.alldatas.following.length)  : 0}</span>
                                    <span className='text-[15px]'>following</span>
                                </Link>
                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <span className=' h-0.5 my-3 bg-gray-600/30 mx-5'> </span>
                    <div className=" w-full h-full rounded-xl pt-3 bg-white dark:bg-gray-800 ">
                        <ul className='flex justify-evenly gap-10 items-center mb-3 md:mb-1'>
                            <li>
                                <Link onClick={() => setPrfilepage(1)} className={`dark:text-white text-black rounded-2xl md:px-4 px-2 md:py-1 ${profielpage === 1 ? "bg-[#48a6a6] text-white" : " "}`} >
                                    Posts
                                </Link>

                            </li>
                            <li>
                                <Link onClick={() => setPrfilepage(2)} className={`dark:text-white rounded-2xl md:px-4 px-2 md:py-1 ${profielpage === 2 ? "bg-[#48a6a6] text-white " : " "}`}>
                                    Videos
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setPrfilepage(3)} className={`dark:text-white rounded-2xl md:px-4 px-2 md:py-1 ${profielpage === 3 ? "bg-[#48a6a6] text-white" : " "} S`}>
                                    Tag
                                </Link>
                            </li>
                        </ul>
                        <Postpage view={profielpage} />
                        {/* <div className={`${profielpage === 2 ? "block" : "hidden"}`}>Videos</div> */}
                        <Profilevideos view={profielpage} />
                        <Tags view={profielpage} />

                    </div>



                </section>
            </div>
        </>
    )
}

export default UserProfile
