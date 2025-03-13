import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth } from '../contextAPI';
import { toast } from 'react-toastify';

function PasswordChange() {
    const [oldshow, setOldShow] = useState(false);
    const [newshow, setNewShow] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const {user} = useAuth();
    let navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user._id,  // ✅ Send logged-in user's ID
                oldPassword,
                newPassword,
            }),
        });

        const data = await response.json();
        if(response.ok){

            toast.success("Password is updated");
            navigate("/");
        }
        else{
            toast.error(data.extraDetails ? data.extraDetails : data.message);
        }
    };

    return (
        <>
            <section className='flex mt-22 relative mb-12 pb-2 bg-white md:ml-[25%] flex-col h-full dark:border-gray-700 border overflow-hidden dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm'>
                <div className="flex justify-center items-center w-full pt-5 relative flex-col h-full">
                    <button onClick={() => navigate(-1)} className='dark:text-white cursor-pointer w-full px-3'><i className="fa-solid fa-arrow-left fa-xl float-left"></i></button>
                    <span className='md:text-3xl text-xl border-b-2 mb-10  border-[#48a6a6] dark:text-white'>Update Password</span>
                    <form onSubmit={handleChangePassword} className="mb-5 w-full px-5">
                        <label htmlFor="oldpassword" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
                        <div className="flex items-center mb-5">
                            <input type={`${oldshow ? 'text' : 'password'}`} id="oldpassword"
                                name='newpassword'
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='old password' />
                            <Link onClick={() => { setOldShow(!oldshow) }} className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                {!oldshow && <i className="fa-solid fa-eye-slash"></i>}
                                {oldshow && <i className="fa-solid fa-eye"></i>}
                            </Link>
                        </div>
                        <label htmlFor="newpassword" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                        <div className="flex items-center ">
                            <input type={`${newshow ? 'text' : 'password'}`} id="newpassword"
                                name='oldpassword'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='new password' />
                            <Link onClick={() => { setNewShow(!newshow) }} className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                {!newshow && <i className="fa-solid fa-eye-slash"></i>}
                                {newshow && <i className="fa-solid fa-eye"></i>}
                            </Link>
                        </div>
                        <div className='mt-3 w-full flex justify-center items-center'>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Update</button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default PasswordChange
