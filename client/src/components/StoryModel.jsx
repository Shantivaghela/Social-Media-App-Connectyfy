import React, { useEffect, useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom'
import { story } from '../assets/videosInfo'
import { assets } from '../assets/assets'

function StoryModel(props) {
  const [currentIndex, setCurrentIndex] = useState(props.id)
  const videoRef = useRef();
  
  const imageRef = useRef(null);
  let sliderRef = useRef(null);
  

//  console.log(sliderRef.i);
 
  useEffect(() => {
    if(props.id < story.length){
      story.map((items)=>{
        console.log("currentid", items.id);
        
        items.url.map((media)=>{
          console.log(media.type);
          if(media.type === "Image" && items.id === currentIndex){
            
            const count = setInterval(()=>{
              
               next();
              },3000)
            }
            else if(media.type === "Video" && videoRef.current){
              const video = videoRef.current;
              const videodur = video.duration*1000;
              console.log(video.duration);
              video.currentTime = 0;
              video.play();
              if(video.duration < 30 ){
                
              
               
             
                clearInterval()
            }
          }
        })
          setCurrentIndex(props.id+1)
      });
    }else{
      clearInterval(count)
      setCurrentIndex(0)
    }

},[currentIndex]); // Re-run when index changes
 
     const updateid = () =>{
      setCurrentIndex(+1)
     }  
        
      

  

  const next = () => {
    sliderRef.slickNext();
    // setCurrentIndex()
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
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
          <NavLink onClick={() => { props.open(false) }} className='text-white z-20 absolute md:text-2xl  hover:bg-gray-500 bg-gray-600 border-2 p-1 px-2  rounded-lg' >
            <i className="fa-solid fa-xmark "></i>
          </NavLink>
          <div className="flex justify-center items-center  min-h-[100%] ">


            <Slider
              ref={slider => {
                sliderRef = slider;

              }}
              {...settings} initialSlide={props.id} className=' w-[390px] justify-center rounded-xl'>
              {story.map((items, index) => (


                <div key={index}  className='sticky overflow-hidden w-full md:px-2 ' data-aos="zoom-in">
                  <div className=" flex justify-center items-center relative">

                    <NavLink to="/" className="flex items-center space-x-2 rtl:space-x-reverse absolute z-18 mb-170 mr-49 mt-15 md:mt-0 md:mb-130 md:mr-30">
                      <img src={items.img} className="md:h-9 h-12" alt="profile pic" />
                      {/* <img src={assets.connectyfy} className="h-6 md:h-11 " alt="Flowbite Logo" /> */}
                      <div className='text-xl md:text-sm  '>
                        <p className="">{items.Name}
                        </p>
                        <p className="md:text-[10px] text-sm">{items.time}</p>

                      </div>

                    </NavLink>
                    <div className='absolute flex  ml- h-[80%] z-33 w-full'>
                      <button onClick={previous} className="w-[50%] h-full "></button>
                      <button onClick={next} className="w-[50%] h-full "></button>

                    </div>
                    {/* <span className=' md:mt-1 ml-1   text-white  '>{items.Name}</span> */}
                    {items.url.map((media, i) => (
                      <div key={i}>

                        {media.type === "Image" ? (

                          < img src={media.src} ref={imageRef} alt="this is image" className='rounded-xl object-cover  h-[750px] w-full md:h-[600px] md:w-[300px] ' />
                        ) : (
                          < video
                            src={media.src}
                            ref={videoRef}
                            alt="this is video"
                            className='rounded-xl object-cover  h-[750px] w-full md:h-[600px] md:w-[300px] '
                            autoPlay={true}
                          // onEnded={nextMedia}
                          />


                        )}
                      </div>
                    ))}
                    <div className="absolute w-full z-17 flex justify-center mt-133 gap-1">
                      <input type="text" id="search" className=" bg-white block outline-nonegt rounded-lg w-[65%]  p-2 ps-1 text-sm md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find..." required />
                      <button type="submit" className="text-white   end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid  fa-arrow-right fa-lg"></i></button>
                    </div>
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
