import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contextAPI/index.jsx';
import DarkMode from './DarkMode';
import { useSocketContext } from '../contextAPI/socketContext.jsx';

function Header() {
  const theme = document.getElementById("theme").className
  const [Mode, setMode] = useState(theme);
  const [notificationsget,setNotifiacationget] = useState([]);
      const [isdrop, setdrop] = useState(false);
  ;

  const { isLoggedIn, userdata,haveUserData,user,getAllUsers,setUserData} = useAuth();

  const modeHandl = () => {

    setMode(Mode === "dark bodyDark" ? "light" : "dark bodyDark");

  }
  useEffect(() => {
    document.body.className = Mode;
  }, [Mode])
  useEffect(() => {
    
      getAllUsers();

   
  }, [])
  // console.log(userdata);
  const { socket, onlineusers,notifications } = useSocketContext();
  useEffect(()=>{
    const getnoti = () =>{

      if(notifications){
        setNotifiacationget(notifications);
      }
    }
    getnoti();
  },[socket,notifications])
  

  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-800 fixed w-screen top-0 z-20 ">
      <div className=" flex  items-center justify-between mx-auto pl-1 md:px-5 md:py-2 py-4 ">
        <div>
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={assets.logo1} className="md:h-9 h-5" alt="Flowbite Logo" />
            {/* <img src={assets.connectyfy} className="h-6 md:h-11 " alt="Flowbite Logo" /> */}
            <h1 className='roboto-condensed md:text-2xl dark:text-white'>Connectyfy</h1>

          </Link>
        </div>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
        <div className=" w-full md:block md:w-auto relative" id="navbar-default">
          <ul className="font-medium  flex flex-co float-right text-sm md:text-lg  md:p-0 border border-gray-100 rounded-lg  md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li className=''>
              <Link to="#" onClick={modeHandl} className=" md:hidden  block  py-1 md:py-2 px-2 md:px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className={`${Mode === "light" ? 'fa-solid fa-moon fa-lg' : 'fa-solid fa-sun fa-lg'} hover:text-[#2973b2] fa-solid fa-envelope fa-xl text-[#48a6a6] `}></i>

              </Link>
            </li>
            <li className='relative'>
            <span className={` ${notificationsget.length > 0 ? "block" :"hidden"} h-3 w-3 md:w-4 md:mt-1.5 md:h-4 border-2 border-transparent bg-red-500 absolute ml-6 rounded-full flex justify-center items-center`}>
              <p className='text-sm text-white'>
                {/* {notificationsget.length < 9 ? (notificationsget.length) : "9+"} */}
              </p>
            </span>
              <NavLink to="/notification" onClick={()=>setNotifiacationget([])}  className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} block rounded-sm px-3 py-1 md:py-2 md:px-3   hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}><i className="hover:text-[#2973b2] fa-solid fa-bell fa-xl transition delay-120 duration-300 ease-in-out"></i></NavLink>
            </li>
            <li>
              <NavLink to="/message" className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} md:block hidden px-2 py-1 md:py-2 md:px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}><i className="hover:text-[#2973b2] fa-solid fa-envelope fa-xl   transition delay-50 duration-300 ease-in-out"></i></NavLink>
            </li>



            {isLoggedIn ?
              (
                <li>
                  <Link to="#" onClick={()=>setdrop(!isdrop)} className={` text-[#48a6a6] block px-3 py-1 md:py-2 md:px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} >
                    {userdata && userdata.pimage ?
                      <img src={`http://localhost:8080${userdata.pimage}`} alt="profile image" className='h-5 w-5 md:h-8 md:w-8 rounded-full object-cover' />

                      : <i className="hover:text-[#2973b2] fa-solid fa-circle-user fa-xl   transition delay-120 duration-300 ease-in-out"></i>}</Link>
                </li>
              ) : (
                <li>
                  <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-black dark:text-white border-b-3 border-[#48a6a6]" : "dark:text-[#48a6a6] text-[#48a6a6]"} block px-3 py-1 md:py-2 md:px-1   rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} ><span className='border-2 border-[#48a6a6] rounded-sm hover:border-[#2973b2] px-2 py-1 transition delay-120 duration-300 ease-in-out'>Login</span></NavLink>
                </li>
              )}
        <div id="dropdown"  className={`${isdrop ? 'block' : 'hidden'} flex  justify-center items-center border-2 border-gray-200  float-right rounded-lg mt-10   ml-10 md:mt-12 md:ml-23   absolute  text-base list-none bg-gray-100 divide-y divide-gray-100  w-26 md:w-42 dark:bg-gray-700`} >
          {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block z-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none overflow-hidden focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                  <i className=''></i>
                                                </button> */}
          <ul className="pl-2 md:pl-0  py-2  w-full" aria-labelledby="dropdownButton">
            <li>
              <Link onClick={()=>setdrop(false)} to="/profile" className="block md:px-4 mb-2 md:py-2 md:mb-0 text-sm text-gray-700 hover:bg-gray-200  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Your Profile</Link>
            </li>

            <li>
              <Link onClick={()=>setdrop(false)} to="/logout"  className="block md:px-4 mb-2 md:mb-0 md:py-2 text-sm text-red-600 hover:bg-red-100  dark:text-red-600 ">Logout</Link>
            </li>
          </ul>
        </div>


          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header