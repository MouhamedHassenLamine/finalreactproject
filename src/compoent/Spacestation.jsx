import React, { useState } from 'react'
import "./css/Spacestation.css"
import { skin,stylemyship } from './Slices/CostomShipSlice'
import { useDispatch, useSelector } from 'react-redux'
import general_positions from './Lists/general_positions'
export default function Spacestation(props) {
  const[styleedeted,setStyleedeted]=useState([1/*index of the vale you want to edit */,"Speed"/*the name*/,1/*arbitrage the input value with the style value*/])
  const[showparam,setShowparam]=useState(true)
  const stylertable=useSelector((state)=>state.costomShip.value)
  const  dispatch=useDispatch()
    window.addEventListener('keydown', ()=>setShowparam(true));
  return (
    <div style={{ left: `${props.direction[1]+general_positions.spacestation[1]}em`, top:`${props.direction[0]+general_positions.spacestation[0]}em`}} className='spacestationparent'>
      <h1>Click on the astronad</h1>
      <img className='spacestationimg' src="/img/spacestation.png" alt="spacestation" />
      <div className='speech-bubble'style={{visibility:showparam?"hidden":'visible',opacity:showparam?0:1}} >
        <p>How can i help you sir</p>
        </div>
      <img onClick={()=>setShowparam(!showparam)} className='astronad' src="/img/astronad.png" alt="spacestation" />
      <div className='spparent' style={{top:showparam? "20em":"0em",opacity:showparam?0:1,visibility:showparam?"hidden":"visible"}}>
      <div className='shipparamette'>
        <button onClick={()=>{setStyleedeted([1,"Speed",1])}} style={{backgroundImage:"url(/img/speedicon.png)",backgroundSize:"80%",backgroundColor:"rgb(190, 190, 190)"}}></button>
        <button onClick={()=>{setStyleedeted([0,"Color",3.6])}} style={{backgroundImage:"url(/img/coloricon.png)",backgroundColor:"white"}}></button>
        <button onClick={()=>{setStyleedeted([2,"Size",0.02])}} style={{backgroundImage:"url(img/sizeicon.png)",backgroundSize:"70%"}}></button>
        <button onClick={()=>{dispatch(skin())}} style={{backgroundImage:"url(/img/staricon.png)"}}></button>
      </div>
      <h4>{stylertable[styleedeted[0]]/styleedeted[2]}</h4>
      <h3>{styleedeted[1]}</h3>
      <input value={stylertable[styleedeted[0]]/styleedeted[2]} defaultValue={0} onChange={(event)=>{dispatch(stylemyship([styleedeted[0],event.target.value*styleedeted[2]]))}} type="range" />
      </div>
    </div>
  )
}
export const spacestationposition=[200,300]
