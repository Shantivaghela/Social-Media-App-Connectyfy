import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageEditorComponent from '../components/Editor';
import { useAuth } from '../contextAPI';
import axios from 'axios';

function Createpost() {
  let navigate = useNavigate();
  const [filepath, setFilepath] = useState([])
  const [currentimage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(0);
  const [filename, setFilename] = useState("");
  const [content,setContent] = useState("")
  console.log(content);
  const {user} = useAuth();

  console.log(filepath);

  const inputHandle = (event) => {
    const selectedFile = event.target.files;
    console.log(selectedFile);


    if (selectedFile.length > 0) {
      // const imageUrls = Array.from(selectedFile).map((file) =>
      //   URL.createObjectURL(file)
      // );

      setFilepath(selectedFile);
      setFilename(event.target.name);
    }
    

  }
  const videoInputHandle = (event) => {
    const selectedFile = event.target.files;
    console.log(selectedFile);


    if (selectedFile.length > 0) {
      // const videoUrls = Array.from(selectedFile).map((file) =>
      //   URL.createObjectURL(file)
      // );

      setFilepath(selectedFile);
      setFilename(event.target.name);
    }

  }

  let preButton = () => {

    if (count > 0) setCount(count - 1)

  }
  let nextButton = () => {
    if (count < filepath.length - 3) setCount(count + 1)
    //  else setCount(0)
  }

  // console.log(count);

  const onSubmit = async(e) => {
    e.preventDefault();
console.log(e);

    const data = new FormData();
    data.append("userId",user._id);
    data.append("content",content ? content : "");
    data.append("media",filepath);
    // filepath.forEach(post=>{
    //   data.append("media",post);
      
    // })
    try {

      const response = await axios.post("http://localhost:8080/api/post/upload-post",data,{
        // method:"POST",
        headers: { "Content-Type": "multipart/form-data" },
        // body:data
      })

      // const res_data = await response.json();
      if(response.data){
        console.log(response);
        
      }else{
        console.log(response);
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }



  return (
    <>
      <section className='flex mt-22 relative mb-12 pb-2 bg-white md:ml-[25%] flex-col dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm' data-aos="flip-up">
       <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="w-full h-full  flex justify-center items-center">

          <div className="flex items-center justify-center w-full flex-col md:flex-row p-2 gap-3">
            <label htmlFor="dropzone-files" className={`${filepath.length > 0 ? "hidden" : "block"} flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg> */}
                <span className='mb-4 text-2xl md:text-5xl dark:text-white'>

                  <h1 className="">Post</h1>

                </span>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

              </div>
              <input id="dropzone-files"
                type="file"
                name='post-image'
                className="hidden"
                multiple
                onChange={inputHandle}
                accept="image/*"
              />
            </label>
            <label htmlFor="dropzone-file" className={`${filepath.length > 0 ? "hidden" : "block"} flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg> */}
                <span className='mb-4 text-2xl md:text-5xl dark:text-white'>

                  <h1 className="">Video</h1>

                </span>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

              </div>
              <input id="dropzone-file"
                type="file"
                name='post-video'
                className="hidden"
                multiple
                onChange={videoInputHandle}
              />
            </label>
          </div>

        </div>







        <div className={`${filepath.length > 0 ? "block" : "hidden"} w-full px-3 md:px-0    flex justify-center`}>

          {filename === "post-image" ? (
            <div className="flex justify-center overflow-hidden  items-center md:h-100 md:w-100 w-50 h-50 mt-3 border-2  border-gray-400 ralative dark:border-gray-700 rounded-xl">
              <img src={URL.createObjectURL(filepath[currentimage])} alt="" className='  rounded-md md:max-h-100 md:max-w-100 max-h-50 max-w-50 p-1' />
            </div>
          ) : (
            <div className="flex justify-center overflow-hidden  items-center  w-50 h-90 mt-3 border-2  border-gray-400 ralative dark:border-gray-700 rounded-xl">
              <video src={URL.createObjectURL(filepath[currentimage])} autoPlay={true} loop controls className='  rounded-md max-h-90 max-w-50 p-1'></video>
            </div>
          )
          }
        </div>
        <div className={`${filepath.length > 0 ? "block" : "hidden"} relative flex w-full px-2 overflo justify-center mb-3 items-center text-center mt-5 gap-2`}>
          <button onClick={preButton} disabled={count === 0} className={`${filepath.length > 3 ? "block" : "hidden"} ${count === 0 ? "opacity-25" : ""}  cursor-pointer rounded-full bg-gray-500 text-[10px] items-center text-white`}>
            <i class="fa-solid fa-arrow-left m-2"></i>
          </button>
          <div className="overflow-hidden md:w-63 w-33">

            <div className="flex  gap-1 scobar scroller   transition ease-out duration-400"
              style={{
                transform: `translateX(-${count * 100 / 3}%)`
              }}
            >

              {Array.from(filepath).map((image, i) => (
                <div key={i} className=" ">
                  <button onClick={() => setCurrentImage(i)} className='md:w-20 md:h-20 w-10 h-10 cursor-pointer'>
                    {filename === "post-image" ?
                      <img src={URL.createObjectURL(image)} alt={`image${i}`} className='md:w-20 md:h-20 w-10 h-10 border-2 border-gray-200 rounded-md object-cover' />
                      :
                      <video src={URL.createObjectURL(image)} className='md:w-20 md:h-20 w-10 h-10 border-2 border-gray-200 rounded-md object-cover'></video>
                    }
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextButton} disabled={count >= filepath.length - 3} className={`${filepath.length > 3 ? "block" : "hidden"} ${count >= filepath.length - 3 ? "opacity-25" : ""} cursor-pointer rounded-full bg-gray-500 text-[10px] text-white`}>
            <i class="fa-solid fa-arrow-right m-2"></i>
          </button>
        </div>

        {/* <div className={`${filepath.length > 3 ? "block" : "hidden"} w-full flex justify-center gap-1`}>
          {filepath.map((s, i) => {
            return (<span key={i} className={`h-2 w-2 rounded-full ${i === count ? "bg-black" : "bg-gray-400"}  `}></span>)
          })}
        </div> */}

        <div className={`${filepath.length > 0 ? "block" : "hidden"} mb-5 px-5`}>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add description</label>
          <textarea id="message"
            rows="4"
            name='content'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        </div>
        <div className={`${filepath.length > 0 ? "block" : "hidden"} flex justify-center gap-2 px-2 items-center mt-5`}>

          {/* <button onClick={()=>setFilepath()} className="text-white bg-gray-700 hover:bg-gray-600  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">Discard</button> */}
          <button type="submit"  className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800 cursor-pointer">Upload</button>
          <button onClick={() => { setFilepath([]), setCurrentImage(0) }} className="text-white cursor-pointer  bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 md:px-5 md:py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">Discord</button>

        </div>
        </form>
      </section>
    </>
  )
}

export default Createpost
