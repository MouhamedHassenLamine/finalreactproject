import React, { useEffect } from 'react'
import './css/ship.css'
import { useDispatch, useSelector } from 'react-redux'
import { rotationfun,lastkeypressfun } from './Slices/ShipRotationSlice'
export default function Ship() {
    const stylertable=useSelector((state)=>state.costomShip.value)
    const zoompers=useSelector((state)=>state.zoomper.value)
    const rotatesty=useSelector((state)=>state.rotater.value)
    const dispatch=useDispatch()
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.keyCode === 39) {
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
           if (event.keyCode === 37) {
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
          if (event.keyCode === 38) {
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
          if (event.keyCode === 40) {
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
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [rotatesty.lastkeypress,dispatch]);
  return (
    <div>
    <div style={{ transform:`rotate(${rotatesty.rotationdeg}deg)`,filter:`hue-rotate(${stylertable[0]}deg)`,scale:`${stylertable[2]}`,backgroundImage:`url(/img/skins/skin${stylertable[3]}.png)`,zoom:zoompers}} className='ship'>
      
    </div>
    </div>
  )
}
