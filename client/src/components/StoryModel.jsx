import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { story } from '../assets/videosInfo'
import { assets } from '../assets/assets'

function StoryModel(props) {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <>
      <section className="h-full w-full bg-gray-800/70 fixed z-20 ">
        <div className="w-full pl-1 md:p-3 ">
          <Link onClick={() => { props.open(false) }} className='text-white z-20 absolute md:text-2xl  hover:bg-gray-500 bg-gray-600 border-2 p-1 px-2  rounded-lg' >
            <i class="fa-solid fa-xmark "></i>
          </Link>
          <div className="flex justify-center items-center  min-h-[100%] ">


            <Slider {...settings} initialSlide={props.id} className=' w-[390px] justify-center rounded-xl'>
              {story.map((items, index) => (
                <div className='sticky overflow-hidden w-full md:px-2 '>
                  <div className=" flex justify-center items-center ">
                    <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse absolute z-18 mb-170 mr-49 mt-15 md:mt-0 md:mb-130 md:mr-30">
                      <img src={items.img} className="md:h-9 h-12" alt="profile pic" />
                      {/* <img src={assets.connectyfy} className="h-6 md:h-11 " alt="Flowbite Logo" /> */}
                      <div className='text-xl md:text-sm  '>
                        <p className="">{items.Name}
                        </p>
                        <p className="md:text-[10px] text-sm">{items.time}</p>
                        
                        </div>

                    </Link>
                    {/* <span className=' md:mt-1 ml-1   text-white  '>{items.Name}</span> */}

                    < img src={items.url} alt="" className='rounded-xl object-cover  h-[750px] w-full md:h-[600px] md:w-[300px] ' />
                  </div>


                </div>
              ))}
            </Slider>

          </div>
        </div>
      </section>
    </>
  )
}

export default StoryModel
