import React from 'react'
import "./contact.css"
import { datacontact } from './datacontact'
const Contact = () => {
  return (
    <div id='contact'>
      <div className="container">
        <div className="title-contant">
          <h1>Contact me</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Ipsa labore laboriosam
              iure? Porro quidem commodi velit modi ad perferendis
              ex quis. Ex repellat facere labore corrupti reiciendis
              nesciunt earum voluptas!
          </p>
        </div>
        <div className="contact-content">
         {datacontact.map(item=>(
          <div className='card-contact' key={item.id} >
            <p className='icon-contact'>{item.icon}</p>
            <p className='name-contact'>{item.name}</p>
            <p className='desc-contact'>{item.desc}</p>
          </div>
         ))}
       </div>
      
      </div>
    </div>
  )
}

export default Contact
