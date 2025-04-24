import React, { useEffect, useState } from 'react'
import { useAuth } from '../contextAPI';
import { Link } from 'react-router-dom';

function Postpage(props) {
      const [mediaId,setMediaId] = useState("");
    
    const { posts, userdata, user, allposts, allusers, getAllUsers, getuserdata, getAllposts } = useAuth();
    const [getposts, setgetPosts] = useState();


    return (
        <>
            <div className={`${props.view === 1 ? "block" : "hidden"} px-2 md:px-5 relative`}>
                {allposts ? (
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-1 md:mt-10 justify-between  items-center">
                        {allposts.filter(post => post.userId._id === user._id) // Get only user's posts
                            .flatMap(post => post.media) // Flatten media array
                            .filter(media => media.type === "image") // Filter only videos
                            .map((media, i) => (<div key={i} className='justify-center md:h-90 h-40   flex w-full' data-aos="flip-down">
                                <img className="h-auto w-full object-fill rounded-lg" src={media.url} alt="" />
                            </div>


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
                <div className=" fixed bottom-0 h-full w-full ml-0 bg-gray-700/30  z-33 ">
                    {allposts.filter(post => post.userId._id === user._id) // Get only user's posts
                        .flatMap(post => post.media) // Flatten media array
                        .filter(media => media._id === mediaId) // Filter only videos
                        .map((post) => (
                            <div className="w-full">aflakl</div>
                        ))}
                </div>

        </>
    )
}

export default Postpage
