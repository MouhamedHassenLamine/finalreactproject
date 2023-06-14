import React from 'react'
import TicTacToe from './TicTacToe'
import './Css/MiniGames.css'
import general_positions from '../Lists/general_positions'
import MemoryGame from './MemoryGame'
export default function MiniGames(props) {
  return (
    <div className='gamesparent' style={{ left: `${props.direction[1]+general_positions.MiniGameZone[1]}em`, top: `${props.direction[0]+general_positions.MiniGameZone[0]}em` }}>
      <img className='gamezoneimg' src='/img/decore/decastro8.png' alt='decore'></img>
      <h1 className='gamezonetitle'>GAME ZONE</h1>
      <TicTacToe></TicTacToe>
      <MemoryGame></MemoryGame>
    </div>
  )
}
