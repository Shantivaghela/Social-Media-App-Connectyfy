import React, { useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  CardFooter,

} from "@material-tailwind/react";
import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
// import {

// } from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { useAuth } from "@/context/Admincontext";
import { assets } from "@/assets/assets";
import { toast } from "react-toastify";

export function Home() {
  const { allusers, allposts, user ,getAllposts,handleDelete} = useAuth();
  const [usreid, setUserId] = useState("");
  const [view, setView] = useState(false);
  console.log(allusers);
  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",  // Indian Time Zone
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,  // 12-hour format
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).replace(",", " -");
  };
  

  return (
    <div className="mt-12 ">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4  ">
        <Card className="border dark:bg-gray-900 dark:border-gray-600 border-blue-gray-100 shadow-sm">
          <CardHeader
            variant="gradient"
            // color="#48a6a6"
            floated={false}
            shadow={false}
            className="absolute bg-[#48a6a6] grid h-12 w-12 place-items-center dark:text-white"
          >
            <i className="fa-solid fa-users fa-xl text-white "></i>
          </CardHeader>
          <CardBody className="p-4 text-right">
            <Typography variant="small" className="font-normal text-blue-gray-600 dark:text-white">
              User
            </Typography>
            <Typography variant="h4" color="blue-gray" className="dark:text-white">
              {allusers.length || 0}
            </Typography>
          </CardBody>

          <CardFooter className="border-t border-blue-gray-50 dark:border-gray-600 p-4">
            {"Users of Connectyfy"}
          </CardFooter>

        </Card>
        <Card className="border dark:bg-gray-900 dark:border-gray-600 border-blue-gray-100 shadow-sm">
          <CardHeader
            variant="gradient"
            // color="#48a6a6"
            floated={false}
            shadow={false}
            className="absolute bg-[#48a6a6] grid h-12 w-12 place-items-center dark:text-white"
          >
            <i className="fa-solid fa-user-plus fa-xl text-white"></i>
          </CardHeader>
          <CardBody className="p-4 text-right">
            <Typography variant="small" className="font-normal text-blue-gray-600 dark:text-white">
              New Users
            </Typography>
            <Typography variant="h4" color="blue-gray" className="dark:text-white">
              {"3"}
            </Typography>
          </CardBody>

          <CardFooter className="border-t border-blue-gray-50 dark:border-gray-600 p-4">
            {"footer"}
          </CardFooter>

        </Card>
        <Card className="border dark:bg-gray-900 dark:border-gray-600 border-blue-gray-100 shadow-sm">
          <CardHeader
            variant="gradient"
            // color="#48a6a6"
            floated={false}
            shadow={false}
            className="absolute bg-[#48a6a6] grid h-12 w-12 place-items-center dark:text-white"
          >
            <i className="fa-solid fa-photo-film fa-xl text-white"></i>
          </CardHeader>
          <CardBody className="p-4 text-right">
            <Typography variant="small" className="font-normal text-blue-gray-600 dark:text-white">
              Total Posts
            </Typography>
            <Typography variant="h4" color="blue-gray" className="dark:text-white">
              {allposts.length || 0}
            </Typography>
          </CardBody>

          <CardFooter className="border-t border-blue-gray-50 dark:border-gray-600 p-4">
            {"footer"}
          </CardFooter>

        </Card>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-6  w-full">
        <Card className="overflow-hidden  border border-blue-gray-100 shadow-sm dark:bg-gray-900">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6 dark:text-white"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 dark:text-white">
                Recent Users
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                {/* <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" /> */}
                {/* <strong>30 done</strong> this month */}
              </Typography>
            </div>


          </CardHeader>
          {allusers.filter(itmes => itmes._id !== user._id)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 10)
            .map((user) => (
              <div key={user._id} className={`${view ? "hidden" : "block"} w-full px-5`}>
                <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <img className="w-10 h-10 rounded-full" src={user.alldatas && user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage} ` : assets.profileIcon} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                            {user.username}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.email}
                          </p>

                        </div>
                        <div className="inline-flex gap-3 items-center text-sm font-semibold text-gray-900 dark:text-white">
                          {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                          <button onClick={() => { setUserId(user._id), setView(true) }} className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">View</button>
                          <button onClick={()=>handleDelete(user._id)} className="text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-red-600 dark:hover:bg-[#48a6a6] dark:focus:ring-red-800">Delete</button>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            ))}

          <div className={`${view ? "block" : "hidden"} flex w-full h-500 mb-10 justify-center items-center `}>

            {allusers.filter(itmes => itmes._id === usreid)
              .map((user) => (

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <button onClick={() => { setUserId(""), setView(false) }} className=" absolute m-4 dark:text-white">
                    <i className="fa-solid fa-arrow-left fa-lg"></i>
                  </button>

                  <div className="flex flex-col items-center pb-10 mt-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.alldatas && user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage} ` : assets.profileIcon} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.username}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                    {/* <span className="text-md text-black dark:text-gray-200">Create At:</span> */}
                    <span className="text-sm text-gray-500 dark:text-gray-400"><span className="text-md text-black dark:text-gray-200">Create At:</span> {user.alldatas && user.alldatas.createdAt ? formatDateTime(user.alldatas.createdAt) : 0}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400"><span className="text-md text-black dark:text-gray-200">Update At:</span> {user.alldatas && user.alldatas.updatedAt ? formatDateTime(user.alldatas.updatedAt) : 0}</span>
                    <div className="flex mt-4 md:mt-6">
                      {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
                      <button onClick={()=>handleDelete(user._id)} className="text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto py-2 px-4 ms-2 text-center dark:bg-red-600 dark:hover:bg-[#48a6a6] dark:focus:ring-red-800">Delete User</button>

                      {/* <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</button> */}
                    </div>
                  </div>
                </div>

              ))}
          </div>
        </Card>

      </div>
    </div>
  );
}

export default Home;
