import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Sidemenu from '../components/Sidemenu';
import Postpage from './Postpage';
import Profilevideos from './Profilevideos';
import Tags from './Tags';
import { useAuth } from '../contextAPI';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_API_URL;
// import { userdata } from '../../../server/controllers/userdata-controller';


function Profile(props) {
  const [isdrop, setdrop] = useState(false);
  const [profielpage, setPrfilepage] = useState(1);
  const [viewpimage, setViewPimage] = useState(false);
  const [getpost, setgetPost] = useState(0);
  const [mediaId, setMediaId] = useState("");
  const [count, setCount] = useState(0);
  const [addcomment, setAddComment] = useState("");
const [showlikes,setShowLikes] = useState(false)


  const navigate = useNavigate()

  const { user, userdata, allposts, getposts, getAllposts } = useAuth();
  // console.log(find.media);
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
  useEffect(() => {
    const findpost = allposts.filter(post => post.userId._id === user._id);
    setgetPost(findpost.length);
    // console.log(findpost);


  }, [user, allposts]);
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
        getposts();
        getAllposts();

      }
    } catch (error) {
      console.log(error);

    }
  }

  const deletepost = async (postId) => {
    try {

      const response = await fetch(`${API}/api/post/delete-posts/${postId}`, {
        method: "DELETE",

      })
      const data = await response.json();
      if (response.ok) {
        toast.success("Post deleted successfully");
        getAllposts(); // Refresh posts after deletion
        setMediaId("")
        getAllposts();

      } else {
        toast.success(data.message);
      }
    } catch (error) {
      console.error("Error deleting post:", error);

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
        getAllposts();

      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div className='flex mt-22 relative   mb-12 pb-2 bg-white md:ml-[25%] dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>

        <section className='float-end flex  flex-col md:ml-  w-full  h-full '>


          <div className="md:min-w-full pb-2 relative max-w-full bg-white  overflow-hidden z-10   dark:bg-gray-800 ">
            {userdata && userdata.bimage ? (


              <img src={`${userdata.bimage}`} className={` w-full object-cover   h-[43%] md:h-[45%] absolute z-0`} />

            ) :
              (

                <div className={` w-full object-cover flex justify-center items-center   h-[43%] md:h-[45%] absolute z-0 bg-[#48a6a6]`} >
                <h1 className='text-gray-50/50 text-4xl'>Add Banner</h1>
                </div>

              )}
            <div className="flex justify-end md:px-4 md:pt-4 z-8">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`block z-11 cursor-pointer rounded-lg text-gray-600 bg-gray-400/10 hover:text-black  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                <i className={`${isdrop ? "fa-solid fa-xmark fa-xl" : " fa-solid fa-bars fa-xl"}`}></i>

              </button>

              <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'} rounded-xl absolute  text-base list-none bg-white divide-y divide-gray-100  w-44 dark:bg-gray-700`}>
                {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block z-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none overflow-hidden focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                  <i className=''></i>
                </button> */}
                <ul className="md:py-2" aria-labelledby="dropdownButton">
                  <li>
                    <Link to="/Editprofile" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit Profile</Link>
                  </li>
                  <li>
                    <Link to="/PasswordChange" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Change Password</Link>
                  </li>

                  <li>
                    <NavLink to="/logout" className="block px-4 md:py-2 text-sm text-red-600 hover:bg-red-100  dark:text-red-600 ">Logout</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col  items-center mt-27 z-33  relative">
              {userdata && userdata.pimage ? (
                <button onClick={() => setViewPimage(!viewpimage)}>

                  <img className={` cursor-pointer w-24  md:w-35 md:h-35  h-24  rounded-full border-2 border-white  shadow-lg object-cover z-33`} src={`${API}${userdata.pimage}`} alt="Bonnie image" />
                </button>
              ) :
                (
                  <button onClick={() => setViewPimage(!viewpimage)}>

                    <img className={` cursor-pointer w-24  md:w-35 md:h-35  h-24  rounded-full border-2 border-white  shadow-lg object-cover z-11`} src={assets.profileIcon} alt="Bonnie image" />
                  </button>
                )}
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.username}</h5>
              {userdata && userdata.description ? <span className="text-sm text-gray-500 dark:text-gray-400">{userdata.description}</span> :
                <span className="text-sm text-gray-500 dark:text-gray-400">Add your Description</span>}
              <div className="flex mt-4 md:mt-6  gap-10 ">
                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>{getpost ? formatFollowers(getpost) : 0}</span>
                  <span className='text-[15px]'>Posts</span>
                </Link>
              </div>
              <div className="flex mt-4 md:mt-6  gap-15">
                <Link to="/friends" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>{userdata && userdata.followers ? formatFollowers(userdata.followers.length) : 0}</span>
                  <span className='text-[15px]'>followers</span>
                </Link>
                <Link to="/friends" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>{userdata && userdata.following ? formatFollowers(userdata.following.length) : 0}</span>
                  <span className='text-[15px]'>following</span>
                </Link>
                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
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
            <div className={`${profielpage === 1 ? "block" : "hidden"} px-2 md:px-5 relative`}>
              {getpost > 0  ? (
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-1 md:mt-10 justify-between  items-center">
                  {allposts.filter(post => post.userId._id === user._id) // Get only user's posts
                    .map((post) => (
                      post.media.length === 1 ? (
                        post.media.filter(p => p.type === "image").map((media, i) => (


                          <button onClick={() => setMediaId(post._id)} key={i} className='justify-center md:h-90 h-40 rounded-lg hover:shadow-2xl overflow-hidden cursor-pointer  flex w-full' data-aos="flip-down">
                            <img className="h-auto w-full object-cover rounded-lg hover:scale-105 transition-all delay-150 ease-in-out hover:opacity-90  " src={media.url} alt="" />
                          </button>
                        )))
                        :
                        (
                          <div className="flex h-90 w-full relative  items-center overflow-hidden">
                            <i class="fa-solid fa-images fa-2xl absolute z-12 ml-[87%] mb-[81%] text-white"></i>
                            {post.media.filter(p => p.type === "image").map((media, i) => (


                              <button onClick={() => setMediaId(post._id)} key={i} className='  cursor-pointer rounded-lg hover:shadow-2xl overflow-hidden h-full shrink-0  w-full object-fill ' data-aos="flip-down">
                                <img className="h-full   w-93 object-fill hover:scale-105 transition-all delay-150 ease-in-out hover:opacity-90 rounded-lg" src={media.url} alt="" />
                              </button>
                            ))
                            }
                          </div>


                        )))}


                </div>

              ) : (

                <div className='flex justify-center items-center flex-col gap-5 w-full h-100'>
                  <Link to="/Createpost" className="text-8xl text-gray-900/40 dark:text-gray-500/50 hover:text-gray-700/50 cursor-pointer ">
                    <i class="fa-solid fa-square-plus fa-xl"></i>
                  </Link>
                  <div className="">

                    <p className='text-gray-900/40 dark:text-gray-500/50 text-lg'>Add Post</p>
                  </div>
                </div>
              )}
            </div>
            {/* <div className={`${profielpage === 2 ? "block" : "hidden"}`}>Videos</div> */}
            <div className={`${profielpage === 2 ? "block" : "hidden"} px-2 md:px-5`}>
              {getpost > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-1  md:mt-10 justify-between  items-center">
                  {allposts.filter(post => post.userId._id === user._id) // Get only user's posts
                    .map((post) => (
                      post.media.length > 0 &&
                      post.media.filter(media => media.type === "video") // Filter only videos
                        .map((media, i) => (
                          <button  onClick={() => setMediaId(post._id)} key={i} className='relative cursor-pointer overflow-hidden justify-center items-center flex w-full  h-full' data-aos="flip-down">
                            <video className=" md:h-100  w-full object-fill rounded-lg  transition-all delay-150 duration-300 ease-in-out" src={media.url} alt="" />
                            <div  
                            className={`hover:opacity-95 z-55   h-full opacity-0 hover:rotate-y-0 rotate-y-190 transition-all delay-150 duration-300 ease-in-out cursor-pointer w-full absolute bg-gray-800/50 flex gap-5 text-white justify-center items-center`
                        }>
                            
                              <div className="">
                              
                                <i className='fa-solid fa-thumbs-up fa-xl'></i> 
                                <p>{formatFollowers(post.likes.length) || 0}</p>                             
                              </div>
                              <div className="">
                                <i className='fa-solid fa-message fa-xl'></i>                              
                                <p>{formatFollowers(post.comments.length) || 0}</p>                             

                              </div>
                            </div>
                          </button>
                        ))
                    ))}
                </div>

              ) : (

                <div className='flex justify-center items-center flex-col gap-5 w-full h-100'>
                  <Link to="/Createpost" className="text-8xl text-gray-900/40 dark:text-gray-500/50 hover:text-gray-700/50 cursor-pointer ">
                    <i class="fa-solid fa-square-plus fa-xl"></i>
                  </Link>
                  <div className="">

                    <p className='text-gray-900/40 dark:text-gray-500/50 text-lg'>Add Post</p>
                  </div>
                </div>
              )}
            </div>
            <Tags view={profielpage} />

          </div>



        </section>
      </div>
      <div className={` ${mediaId ? "block" : "hidden"} fixed bottom-0 h-full w-full ml-0 bg-gray-700/60  z-33 `
      }>
        <button onClick={() => setMediaId("")} className='cursor-pointer hover:text-gray-200 text-3xl m-3 text-white ' >
          <i class="fa-solid fa-xmark   m-1 "></i>

        </button>
        {allposts.filter(post => post._id === mediaId) // Get only user's posts
          .map((post, i) => (
            <div className="w-full h-[100%] flex md:flex-row flex-col justify-center items-center gap-1 pb-20 ">
              <div key={i} className={`${post.media.length > 1 ? "block" : "hidden"} md:h-[95%] w-[35%] gap-2  rounded-xl h-[40%] bg-white dark:bg-gray-800 flex  overflow-hidden items-center relative`}>
                <button onClick={() => preButton(post.userId)} disabled={count === 0} className={`${count === 0 ? "opacity-50" : ""}  z-10 -[90%] absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                  <i class="fa-solid fa-arrow-left m-2"></i>
                </button>
                <div className="flex w-full  items-center   transition ease-out duration-400 "
                  style={{
                    transform: `translateX(-${count * 100}%)`
                  }}>
                  {post.media.map((media, i) => (

                    media.type === "image" &&
                    (

                      <img className="max-h-[100%] w-full object-fill rounded-lg" src={media.url} alt="post" />
                    )




                  ))}
                </div>
                <button onClick={() => nextButton(post.userId)} disabled={count === post.media.length - 1} className={`${count === post.media.length - 1 ? "opacity-50" : ""}  ml-[94%]  z-14 absolute  cursor-pointer rounded-full bg-gray-800/50 text-sm items-center text-white`}>
                  <i class="fa-solid fa-arrow-right m-2"></i>
                </button>
              </div>
              <div key={i} className={`${post.media.length === 1 ? "block" : "hidden"} flex-col md:h-[95%] w-[35%] gap-2  rounded-xl h-[40%] bg-white dark:bg-gray-800 flex  overflow-hidden items-center relative`}>

                <div className="flex w-full h-[90%] justify-center items-center  transition ease-out duration-400 p-2">
                  {post.media.map((media, i) => (

                    media.type === "image" ?
                      (

                        <img className="max-h-[100%] w-full object-cover rounded-lg" src={media.url} alt="post" />
                      )
                      :
                      (

                        <video className="max-h-[100%] max-w-[50%] object-fill rounded-lg" autoPlay={true} controls loop src={media.url} alt="video" />
                      )



                  ))}
                </div>
                  <div className="h-full w-full dark:text-white px-3">
                    <p>{post.content || "No description"}</p>
                  </div>
              </div>
              <div className="h-[95%] md:w-[35%]  overflow-hidden  w-full  rounded-xl bg-white dark:bg-gray-800">
                <div className="sticky top-0  bg-white dark:bg-gray-700 w-full flex justify-center flex-col items-center dark:text-white border-b-2 border-gray-700">
                  <div className="flex justify-between items-center top-0 w-full px-3 pt-2 h-[5%]   bg-white dark:bg-gray-800">
                    <button onClick={() => addLike(post._id)} className={`float-start cursor-pointer  flex items-center  gap-1`} >
                      <i className={`${post.likes.some(f => f._id === user._id) ? "text-red-600" : ""} fa-solid fa-thumbs-up fa-xl `}></i>
                      <p className="text-md">{formatFollowers(post.likes.length) || 0}</p>

                    </button>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDateTime(post.createdAt)}</div>
                    <button onClick={() => deletepost(post._id)} className=' cursor-pointer text-red-500 hover:text-red-300r'>
                      <i class="fa-solid fa-trash float-end "></i>
                    </button>
                  </div>
                  <h1>Comments-{formatFollowers(post.comments.length) || 0}</h1>
                </div>
                <div className=" h-full overflow-y-scroll  relative scobar w-full  rounded-xl bg-white dark:bg-gray-800">

                  {post.comments.length > 0 ? (
                    post.comments.sort((a, b) => new Date(b.commentAt) - new Date(a.commentAt)).map((com, i) => (
                      <div className="px-1 h" key={i}>
                        <div className={` dark:bg-gray-600   dark:text-white bg-gray-100 rounded-xl border-0 broder-gray-120  mt-4 md:pt-2 scrollbar-hide p-3 max-h-50 overflow-scroll snap-x`}>
                          <div className="border-b-2 border-gray-200 dark:border-gray-700 ">
                            <div className="flex items-center">
                              <div className="shrink-0">
                                <img className="w-4 h-4 md:w-8 md:h-8 rounded-full" src={com._id.pimage ? `${API}${com._id.pimage}` : (assets.profileIcon)} alt="Neil image" />
                              </div>
                              <div className="flex-1 min-w-0 ms-4">
                                <p className="text-[7px] md:text-[10px] font-medium text-gray-900 truncate dark:text-white">
                                  {com._id.username}
                                </p>
                                <p className="text-[7px] md:text-[10px] text-gray-500 truncate dark:text-gray-400">
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
                </div>
                <div className='p-1  sticky    bg-white dark:bg-gray-800 bottom-0 w-full'>
                  <div className="flex  w-full border border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">

                    <input type='text' name="comment" value={addcomment} onChange={e => setAddComment(e.target.value)} id="search" className="block rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send comment..." required />
                    <button onClick={() => addData(post._id)} className="text-white cursor-pointer  end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button onClick={() => setViewPimage(!viewpimage)} className={`${viewpimage ? "scale-101 opacity-100" : "scale-0 opacity-0"} w-full cursor-pointer transition-all delay-150 duration-300 ease-in-out  bg-gray-950/70 fixed bottom-0 z-50 top-0`}>
        <div className="w-full flex justify-center items-center">
          {userdata && userdata.pimage ? (
            <img src={`${API}${userdata.pimage}`} alt="Bonnie image" className='md:h-[600px] md:w-[600px] h-[350px] w-[350px] rounded-full object-cover' />
          ) : (
            <img src={assets.profileIcon} alt="Bonnie image" className='md:h-[600px] md:w-[600px] h-[350px] w-[350px] rounded-full object-cover' />

          )}
        </div>
      </button>
    </>
  )
}

export default Profile
