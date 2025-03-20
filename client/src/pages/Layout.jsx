import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import Bottommenu from '../components/Bottommenu'
import { useAuth } from '../contextAPI'
import Login from './authentications/Login'

function Layout() {


  const { isLoggedIn } = useAuth();
  // const memo = ""
  // console.log(memo);

  // const render = useMemo(()=>{
  //   return <Sidemenu/>
  // },[memo])
  if (isLoggedIn) {
    return (
      <div>

        <Header />
        <Sidemenu />
        <Outlet />

        <Bottommenu />
      </div>
    )

  } else {

    return <Login />
  }


}

export default Layout
