import React from 'react'

function Find() {
  return (
    <>
    <section className=' '>
      <div className="">
      <form className='md:ml-96 mt-22 p-1 '>
                        <div className="flex  w-[100%] border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-800 rounded-lg p-1 gap-1">

                            <input type="search" id="search" className="block outline-none rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find..." required />
                            <button type="submit" className="text-white   end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></button>
                        </div>
                    </form>
                    </div>

    </section>

    </>
  )
}

export default Find
