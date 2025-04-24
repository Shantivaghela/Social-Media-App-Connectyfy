import React,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Followers from '../components/Followers';
import Followings from '../components/Followings';
import Requestview from '../components/Requestview';
import { useAuth } from '../contextAPI';

function Friends() {
 const [follopage, setFollopage] = useState(1);

 const {userdata} = useAuth();
 console.log(userdata);
 

    const pagecontant = (id) => {

        setFollopage(id);
    
      }

      function formatFollowers(count) {
        if (count >= 1000000000) {
            return (count / 1000000000).toFixed(1) + "B"; // Billion
        } else if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + "M"; // Million
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + "K"; // Thousand
        }
        return count.toString(); // Less than 1K
    }
    
  return (
    <>
      <section className="md:ml-96 mt-22">
        <div className="w-full pt-5 dark:text-white">
            <div className="flex justify-around items-center ">
                <NavLink to="" onClick={() => {pagecontant(1)}} className={`${follopage === 1 ? " border-b-3 border-[#48a6a6]" : "" } text-xl `}>
                    Followers{` (${userdata && userdata.followers ? formatFollowers(userdata.followers.length)  : 0})`}
                </NavLink>
                <NavLink to="" onClick={() => {pagecontant(2)}} className={`${follopage === 2 ? " border-b-3 border-[#48a6a6]" : "" } text-xl `}>
                    Followings{` (${userdata && userdata.following ? formatFollowers(userdata.following.length) : 0})`}
                </NavLink>
                <NavLink to="" onClick={() => {pagecontant(3)}} className={`${follopage === 3 ? " border-b-3 border-[#48a6a6]" : "" } text-xl `}>
                    Request{` (${userdata && userdata.requests ? formatFollowers(userdata.requests.length) : 0})`}
                </NavLink>
            </div>
            <div className="w-full h-full mt-5 ">
            <Followers view={follopage}/>
            <Followings view={follopage}/>
            <Requestview view={follopage}/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Friends
