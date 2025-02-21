import React from 'react'

function Settings() {
  return (
    <>
      <section className="px-5 pb-5 rubik flex flex-col items-center justify-center w-full h-full">

        <div className="w-full ">
          <div className="w-full gap-4 flex flex-col">
          <label class="inline-flex  cursor-pointer w-full">
            <input type="checkbox" value="" class="sr-only peer"/>
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">Maintenance mode</span>
          </label>
          <label class="inline-flex  cursor-pointer w-full">
            <input type="checkbox" value="" class="sr-only peer"/>
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">Sign Up for users</span>
          </label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Settings
