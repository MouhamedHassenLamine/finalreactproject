import React from 'react'
import man from './img/man.jpg'
import './Style/ProfilePhoto.css'

export default function ProfilePhoto() {
  return (
    <div>
      <img className='pimg' src={man} alt="man" />
    </div>
  )
}
