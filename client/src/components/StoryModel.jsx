import React, { useEffect, useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom'
import { story } from '../assets/videosInfo'
import { assets } from '../assets/assets'
import { useAuth } from '../contextAPI';

function StoryModel(props) {
  const [currentIndex, setCurrentIndex] = useState(props.id);
  const [videolength, setVideolength] = useState(0);
  const [count, setCount] = useState(0);

  const videoRef = useRef();
  const imageRef = useRef();
  let sliderRef = useRef(null);
  const { isLoggedIn, user, userdata, posts, stories } = useAuth();


  // console.log(media);


  //  console.log(media.length);

  useEffect(() => {

    if (currentIndex < stories.length - 1) {
      const currentMedia = stories[currentIndex];
      const media = currentMedia.media;
      const typeOfmedia = media.map((items) => {
        return items.type
      });

      typeOfmedia.map((thatMedia) => {
        let timer;
        // let bartimer;
        if (thatMedia === "image") {
          if (media.length === 1) {

            timer = setTimeout(() => {
              next()
            }, 5000)
            return (() => clearTimeout(timer))
          } else if (media.length > 1) {
            timer = setTimeout(() => {
              next()
            }, 50000)
            return (() => clearTimeout(timer))
          }


          // bartimer = setInterval(()=>setVideolength(videolength++),5000)
        } else if (thatMedia === "video" && videoRef.current) {

          const video = videoRef.current;
          const videodur = video.duration * 1000
          video.currentTime = 0;
          video.play();
          if (media.length === 1) {

            if (videodur < 30000) {

              timer = setTimeout(() => {
                next()

              }, videodur)
              return (() => clearTimeout(timer))
            } else if (videodur > 30000) {

              timer = setTimeout(() => {
                next()

              }, 30000)


              return (() => clearTimeout(timer))
            }
          }





        }


      })
    }


  }, [currentIndex])

  const next = () => {


    sliderRef.slickNext();
    setCurrentIndex(currentIndex + 1)
    setCount(0)




  };

  const previous = () => {
    sliderRef.slickPrev();
    // setCurrentIndex(currentIndex - 1)
  };
  const bars = (i) => {

    console.log(i);

    const bar = setInterval(() => {
      setVideolength(videolength + 1)
      // videolength++;


    }, 10)

    if (videolength >= 100) {
      clearInterval(bar)
      setVideolength()
    }



  }
  const preButton = () => {

    if (count > 0) setCount(count - 1);
    else if(count === 0) previous()


  }
  const nextButton = (length) => {


    if (count === length - 1) next();
    else if (count < length - 1) setCount(count + 1)
  }

  console.log(currentIndex);




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,


  };
  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",  // Indian Time Zone
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,  // 12-hour format
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).replace(",", " -");
  };

  return (
    <>
      <section className="h-full w-full bg-gray-800/70 fixed z-20 ">
        <div className="w-full pl-1 md:p-3 ">
          <NavLink onClick={() => { props.open(false) }} className='text-white z-20 absolute md:text-2xl  hover:bg-gray-500 bg-gray-600 border-2 p-1 px-2  rounded-lg' >
            <i className="fa-solid fa-xmark "></i>
          </NavLink>
          <div className="flex justify-center items-center flex-col  min-h-[100%] relative">

            <Slider
              ref={slider => {
                sliderRef = slider;

              }}
              {...settings} initialSlide={props.id} className=' w-[320px] justify-center rounded-xl'>
              {stories.filter(itmes => itmes.userId._id !== user._id)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((items, index) => (


                <div key={index} currindex={index} className='sticky overflow-hidden flex justify-center items-center h-[90%] o w-full md:px-2  md:mt-10' >
                  <div className="bg-white dark:bg-gray-700 dark:text-white flex px-2 justify-center flex-col items-center relative md:h-[600px] md:w-[300px] h-[750px] w-full rounded-xl overflow-hidden">
                    <div className="w-full flex justify-between absolute px-2 mt-2 z-44 ml- top-0">

                    <Link to="/" className="flex items-center space-x-2   sticky  top-0 ">
                      <img src={items.userId.pimage ? `http://localhost:8080${items.userId.pimage}` : (assets.profileIcon)} className="md:h-9 h-12 w-12 md:w-9  rounded-full object-cover" alt="profile pic" />
                      {/* <img src={assets.connectyfy} className="h-6 md:h-11 " alt="Flowbite Logo" /> */}
                      <div className='text-xl md:text-sm  '>
                        <p className="">{items.userId.username}
                        </p>
                        <p className="md:text-[10px] text-sm">{formatDateTime(items.createdAt)}</p>

                      </div>

                    </Link>
                    {items.media.length > 1 && <span className='h-9 w-9 rounded-full flex justify-center items-center   bg-gray-800/50'>
                      <p className='text-sm'>
                      {`${count} /  ${items.media.length}`}
                      </p>
                    </span>}
                    </div>
                    <div className='absolute flex  ml- h-[80%] z-33 w-full'>
                      <button onClick={items.media.length === 1 ? previous : preButton} className="w-[50%] h-full cursor-pointer"></button>
                      {index > currentIndex ? ("") : <button onClick={()=>items.media.length === 1 ? next() : nextButton(items.media.length)} className="w-[50%] h-full cursor-pointer"></button>}

                    </div>
                    {/* <span className=' md:mt-1 ml-1   text-white  '>{items.Name}</span> */}
                    {items.media.length === 1 && items.media.map((media, i) => (
                      <div key={i} className=''>

                        {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
                          <div className={`bg-blue-600 h-2.5 rounded-full`} style={{ width: videolength+"%" || "0%" }}></div>
                        </div> */}

                        {media.type === "image" ? (

                          < img src={media.url} ref={imageRef} alt="this is image" className=' object-contain   ' />
                          // < img src={media.src} ref={imageRef} alt="this is image" className='rounded-xl object-cover  h-[750px] w-full md:h-[600px] md:w-[300px] ' />
                        ) : (
                          < video
                            src={media.url}
                            ref={videoRef}
                            alt="this is video"
                            className='object-contain '
                            autoPlay={true}
                            // onTimeUpdate={videodurationfun()}
                            // onEnded={nextMedia}
                            loop
                          />


                        )
                        }
                      </div>
                    ))}
                    {items.media.length > 1 && <div className="  flex  overflow-hidden  items-center ">
                      <div className="flex h-[50%] z-12 items-center   transition duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${count * 100}%)`
                    }}>
                        {items.media.map((media, i) => (


                          (media.type === "image" ? (

                            < img key={i} src={media.url} ref={imageRef} alt="this is image" className='  object-contain ' />
                            // < img src={media.src} ref={imageRef} alt="this is image" className='rounded-xl object-cover  h-[750px] w-full md:h-[600px] md:w-[300px] ' />
                          ) : (
                            < video
                              src={media.url}
                              ref={videoRef}
                              alt="this is video"
                              className='object-contain '
                              autoPlay={true}
                              // onTimeUpdate={videodurationfun()}
                              // onEnded={nextMedia}
                              loop
                            />


                          ))


                        ))}
                      </div>
                    </div>}
                    <div className="absolute w-full z-17 flex justify-center mt-133 gap-1 px-2">
                      <input type="text" id="search" className=" bg-white block outline-nonegt rounded-lg w-full  p-2 ps-1 text-sm md:text-sm text-gray-900 focus:ring-blue-500 border-2 border-gray-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send..." required />
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
