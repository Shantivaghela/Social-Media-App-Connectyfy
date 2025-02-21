import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function SignUp(props) {
    const [show,setShow] = useState(false)
    function onLinkClick(e) {
        e.preventDefault();
        // further processing happens here
     }
    return (
        <>
            {/* <div className={`${props.view == 2 ? "block" : "hidden"} rounded-xl md:rounded-none w-full md:w-[50%] justify-center md:h-full h-screen bg-white flex flex-col items-center dark:bg-gray-900 `}> */}
                <div className={`${props.view == 2 ? "block" : "hidden"} w-full items-center flex flex-col`} >
                    <div className={` mb-4`}>
                        <h1 className='dark:text-white border-b-3 border-[#48a6a6] text-3xl '>Sign Up</h1>
                    </div>


                    <form className="w-[80%] h-[80%] mx-auto ">
                        <div className="mb-5">
                            <label htmlFor="Stext" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                            <input type="text" id="Stext" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Semail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="Semail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Spassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set password</label>
                            <div className="flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <input type={`${show ? 'text' : 'password'}`} id="Spassword" className="outline-none w-full" required  placeholder='password'/>
                            <Link onClick={()=>{setShow(!show)}}>
                            {!show && <i class="fa-solid fa-eye-slash"></i> }
                            {show && <i class="fa-solid fa-eye"></i> }
                            </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="Sremember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="Sremember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Submit</button>
                    </form>

                    {/* <div className="w-full flex justify-start items-center gap-7 ml-20 md:ml-27 mt-4">
                        
                        <Link to="#" onClick={()=>{setAuthpage(1)}} className='hover:text-[#48a6a6] dark:text-white'>
                            <p > Login</p>
                        </Link>
                    </div> */}
                </div>
                {/* </div> */}
            </>
            )
}

            export default SignUp
