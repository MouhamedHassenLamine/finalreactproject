import React from 'react'
import './css/RandomStuff.css'
import RandomStuffList from './Lists/RandomStuff'
export default function RandomStuff(props) {
  return (
    <div className='randomStuffParent'>
      {RandomStuffList.map((el)=> <img src={el.image} className='decoreimg' style={{width:`${el.width}em`,left: `${props.direction[1]+el.left}em`, top: `${props.direction[0]+el.top}em` ,objectPosition:el.imgpos}} alt='decore'></img>)}
    </div>
  )
}
