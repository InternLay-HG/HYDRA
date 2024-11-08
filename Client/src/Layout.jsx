import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import './Layout.css';

function Layout() {
  return (
    <>
      <div id='Layout'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout