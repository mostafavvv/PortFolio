import React from 'react'
import { Skill } from './Skill'
import "./skills.css"
const Skills = () => {
  
  return (
    <div id='skills'>
      <div className="container">
      <div className="skills-content">

        {/*skills-content-left*/ }
        <div className='skills-content-left'>
         <div>
          <h1>Skills & <span><br/>  Experience</span></h1>
          <p> I am a Front-end developer with 2+ years of experience. Working with HTML, CSS, and preprocessors (SCSS, SASS, LESS), JavaScript, and react.js. I have good skills in responsive website development and always use PerfectPixel in my work.</p>
         </div>
         <div></div>
        </div>        
        {/*skills-content-right*/ }
        <div className='skills-content-right'>
          <h3 className='title-skills'>Skills :-</h3>
        
          <div className="skills-total">
           {
                 Skill.map(item=>(
                    <div key={item.id}  className='icons-skill'>
                      <button className='icon-skill'>{item.icon}</button>
                      <p className='name-icon'>{item.name}</p>
                    </div>
                ))
           }
            
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Skills
