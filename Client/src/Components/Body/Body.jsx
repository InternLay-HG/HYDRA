import React from 'react'
import './front.css'
import { Link, NavLink } from 'react-router-dom'

function Body() {
  return (
    <>
        <div id="welcome">
        <div id="w2">
            <p>HEY  &nbsp; ! &nbsp; THERE</p>
            <p><span>WELCOME &nbsp; </span> &nbsp;TO</p>
            <p id="heading">CAMPUS &nbsp; COVE</p>
            <p id="keyword">STEP &nbsp; IN &nbsp;&nbsp; | &nbsp;&nbsp; SPEAK &nbsp; OUT</p>
        </div>
    </div>
    <br /><br />
    <div className="buttons">
        {/* <button class="same" id="confess">Confession</button> */}
        <button class="same" id="discover"><NavLink to="aboutus">ABOUT US</NavLink></button>
    </div>
    </>
  )
}

export default Body