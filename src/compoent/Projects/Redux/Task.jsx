import Addtask from './Addtask';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { done,inputhider,descchanger } from './TasklistSlice';
import { useState } from 'react';
import './css/Style.css'
export default function Task() {
  const [moufalter,setMoufalter]=useState("any")
  const thetasklist=useSelector((state)=> state.list.value)
  const dispath=useDispatch()
  return (
    <div className='Grandgrandparent'>
    <div className='grandparent'>
      <Addtask />
      <div className='filterbutparent'><Button style={{boxShadow: moufalter===true && '0px 0px 10px'}} onClick={()=> setMoufalter(true)} variant="success">Finished 📜✔️</Button><Button style={{boxShadow: moufalter===false && '0px 0px 10px'}} onClick={()=> setMoufalter(false)} variant="success">Unfeneshed ⏳</Button><Button style={{boxShadow: moufalter==="any" && '0px 0px 10px'}} onClick={()=> {setMoufalter("any");}} variant="success">Default 🔄</Button></div>
      {thetasklist.filter(el=>el.isDone===moufalter || moufalter==="any").map((el, indx) => (
        <div key={indx} className='task'>
         {el.inputvis ? <input type="text" placeholder='Edit your task' className='taskinput' onBlur={(element)=>{dispath((inputhider(el.id)));dispath((descchanger([el.id,element.target.value])))}} />:<p onClick={()=>dispath((inputhider(el.id)))} className='description parag' style={{ textDecoration: el.isDone ? 'line-through' : '' ,color:el.description===""? 'gray':"black"}}>{el.description==="" ? "Edit your task":el.description }</p>} 
          <button
            onClick={() => dispath(done(el.id))}
            className='button'
            variant='outline-secondary'
          >
            {el.isDone ? <h5 className='finish'>📜✔️</h5> : <h4 className='unfinish'>⏳</h4>}
            <p style={{right:el.isDone ? '-1em' : '-2em'}} className='butdesc parag'>{el.isDone ? "Finished ": "Unfeneshed"}</p>
          </button>
        </div>
        
      ))}
      </div>
    </div>
  );
}


