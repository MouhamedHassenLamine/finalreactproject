import React, { useState } from 'react'
import { add } from './TasklistSlice' 
import { useDispatch } from 'react-redux'
export default function Addtask() {
  const [description,setDescription]=useState("")
  const [clearinput,setClearinput]=useState(false)
  const dispatch=useDispatch()
  return (
    <div className='addparent'>
      <input value={clearinput? "" :description} onChange={(element)=>{setClearinput(false);setDescription(element.target.value)}} className='addlist' type="text" placeholder='  ✍️ Add a task' />
      <button onClick={()=>{dispatch(add({id:Math.random(),description:description,isDone:false,inputvis:false}));setClearinput(true)}} className='addbut'>+</button>
    </div>
  )
}