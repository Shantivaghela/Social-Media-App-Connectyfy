import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';
import { useAuth } from '../contextAPI';
import { toast } from 'react-toastify';
import { useSocketContext } from '../contextAPI/socketContext';
const API = import.meta.env.VITE_API_URL;


// import './App.css'

function PostLayout() {
    const [isOpen, setOpen] = useState();
    const [isLike, setLike] = useState(false);
    const [count, setCount] = useState(0);
    const [isFollowed, setIsFollowed] = useState({
        following: "",
        request: "",
        followers: ""
    });

    const [comment, setComment] = useState("");


    const { posts, userdata, user, allposts, allusers, getAllUsers, getuserdata, getAllposts } = useAuth();
    const { socket, onlineusers } = useSocketContext();


    // console.log(allposts);
    const showComment = (index) => {
        if (isOpen === index) {
            setOpen()
        } else {

            setOpen(index)
        }
        // console.log(isOpen);
    }
    useEffect(() => {
        if (userdata) {
            const findf = userdata.following.map((follow) => follow._id);;
            const findReq = userdata.requests.map((follow) => follow._id);;
            const findFollo = userdata.followers.map((follow) => follow._id);;
            // const getFl = findf.find(f => f._id === )
            setIsFollowed({ ...isFollowed, following: findf, request: findReq, followers: findFollo })

        }

        const findcomment = allposts.map(f => f.comments)


    }, [allposts])

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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };
    const formatDateTime = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",  // Indian Time Zone
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,  // 12-hour format
            day: "2-digit",
            month: "long",
            year: "numeric",
        }).replace(",", " -");
    };
    const addfollow = async (userId) => {
        // e.preventDefault();

        try {
            const currentUserid = user._id;
            // console.log(currentUserid);


            const response = await fetch(`${API}/api/user/follow/${currentUserid}`, {
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
                toast.success("Followed sucessfully");
                // setIsfollowed(true);
                getAllUsers();
                getuserdata();


            } else {
                toast.error("Something wrong");
            }



        } catch (error) {
            // console.error("Error submitting profile:", error);
            toast.error("Error submitting profile!");
        }


    }
    const unfollow = async (userId) => {
        // e.preventDefault();

        try {
            const currentUserid = user._id;
            // console.log(currentUserid);


            const response = await fetch(`${API}/api/user/unfollow/${currentUserid}`, {
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
                toast.success("Unfollow Sucessfully");
                // setIsfollowed(true);
                getAllUsers();
                getuserdata();

            } else {
                toast.error("Some thing wrong");
            }



        } catch (error) {
            console.error("Error submitting profile:", error);
            toast.error("Error Updating profile!");
        }


    }


    // comment add section

    const addData = async (userID) => {
        try {
            const response = await fetch(`${API}/api/post/get-posts/${userID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    commentId: user._id,
                    comment: comment
                }),
            })
            if (response.ok) {

                const data = await response.json()
                toast.success("Comment Sended");
                setComment("")
                getAllposts();

            }
        } catch (error) {
            console.log(error);

        }
    }
    const addLike = async (userID) => {
        try {
            const response = await fetch(`${API}/api/post/get-posts/${userID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    likedId: user._id,
                }),
            })
            if (response.ok) {

                const data = await response.json()
                toast.success(data.message);
                setComment("")
                getAllposts();

            }
        } catch (error) {
            console.log(error);

        }
    }
    const handleNotification = (receiverId, type) => {
        socket.emit("sendNotification", {
            senderName: user.username,
            receiverId,
            type,
        })
    }

    return (
        <>
            {allposts  ? (
                allposts.filter(itmes => itmes.userId?._id !== user?._id).map((post, index) => (
                    <section key={index} className='max-h-[50%]  bg-white dark:bg-gray-800 mt-3 ' data-aos="slide-up">

                        <div className="flex items-center gap-4 pl-4  h-15 ">
                            <Link to={`/userprofile/${post.userId?._id}`} className='flex gap-3'>
                                <img className="w-10 h-10 rounded-full object-cover" src={post.userId?.pimage ? API.post.userId.pimage : (assets.profileIcon)} alt="" />
                                <div className="md:font-medium text-sm dark:text-white">
                                    <p className=''>{post.userId?.username}</p>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(post.createdAt)}</div>
                                </div>
                            </Link>
                            {isFollowed.following.includes(post.userId?._id) ?

                                <div className="w-[20%] flex justify-center items-center">
                                    <button onClick={() => unfollow(post.userId?._id)} className="bg-transparent text-green-600 cursor-pointer hover:text-[#48a6a6] focus:ring-4 focus:outline-none border-2 border-[#48a6a6] focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-2 py-1 md:px-3 md:py-2 text-center dark:text-green-600 dark:hover:text-[#48a6a6] dark:focus:ring-green-800">Unfollow</button>
                                </div> :
                                <div className="w-[20%] flex justify-center items-center">
                                    {/* {post.userId} */}
                                    <button onClick={() => addfollow(post.userId?._id)} className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-2 py-1 md:px-3 md:py-2 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">{isFollowed.request.includes(post.userId._id) || isFollowed.followers.includes(post.userId._id) ? "Follow Back" : "Follow"}</button>
                                </div>
                            }
                        </div>


                        {post.media.length === 1 &&
                            (<div className='md:h-[550px] overflow-hidden w-full object-cover flex justify-center relative items-center scobar scroller   transition ease-out duration-400'
                            >

                                {/* <button onClick={() => preButton(post.userId)} className={`${post.media.length > 1 ? "block" : "hidden"}  mr-[90%] absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                                    <i className="fa-solid fa-arrow-left m-2"></i>
                                </button> */}
                                {post.media.map((items, i) => (
                                    (items.type === "image" ?
                                        (
                                            <img key={i} src={items.url} alt="" className='md:h-[550px] object-contain' />


                                        )
                                        :
                                        <video key={i} src={items.url} controls autoPlay={true} loop className='h-[550px]'></video>
                                    )

                                    //  (items.type === "video" &&  <video key={i} src={items.url} controls autoPlay={true} loop className='h-[500px]'></video>)

                                ))}
                                {/* <button onClick={() => nextButton(post.userId)} className={`${post.media.length > 1 ? "block" : "hidden"}  ml-[90%]  absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                                    <i className="fa-solid fa-arrow-right m-2"></i>
                                </button> */}
                            </div>
                            )}
                        {post.media.length > 1 &&
                            (<div className='h-[50%] w-full object-cover flex justify-center  relative items-center scobar scroller overflow-hidden  transition ease-out duration-400           '
                            >
                                <button onClick={() => preButton(post.userId)} disabled={count === 0} className={`${count === 0 ? "opacity-50" : ""} z-10 mr-[90%] absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                                    <i className="fa-solid fa-arrow-left m-2"></i>
                                </button>
                                <div className='h-full w-full object-cover flex  relative items-center scobar scroller   transition ease-out duration-400'
                                    style={{
                                        transform: `translateX(-${count * 100}%)`
                                    }}>

                                    {post.media.map((items, i) => (
                                        (

                                            <img key={i} src={items.url} alt="" className='md:h-[550px] object-contain  ' />

                                        )

                                        //  (items.type === "video" &&  <video key={i} src={items.url} controls autoPlay={true} loop className='h-[500px]'></video>)

                                    ))}
                                </div>
                                <button onClick={() => nextButton(post.userId)} disabled={count === post.media.length - 1} className={`${count === post.media.length - 1 ? "opacity-50" : ""}  ml-[90%]  absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                                    <i className="fa-solid fa-arrow-right m-2"></i>
                                </button>

                            </div>
                            )}
                        <div className={`${post.media.length > 1 ? "block" : "hidden"} w-full flex justify-center gap-4 mt-3 `}>
                            {post.media.map((s, i) => {
                                return (<span key={i} className={`h-2 w-2 rounded-full ${i === count ? "bg-black" : "bg-gray-400"}  `}></span>)
                            })}
                        </div>

                        <div className=" w-full h-full bg-white dark:bg-gray-800 mt-5 z-2">
                            <div className='flex h-10 md:h-full mt-2 md:mt-1  md:w-[25%] items-center justify-between w-full md:float-end      px-3'>
                                <button onClick={() => { addLike(post._id), handleNotification(post.userId._id, 1) }} className='flex cursor-pointer flex-col gap-4 justify-center items-center float-end  dark:text-white'>
                                    <i className={`${post.likes.some(f => f._id === user._id) ? "fa-solid fa-thumbs-up fa-2xl text-red-600 " : "fa-regular fa-thumbs-up fa-2xl "} hover:text-blue-700`}></i>
                                    <p className='text-[10px] mt-1'>{post.likes.length}</p>
                                </button>
                                <button onClick={() => { showComment(index) }} className='flex cursor-pointer flex-col gap-4 justify-center items-center float-end hover:text-blue-700 dark:text-white'>
                                    <i className={`${isOpen === index ? "fa-solid fa-message fa-xl text-green-600" : "fa-regular fa-message fa-xl text-black dark:text-white"}  hover:text-blue-700`} ></i>
                                    <p className='text-[10px] mt-1'>{post.comments.length}</p>
                                </button>
                                <button className='flex flex-col gap-4 justify-center cursor-pointer items-center float-end hover:text-blue-700 dark:text-white'>
                                    <i className="fa-regular fa-paper-plane fa-xl"></i>
                                    <p className='text-[10px] pt-1'>0</p>
                                </button>
                            </div>
                            <div className={`${isOpen === index ? " max-h-50 md:pt-2 p-3  " : "max-h-0 p-0"} inset-shadow-sm overflow-y-auto inset-shadow-gray-800/50 overflow-hidden dark:bg-gray-600 dark:text-white bg-gray-100 rounded-xl border-0 broder-gray-120   md:ml-1   scobar  transition-all  ease-in-out delay-150 duration-300`} >
                                {post.comments.length > 0 ? (
                                    post.comments.sort((a, b) => new Date(b.commentAt) - new Date(a.commentAt)).map((c, i) => (
                                        <Link to={c._id._id === user._id ? '/profile' : `/userprofile/${c._id._id}`} key={i} className="border-b-2 border-gray-200 dark:border-gray-700" >
                                            <div className="flex items-center">
                                                <div className="shrink-0">
                                                    <img className="w-4 h-4 md:w-8 md:h-8 object-cover rounded-full" src={c._id.pimage ? `${API}${c._id.pimage}` : (assets.profileIcon)} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-[7px] md:text-[10px] font-medium text-gray-900 truncate dark:text-white">
                                                        {c._id.username}
                                                    </p>
                                                    <p className="text-[7px] md:text-[10px] text-gray-500 truncate dark:text-gray-400">
                                                        {formatDateTime(c.commentAt)}
                                                        {/* {c._id._id} */}
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="">
                                                <p className='text-md my-2'>{c.comment}</p>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="dark:text-white">
                                        <p>Not Comments avalible</p>
                                    </div>
                                )
                                }
                                <div className={`${post.comments.length > 0 ? "block" : "hidden"} w-full flex items-center flex-col`}>
                                    <span className='w-full h-0.5 bg-gray-300 mt-10'></span>
                                    <h1>No more Comments</h1>
                                </div>
                            </div>


                            <div className=' w-[75%] p-3 text-sm md:tex-lg md:h-full dark:text-white'>
                                <ReactReadMoreReadLess

                                    charLimit={50}
                                    readMoreText={"Read more ▼"}
                                    readLessText={"Read less ▲"}
                                >


                                    {post.content ?
                                        post.content
                                        :
                                        ""}
                                </ReactReadMoreReadLess>

                            </div>

                            <div className='p-1 '>
                                <div className="flex md:w-[50%] w-full border border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">

                                    <input type="search" name="comment" value={comment} onChange={e => setComment(e.target.value)} id="search" className="block rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send comment..." required />
                                    <button onClick={() => { addData(post._id), handleNotification(post.userId._id, 2) }} className="text-white cursor-pointer  end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                                </div>
                            </div>

                        </div>
                    </section>
                ))
            ) : ("")}
        </>
    )
}

export default PostLayout
