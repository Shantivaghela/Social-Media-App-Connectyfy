import React, { useState, useEffect, memo } from 'react'
import { Link } from 'react-router-dom';


function DarkMode() {
    const theme = document.getElementById("theme").className
    const [Mode, setMode] = useState(theme)

    useEffect(() => {
        document.body.className = Mode;
    }, [Mode])
    const modeHandl = () => {

        setMode(Mode === "dark bodyDark" ? "light" : "dark bodyDark");

    }
    return (
        <>
            <Link to="#" onClick={modeHandl} className="flex capitalize  items-center  rounded-lg dark:text-white px-4 h-10 w-10 hover:bg-blue-gray-500/10 justify-center py-3    group">
                <i className={`${Mode === "dark bodyDark" ? 'fa-solid fa-sun fa-lg' : 'fa-solid fa-moon fa-lg'} text-blue-gray-500 transition duration-75 dark:text-white `}>

                </i>
                {/* <span className="ms-3 text-black"  >

                    {Mode === "light" ? "Dark Mode" : "Light Mode"}


                </span> */}
            </Link>
            
        </>
    )
}

export default memo(DarkMode)