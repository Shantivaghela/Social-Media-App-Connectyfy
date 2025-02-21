import React, { useRef, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import SignUp from './SignUp';
import Forgotpass from './Forgotpass';
import Loginpage from './Loginpage';

function Login(props) {
    const [authpage, setAuthpage] = useState(1);
    const [show,setShow] = useState(false)
    

    return (
        <>
            <section className={`w-screen min-h-screen  flex  justify-center items-center `} data-aos="flip-up" >
                <Link to='/' className="text-[#48a6a6] dark:text-black dark:bg-gray-400  absolute overflow-visible mb-180 md:mb-152 z-10 bg-white p-3 border-2 border-black rounded-full ">
                    <NavLink to='/'>
                        <i className="fa-solid fa-house fa-xl "></i>
                    </NavLink>
                </Link>
                <div className="relative shadow-[0px_19px_32px_3px_rgba(0,_0,_0,_0.1)]  md:h-[630px] md:w-[1100px] w-[380px] h-[700px] rounded-xl overflow-hidden border-3 border-gray-500 flex  md:flex-row flex-col justify-center items-center">
                    <div className="justify-center bg-white  h-[200px] md:h-screen flex flex-col items-center w-full   md:w-[50%] ">
                        <img src={assets.loginimage} className='h-full object-cover  w-[900px]' alt="" />
                        {/* <video  autoPlay={true} loop muted playsInline preload='auto' className='h-full object-cover  w-[900px]'>
                            <source  src={assets.Loginimg}   type='video/mp4' />
                        </video> */}
                    </div>
                    <div className={` rounded-xl md:rounded-none w-full md:w-[50%] justify-center md:h-full h-screen bg-white flex flex-col items-center dark:bg-gray-900 `}>
                    <SignUp view={authpage} />
                    <Forgotpass view={authpage}/>
                    <Loginpage view={authpage}/>
                        {/* <div className="w-full items-center flex flex-col">
                            <div className={` mb-4`}>
                                <h1 className='dark:text-white border-b-3 border-[#48a6a6] text-3xl '>Login</h1>
                            </div>


                            <form className="w-[80%] h-[80%] mx-auto ">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <div className="flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <input type={`${show ? 'text' : 'password'}`} id="password" className="outline-none w-full" required placeholder='password' />
                                        <Link onClick={() => { setShow(!show) }}>
                                            {!show && <i class="fa-solid fa-eye-slash"></i>}
                                            {show && <i class="fa-solid fa-eye"></i>}
                                        </Link>
                                    </div>                                </div>
                                <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Submit</button>
                            </form>

                            </div> */}
                            <div className="w-full flex justify-start items-center gap-7 ml-20 md:ml-27 mt-4">
                                <Link to="#" onClick={() => { setAuthpage(3) }} className={`${authpage === 1 ? "block" : "hidden"} hover:text-[#48a6a6] dark:text-white`}>
                                    Forgot Password ?
                                </Link>
                                <Link to="#" onClick={() => { setAuthpage(2) }} className={`${authpage === 1 ? "block" : "hidden"} hover:text-[#48a6a6] dark:text-white`}>
                                    Sign Up
                                </Link>
                                <Link to="#" onClick={() => { setAuthpage(1) }} className={`${authpage === 2 || authpage === 3 ? "block" : "hidden"} hover:text-[#48a6a6] dark:text-white`}>
                                    Login
                                </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
