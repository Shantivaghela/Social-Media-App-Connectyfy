import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageEditorComponent from '../components/Editor';

function Createpost() {
  let navigate = useNavigate();
  const [filepath, setFilepath] = useState([])
  const[currentimage,setCurrentImage] = useState(0);
  const [count,setCount] = useState(0);
  
 console.log(filepath.length);
 
  const inputHandle = (event) => {
    const selectedFile  = event.target.files;
    console.log(selectedFile);
    
    
    if (selectedFile.length > 0) {
      const imageUrls = Array.from(selectedFile).map((file) =>
        URL.createObjectURL(file)
      );
      
      setFilepath(imageUrls);
    }
    
  }

  let preButton = () =>{
   
    if(count > 0) setCount(count - 1)

  }
  let nextButton = () =>{
    if(count < filepath.length - 3) setCount(count + 1)
    //  else setCount(0)
  }

console.log(count);

  

  return (
    <>
      <section className='flex mt-22 relative mb-12 pb-2 bg-white md:ml-[25%] flex-col dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm' data-aos="flip-up">
        <div className="w-full h-full flex justify-center items-center">

          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className={`${filepath.length > 0 ? "hidden" : "block"} flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg> */}
                <span className='mb-4 text-5xl dark:text-white'>

                  <i className="fa-solid fa-photo-film fa-bounce"></i>

                </span>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

              </div>
              <input id="dropzone-file" type="file"
                className="hidden"
                multiple
                onChange={inputHandle}
              />
            </label>
          </div>

        </div>
        <div className={`${filepath.length > 0 ? "block" : "hidden"}  m-3`}>
          <div  className='flex justify-center items-center'>

            <button onClick={()=>{setFilepath([]),setCurrentImage(0)}} className="cursor-pointer text-white bg-blue-700  hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800"><i className="fa-regular fa-image mr-2"></i>Discord</button>

          

          </div>
        </div>
        <div className={`${filepath.length > 0 ? "block" : "hidden"} w-full flex justify-center`}>
          <div className="flex justify-center overflow-hidden  items-center h-100 w-100 border-2  border-gray-400 ralative dark:border-gray-700 rounded-xl">
            <img src={filepath[currentimage]} alt="" className=' border-2  border-gray-200 rounded-md max-h-100 max-w-100 p-1' />
          </div>
        </div>
        <div className={`${filepath.length > 0 ? "block" : "hidden"} relative flex w-full overflo justify-center items-center mt-5 gap-2`}>
        <button onClick={preButton} disabled={count === 0}  className={`${filepath.length > 3 ? "block" : "hidden"} ${count === 0 ? "opacity-25" : ""}  cursor-pointer rounded-full bg-gray-500 text-[10px] text-white`}>
        <i class="fa-solid fa-arrow-left m-2"></i>
        </button>
        <div className="overflow-hidden w-63">

         <div className="flex  gap-1 scobar scroller  pb-2 transition ease-out duration-400"
         style={{
           transform:`translateX(-${count * 100/3}%)`
          }}
          >

          {filepath.map((image,i)=>(
            <div  key={i} className=" ">
            <button onClick={()=>setCurrentImage(i)} className='w-20 h-20 cursor-pointer'>
            <img  src={image} alt={`image${i}`} className='w-20 h-20 border-2 border-gray-200 rounded-md object-cover' />
            </button>
           </div>
        ))}
        </div>
        </div>
        <button onClick={nextButton} disabled={count >= filepath.length - 3}  className={`${filepath.length > 3 ? "block" : "hidden"} ${count >= filepath.length - 3 ? "opacity-25" : ""} cursor-pointer rounded-full bg-gray-500 text-[10px] text-white`}>
        <i class="fa-solid fa-arrow-right m-2"></i>
        </button>
        </div>
      
        <div  className={`${filepath.length > 3 ? "block" : "hidden"} w-full flex justify-center gap-1`}>
        {filepath.map((s,i)=>{
              return (<span  key={i} className={`h-2 w-2 rounded-full ${i === count ? "bg-black" : "bg-gray-400" }  `}></span>)
            })}
            </div>
        
        <div className={`${filepath.length > 0 ? "block" : "hidden"} mb-5 px-5`}>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add description</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        </div>
        <div className="flex justify-evenly items-center mt-5">

          {/* <button onClick={()=>setFilepath()} className="text-white bg-gray-700 hover:bg-gray-600  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">Discard</button> */}
          <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Upload</button>

        </div>
        
      </section>
    </>
  )
}

export default Createpost
