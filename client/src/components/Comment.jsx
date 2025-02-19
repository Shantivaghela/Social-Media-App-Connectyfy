import React from 'react'

function Comment(props) {
    return (
        <>
            <div className={`bg-white dark:bg-gray-800 h-[500px] w-[300px] absolute mt-6 rounded-xl hidden md:block`}>
                <div className="flex items-center justify-between dark:text-white px-3 pt-2">
                    <h1 className=''>
                        Comments
                    </h1>
                    <button onClick={()=>props.view(false)} className=' rounded-full' >
                    <i class="fa-solid fa-xmark border-2 border-white p-1 rounded-full hover:bg-[#48a6a6]"></i>

                    </button>
                </div>
                <div className="px-1 overflow-y-scroll scrollbar-hide">
                    <div className={` dark:bg-gray-600  dark:text-white bg-gray-100 rounded-xl border-0 broder-gray-120  mt-4 md:pt-2 scrollbar-hide p-3 max-h-50 overflow-scroll snap-x`}>
                        <div className="border-b-2 border-gray-200 dark:border-gray-700 ">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <img className="w-4 h-4 md:w-5 md:h-5 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-[7px] md:text-[10px] font-medium text-gray-900 truncate dark:text-white">
                                        Neil Sims
                                    </p>
                                    <p className="text-[7px] md:text-[10px] text-gray-500 truncate dark:text-gray-400">
                                        10 jan 2025
                                    </p>
                                </div>

                            </div>
                            <div className="">
                                <p className='text-lg my-2'> super</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
