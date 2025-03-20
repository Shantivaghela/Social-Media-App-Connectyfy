import React, { useState, useEffect, memo } from 'react'
import { Link } from 'react-router-dom';


function DarkMode() {
    // const theme = document.getElementById("theme").className
    
    const getInitialMode = () => {
        const storedMode = localStorage.getItem("theme");
        if (storedMode) return storedMode;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark bodyDark" : "light";
    };
    
    const [Mode, setMode] = useState(getInitialMode);
    

    const modeHandl = () => {

        const newMode = Mode === "dark bodyDark" ? "light" : "dark bodyDark";
        setMode(newMode);
        localStorage.setItem("theme", newMode);

        // setMode(Mode === "dark bodyDark" ? "light" : "dark bodyDark");

    }
    useEffect(() => {
        document.body.className = Mode;
    }, [Mode])
    return (
        <>
            <Link to="#" onClick={modeHandl} className="flex  items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-[#48a6a6] hover:text-white dark:hover:bg-gray-700 group">
                <i className={`${Mode === "dark bodyDark" ? 'fa-solid fa-sun fa-lg' : 'fa-solid fa-moon fa-lg'} text-gray-700 transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white`}>

                </i>
                <span className="ms-3 "  >

                    {Mode === "dark bodyDark" ? "Light Mode" : "Dark Mode"}


                </span>
            </Link>
            
        </>
    )
}

export default memo(DarkMode)