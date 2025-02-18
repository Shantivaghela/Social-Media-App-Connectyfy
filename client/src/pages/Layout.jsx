import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import Bottommenu from '../components/Bottommenu'

function Layout() {
  // const memo = ""
  // console.log(memo);
  
  // const render = useMemo(()=>{
  //   return <Sidemenu/>
  // },[memo])
  return (
    <div>
      <Header/>
      <Sidemenu/>
      {/* {render} */}
      <Outlet/>
      
      <Bottommenu/>
    </div>
  )
}

export default Layout
