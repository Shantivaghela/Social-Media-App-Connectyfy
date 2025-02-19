import React from 'react'

function Postpage(props) {
    return (
        <>
            <div className={`${props.view === 1 ? "block" : "hidden"} px-2 md:px-5`}>

                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-1 md:mt-10 justify-between  items-center">
                    <div className='justify-center flex w-full'>
                        <img className="h-90 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full'>
                        <img className=" h-90 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full'>
                        <img className=" h-90 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full'>
                        <img className=" h-90 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full'>
                        <img className=" h-90 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div className='justify-center flex w-full' >
                        <img className=" h-90 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Postpage
