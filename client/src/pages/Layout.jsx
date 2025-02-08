import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import Bottommenu from '../components/Bottommenu'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Sidemenu/>
      <Bottommenu/>
    </div>
  )
}

export default Layout
