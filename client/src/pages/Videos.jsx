import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { videoInfo } from '../assets/videosInfo'
import Sidemenu from '../components/Sidemenu'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../App.css";
import Comment from '../components/Comment'


function Videos() {
  // const videos = videoInfo;
  const [show, setShow] = useState(true);
  const [commentshow, setCommentshow] = useState(false)
  const [videoid, setVideoid] = useState();
  console.log(videoid);
  const sender = () => {
    setCommentshow(true)
    setVideoid()
  }


  return (
    <>

      <section className='md:ml-96 md:mt-17  md:mb-0 mb-0 flex  '>
        {commentshow && <Comment view={setCommentshow} vid={videoid} />}
        <div className="  w-full md:max-h-[590px] max-h-[900px] overflow-y-scroll snap-y snap-mandatory scroll-mt-50 ">
          <div className=' md:mt-15 flex flex-col justify-center items-center '>

            {videoInfo.map((key) => (
              <div className="md:snap-end  snap-start  snap-always relative ">
                <div className="absolute  w-full mt-150 md:mt-80 z-12 ">
                  <div className="float-end flex flex-col gap-10 pr-3 text-white">
                    <Link to="#" className='hover:text-red-600 flex flex-col justify-center items-center gap-3' >
                      <i class="fa-solid fa-thumbs-up fa-xl "></i>
                      <p className="text-[10px]">123</p>

                    </Link>
                    <Link to="#" onClick={() => { setCommentshow(!commentshow), setVideoid(key.id) }} className='hover:text-[#48a6a6] flex flex-col justify-center items-center gap-3'>

                      <i class="fa-solid fa-message fa-xl"></i>
                      <p className="text-[10px]">123</p>
                    </Link>

                    <Link to="#" className='hover:text-[#48a6a6] flex flex-col justify-center items-center gap-3'>

                      <i class="fa-solid fa-paper-plane fa-xl"></i>
                      <p className="text-[10px]">123</p>

                    </Link>
                    <Link to="#" className='hover:text-[#48a6a6] flex flex-col justify-center items-center gap-3'>

                      <i class="fa-solid fa-bookmark fa-xl"></i>
                      {/* <p className="text-[10px]">123</p> */}

                    </Link>

                  </div>
                  <div className={`  max-h-[200px]  relative flex mt-60 md:mt-60 flex-col-reverse w-[85%] transition-[height]  duration-300 ease-in-out`}>
                    <div className=" bg-gray-400/20 text-white max-h-[300px]  absolute flex flex-col w-full bottom-0 text-[10px] pl-2">
                      <div className="flex justify-items-end items-center float-start ">
                        <img src={assets.logo} alt="" className='h-8 w-8 rounded-full border-1  border-white' />
                        <p className="text-white items-center flex mx-1 text-[12px] ">
                          Vaghela Shanti
                        </p>


                        <button className='float-end' >
                          <p className="border-2 px-1 rounded-md text-white text-sm border-white hover:bg-[#48a6a6] hover:border-[#48a6a6]">
                            Follow
                          </p>
                        </button>
                      </div>

                      <ReactReadMoreReadLess

                        charLimit={50}
                        readLessText={"Read less ▲"}
                        readMoreText={"Read more ▼"}
                        readLessClassName="transition-[height] duration-300 ease-in-out"

                      >

                        {/* <span className="text-[10px] absolute"> */}
                        "Natural" redirects here. For other uses, see Natural (disambiguation) and Nature (disambiguation).
                        "Natural" redirects here. For other uses, see Natural (disambiguation) and Nature (disambiguation).
                        "Natural" redirects here. For other uses, see Natural (disambiguation) and Nature (disambiguation).

                        {/* </span> */}


                      </ReactReadMoreReadLess>

                    </div>
                    <div className="w-[411px] h-[500px] absolute md:hidden block bg-amber-300 bottom-0 top-0f ">

                    </div>
                  </div>
                </div>

                <video src={key.video} className=' h-[900px] mb-3 overflow-hidden object-cover md:rounded-lg md:shadow-xl md:hover:dark:shadow-[#48a6a6] md:shadow-black  md:h-[560px] md:w-[340px] ' loop autoplay="true"></video>
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
