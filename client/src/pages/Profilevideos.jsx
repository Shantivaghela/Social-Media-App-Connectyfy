import React, { useEffect, useState } from 'react'
import { useAuth } from '../contextAPI';
import { Link } from 'react-router-dom';

function Profilevideos(props) {
    const { posts, userdata, user, allposts, allusers, getAllUsers, getuserdata, getAllposts } = useAuth();
    const [getposts, setgetPosts] = useState();

    // useEffect(() => {
    //     const findPost = allposts.find(f => f.userId._id === user._id);
    //     setgetPosts(findPost)

    // }, [allposts,user])
    // console.log(getposts);
    return (
        <>
            <div className={`${props.view === 2 ? "block" : "hidden"} px-2 md:px-5`}>
                {allposts ? (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-1  md:mt-10 justify-between  items-center">
                        {allposts.filter(post => post.userId._id === user._id) // Get only user's posts
                            .flatMap(post => post.media) // Flatten media array
                            .filter(media => media.type === "video") // Filter only videos
                            .map((media, i) => (
                                <div key={i} className='justify-center flex w-full h-85' data-aos="flip-down">
                                    <video className=" h-85  w-full object-fill rounded-lg" src={media.url} alt="" />

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
        </>
    )
}

export default Profilevideos
