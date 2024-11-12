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
            {/* <span className="tooltip">My Space</span> */}
        </div>
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract2.png" alt="" />
            {/* <span className="tooltip">Selected Galaxy</span> */}
        </div>
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract3.png" alt="" />
            {/* <span className="tooltip">Confession</span> */}
        </div>
        <div className="icon">
            <img id='mySpace' src="./Images/Subtract4.png" alt="" />
            {/* <span className="tooltip">Resource Hub</span> */}
        </div>
      </div>
    </div>

    <div className="category">
        <h1 id='galaxy'>GALAXIES</h1>
        <div id='options'>
          <div id="home" className='task'>
            <NavLink >
              <img src="./Images/House.png" alt="" />
              <span>Home</span>
            </NavLink>
          </div>
          <div id="StudentsHub" className='task'>
            <NavLink>
              <img src="./Images/StudentHub.png" alt="" />
              <span>Students Hub</span>
            </NavLink>
          </div>
          <div id="Technology" className='task'>
            <NavLink>
              <img src="./Images/Technology.png" alt="" />
              <span>Technology</span>
            </NavLink>
          </div>
          <div id="Music" className='task'>
            <NavLink>
              <img src="./Images/Music.png" alt="" />
              <span>Music</span>
            </NavLink>
          </div>
          <div id="Entertainment" className='task'>
            <NavLink>
              <img src="./Images/Entertainment.png" alt="" />
              <span>Entertainment</span>
            </NavLink>
          </div>
          <div id="sports" className='task'>
            <NavLink>
              <img src="./Images/Sports.png" alt="" />
              <span>Sports</span>
            </NavLink>
          </div>
        </div>
    </div>
    </>
    // <div>hii</div>
  )
}

export default SideMenu