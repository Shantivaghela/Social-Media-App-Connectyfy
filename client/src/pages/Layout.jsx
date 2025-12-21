import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import Bottommenu from '../components/Bottommenu'
import { useAuth } from '../contextAPI'
import Login from './authentications/Login'
import MainLoader from '../components/MainLoader'

function Layout() {


  const { isLoggedIn,allposts, allusers } = useAuth();
  const [isLoading,setIsLoading] = useState(true);

console.log(allposts,isLoggedIn,isLoading);

  if(allposts.length > 0 && isLoggedIn){
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  }
  // const memo = ""
  // console.log(memo);

  // const render = useMemo(()=>{
  //   return <Sidemenu/>
  // },[memo])
  if (isLoggedIn) {
    return (
      !isLoading ?
      <div>
        
        <Header />
        <Sidemenu />
        <Outlet />
        <Bottommenu />
      </div>
      :
      
      <MainLoader/>
      
    )

  } else {

    return <Login />
  }


}

export default Layout
