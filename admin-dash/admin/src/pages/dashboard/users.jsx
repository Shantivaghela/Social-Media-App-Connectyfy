import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useAuth } from "@/context/Admincontext";
import { assets } from "@/assets/assets";

export function Users() {
  const {allusers,user,allposts,
        getposts,
        getAllposts,posts,handleDelete} = useAuth();
        console.log(posts);
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
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card className="dark:bg-gray-900">
        <CardHeader variant="gradient"  className="mb-8 p-6 bg-[#48a6a6]">
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 dark:bg-gray-900">
        {allusers.filter(itmes => itmes._id !== user._id)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((user) => (
           <div className="w-full px-5">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img className="w-8 h-8 rounded-full" src={user.alldatas && user.alldatas.pimage ? `http://localhost:8080${user.alldatas.pimage} ` : assets.profileIcon} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.username}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                    <div className="inline-flex gap-3 items-center text-sm font-semibold text-gray-900 dark:text-white">
                      {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                      <button  className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">View</button>
                      <button  className="text-white bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-gray-700  dark:focus:ring-red-800">Block</button>
                      <button onClick={()=>handleDelete(user._id)}  className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800">Delete</button>
                      </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
            ))}
        </CardBody>
      </Card>
      <Card className="dark:bg-gray-900">
        <CardHeader variant="gradient"  className="mb-8 p-6 bg-[#48a6a6]">
          <Typography variant="h6" color="white">
            Posts Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 dark:bg-gray-900">
        {posts.filter(itmes => itmes.userId._id !== user._id)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => (
           <div key={post._id} className="w-full px-5">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img className="w-8 h-8 rounded-full" src={post.userId && post.userId.pimage ? `http://localhost:8080${post.userId.pimage}  ` : assets.profileIcon} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {post.userId.username}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
        {formatDateTime(post.createdAt)}
                      </p>
                    </div>
                    <div className="inline-flex gap-3 items-center text-sm font-semibold text-gray-900 dark:text-white">
                      {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                      <button  className="text-white bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-gray-700  dark:focus:ring-red-800">Block</button>
                      <button  className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800">Delete</button>
                      </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
            ))}
        </CardBody>
      </Card>
      
    </div>
  );
}

export default Users;
