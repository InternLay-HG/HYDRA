import React from 'react'
import './sidemenu.css'

function SideMenu() {
  return (
    <>

<div className="sidebar">

        <div className="logo"> <img id="icon" src="./Images/logo.png" alt="" /></div>
      <div className="highlight-rectangle"></div>
      <div className="sidebar-icons">
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract.png" alt="" />
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
    </>
  )
}

export default SideMenu