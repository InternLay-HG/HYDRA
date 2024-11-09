import React from 'react'
import './sidemenu.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function SideMenu() {
    const navigate = useNavigate()


  return (
    <>

<div className="sidebar">

        <div className="logo"> <img id="icon" src="./Images/logo.png" alt="" /></div>
      <div className="highlight-rectangle"></div>
      <div className="sidebar-icons">
        <div className="icon">
            <NavLink><img id='mySpace' src="./Images/Subtract.png" alt="" /></NavLink>
            <span className="tooltip">My Space</span>
        </div>
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract2.png" alt="" />
            <span className="tooltip">Selected Galaxy</span>
        </div>
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract3.png" alt="" />
            <span className="tooltip">Confession</span>
        </div>
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract4.png" alt="" />
            <span className="tooltip">Resource Hub</span>
        </div>
      </div>
    </div>

    <div className="category">
        <h1 id='galaxy'>GALAXIES</h1>

    </div>
    </>
  )
}

export default SideMenu