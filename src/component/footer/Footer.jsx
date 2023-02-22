import React from 'react'
import {FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaLinkedinIn,FaGithubAlt,FaFacebookF} from "react-icons/fa"


import "./footer.css"
const Footer = () => {
  return (
    <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Frontend<span>Developer</span></h3>

            <p class="footer-links">
                <a href="#home">Home</a>
                |
                <a href="#about">About</a>
                |
                <a href="#project">Project</a>
                |
                <a href="#contact">Contact</a>
            </p>


        </div>

        <div class="footer-center">
            <div>
                <i ><FaMapMarkerAlt/></i>
                <p><span>6th october </span>
                   egypt </p>
            </div>

            <div>
                <i >< FaPhoneAlt /></i>
                <p>+011 251 214 24</p>
            </div>
            <div>
                <i ><FaEnvelope /></i>
                <p><a href="mostafa.mahmoud.mohamed00@gmail.com">mostafa.mahmoud.mohamed00@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About me</span>
                <strong>I'M</strong> a Frontend Developer I have experience with javascript and css3 and html and some libraries such as
                      bootstrap and react
            </p>
            <div class="footer-icons">
            <a href="https://www.linkedin.com/in/mostafa-mahmoud-mohamed-260158209/"><FaLinkedinIn /></a>
              <a href="https://github.com/mostafavvv?tab=repositories"><FaGithubAlt /></a>
              <a href="https://www.facebook.com/mostafa.benmahmoud.73"><FaFacebookF /> </a>
            </div>
        </div>
    </footer>
      
     
  )
}

export default Footer
