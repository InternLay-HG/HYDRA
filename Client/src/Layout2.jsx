import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout2.css'
import SideMenu from './Components/SideMenu/SideMenu'
import Frame4 from './Components/Frame4/Frame4'



function Layout2() {
  return (
    <>
      <div id="Layout2">
        <SideMenu/>
        <Outlet/>
        <Frame4/>
      </div>
    </>
  )
}

export default Layout2