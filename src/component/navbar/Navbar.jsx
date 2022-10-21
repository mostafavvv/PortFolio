import React,{useState} from 'react'
import "./navbar.css"
import {AiOutlineMenuUnfold,AiOutlineClose} from "react-icons/ai"
const Navbar = () => {
  const [nav, setNav] = useState(false);

const handleNav = () => {
  setNav(!nav);
  const NavBarSmall = document.querySelector(".nav__link-sm");

  NavBarSmall.classList.toggle("active-nav")

};



/* function ada(){
  let icon = document.querySelector(".i");
  const NavBarSmall = document.querySelector(".nav__link-sm");
  icon.addEventListener("click",()=>{
  NavBarSmall.classList.toggle("active-nav")
  })
}*/


  return (
    <>
    <navbar className="navbar">
       <div className="container navbar__Container">
        <div className="logo">
            c
            <span>v</span>
        </div>
        <div className="nav__link">
            <ul>
                <li  ><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className='i' onClick={ handleNav}> 
        {nav ? <AiOutlineClose style={{fontSize:30 }} /> : <AiOutlineMenuUnfold style={{fontSize:30}} />}
       </div>
       <div className="nav__link-sm">
            <ul>
                <li  ><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    

       </div>
       
    </navbar>
       
    </>
  )
}

export default Navbar