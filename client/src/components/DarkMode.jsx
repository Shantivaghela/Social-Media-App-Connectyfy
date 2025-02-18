import React, { useState, useEffect, memo } from 'react'
import { Link } from 'react-router-dom';


function DarkMode() {
    const theme = document.getElementById("theme").className
    const [Mode, setMode] = useState(theme)

    const modeHandl = () => {

        setMode(Mode === "dark bodyDark" ? "light" : "dark bodyDark");

    }
    useEffect(() => {
        document.body.className = Mode;
    }, [Mode])
    return (
        <>
            <Link to="#" onClick={modeHandl} className="flex  items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                <i className={`${Mode === "light" ? 'fa-solid fa-moon fa-lg' : 'fa-solid fa-sun fa-lg'} text-gray-700 transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white`}>

                </i>
                <span className="ms-3 "  >

                    {Mode === "light" ? "Dark Mode" : "Light Mode"}


                </span>
            </Link>
            
        </>
    )
}

export default memo(DarkMode)