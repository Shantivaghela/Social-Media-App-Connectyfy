import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ThemeMode() {
    const [Mode, setMode] = useState(false);

    const bodyClass = document.getElementById("theme");

    console.log(Mode);
    const darkModeHandler = () => {

        console.log(Mode);

        if (!Mode) {
            bodyClass.className = "dark bodyDark"
        }
        else {
            bodyClass.className = "light"

        }


    }
    return (
        <div>
            <Link to="#" onClick={() => (setMode(!Mode), darkModeHandler)} className="flex items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                <i className={`${Mode ? 'fa-solid fa-moon fa-lg' : 'fa-solid fa-sun fa-lg'} text-gray-700 transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white`}>

                </i>
                <span className="ms-3 "  >

                    {Mode ? "Dark Mode" : "Light Mode"}


                </span>
            </Link>
        </div>
    )
}

export default ThemeMode
