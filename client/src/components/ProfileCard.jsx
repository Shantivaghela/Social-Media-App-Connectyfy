import React,{useState} from 'react'
import SuggeCard from './SuggeCard';
import Request from './Request';

function ProfileCard(props) {
    const [isdrop, setdrop] = useState(false);
    return (
        <>
            <section className='sticky top-19 ml-5 mr-2 md:block hidden mt-3 w-[25%]'>


                <div class="md:w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} class={`${isdrop ? 'hidden' : 'block'}inline-block text-gray-500 dark:text-gray-400  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                            <i className='fa-solid fa-bars fa-xl'></i>

                        </button>

                        <div id="dropdown" class={`${isdrop ? 'block' : 'hidden'} absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <i className='fa-solid fa-xmark fa-xl'></i>
                            </button>
                            <ul class="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col items-center pb-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                        <snap class="text-sm text-gray-500 dark:text-gray-400">{props.desc}</snap>
                        <div class="flex mt-4 md:mt-6  gap-10">
                            <a href="" className='flex flex-col items-center justify-center'>
                                <span className='text-lg'>{props.followers}</span>
                                <span className='text-[10px]'>followers</span>
                            </a>
                            <a href="" className='flex flex-col items-center justify-center'>
                                <span className='text-lg'>{props.following}</span>
                                <span className='text-[10px]'>following</span>
                            </a>
                            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                            {/* <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                        </div>
                        <div class="flex mt-4 md:mt-6  gap-10">
                            <a href="" className='flex flex-col items-center justify-center'>
                                <span className='text-sm'>{props.posts}</span>
                                <span className='text-xl'>Posts</span>
                            </a>

                        </div>
                    </div>
                </div>


                <Request/>

            </section>
        </>
    )
}

export default ProfileCard
