import React,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Followers from '../components/Followers';
import Followings from '../components/Followings';

function Friends() {
 const [follopage, setFollopage] = useState(1);

    const pagecontant = (id) => {

        setFollopage(id);
    
      }
  return (
    <>
      <section className="md:ml-96 mt-22">
        <div className="w-full pt-5 dark:text-white">
            <div className="flex justify-around items-center ">
                <NavLink to="" onClick={() => {pagecontant(1)}} className={`${follopage === 1 ? " border-b-3 border-[#48a6a6]" : "" } text-xl `}>
                    Followers
                </NavLink>
                <NavLink to="" onClick={() => {pagecontant(2)}} className={`${follopage === 2 ? " border-b-3 border-[#48a6a6]" : "" } text-xl `}>
                    Followings
                </NavLink>
            </div>
            <div className="w-full h-full mt-5 ">
            <Followers view={follopage}/>
            <Followings view={follopage}/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Friends
