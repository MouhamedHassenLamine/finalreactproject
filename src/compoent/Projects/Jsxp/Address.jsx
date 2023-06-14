import React, { useState } from 'react'
import './Style/Address.css'
import exp from './img/exp.gif'

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));//this will make the await deleay for 0.5s work
  }
export default function Address() {
    const[displayer,setdisplayer]=useState('none')//the useState is used to update the l and t var in the img style
    const [l,setl]=useState("700px")
    const [t,sett]=useState("10em")
  async function explosion(){

        return (setdisplayer('block'),
               setl(`${Math.floor(Math.random() * 701)-250}px`),
               sett(`${Math.floor(Math.random() * 400)}px`),
               await delay(500),//whait 0.5 seconde
               setdisplayer('none'))
    }
  return (
    <div>
      <p><h6>hassenlamine3@gmail.com</h6><b>Phone number: 97469639</b> consectetur elit. Reprehenderit dolorum beatae quia esse impedit sed accusamus, cupiditate.</p>
      <hr/>{/* the gray line */}
      <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vitae eum nam magni quibusdam animi ullam harum minima modi minus vel placeat, dolor cupiditate reprehenderit voluptates a cumque repellendus iure!</p>
      <a className='a' onClick={explosion} href="#Boom">Show more</a>
      <img style={{display:displayer, position:'absolute',right:l,top:t,width:'50%'}} src={exp} alt="explosion" /> 
    </div>
  )
}
