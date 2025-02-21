import React from 'react'

function Profilevideos(props) {
    return (
        <>
            <div className={`${props.view === 2 ? "block" : "hidden"} px-2 md:px-5`}>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-1 md:mt-10 justify-between  items-center">
                    <div className='justify-center flex w-full'  data-aos="flip-down">
                        <img className=" h-85 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full' data-aos="flip-down">
                        <img className="  h-85 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full' data-aos="flip-down">
                        <img className="  h-85 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full' data-aos="flip-down">
                        <img className="  h-85 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default Profilevideos
