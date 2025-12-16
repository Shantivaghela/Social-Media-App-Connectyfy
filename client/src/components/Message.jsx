import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contextAPI'
import { assets } from '../assets/assets';
import { use } from 'react';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_API_URL;

function Message(props) {
    const [isOpen, setIsopen] = useState(false);
    const { user, userdata } = useAuth();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [props.message]);

    // console.log(props.message);
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format

        return `${hours}:${minutes} ${ampm}`;
    };
    // console.log(props.typing);

    const deleteMessage = async () => {
        try {
            const response = await fetch(`${API}/api/message/messages/delete/${props.message._id}`, {
                method: "DELETE",

            })
            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                
                props.clickfun();



            } else {
                console.log(data);

            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>

            <div className=" z-55  w-full flex gap-3.5 flex-col mt-3 mb-5" ref={messagesEndRef}>

                <div className={`${props.message.senderId === user._id ? "hidden" : "block"} float-start flex  w-full `}>

                    <img src={props.userdetails && props.userdetails.alldatas.pimage ? `${API}${props.userdetails.alldatas.pimage}` : (assets.profileIcon)} alt="Jese image" className="w-8 h-8 rounded-full object-cover mr-4" />
                    <div className="flex items-start gap-2.5 relative">
                        <div className="flex flex-col gap-1 w-full max-w-[320px]">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{props.userdetails.username}</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{formatTime(props.message.createdAt)}</span>
                            </div>
                            <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-300 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                                <p className="text-sm font-normal text-gray-900 dark:text-white"> {props.message.message}</p>
                            </div>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                        {/* <button onClick={() => setIsopen(!isOpen)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className="inline-flex cursor-pointer self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </button>
                        <div id="dropdownDots" className={` ${isOpen ? "block" : "hidden"} z-10 absolute float-right ml-60 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className={` py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton`}>

                                <button onClick={() => deleteMessage()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete </button>


                            </div>
                        </div> */}
                    </div>

                </div>
                <div className={`${props.message.senderId === user._id ? "block" : "hidden"} justify-end flex `}>
                    <div className="justify-end flex gap-2 items-center">
                        <button onClick={() => setIsopen(!isOpen)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className="inline-flex cursor-pointer self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </button>
                        <div id="dropdownDots" className={` ${isOpen ? "block" : "hidden"} z-10 h-12 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className={` py-2 text-sm  text-gray-700 dark:text-gray-200`}>

                                <button onClick={() => deleteMessage()} className="block px-4 py-2 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete </button>
                            </div>
                        </div>
                        <div className="flex  items-start gap-2.5">
                            <div className="flex flex-col gap-1 w-full max-w-[320px]">
                                <div className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{user.username}</span>
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{formatTime(props.message.createdAt)}</span>
                                </div>
                                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#48a6a6] rounded-s-xl rounded-br-xl ">
                                    <p className="text-sm font-normal text-white"> {props.message.message}</p>
                                </div>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                                {/* {!props.typing  ? "typing....." : ""} */}
                            </div>

                        </div>

                        <img className="justify-end w-8 h-8 rounded-full" src={userdata && userdata.pimage ? `${API}${userdata.pimage}` : (assets.profileIcon)} alt="Jese image" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Message
