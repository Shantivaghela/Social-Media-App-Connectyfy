import React, { useEffect, useState } from 'react'
import { useAuth } from '../contextAPI';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Comment(props) {
    const { allposts, user, posts, getposts, getAllposts } = useAuth();
    const [addcomment, setAddComment] = useState("");
    const [showComments, setShowComments] = useState([]);
    // console.log(props.postId);
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
            const response = await fetch(`http://localhost:8080/api/post/get-posts/${userID}`, {
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

            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        const findpost = posts.find(f => f._id.toString() === props.postId);
        if (findpost) {

            setShowComments(findpost.comments);
        }
    }, [getposts, props.postId])

    

    return (
        <>
            <div className={`bg-white dark:bg-gray-800 h-[500px] w-[300px] overflow-hidden  absolute mt-6 rounded-xl hidden md:block`} data-aos="slide-left">
                <div className="flex  sticky top-0 bg-white dark:bg-gray-800 items-center justify-between dark:text-white px-3  pt-2">
                    <h1 className=''>
                        Comments
                    </h1>
                    <button onClick={() => props.view(false)} className='border-2 cursor-pointer rounded-full border-white hover:text-white hover:bg-[#48a6a6]' >
                        <i class="fa-solid fa-xmark   m-1 rounded-full ]"></i>

                    </button>
                </div>
                <div className="bg-white dark:bg-gray-800 h-full pb-20 w-full overflow-y-scroll scobar  mt-6 rounded-xl hidden md:block">
                {showComments.length > 0 ? (
                    showComments.sort((a, b) => new Date(b.commentAt) - new Date(a.commentAt)).map((com, i) => (
                        <div className="px-1 " key={i}>
                            <div className={` dark:bg-gray-600 h-full  dark:text-white bg-gray-100 rounded-xl border-0 broder-gray-120  mt-4 md:pt-2 scrollbar-hide p-3 max-h-50 overflow-scroll snap-x`}>
                                <div className="border-b-2 border-gray-200 dark:border-gray-700 ">
                                    <Link to={com._id._id === user._id ? '/profile':`/userprofile/${com._id._id}`} className="flex items-center">
                                        <div className="shrink-0">
                                            <img className="w-4 h-4 md:w-8 md:h-8 rounded-full" src={com._id.pimage ? `http://localhost:8080${com._id.pimage}` : (assets.profileIcon)} alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-[7px] md:text-[10px] font-medium text-gray-900 truncate dark:text-white">
                                                {com._id.username}
                                            </p>
                                            <p className="text-[7px] md:text-[10px] text-gray-500 truncate dark:text-gray-400">
                                                {formatDateTime(com.commentAt)}
                                            </p>
                                        </div>

                                    </Link>
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
                </div>
                <div className='p-1 sticky  bg-white dark:bg-gray-800 bottom-0 w-full'>
                    <div className="flex  w-full border border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">

                        <input type='text' name="comment" value={addcomment} onChange={e => setAddComment(e.target.value)} id="search" className="block rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send comment..." required />
                        <button onClick={() => addData(props.postId)} className="text-white cursor-pointer  end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
