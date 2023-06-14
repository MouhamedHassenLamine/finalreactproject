import React from 'react'
import './css/Home.css'
import general_positions from './Lists/general_positions'
export default function Home(props) {
  return (
    <div className='homeparernt' style={{left:`${props.direction[1]+general_positions.homeloc[1]}em`,top:`${props.direction[0]+general_positions.homeloc[0]}em`}}>
        <div className='welcomeparent'>
      <h1 className='welcome'>WELCOME</h1>
      </div>
        <div className='controll'>
      <h3 className='h3arrows'>Use keyboard to moove</h3>
      <img className='arrows' src="/img/arrows.png" alt="arrows" />
      <h3 className='h3arrows or'>OR</h3>
      <h3 className='h3arrows'>Use Joystick Buttons</h3>
      <img className='arrows' src="/img/clickarrows.png" alt="clickarrows" />
      </div>
      <div className='clicktestparent'>
      <h3 className='clickh3'>Click to visit the project</h3>
        <img className='click' src="/img/click.png" alt="click" />
        <img className='clicktest' src="/img/hooksproject.png" alt="click" />
      </div>
      <div className='mapintro'>
      <h3>You can also use the map</h3>
      <img src="/img/mappin.png" alt="click" />
      </div>
    </div>
  )
}

