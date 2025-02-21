import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { assets } from '../../assets/assets'
import { useState } from "react";
import Adminprofile from "./Adminprofile";
import Message from "./message";
import Settings from "./settings";


export function Profile() {
  const [page,setPage] = useState(1)
  return (
    <>
      <div className="relative shadow-lg mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <img src={assets.backimg} className="absolute inset-0 h-full w-full bg-[#48a6a6] object-cover" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 dark:bg-gray-900 overflow-hidden dark:border-gray-500">
        <CardBody className="p-4 ">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={assets.logo}
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-full shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1 dark:text-white">
                  Connectyfy Admin
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  join 2025
                </Typography>
              </div>
            </div>
            <div className="w-full ">
              <Tabs value="app" >
                <TabsHeader className="dark:bg-gray-500">
                  <Tab value="app" className="" onClick={()=>setPage(1)} >
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5 " />
                    <button  className="">Profile</button>
                  </Tab>
                  <Tab value="message" className="" onClick={()=>setPage(2)}>
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5 " />
                    <button >Message</button>
                  </Tab>
                  <Tab value="settings" className="" onClick={()=>setPage(3)}>
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    <button>Settings</button>
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
        </CardBody>
          {page === 1 ? <Adminprofile/> :""}
          {page === 2 ? <Message/> :""}
          {page === 3 ? <Settings/> :""}
          
      </Card>
    </>
  );
}

export default Profile;
