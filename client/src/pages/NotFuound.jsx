import React from 'react'
import { assets } from '../assets/assets'

function NotFuound() {
    return (
        <>

            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="md:text-[300px] text-8xl text-[#48a6a6] flex justify-center items-center font-bold mb-4 "> 4
                    <img src={assets.logo1} className='h-20 w-20 md:h-50 md:w-50 animate-bounce' alt="" />
                    4</h1>
                <h1 className="text-3xl font-bold mb-4"> Page Not Found</h1>
                <p className="mb-4">The page you are looking for does not exist.</p>
                <a href="/" className="text-blue-500 underline">
                    Go back home
                </a>
            </div>

        </>
    )
}

export default NotFuound
