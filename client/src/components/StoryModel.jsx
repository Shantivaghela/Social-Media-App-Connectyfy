import React from 'react'
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
        <div className="w-full p-3 ">
          <Link onClick={() => { props.open(false) }} className='text-white bg-gray-600 border-2 p-2 rounded-lg' >
            <i class="fa-solid fa-xmark fa-2xl"></i>
          </Link>
          <div className="flex justify-center items-center  min-h-[100%] ">

            <Slider {...settings} className=' w-[320px] justify-center rounded-xl'>
              {story.map((key) => (
              <div className=' overflow-hidden w-full px-2 '>
                   <div className=" flex justify-center items-center">

                  < img src={key.img} alt="" className='rounded-xl object-cover h-[600px] w-[300px] ' />
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
