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

export function Users() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card className="dark:bg-gray-900">
        <CardHeader variant="gradient"  className="mb-8 p-6 bg-[#48a6a6]">
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 dark:bg-gray-900">
         
           <div className="w-full px-5">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex gap-3 items-center text-sm font-semibold text-gray-900 dark:text-white">
                      {/* <a href="#" className="inline-flex items-center px-2 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a> */}
                      <button  className="text-white bg-blue-700 hover:bg-[#48a6a6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-[#48a6a6] dark:focus:ring-blue-800">View</button>
                      <button  className="text-white bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-gray-700  dark:focus:ring-red-800">Block</button>
                      <button  className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800">Delete</button>
                      </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="dark:bg-gray-900">
        <CardHeader variant="gradient"  className="mb-8 p-6 bg-[#48a6a6]">
          <Typography variant="h6" color="white">
            Posts Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 dark:bg-gray-900">
          {/* <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["author", "function", "status", "employed", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left  dark:border-gray-500"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400 dark:text-gray-300"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50 dark:border-gray-500"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold dark:text-gray-300"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500 dark:text-gray-300">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600 dark:text-gray-300">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500 dark:text-gray-300">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600 dark:text-gray-300">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600 dark:text-gray-300"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table> */}
           <div className="w-full px-5">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
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
        </CardBody>
      </Card>
      
    </div>
  );
}

export default Users;
