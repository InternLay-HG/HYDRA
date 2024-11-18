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
        <div id="frame54">
          <p className='first'>Recently Added</p>
          <p className='second'>See All</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage