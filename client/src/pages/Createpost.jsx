import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Createpost() {
  let navigate = useNavigate();

  return (
    <>
      <section className='flex mt-22 relative mb-12 pb-2 bg-white md:ml-[25%] flex-col dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm' data-aos="flip-up">
        <div className="w-full h-full flex justify-center items-center">

          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                {/* <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg> */}
                <span className='mb-4 text-5xl dark:text-white'>

                <i class="fa-solid fa-photo-film fa-bounce"></i>

                </span>
                                
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

        </div>
          <div className="flex justify-evenly items-center mt-5">

          <button onClick={() => navigate(-1)} className="text-white bg-gray-700 hover:bg-gray-600  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">Cancel</button>
          <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Upload</button>

          </div>

      </section>
    </>
  )
}

export default Createpost
