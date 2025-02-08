import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import Sidemenu from '../components/Sidemenu';


function Profile(props) {
  const [isdrop, setdrop] = useState(false);
  return (
    <>
      <section className='flex float-end mt-3 md:px-3 w-screen md:w-screen py-3 bg-amber-200 h-screen md:mr-4'>
    <Sidemenu/>
        <div className='sticky  top-19 md:ml-5 md:mr-2 block  md:mt-3 w-[75%]'>


          <div className="md:min-w-full max-w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img src={assets.demos} className="min-w-full object-cover   h-[25%] md:h-[30%] absolute z-0"/>
            <div className="flex justify-end px-4 pt-4 z-8">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`${isdrop ? 'hidden' : 'block'}inline-block text-gray-500 dark:text-gray-400  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                <i className='fa-solid fa-bars fa-xl'></i>

              </button>

              <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'} absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                  <i className='fa-solid fa-xmark fa-xl'></i>
                </button>
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
                  </li>
                  <li>
                    <Link to="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center mt-27  ">
              <img className="w-24 h-24  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={assets.demoimg} alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Parth Nandha</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">web developers</span>
              <div className="flex mt-4 md:mt-6  gap-15">
                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>20000</span>
                  <span className='text-[15px]'>followers</span>
                </Link>
                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>3</span>
                  <span className='text-[15px]'>following</span>
                </Link>
                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                <Link to="" className='flex flex-col items-center justify-center dark:text-white'>
                  <span className='md:text-xl tex-lg'>213213</span>
                  <span className='text-[15px]'>Posts</span>
                </Link>
              </div>
              <div className="flex mt-4 md:mt-6  gap-10 ">

              </div>
            </div>
          </div>


        

        </div>
      </section>
    </>
  )
}

export default Profile
