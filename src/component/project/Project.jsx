import React from 'react'
import { Data } from './Data'
import "./Project.css"
const Project = () => {
  return (
    <div id="project">
      <div className="container">
        <h1 className="title-section">Portfolio <span>.</span></h1>
        <div className="project-cards">
          {
            Data.map(item =>(
          <div className="card">
          <div className="card-img">
            <a href="#">
              <img src={item.img} alt="" />
            </a>
          </div>
          <div className="card-content">
            <h1 className="card-title">{item.name}</h1>
            <ul className="use-skill">
              <p>skills:-</p>   

              <li>{item.skills[0]} {item.skills[1]} {item.skills[2]} {item.skills[4]}</li> 
              
            </ul>
            <div className="button-card">
              <button><a href={item.linkLive}>live</a></button>
              <button><a href={item.linkcode}>Code</a></button>
            </div>
          </div>
        </div>
            ))
          }

        



        </div>
      </div>
    </div>
  )
}

export default Project