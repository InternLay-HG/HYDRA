import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout2.css'
import SideMenu from './Components/SideMenu/SideMenu'
import Frame4 from './Components/Frame4/Frame4'



function Layout2() {
  return (
    <>
      <div id="Layout2">
        
        <div id='SideMenu'><SideMenu/></div>
        <div id='outlet'><Outlet/></div>
        <div id='Frame4'><Frame4/></div>
        
      </div>
    </>
  )
}

export default Layout2