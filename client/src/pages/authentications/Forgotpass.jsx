import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useAuth } from '../../contextAPI';
import { toast } from 'react-toastify';

function Forgotpass(props) {
  // const [authpage, setAuthpage] = useState("login");
  const [show, setShow] = useState(false)
  const { storeTokenInLS, isLoggedIn } = useAuth();
  const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
  const inputRefs = useRef([]); // Array of refs for each input field
  const [email, setEmail] = useState("");
  const [viewOtp, setViewOpt] = useState(false);
  const [viewReset, setViewReset] = useState(false);
  const [newPass,setNewpass] = useState("");
  // console.log(otp[5]);
  console.log(email);


  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to home if logged in
      toast.error("You can not visit this page")
    }
  }, [isLoggedIn, navigate]);

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      // console.log(otp);

      if (index > 0 && otp[5] === "") {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
      if (index == 5 && otp[5] !== "") {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index), ""
        ]);
        inputRefs.current[index].focus();
      }

    }
  }
  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };
  const sendEmailhandle = async (e) => {

    try {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/api/auth/forgot-password',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify({ email: email }),

        }
      );

      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        setViewOpt(true)
      } else {
        toast.error(res_data.message);


      }


    } catch (error) {
      console.error(error);
    }
  }

  const verifyOtphandle = async (e) => {
    const otpValue = otp.join("");
    console.log(otpValue);

    try {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/api/auth/user-verify',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify({
            email: email,
            otp: otpValue
          }),

        }
      );

      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        setViewReset(true);
        setViewOpt(false);
      } else {
        toast.error(res_data.message);


      }

    } catch (error) {
      console.log(error);

    }
  }

  const resetPasshandle = async(e)=> {
    const otpValue = otp.join("");
    try {
      e.preventDefault();
       const response = await fetch('http://localhost:8080/api/auth/reset-password',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify({
            email: email,
            otp: otpValue,
            newPassword:newPass
          }),

        }
      );
       const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        setViewReset(false);
        setViewOpt(false);
        navigate("/login");
      } else {
        toast.error(res_data.message);


      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <section className={`w-screen min-h-screen  flex  justify-center items-center `} data-aos="flip-up" >
        <img src={assets.logo} height={20} width={20} className=" h-15 w-15 object-cover  absolute overflow-visible mb-180 md:mb-152 z-10 border-2 border-white rounded-full " />

        <div className="relative shadow-[0px_19px_32px_3px_rgba(0,_0,_0,_0.1)]  md:h-[630px] md:w-[1100px] w-[380px] h-[700px] rounded-xl overflow-hidden border-3 border-gray-500 flex  md:flex-row flex-col justify-center items-center">
          <div className="justify-center bg-white  h-[200px] md:h-screen flex flex-col items-center w-full   md:w-[50%] ">
            <img src={assets.loginimage} className='h-full object-cover  w-[900px]' alt="" />
            {/* <video  autoPlay={true} loop muted playsInline preload='auto' className='h-full object-cover  w-[900px]'>
                                <source  src={assets.Loginimg}   type='video/mp4' />
                            </video> */}
          </div>
          <div className={` rounded-xl md:rounded-none w-full md:w-[50%] justify-center md:h-full h-screen bg-white flex flex-col items-center dark:bg-gray-900 `}>
            <div className={` w-full items-center flex flex-col`}>
              <div className={` mb-4`}>
                <h1 className='dark:text-white border-b-3 border-[#48a6a6] text-3xl '>Forgot Password</h1>
              </div>


              <form className={`${viewOtp || viewReset ? "hidden" : "block"} w-[80%] h-[80%] mx-auto `} onSubmit={sendEmailhandle}>

                <div className="mb-5">
                  <label htmlFor="Femail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="Femail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required />
                </div>
                {/* <div className="mb-5 hidden">
                  <label htmlFor="Femail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Code</label>
                  <div className='flex gap-2'>

                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      id="Femail"
                      value={digit}
                      onChange={handleInput}
                      onKeyDown={handleKeyDown}
                      onFocus={handleFocus}
                      onPaste={handlePaste}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="bg-gray-50 border  border-gray-300 text-gray-900 text-md text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 md:w-15 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required />
                  ))}
                  </div>
                </div> */}


                <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Send Code</button>
              </form>
              <form className={`${viewOtp ? "block" : "hidden"} w-[80%] h-[80%] mx-auto `} onSubmit={verifyOtphandle}>
                <div className="mb-5">
                  <label htmlFor="verify" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Code</label>
                  <div className='flex gap-2'>

                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        id={`${index}_verifyOtp`}
                        value={digit}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                        onPaste={handlePaste}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-md text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 md:w-15 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required />
                    ))}
                  </div>
                </div>


                <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Verify Otp</button>
              </form>
              <form className={`${viewReset ? "block" : "hidden"} w-[80%] h-[80%] mx-auto `} onSubmit={resetPasshandle}>
                <div className="mb-5">
                  <label htmlFor="newpass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Code</label>
                  <div className='flex gap-2'>

                    <input type={`${show ? 'text' : 'password'}`}
                      id="Lpassword"
                      name='password'
                      value={newPass}
                      onChange={(e)=>setNewpass(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required placeholder='password' />
                    <Link onClick={() => { setShow(!show) }} className='ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                      {!show && <i class="fa-solid fa-eye-slash"></i>}
                      {show && <i class="fa-solid fa-eye"></i>}
                    </Link>
                  </div>
                </div>


                <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">Reset Password</button>
              </form>


            </div>

            <div className="w-full flex justify-start items-center gap-7 ml-20 md:ml-27 mt-4">

              <Link to="/login" className={`hover:text-[#48a6a6] cursor-pointer dark:text-white`}>
                Login
              </Link>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Forgotpass
