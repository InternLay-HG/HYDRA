import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout2.css'


function Layout2() {
  return (
    <>
      <div id="Layout2">
        <Outlet/>
      </div>
    </>
  )
}

export default Layout2