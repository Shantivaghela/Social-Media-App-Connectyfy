import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../contextAPI';
import Loder from './Loder';

function AddStory(props) {
    const [filepath, setFilepath] = useState();
    const [type, setType] = useState("");
    const [content, setContent] = useState("");
    const [previewmedia, setPreviewMedia] = useState([]);
    const [filename, setFilename] = useState([]);
    const [media, setMedia] = useState([]);
    const [count, setCount] = useState(0);
    const [isLodding, setIsLodding] = useState(false);

    const navigate = useNavigate();
    const { user } = useAuth();

    const preButton = () => {

        if (count > 0) setCount(count - 1)


    }
    const nextButton = () => {


        if (count === media.length - 1) setCount(0)
        else if (count < media.length - 1) setCount(count + 1)
    }
    const inputHandle = (event) => {
        const selectedFile = Array.from(event.target.files);
        console.log(selectedFile);



        setFilename(event.target.name);
        setMedia(selectedFile)



    }

    const uploadstory = async () => {
        const data = new FormData();
        data.append("userId", user._id);
        data.append("content", content ? content : "");
        media.forEach((file) => {
            data.append("media", file);
            setIsLodding(true)

        });
        try {
            const response = await axios.post("http://localhost:8080/api/story/story-upload", data, {
                headers: { "Content-Type": "multipart/form-data" },

            });


            if (response.data) {
                //   const data = await response.json();
                toast.success("Story Uploaded");
                setContent("")
                setMedia([]);
                navigate("/")
                setIsLodding(false);
                props.open(false);


            }
            console.log("Uploaded Story:", response);
        } catch (error) {
            console.error("Upload failed:", error);
        }
    }
    return (
        <>
            <section className="h-full w-full bg-gray-800/70 fixed z-20 ">
                <div className="w-full pl-1 md:p-3 flex">
                    <NavLink onClick={() => { props.open(false) }} className='text-white z-20 absolute md:text-2xl  hover:bg-gray-500 bg-gray-600 border-2 p-1 px-2  rounded-lg' >
                        <i className="fa-solid fa-xmark "></i>
                    </NavLink>
                    <div className={`${media.length > 0 ? "hidden" : "block"} flex justify-center items-center w-full mt-8`}>
                        <label htmlFor="dropzone-file" className={`${media > 0 ? "hidden" : "block"} md:h-[600px] h-150 w-80 md:w-[300px] flex flex-col items-center justify-center   border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">

                                <span className='mb-4 text-5xl dark:text-white'>

                                    <i className="fa-solid fa-photo-film fa-bounce"></i>

                                </span>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                            </div>
                            <input id="dropzone-file" type="file"
                                className="hidden"
                                onChange={inputHandle}
                                accept="image/*,video/*"
                                multiple
                            />
                        </label>

                    </div>

                    <div className={`${media.length > 0 ? "block" : "hidden"} w-full flex flex-col justify-center items-center  my-1`}>
                        <div className="h-150 w-80  bg-white rounded-xl bor overflow-hidden md:h-[450px] md:w-[250px] flex justify-center items-center md:mt-2 mt-5 ">
                            <button onClick={preButton} disabled={count === 0} className={`${media.length > 1 ? "block" : "hidden"} ${count === 0 ? "opacity-35" : ""} md:mr-[20%] mr-[90%] absolute z-10 cursor-pointer rounded-full bg-gray-500 text-[10px] items-center text-white`}>
                                <i class="fa-solid fa-arrow-left m-2"></i>
                            </button>
                            <div className="object-contain w-full h-full rounded-xl bor flex  items-center transition duration-500 ease-in-out  "
                                style={{
                                    transform: `translateX(-${count * 100}%)`
                                }}>

                                {media.map((media, i) => (
                                    media.type === "image/jpeg" ? (
                                        <img key={i} src={URL.createObjectURL(media) || `Loading...`} alt="image" className=' border-gray-200 rounded-lg  object-contain ' />
                                    )
                                        :
                                        (
                                            <video autoPlay={true} controls loop alt="video" className=' border-gray-200 rounded-lg  object-contain ' >
                                                <source src={URL.createObjectURL(media) || `Loading...`} />
                                            </video>
                                        )))

                                }
                            </div>
                            <button onClick={nextButton} disabled={count === media.length - 1} className={`${media.length > 1 ? "block" : "hidden"} ${count === media.length - 1 ? "opacity-35" : ""} md:ml-[20%] ml-[90%]  absolute z-10 cursor-pointer rounded-full bg-gray-500 text-[10px] items-center text-white`}>
                                <i class="fa-solid fa-arrow-right m-2"></i>
                            </button>
                        </div>
                        <div className={`${media.length > 0 ? "block" : "hidden"} mt-3 w-full md:w-[50%]   mb-4 p-2 rounded-lg dark:bg-gray-700 bg-white`}>

                            <label htmlFor="messages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Text</label>
                            <textarea id="messages"
                                rows="4"
                                name='messages'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        </div>
                        <div className={`${media.length > 0 ? "block" : "hidden"} w-full flex justify-center`}>
                            <label htmlFor="dropzone-files" className='flex justify-between items-center gap-6'>

                                <span className="text-white bg-blue-700  hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800 cursor-pointer"><i className="fa-regular fa-image mr-2"></i>Change</span>


                                <input id="dropzone-files" type="file"
                                    className="hidden"
                                    onChange={inputHandle}
                                    accept="image/*,video/*"
                                    multiple
                                />

                                <button onClick={uploadstory} className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Upload</button>
                            </label>
                        </div>
                    </div>


                    {isLodding && <Loder/>}

                </div>
            </section >
        </>
    )
}

export default AddStory
