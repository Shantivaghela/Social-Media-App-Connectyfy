import { assets } from "@/assets/assets";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignUp() {
  return (
    <section className="m-8 flex">
      <div className="text-white mr-3">
        <Link to="/" className="">
      <i class="fa-solid fa-arrow-left fa-xl  border-2 border-white p-3  rounded-lg dark:border-white bg-[#48a6a6]"></i>
        </Link>
      </div>
            <div className=" md:block hidden">
              <img src={assets.adminlogin} alt="" className="h-full w-full rounded-xl object-cover" />
            </div>
      <div className="w-full lg:w-3/5 mt-24 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 dark:text-white">Please Sign Up</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal dark:text-white">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white">
              User Name
            </Typography>
            <Input
              size="lg"
              placeholder="UserName"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-200 dark:text-white" 
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white" >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-200 dark:text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white">
              Create Password
            </Typography>
            <Input
              size="lg"
              type="password"
              placeholder="Create Password"
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
                className="flex items-center justify-start font-medium dark:text-white"
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
          <Button className="mt-6 dark:text-white bg-[#48a6a6]" fullWidth>
            Register Now
          </Button>

          
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 dark:text-white">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1 dark:text-white">Sign in</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
