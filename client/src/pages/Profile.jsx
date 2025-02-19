import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import Sidemenu from '../components/Sidemenu';
import Postpage from './Postpage';
import Profilevideos from './Profilevideos';
import Tags from './Tags';


function Profile(props) {
  const [isdrop, setdrop] = useState(false);
  const [profielpage, setPrfilepage] = useState(1);

  const pagecontant = (id) => {

    setPrfilepage(id);

  }
  return (
    <>
      <div className='flex mt-22   mb-12 pb-2 bg-white md:ml-[25%] dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>

        <section className='float-end flex  flex-col md:ml-  w-full  h-full '>


          <div className="md:min-w-full pb-2 relative max-w-full bg-white  overflow-hidden    dark:bg-gray-800 ">
            <img src={assets.demos} className="w-full object-cover   h-[43%] md:h-[45%] absolute z-0" />
            <div className="flex justify-end md:px-4 md:pt-4 z-8">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`block z-11 rounded-lg text-gray-300 hover:text-black  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                <i className={`${isdrop ? "fa-solid fa-xmark fa-xl" : " fa-solid fa-bars fa-xl"}`}></i>

              </button>

              <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'}  absolute z-10 text-base list-none bg-white divide-y divide-gray-100  w-44 dark:bg-gray-700`}>
                {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block z-12 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none overflow-hidden focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                  <i className=''></i>
                </button> */}
                <ul className="md:py-2" aria-labelledby="dropdownButton">
                  <li>
                    <Link to="#" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 md:py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center mt-27  ">
              <img className="w-24  md:w-35 md:h-35  h-24  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={assets.demoimg} alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Parth Nandha</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">web developers</span>
              <div className="flex mt-4 md:mt-6  gap-10 ">
                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>213213</span>
                  <span className='text-[15px]'>Posts</span>
                </Link>
              </div>
              <div className="flex mt-4 md:mt-6  gap-15">
                <Link to="/friends" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>20000</span>
                  <span className='text-[15px]'>followers</span>
                </Link>
                <Link to="/friends" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>3</span>
                  <span className='text-[15px]'>following</span>
                </Link>
                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
              </div>
            </div>
          </div>
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
            <Postpage view={profielpage}/>
            {/* <div className={`${profielpage === 2 ? "block" : "hidden"}`}>Videos</div> */}
            <Profilevideos view={profielpage}/>
            <Tags view={profielpage}/>
            
          </div>



        </section>
      </div>
    </>
  )
}

export default Profile
