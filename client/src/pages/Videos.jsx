import React from 'react'
import { assets } from '../assets/assets'
import { videoInfo } from '../assets/videosInfo'

function Videos() {
  // const videos = videoInfo;
  
  return (
    <>
      <section className='md:ml-96 md:mt-15 mb-15  '>
        <div className="pt-2  w-full ">
        {videoInfo.map((key) => (
          <div className=' md:py-5 flex justify-center items-center '>
        <video src={key.video} className='h-screen object-cover md:rounded-lg md:shadow-xl md:hover:dark:shadow-[#48a6a6] md:shadow-black  md:h-[600px] md:w-[340px] '  loop controls="controls" autoplay="true"></video>
        </div>
        ))
        }

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
