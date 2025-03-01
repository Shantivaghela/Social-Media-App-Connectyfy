import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function AddStory(props) {
    const [filepath, setFilepath] = useState()

    const inputHandle = (event) => {
        const file = event.target.files[0]
        const image = URL.createObjectURL(event.target.files[0])
        setFilepath(image)
        console.log(file);

    }
    return (
        <>
            <section className="h-full w-full bg-gray-800/70 fixed z-20 ">
                <div className="w-full pl-1 md:p-3 ">
                    <NavLink onClick={() => { props.open(false) }} className='text-white z-20 absolute md:text-2xl  hover:bg-gray-500 bg-gray-600 border-2 p-1 px-2  rounded-lg' >
                        <i className="fa-solid fa-xmark "></i>
                    </NavLink>
                    <div className="flex justify-center items-center mt-8">
                        <label htmlFor="dropzone-file" className={`${filepath ? "hidden" : "block"} md:h-[600px] md:w-[300px] flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg> */}
                                <span className='mb-4 text-5xl dark:text-white'>

                                    <i className="fa-solid fa-photo-film fa-bounce"></i>

                                </span>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                            </div>
                            <input id="dropzone-file" type="file"
                                className="hidden"
                                onChange={inputHandle}
                            />
                        </label>

                    </div>

                    <div className={`${filepath ? "block" : "hidden"} w-full my-1`}>
                        <div className="flex justify-center items-center ">
                            <img src={filepath} alt="" className='h-100 w-100 border-2 border-gray-200 rounded-lg  object-cover md:h-[600px] md:w-[300px]' />
                        </div>
                    </div>


                    <div className={`${filepath ? "block" : "hidden"} w-full flex justify-center mt-2`}>
                        <label htmlFor="dropzone-file" className='flex justify-between items-center gap w-[400px]'>

                            <span className="text-white bg-blue-700  hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800"><i className="fa-regular fa-image mr-2"></i>Change</span>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Upload</button>

                            <input id="dropzone-file" type="file"
                                className="hidden"
                                onChange={inputHandle}
                            />

                        </label>
                    </div>

                </div>
            </section >
        </>
    )
}

export default AddStory
