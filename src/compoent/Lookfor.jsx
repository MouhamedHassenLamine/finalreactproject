import React, { useState } from 'react'
import './css/Lookfor.css'
import planetList from './Lists/Planetplist'
import general_positions from './Lists/general_positions'
export default function Lookfor(props) {
    const [hider,setHider]=useState(true)
  return (
    <>
    <div className='lokkingparent'>
    <button className='lookiingbutton' onClick={() => setHider(!hider)}></button>
    <div className='tableofsearch' style={{visibility:hider? "hidden":"visible" ,animation:hider? "hideran 1s":""}}>
          { planetList.map((el) => (
              <div key={el.id} onClick={()=>{props.directionfun([props.direction[0]=0-el.top+20 , props.direction[1]=0-el.left+50]);setHider(true)}} className='location' style={{ backgroundImage: el.logo,backgroundPosition:el.bgposition,margin:el.mapelposition}}></div>
          ))}
         <button className='to_contact location' onClick={()=>{props.directionfun([props.direction[0]=0-general_positions.contact[0]+2 , props.direction[1]=0-general_positions.contact[1]+2]);setHider(true)}}></button>
         <button className='to_spacestation location' onClick={()=>{props.directionfun([props.direction[0]=0-general_positions.spacestation[0] , props.direction[1]=0-general_positions.spacestation[1]]);setHider(true)}}></button>
         <button className='GameZone location' onClick={()=>{props.directionfun([props.direction[0]=0-general_positions.MiniGameZone[0] , props.direction[1]=0-general_positions.MiniGameZone[1]]);setHider(true)}}></button>
         <button className='GameZone location' onClick={()=>{props.directionfun([props.direction[0]=0-general_positions.MiniGameZone[0] , props.direction[1]=0-general_positions.MiniGameZone[1]]);setHider(true)}}></button>
         <button className='homeloc location' onClick={()=>{props.directionfun([props.direction[0]=0-general_positions.homeloc[0] , props.direction[1]=0-general_positions.homeloc[1]]);setHider(true)}}></button>
         <button className='aboutloc location' onClick={()=>{props.directionfun([props.direction[0]=0-general_positions.About[0] , props.direction[1]=0-general_positions.About[1]]);setHider(true)}}></button>
      </div>
      </div>
</>
  )
}
