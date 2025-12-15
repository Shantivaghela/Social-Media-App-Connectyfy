import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { videoInfo } from '../assets/videosInfo'
import Sidemenu from '../components/Sidemenu'
import Header from '../components/Header'
import { Link, NavLink } from 'react-router-dom'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../App.css";
import Comment from '../components/Comment'
import { useAuth } from '../contextAPI'
import { toast } from 'react-toastify'
import { useSocketContext } from '../contextAPI/socketContext'
const API = import.meta.env.VITE_API_URL;


function Videos() {
  // const videos = videoInfo;
  const [show, setShow] = useState(true);
  const [commentshow, setCommentshow] = useState(false)
  const videoRefs = useRef([]);
  const [videolength, setVideolength] = useState({});
  const [isFollowed, setIsFollowed] = useState({
    following: "",
    request: "",
    followers: ""
  });
  const [comment, setComment] = useState();
  const [postid, setPostid] = useState();
  const [comshow, setComshow] = useState(false);
  const [addcomment, setAddComment] = useState("");
  const { allposts, user, userdata, getuserdata, getAllUsers, getAllposts } = useAuth();
  // console.log(allposts);


  useEffect(() => {
    if (userdata) {
      const findf = userdata.following.map((follow) => follow._id);;
      const findReq = userdata.requests.map((follow) => follow._id);;
      const findFollo = userdata.followers.map((follow) => follow._id);;
      // const getFl = findf.find(f => f._id === )
      setIsFollowed({ ...isFollowed, following: findf, request: findReq, followers: findFollo })

    }

    const findcomment = allposts.map(f => f.comments)
    // console.log(findcomment);

  }, [allposts])
  const videodurationfun = (index) => {
    const video = videoRefs.current[index]; // Get the correct video reference
    if (video && video.duration) {
      const bar = (video.currentTime / video.duration) * 100;

      setVideolength((prev) => ({
        ...prev,
        [index]: bar + "%",
      }));
    }
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
        console.log(data);
        toast.success(data.message);
        setComment("")
        getAllposts();

      }
    } catch (error) {
      console.log(error);

    }
  }

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

  const addData = async (userID) => {
    try {
      const response = await fetch(`${API}/api/post/get-posts/${userID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentId: user._id,
          comment: addcomment
        }),
      })
      if (response.ok) {

        const data = await response.json()
        // console.log(data);
        toast.success("Comment Sended");
        setAddComment("")
        getAllposts();

      }
    } catch (error) {
      console.log(error);

    }
  }
      const { socket, onlineusers } = useSocketContext();
      const handleNotification = (receiverId,type) => {
        socket.emit("sendNotification",{
            senderName:user.username,
            receiverId,
            type,
        })
    }
  return (
    <>

      <section className='md:ml-96 md:mt-17  md:mb-0 mb-0 flex pt-5'>
        {commentshow && <Comment view={setCommentshow} commentid={comment} postId={postid} />}
        <div className="  w-full md:max-h-[590px] max-h-[900px] overflow-y-scroll snap-y snap-mandatory scroll-mt-50 ">
          <div className=' md:mt-15 flex flex-col justify-center items-center '>

            {allposts ? (
              allposts.filter(itmes => itmes.userId._id !== user._id).map((post, i) => (

                (post.media.map((items, index) => (

                  items.type === "video" ? (
                    <div className="">
                      <div className="md:snap-end  snap-start  snap-always relative " key={i}>
                        <button onDoubleClick={() => addLike(post._id)} className='h-120 w-full z-11  cursor-pointer absolute mt-20'></button>
                        <div className="absolute  w-full mt-150 md:mt-80 z-12 ">
                          <div className="float-end flex flex-col gap-10 pr-3 text-white">
                            <button onClick={() => {addLike(post._id),handleNotification(post.userId._id,4)}} className={` cursor-pointer  flex flex-col justify-center items-center gap-3`} >
                              <i className={`${post.likes.some(f => f._id === user._id) ? "text-red-600" : ""} fa-solid fa-thumbs-up fa-xl `}></i>
                              <p className="text-[10px]">{post.likes.length}</p>

                            </button>

                            <button onClick={() => { setCommentshow(!commentshow), setComment(post.comments), setPostid(post._id), setComshow(!comshow) }} className={` cursor-pointer  hover:text-[#48a6a6] hidden md:flex flex-col justify-center items-center gap-3`}>

                              <i className={`${commentshow ? "text-[#48a6a6]" : ""} fa-solid fa-message fa-xl`}></i>
                              <p className="text-[10px]">{post.comments.length}</p>
                            </button>
                            <button onClick={() => {setComshow(!comshow) }} className={` cursor-pointer hover:text-[#48a6a6] md:hidden flex flex-col justify-center items-center gap-3`}>

                              <i className={`${comshow ? "text-[#48a6a6]" : ""} fa-solid fa-message fa-xl`}></i>
                              <p className="text-[10px]">{post.comments.length}</p>
                            </button>

                            <button className={` hover:text-[#48a6a6] flex flex-col justify-center items-center gap-3 cursor-pointer`}>

                              <i className="fa-solid fa-paper-plane fa-xl"></i>
                              <p className="text-[10px]"></p>

                            </button>
                            <Link to="#" className='hover:text-[#48a6a6] flex flex-col justify-center items-center cursor-pointer gap-3'>

                              <i className="fa-solid fa-bookmark fa-xl"></i>
                              {/* <p className="text-[10px]">123</p> */}

                            </Link>

                          </div>
                          <div className={`  max-h-[200px]  z-13 relative overflow-h flex mt-60 md:mt-60 flex-col-reverse w-[85%] transition-[height  duration-300 ease-in-out`}>
                            <div className=" bg-gray-400/20 text-white max-h-[300px]  absolute flex flex-col w-full bottom-0 text-[10px] pl-2">
                              <div className="flex justify-items-end mb-6  items-center float-start ">
                                <Link to={`/userprofile/${post.userId._id}`} className='flex'>
                                <img src={assets.logo} alt="" className='h-8 w-8 rounded-full border-1  border-white' />
                                <p className="text-white items-center flex mx-1 text-[12px] ">
                                  {post.userId.username}
                                </p>
                                </Link>

                                {isFollowed.following.includes(post.userId._id) ?
                                  <button onClick={() => unfollow(post.userId._id)} className="bg-transparent text-white cursor-pointer hover:text-gray-300 focus:ring-4 focus:outline-none border-2 border-white focus:ring-gray-300 font-medium rounded-lg text-[10px]   ml-2  px-2 py-1.5 text-center ">Unfollow</button>
                                  :
                                  <button onClick={() => addfollow(post.userId._id)} className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[10px] md:w ml-2 sm:w-au px-2 py-1.5  text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">{isFollowed.request.includes(post.userId._id) || isFollowed.followers.includes(post.userId._id) ? "Follow Back" : "Follow"}</button>
                                }
                              </div>
                              <div className="break-words">
                                <ReactReadMoreReadLess

                                  charLimit={50}
                                  readLessText={"Read less ▲"}
                                  readMoreText={"Read more ▼"}
                                  readLessClassName="transition-[height] duration-300 ease-in-out"

                                >

                                  {post.content ?
                                    post.content
                                    :
                                    "  "}




                                </ReactReadMoreReadLess>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={`${comshow ? "h-[50%]" : "h-0"} z-20 mb-11  w-full overflow-y-scroll scobar  transition-all delay-100 duration-300 ease-in-out absolute md:hidden block bg-white dark:bg-gray-800 bottom-0  `}>
                          <div className="flex justify-between border-b-2 sticky bg-white dark:bg-gray-800 top-0 border-gray-400 dark:text-white w-full h-20 items-center px-3">
                            <h1 className='text-xl  '>
                              Comments
                            </h1>
                            <button onClick={() => setComshow(!comshow)} className='cursor-pointer rounded-full  hover:text-white hover:bg-[#48a6a6]' >
                              <i class="fa-solid fa-xmark fa-xl  m-1 rounded-full ]"></i>

                            </button>
                          </div>
                          {post.comments.length > 0 ? (
                            post.comments.sort((a, b) => new Date(b.commentAt) - new Date(a.commentAt)).map((com, index) => (
                              <div className="px-1 " key={index}>
                                <div className={` dark:bg-gray-600 h-full   dark:text-white bg-gray-100 rounded-xl border-0 broder-gray-120  mt-4 md:pt-2 scrollbar-hide p-3 max-h-50 overflow-scroll snap-x`}>
                                  <div className="border-b-2 border-gray-200 dark:border-gray-700 ">
                                    <div className="flex items-center">
                                      <div className="shrink-0">
                                        <img className="w-6 h-6 md:w-8 md:h-8 rounded-full" src={com._id.pimage ? `${API}${com._id.pimage}` : (assets.profileIcon)} alt="Neil image" />
                                      </div>
                                      <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-md md:text-[10px] font-medium text-gray-900 truncate dark:text-white">
                                          {com._id.username}
                                        </p>
                                        <p className="text-sm md:text-[10px] text-gray-500 truncate dark:text-gray-400">
                                          {formatDateTime(com.commentAt)}
                                        </p>
                                      </div>

                                    </div>
                                    <div className="">
                                      <p className='text-md my-2'>{com.comment}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="flex w-full h-full justify-center items-center">
                              <p className='dark:text-white text-md'>No Comments avalible</p>
                            </div>
                          )}
                          <div className="flex justify-center items-center m-3">
                            <span className='h-1 w-20 bg-gray-600/30'></span>
                          </div>
                          <div className='p-1 sticky  bg-white dark:bg-gray-800 bottom-0 w-full'>
                            <div className="flex  w-full border border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">

                              <input type='text' name="comment" value={addcomment} onChange={e => setAddComment(e.target.value)} id="search" className="block rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send comment..." required />
                              <button onClick={() => {addData(post._id),handleNotification(post.userId._id,3)}} className="text-white cursor-pointer  end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                            </div>
                          </div>
                        </div>


                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className={`bg-blue-600 h-2.5 rounded-full`} style={{ width: videolength[index] || "0%" }}></div>
                        </div>

                        <video
                          key={index}
                          src={items.url}
                          ref={(el) => (videoRefs.current[index] = el)}
                          onTimeUpdate={() => videodurationfun(index)}
                          onLoadedMetadata={() => videodurationfun(index)}
                          className='dura h-[900px] mb-3 overflow-hidden object-cover md:rounded-lg md:shadow-xl md:hover:dark:shadow-[#48a6a6] md:shadow-black  md:h-[560px] md:w-[340px] '
                          loop autoPlay={true}></video>
                      </div>
                    </div>
                  ) : ("")

                )))
              ))) : ("")
            }
          </div>



        </div>
      </section>
    </>
  )
}

export default Videos
