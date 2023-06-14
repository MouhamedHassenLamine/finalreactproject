import './css/Joystick.css'
import { useDispatch, useSelector } from 'react-redux';
import { rotationfun,lastkeypressfun } from './Slices/ShipRotationSlice';
import { useEffect, useState } from 'react';
export default function Joystick(props) {
    const stylertable=useSelector((state)=>state.costomShip.value)
    const rotatesty=useSelector((state)=>state.rotater.value)
    const joystickdisp=useSelector((state)=>state.joystickdiplayer.value)
    const [witchbut,setWitchbut]=useState("up")
    const [Holder,setHolder]=useState(false)
    const dispatch=useDispatch()
    useEffect(() => {
        if(Holder===true){
            setTimeout(() => {
                if (witchbut === "right") {
                    if (props.direction[1]>=0){
                    props.directionfun( [props.direction[0], props.direction[1]-=Number(stylertable[1]),]);
                  }
                  //rotation
                  if(rotatesty.lastkeypress==="bottom"){
                    dispatch(rotationfun(-90)); 
                  }
                  if(rotatesty.lastkeypress==="up"){
                    dispatch(rotationfun(+90)); 
                  }
                  if(rotatesty.lastkeypress==="left"){
                    dispatch(rotationfun(-180)); 
                  }
                  dispatch(lastkeypressfun("right"))  
                }
                   if (witchbut === "left") {
                    if (props.direction[1]<=600){
                    props.directionfun( [props.direction[0], props.direction[1]+=Number(stylertable[1]),]);
                  }
                  //rotation
                  if(rotatesty.lastkeypress==="bottom"){
                    dispatch(rotationfun(+90)); 
                  }
                  if(rotatesty.lastkeypress==="up"){
                    dispatch(rotationfun(-90)); 
                  }
                  if(rotatesty.lastkeypress==="right"){
                    dispatch(rotationfun(-180)); 
                  }
                  dispatch(lastkeypressfun("left"))
                }
                  if (witchbut === "up") {
                    if (props.direction[0]<=900){
                    props.directionfun( [props.direction[0]+=Number(stylertable[1]) , props.direction[1]]);  
                  }
                 //rotation
                  if(rotatesty.lastkeypress==="bottom"){
                    dispatch(rotationfun(+180)); 
                  }
                  if(rotatesty.lastkeypress==="left"){
                    dispatch(rotationfun(+90)); 
                  }
                  if(rotatesty.lastkeypress==="right"){
                    dispatch(rotationfun(-90)); 
                  }
                    dispatch(lastkeypressfun("up"))
                }
                  if (witchbut === "down") {
                    if (props.direction[0]>=-900){
                    props.directionfun( [props.direction[0]-=Number(stylertable[1]) , props.direction[1],]); 
                  }
                  //rotation
                  if(rotatesty.lastkeypress==="up"){
                    dispatch(rotationfun(+180)); 
                  }
                  if(rotatesty.lastkeypress==="left"){
                    dispatch(rotationfun(-90)); 
                  }
                  if(rotatesty.lastkeypress==="right"){
                    dispatch(rotationfun(+90)); 
                  }
                  dispatch(lastkeypressfun("bottom")) 
                }       
            }, 50);
        }
     }, [dispatch,rotatesty,props,stylertable,witchbut,Holder]);

  return (
    <div className='joystickgrandparent' style={{display:joystickdisp?'block':'none'}}>
        <div className='joystickparent'>
         <div></div>
         <button onMouseDown={()=>{setWitchbut("up");setHolder(true)}} onMouseUp={()=>(setHolder(false))} onMouseOut={()=> setHolder(false)} ></button>
         <div></div>
         <button onMouseDown={()=>{setWitchbut("left");setHolder(true)}} onMouseUp={()=>(setHolder(false))} onMouseOut={()=> setHolder(false)} ></button>
         <div></div>
         <button onMouseDown={()=>{setWitchbut("right");setHolder(true)}} onMouseUp={()=>(setHolder(false))} onMouseOut={()=> setHolder(false)} ></button>
         <div></div>
         <button onMouseDown={()=>{setWitchbut("down");setHolder(true)}} onMouseUp={()=>(setHolder(false))} onMouseOut={()=> setHolder(false)} ></button>
         <div></div>
        </div>
    </div>
  )
}
