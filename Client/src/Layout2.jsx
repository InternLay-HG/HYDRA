import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout2.css'
import SideMenu from './Components/SideMenu/SideMenu'
import Frame from './Components/Frame4/Frame'



function Layout2() {
  return (
    <>
      <div id="Layout2">
        <SideMenu/>
        <Outlet/>
        <Frame/>
      </div>
    </>
  )
}

export default Layout2