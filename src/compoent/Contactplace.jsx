import React from 'react'
import './css/contactplace.css'
import general_positions from './Lists/general_positions'
export  function Contactplace(props) {
  return (
    <div style={{ left: `${props.direction[1] + general_positions.contact[1]}em`, top: `${props.direction[0] + general_positions.contact[0]}em` }} className='contactpparent'>
      <h1 className='contactptittle'>CONTACT US</h1>
      <div className='contappsimg'>
      <img src="/img/discord.png" alt="app" />
      <img src="/img/Instagram.png" alt="app" />
      <img src="/img/Twitter.png" alt="app" />
      <img src="/img/whatsapp.png" alt="app" />
      <img src="/img/github.png" alt="app" />
      </div>
      <img className='spacetcont' src="/img/spacetcont.png" alt="spaceimg" />
      <div className='formparent'>
      <p className='contp'>Hope you enjoy your time please don't forget to leave your comments</p>
      <form className='commentform'>
        <div>
        <input placeholder='   Your Name Gose Here...' className='commentusername' type="text" />
        <input className='comment' type="text" />
        </div>
        <button className='commentbut'>send</button>
      </form>
      </div>
    </div>
  )
}