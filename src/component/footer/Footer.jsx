import React from 'react'
import {FaLinkedinIn,FaGithubAlt,FaFacebookF} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import "./footer.css"
const Footer = () => {
  return (
    <div id='footer'>
      <hr />
      <div className="container">
          <ul className="social-links">
            <li><a href="#"><FaLinkedinIn /></a></li>
            <li><a href="#"><FaGithubAlt /></a></li>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><SiGmail /></a></li> 
          </ul>
        
      </div>
    </div>
  )
}

export default Footer
