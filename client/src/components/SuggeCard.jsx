import React from 'react'
import Sidemenu from './Sidemenu'

function SuggeCard() {
  return (
    <>
        
      <div class="w-full hidden md:block max-w-md p-2 mt-3 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h6 class="text-base font-bold leading-none text-gray-900 dark:text-white">Suggestions</h6>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>
                    <div className='w-full h-0.5 bg-gray-200 '></div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center">
                                    <div class="shrink-0">
                                        <img class="w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                        {/* <a href="#" class="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                                        <a href="#"><i className="fa-solid fa-user-plus  fa-lg hover:text-[#48a6a6] "></i></a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

    </>
  )
}

export default SuggeCard
