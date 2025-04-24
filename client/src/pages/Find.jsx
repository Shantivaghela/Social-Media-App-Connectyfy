import React, { useEffect, useState } from 'react'
import { useAuth } from '../contextAPI'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Find() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { allusers } = useAuth();

  useEffect(() => {
    if (searchTerm.trim() === "") {
        setFilteredUsers([]);
        return;
    }

  const results = allusers.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredUsers(results);
    }, [searchTerm, allusers]);

  return (
    <>
      <section className=' '>
        <div className="">
          <form className='md:ml-96 mt-22 p-1 '>
            <div className="flex  w-[100%] border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">

              <input
                type="search"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block outline-none rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find..." required />
              <button type="submit" className="text-white   end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></button>
            </div>
            <ul role="list" className="mt-5">
              {searchTerm && filteredUsers.length > 0 ? (
                filteredUsers.map(user => (

                  <li key={user._id} className="py-3 sm:py-4 bg-white px-2 flex justify-between  mb-2 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-100 dark:bg-gray-800  w-[99%] divide-y divide-gray-200 dark:divide-gray-700 mr-5s" data-aos="flip-down">
                    <Link to={`/userprofile/${user._id}`} className="flex items-center">
                      <div className="shrink-0">
                        <img className="w-9 h-9 rounded-full" src={user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage}` : (assets.profileIcon)} alt="Neil image" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">

                          {user.username}
                        </p>
                        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </Link>
                    {/* <div className="inline-flex items-center gap-2 text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                      {following.includes(user._id) ?
                        ""
                        :
                        <button onClick={() => addfollow(user._id)} className="text-white bg-blue-700 cursor-pointer hover:bg-[#48a6a6] focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Follow Back</button>
                      }
                      <button onClick={() => unfollow(user._id)} className="bg-transparent text-green-600 cursor-pointer hover:text-[#48a6a6] focus:ring-4 focus:outline-none border-2 border-[#48a6a6] focus:ring-blue-300 font-medium rounded-lg text-[10px] w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:text-green-600 dark:hover:text-[#48a6a6] dark:focus:ring-green-800">Remove</button>

                    </div> */}
                  </li>
                ))
              ) : (
                <p>Not Found</p>
              )
              }


            </ul>
          </form>
        </div>

      </section>

    </>
  )
}

export default Find
