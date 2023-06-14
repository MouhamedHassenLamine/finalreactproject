import React, { useEffect, useState } from 'react'
import './css/Parametterr.css'
import { useDispatch, useSelector } from 'react-redux'
import { zoomingfun } from './Slices/ZoomSlice'
import { stylemyship } from './Slices/CostomShipSlice'
import spacemusic from '../sound/spacemusic.mp3' 
import { Howl } from 'howler'
import { floatingfun } from './Slices/floatan'
import { joystick_disp_fun } from './Slices/JoystickSlice'
import Button from 'react-bootstrap/Button';
export default function Parametterr() {
    const [volumecontroller,setvolumecontroller]=useState(0.07)
    const[paramstyle,setParamstyle]=useState(false)
    const stylertable=useSelector((state)=>state.costomShip.value)
    const zoomsty=useSelector((state)=>state.zoomper.value)
    const floatsty=useSelector((state)=>state.floter.value)
    const joystickdisp=useSelector((state)=>state.joystickdiplayer.value)
    const dispacht=useDispatch()
    useEffect(() => {
        const sound = new Howl({
          src: [spacemusic],
          autoplay: true,
          loop: true,
          volume:volumecontroller,
        });
    
        return () => {
          sound.stop();
        };
      }, [volumecontroller]);
  return (
    <><img src="/img/parametterr.png" alt="parametter" className='parametterrimg' width={55} style={{ rotate: paramstyle ? '0deg' : '180deg' }} onClick={() => { setParamstyle(!paramstyle) } } />
      <div>
          <form className='parametterform' style={{ opacity: paramstyle ? '1' : '0', top: paramstyle ? '0em' : '35em',}}>
              <div><h3>View</h3><input value={zoomsty.split('%').shift()} min={26} max={150} type="range" onChange={(event)=>{dispacht(zoomingfun(event.target.value))}}/></div>
              <div><h3>Speed</h3><input value={stylertable[1]} onChange={(event)=>{dispacht(stylemyship([1,event.target.value]))}} type="range"/></div>
              <div><h3>Volume</h3><input value={volumecontroller*100} onChange={(event)=>setvolumecontroller(event.target.value/100)} type="range"/></div>
              <div className='parsc'>{/*parametter_seconde_childe*/}
              <section>
                  <div><h3>Float</h3><input type="checkbox" checked={floatsty} onChange={(event)=>{dispacht(floatingfun(event.target.checked))}} /></div>
                  <div><h3>Joystic</h3><input type="checkbox" checked={joystickdisp} onChange={(event)=>{dispacht(joystick_disp_fun(event.target.checked))}}/></div>
              </section>
              <Button className='param_def_but' variant="primary" onClick={()=>{dispacht(zoomingfun(100));dispacht(stylemyship([1,2]));setvolumecontroller(0.07);dispacht(floatingfun(true));;dispacht(joystick_disp_fun(false))}}>Default</Button>
              </div>
          </form>
      </div></>
  )
}
