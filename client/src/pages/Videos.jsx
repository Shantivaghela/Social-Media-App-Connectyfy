import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { videoInfo } from '../assets/videosInfo'
import Sidemenu from '../components/Sidemenu'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Videos() {
  // const videos = videoInfo;
  const [show,setShow] = useState(true)
  
  return (
    <>
   
      <section className='md:ml-96 md:mt-17  md:mb-0 pt-  '>
        <div className="  w-full md:max-h-[590px] max-h-[750px] overflow-y-scroll snap-y snap-mandatory ">
          <div className=' md:mt-15 flex flex-col justify-center items-center '>

        {videoInfo.map((key) => (
            <div className="md:snap-end  snap-start  snap-always relative">
              <div className="absolute  w-full mt-120 md:mt-80 z-12">
                <div className="float-end flex flex-col gap-10 pr-3 text-white">
                  <Link to="#" className='hover:text-red-600' >
                <i class="fa-solid fa-thumbs-up fa-xl"></i>
                
                </Link>
                <Link to="#">

                <i class="fa-solid fa-message fa-xl"></i>
                </Link>
             
                <Link to="#">
                
                <i class="fa-solid fa-paper-plane fa-xl"></i>
                </Link>

                </div>
                <div className="">
                  jhghg
                </div>
              </div>
          <video src={key.video} className=' h-[800px] mb-3  object-cover md:rounded-lg md:shadow-xl md:hover:dark:shadow-[#48a6a6] md:shadow-black  md:h-[560px] md:w-[340px] '  loop  autoplay="true"></video>
          </div>
      ))
    }
    </div>

        {/* height="600px" width="320px" */}
          {/* <div className='md:py-5 flex justify-center items-center'>
        <video src={assets.demovideo} className=' h-screen object-cover  md:rounded-lg md:shadow-xl md:hover:dark:shadow-[#48a6a6] md:shadow-black md:h-[600px] md:w-[340px] '  loop controls="controls" autoplay="true"></video>
        </div> */}

        </div>
      </section>
    </>
  )
}

export default Videos
