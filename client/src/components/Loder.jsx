import React from 'react'
import '../loder.css';
import { assets } from '../assets/assets';

function Loder() {
    return (
        <>
            <div className="w-full h-full fixed bottom-0 top-0 flex justify-center items-center z-40 bg-gray-900/50">
                <div className=" flex flex-col justify-between items-center gap-2 ">
                    <div className="">
                       
                    </div>
                   
                    <div id="page">
                        <div id="container">
                            <div id="ring"></div>
                            <div id="ring"></div>
                            <div id="ring"></div>
                            <div id="ring"></div>
                            <div id="h3"> <img src={assets.logo} alt="" className='circle h-15 w-15' data-aos="flip-left"/></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loder
