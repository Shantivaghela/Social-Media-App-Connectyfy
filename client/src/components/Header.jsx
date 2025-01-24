import React from 'react'
import {assets}  from '../assets/assets';

function Header() {
  return (
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class=" flex flex-wrap items-center justify-between mx-auto px-5 py-4">
    <div>
    <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
        <img src={assets.logo} class="h-9" alt="Flowbite Logo" />
        <img src={assets.connectyfy} class="h-11 " alt="Flowbite Logo" />
        
    </a>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="mr-5 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i class="hover:text-[#2973b2] fa-solid fa-bell fa-xl  text-[#48a6a6] hover:scale-130 transition delay-120 duration-300 ease-in-out"></i></a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i class="hover:text-[#2973b2] fa-solid fa-envelope fa-xl text-[#48a6a6] hover:scale-130 transition delay-50 duration-300 ease-in-out"></i></a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i class="hover:text-[#2973b2] fa-solid fa-circle-user fa-xl text-[#48a6a6] hover:scale-130 transition delay-120 duration-300 ease-in-out"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header
