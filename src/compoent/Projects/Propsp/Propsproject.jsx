import React from 'react'
import { HandleName, Myprofile } from './Myprofile'
import man from './img/man.jpg'
export default function Propsproject() {
  return (
    <div>
    <HandleName name='Mouhamed Hassen'></HandleName>
    <Myprofile fullName="Mouhamed Hassen Lamine" bio="Mouhamed Hassen is a software engineer with over 10 years of experience in developing cutting-edge applications for web and mobile platforms. He holds a Bachelor's degree in Computer Science from XYZ University and has a deep expertise in Java, Python, and JavaScript." profession="Web developer" Email="hassenlamine3@gmail.com" Phone_number="97213689"> <img className='infoimage' src={man} alt="Lamine" /></Myprofile>
    </div>
  )
}
