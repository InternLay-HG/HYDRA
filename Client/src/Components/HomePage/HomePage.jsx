import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <>
    <div className="OUTER">
      <div className="feedarea">
        <img id = 'banner' src="/Images/Banner.png" alt="" />
        <div id="frame52">
          <p className='first'>Featured Galaxies</p>
          <p className='second'>See All</p>
        </div>
        <div id="frame53">
          <p className='first'>Popular Galaxies</p>
          <p className='second'>See All</p>
        </div>
        {/* <div id="frame54">
          <p className='first'>Recently Added</p>
          <p className='second'>See All</p>
        </div> */}
        <div className="featuredCard">
          <div className="rectangle93">
            <img className = 'gamepad' src="/Images/Gamepad_logo.png" alt="" />
            <h2 className='game'>Game Masters</h2>
            <p className='content'>College Gaming  Community for dedicated and innovative game developers</p>
          </div>
          <img src="/Images/Ellipse 12.png" alt="" className="ellipse" />
        </div>
        <div className="featuredCard" id='rectangle932'>
          <div className="rectangle93" >
            <img className = 'gamepad' src="/Images/Gamepad_logo.png" alt="" />
            <h2 className='game'>Game Masters</h2>
            <p className='content'>College Gaming  Community for dedicated and innovative game developers</p>
          </div>
          <img src="/Images/Ellipse 12.png" alt="" className="ellipse" />
        </div>
        <div className="featuredCard2">
          <img src="/Images/bsnl.png" alt="" className='bsnl'/>
          
          <div className="frame51">
            <h2 className='BSNL'>BSNL wale</h2>
            <p className='content2'>Special group to share all gossips of some elite people living in an not so elite campus</p>
          </div>
          <img src="/Images/Ellipse 13.png" alt="" className='ellipse12'/>
        </div>
        <div className="featuredCard2" id='featuredCard22'>
        <img src="/Images/bsnl.png" alt="" className='bsnl'/>
          
          <div className="frame51">
            <h2 className='BSNL'>BSNL wale</h2>
            <p className='content2'>Special group to share all gossips of some elite people living in an not so elite campus</p>
          </div>
          <img src="/Images/Ellipse 13.png" alt="" className='ellipse12'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage