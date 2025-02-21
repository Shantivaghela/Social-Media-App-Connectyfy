import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { assets } from "@/assets/assets";


export function SignIn() {
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
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white">
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
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium dark:text-white">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
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
          <Button className="mt-6 dark:text-white   bg-[#48a6a6]" fullWidth>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">

            <Typography variant="small" className="font-medium text-gray-900 dark:text-white">
              <a href="#">
                Forgot Password
              </a>
            </Typography>
          </div>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 dark:text-white">
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1 dark:text-white">Create account</Link>
          </Typography>
        </form>

      </div>
      <div className=" md:block hidden">
        <img src={assets.adminlogin} alt="" className="h-full w-full rounded-xl object-cover" />
      </div>

    </section>
  );
}

export default SignIn;
