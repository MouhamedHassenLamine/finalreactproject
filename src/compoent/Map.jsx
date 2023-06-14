import React, { useEffect } from 'react';
import './css/Map.css';
import planetList from './Lists/Planetplist';
import Lookfor from './Lookfor';
import {Contactplace} from './Contactplace';
import Spacestation from './Spacestation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { OpenCloseAn } from './Slices/TransAnSlice';
import About from './About';
import Home from './Home';
import RandomStuff from './RandomStuff';
import MiniGames from './Games/MiniGames';
import Parametterr from './Parametterr';
import Joystick from './Joystick';
export default function Map(props) {
  const stylertable=useSelector((state)=>state.costomShip.value)
  const zoompers=useSelector((state)=>state.zoomper.value)
  const floatsty=useSelector((state)=>state.floter.value)
  const navigator=useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    const handleKeyDown = (event) => {     
      if (event.keyCode === 39) {
        if (props.direction[1]>=0){
        props.setDirection( [props.direction[0], props.direction[1]-=Number(stylertable[1]),]);  
      }
    }
       if (event.keyCode === 37) {
        if (props.direction[1]<=600){
        props.setDirection( [props.direction[0], props.direction[1]+=Number(stylertable[1]),]);  
      }
    }
      if (event.keyCode === 38) {
        if (props.direction[0]<=900){
        props.setDirection( [props.direction[0]+=Number(stylertable[1]) , props.direction[1]]);  
      }
    }
      if (event.keyCode === 40) {
        if (props.direction[0]>=-900){
        props.setDirection( [props.direction[0]-=Number(stylertable[1]) , props.direction[1],]);  
      }
    }
    };
      window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props,stylertable]);
   const activateanfun=(link)=>{
    dispatch(OpenCloseAn("37.4%"))
    setTimeout(() => {
      navigator(link)
    }, 1000);
    setTimeout(() => {
      dispatch(OpenCloseAn("100%")) 
    }, 2000);
   }
  return (
    <><div className="spaceparent" style={{zoom:zoompers}}>
      <div className="space" style={{ left: `${props.direction[1] - 760}em`, top: `${props.direction[0] - 1070}em`}}></div>
      {planetList.map((el) => <div key={el.id} onClick={()=>{activateanfun(el.PLink)}} className='mars' style={{ left: `${props.direction[1]+ el.left}em`, top: `${props.direction[0] + el.top}em`, backgroundImage: el.logo, backgroundPosition: el.bgposition,animation:floatsty?'float 6s ease-in-out infinite':'none', }}></div>)}
       
    </div>
    <Lookfor direction={props.direction} directionfun={props.setDirection} ></Lookfor>
    <Parametterr></Parametterr>
    <Joystick direction={props.direction} directionfun={props.setDirection}></Joystick>
    <div style={{zoom:zoompers,animation:floatsty?'float 6s ease-in-out infinite':'none',}}>
    <Contactplace direction={props.direction}></Contactplace>
    <Home direction={props.direction}></Home>
    <Spacestation direction={props.direction}></Spacestation>
    <MiniGames direction={props.direction}></MiniGames>
    <RandomStuff direction={props.direction}></RandomStuff>
    <About direction={props.direction}></About>
    </div>
    </>

  );
}
