import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { useAuth } from "@/context/Admincontext";
import { toast } from "react-toastify";


export function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLS ,isLoggedIn} = useAuth();
  const navigate = useNavigate();


  const handleInput = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })

  }
  const handlSubmit = async (e) => {
    try {

        e.preventDefault();
        console.log(user);
        const response = await fetch('http://localhost:8080/api/admin/admin-auth',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(user),

            }
        );
        const res_data = await response.json();
        if (response.ok) {

            storeTokenInLS(res_data.token);
            console.log(res_data);
            
            navigate("/dashboard/home");
            toast.success(res_data.message);
            // return <Navigate to="/"/>
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
          console.log(response);
          
        }

    } catch (error) {
        console.error(error);

    }

}
  return (
    <section className="m-8 flex gap-4 h-[50%]">
      <div className="text-white">
        <Link to="/">
          <i class="fa-solid fa-arrow-left fa-xl  border-2 border-white p-3 rounded-lg dark:border-white bg-[#48a6a6]"></i>
        </Link>
      </div>
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 dark:text-white">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal dark:text-white">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handlSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name='email'
              value={user.email}
              onChange={handleInput}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-200 dark:text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              name='password'
              value={user.password}
              onChange={handleInput}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-200 dark:text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium dark:text-white "
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline dark:text-white"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 dark:text-white   bg-[#48a6a6]" fullWidth>
            Sign In
          </Button>

          {/* <div className="flex items-center justify-between gap-2 mt-6">

            <Typography variant="small" className="font-medium text-gray-900 dark:text-white">
              <a href="#">
                Forgot Password
              </a>
            </Typography>
          </div>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 dark:text-white">
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1 dark:text-white">Create account</Link>
          </Typography> */}
        </form>

      </div>
      <div className=" md:block hidden">
        <img src={assets.adminlogin} alt="" className="h-full w-full rounded-xl object-cover" />
      </div>

    </section>
  );
}

export default SignIn;
