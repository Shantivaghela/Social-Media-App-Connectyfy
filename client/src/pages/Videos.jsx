import React from 'react'
import { assets } from '../assets/assets'
import { videoInfo } from '../assets/videosInfo'

function Videos() {
  // const videos = videoInfo;
  
  return (
    <>
      <section className='md:ml-96 md:mt-17 mb-15 md:mb-0 pt-  '>
        <div className="  w-full md:max-h-[590px] max-h-[900px] overflow-y-scroll snap-y snap-mandatory ">
          <div className=' md:mt-15 flex flex-col justify-center items-center '>

        {videoInfo.map((key) => (
            <div className="md:snap-end  snap-start  snap-always">
          <video src={key.video} className=' h-[800px] mb-3  object-cover md:rounded-lg md:shadow-xl md:hover:dark:shadow-[#48a6a6] md:shadow-black  md:h-[560px] md:w-[340px] '  loop controls="controls" autoplay="true"></video>
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
