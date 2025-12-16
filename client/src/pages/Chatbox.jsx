import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Message from '../components/Message';
import { useAuth } from '../contextAPI';
import { useSocketContext } from '../contextAPI/socketContext';
const API = import.meta.env.VITE_API_URL;


function Chatbox() {
    const [isdrop, setdrop] = useState(false);

    const [profielpage, setPrfilepage] = useState(1);
    const [userdetails, setUserDetails] = useState("");
    const [message, setMessages] = useState([]);
    const [send, setSend] = useState("");
    const [typing, setTyping] = useState(false);
    let typingTimeout;
    let navigate = useNavigate();

    const { userId } = useParams();
    const { allusers, user, userdata, getAllUsers } = useAuth();
    const { socket, onlineusers } = useSocketContext();




    useEffect(() => {
        const getdata = () => {
            const users = allusers.find(alluser => alluser._id === userId);
            setUserDetails(users);
            // console.log(users);

        }
        // getAllUsers();
        getdata();

    }, [userId, allusers, user, userdata]);

    const pagecontant = (id) => {

        setPrfilepage(id);

    }
    const getMessages = async () => {


        try {
            const response = await fetch(`${API}/api/message/messages/${user._id}/${userId}`, {
                method: "GET"
            })

            if (response.ok) {
                const data = await response.json();
                setMessages(data)



            }
            else {
                const err = await response.text();
                console.error("getMessages error:", response.status, err);
            }

        } catch (error) {
            console.log("error from get",error);

        }
    }
    useEffect(() => {
        getMessages();
    }, [userId, user?._id]);
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/message/send-message/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    myId: user._id,
                    message: send

                }),
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMessages([...message, data]);
                setSend("");
            } else {
                const err = await response.text();
                console.error("getMessages error:", response.status, err);
            }
            console.log(response);

        } catch (error) {
            console.log("error form post",error);

        }
    }

    useEffect(() => {
        if (socket) {

            socket.on("newMessage", (newMessage) => {
                setMessages([...message, newMessage]);
            });
            return () => {
                socket.off("newMessage");
            }
        }
    }, [socket, message, setMessages])
    const senderId = user._id;

    const { id: receiverId } = useParams();
    useEffect(() => {
        socket?.on("typing", ({ senderId }) => {
            if (senderId === userId) setTyping(true);

        });

        socket?.on("stopTyping", ({ senderId }) => {
            if (senderId === userId) setTyping(false);
        });
        return () => {
            socket?.off("typing");
            socket?.off("stopTyping");
        };

    }, [senderId, receiverId])

    const handleTyping = () => {
        socket.emit("typing", { senderId: senderId, receiverId: userId });
        // console.log(senderId,userId);

        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
            socket.emit("stopTyping", { senderId: senderId, receiverId: userId });
        }, 2000);
    };

    // console.log(typing);

    return (
        <>
            <section className='flex mt-22  mb-1 pb-2 md:ml-[25%]    rounded-xl'>

                <div className='float-en flex  h-[80vh] md:[70%] rounded-xl  w-full  flex-col justify-center md:ml-  overflow-hidden      ' >


                    <div className="w-ful z-33 pb-2 fixed md:w-[75%] md:ml-0 w-full  bg-white justify-between md:top-22 top-17 flex overflow-hidden  rounded-xl  dark:bg-gray-800 ">
                        <div className=" flex gap-3 justify-start items-center  top0- ">
                            <button onClick={() => navigate(-1)} className='cursor-pointer  m-3 dark:text-white'>
                                <i class="fa-solid fa-arrow-left text-2xl md:text-3xl"></i>
                            </button>

                            {userdetails && userdetails.alldatas.pimage ? <img className="w-10 h-10  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={`http://localhost:8080${userdetails.alldatas.pimage}`} alt="Bonnie image" />
                                : <img className="w-10 h-10  rounded-full border-2 border-white  shadow-lg object-cover z-11" src={assets.profileIcon} alt="Bonnie image" />}
                            <div>

                                <h5 className="text-md font-medium items-center text-gray-900 dark:text-white">{userdetails ? userdetails.username : ""}</h5>
                                {typing ?
                                    <span className="text-sm text-gray-500 place-content-start  dark:text-gray-400 loadingtext"><p>Typing</p></span>
                                    :
                                    <span className="text-sm text-gray-500 place-content-start  dark:text-gray-400">{onlineusers.includes(userId) ? `Online` : `Offline`}</span>
                                }
                            </div>

                        </div>
                        <div className="flex justify-end md:px-4 md:pt-4 z-8 ">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" onClick={() => setdrop(!isdrop)} className={`block z-11 rounded-lg text-gray-300 hover:text-black  hover:bg-gray-100 rounded-   xl focus:outline-none  text-sm p-1.5`} type="button">
                                <i className={`${isdrop ? "fa-solid fa-xmark fa-xl" : " fa-solid fa-bars fa-xl"}`}></i>

                            </button>

                            <div id="dropdown" className={`${isdrop ? 'block' : 'hidden'} rounded-xl absolute  text-base list-none bg-white divide-y divide-gray-100  w-44 dark:bg-gray-700`}>

                                <ul className="md:py-2" aria-labelledby="dropdownButton">


                                    <li>
                                        <Link to="#" className="block px-4 md:py-2 text-sm text-black hover:bg-gray-100 dark:hover:text-black dark:text-white ">Block</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="h-[100%] pt-20 pb-1  w-full   overflow-y-auto scrollbar-hide">

                        {message.length > 0 ?
                            message.map((message) => (
                                <>
                                    <Message typing={typing} key={message._id} message={message} userdetails={userdetails} clickfun={getMessages} />

                                </>
                            ))
                            :
                            (<div className='w-full flex justify-center items-center h-auto mt-20'>
                                <p className='dark:text-white/50 text-xl'>{`Continue chat with ${userdetails ? userdetails.username : ""}`}</p>
                            </div>)}
                        <div className="w-full flex justify-between   px-5">
                            {/* <div className={`${message.includes(f=>f.senderId === userId) ? "hidden" : "block" } loader`}>
                                <div></div>
                                <div></div>
                                <div></div>}
                                <div></div>
                            </div>
                        <div className={`${message.includes(f=>f.senderId === user._id) ? "hidden" : "block" } loader`}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div> */}

                        </div>
                    </div>

                    <form onSubmit={sendMessage} className='fixed bottom-12 md:bottom-2 w-[95%] ml-2 md:ml-0 md:w-[75%]   '>
                        <div className="flex w-[100%]  border bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-800 rounded-2xl p-1 gap-1">
                            <div className="items-center flex justify-center pl-1 gap-3 dark:text-white">
                                <label htmlFor="file" className='cursor-pointer mr-2 '>
                                    <i class="fa-solid fa-photo-film fa-lg text-black dark:text-white"></i>


                                    <input type="file" id='file' name='shanti ' className='hidden rounded-lg w-full p-2 ps-1 text-[10px] md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                </label>
                                {/* <label htmlFor="emoji" className='cursor-pointer '>
                                    
                                    <i class="fa-solid fa-face-smile fa-lg"></i>
                                    <input type="emoji" className='hidden' id='emoji' />
                                    </label> */}
                            </div>
                            <input type="text" id="search" value={send} onChange={(e) => { setSend(e.target.value), handleTyping() }} className="block outline-nonegt rounded-lg bg-white w-full p-2 ps-1 text-sm md:text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send..." required />
                            <button type="submit" className="text-white   end-2 bottom-2 bg-[#48a6a6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-magnifying-glass fa-arrow-up fa-lg"></i></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Chatbox
