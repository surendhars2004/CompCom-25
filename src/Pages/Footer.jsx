import React from 'react'
import SocialMediaCard from '../Components/SocialMediaCard'
import '../Styles/footer.css'
import '../Styles/events.css'
import '../Styles/register.css'
import Contact from '../Components/Contact'
import Map from '../Components/Map'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="event-head-text">Reach Out Us</div>
        <div className="description">
      We're here to help! If you have any queries, please feel free to reach out to our secretary or overall coordinator using the contact numbers listed. We've also included a map route for your convenience
      </div>
      <div className="cards">
        <SocialMediaCard/>
        <Contact/>
        <Map/>
      </div>
      <div className="copy-right">Copyright © 2025 Dept. of ECE</div>
    </div>
  )
}

export default Footer
