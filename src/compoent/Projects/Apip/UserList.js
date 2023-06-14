import React, { useEffect, useState } from 'react'
import { urll } from './url'
import axios from 'axios';
import './Uuserlist.css'
export default function UserList() {
  const[filt,setFilt]=useState("All names")
    const [list, setList] = useState(null);
    useEffect(()=>{
        axios.get(urll).then((response)=>{
        setList(response.data)
        });
    },[]);
    if (!list) return null;
  return (
    <div className='cardsgrandparent'>
   <select className='selecter' onChange={(element)=> {setFilt(element.target.value)}} name="pets" id="pet-select">
    <option>All names</option>
   {list && list.map((el)=>(
    <option  value={el.name}>{el.name}</option>
   ))} 
</select>
    {list && list.filter((el)=>el.name===filt ||filt==="All names").map((el)=>(
        <div className='cardgrandparent'>
      <div>
        <img className='photo' height={420} width={300} src='./img/Projects_img/Api/man.png' alt='alt'></img>
      </div>
      <div className='inform'>
      <h1 className='titleofinfo'>Hello im {el.name}</h1>
      <div className='helpflex'>
        <div className='firstchild'>
        <h2>User name:<p>{el.username}</p></h2>
        <h2>Email:<p>{el.email}</p></h2>
        <h1>Adress:</h1>
        <h2>Street:<p>{el.address.street}</p></h2>
        <h2>Suite:<p>{el.address.suite}</p></h2>
        <h2>City:<p>{el.address.city}</p></h2>
        </div>
        <div className='secondinfochild'>
        <h1>Geo:</h1>
        <h2>Lat:<p>{el.address.geo.lat}</p></h2>
        <h2>Ling:<p>{el.address.geo.ing}</p></h2>
        <h1>Contact:</h1>
        <h2>Phone:<p>{el.phone}</p></h2>
        <h2>Website:<p>{el.website}</p></h2>
        </div>
        <div className='thirdinfochild'>
        <h1>Company:</h1>
        <h2>Name:<p>{el.company.name}</p></h2>
        <h2>CatchPhrase:<p>{el.company.catchPhrase}</p></h2>
        </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1684615454">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    )) }
    </div>
  )
}
