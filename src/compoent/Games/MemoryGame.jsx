import React, { useState } from 'react'
import './Css/MemoryGame.css'
import MemoryGameList from '../Lists/MemoryGameList'
export default function MemoryGame() {
    const[MemoryGameListS,setMemoryGameListS]=useState(MemoryGameList)
    const[StartMemoryGame,setStartMemoryGame]=useState(true)
    const [Memorytable,setMemorytable]=useState([])
    const [YourMemorytable,setYourMemorytable]=useState([])
    const [Score,SetScore]=useState(0)
    const [MGC,setMGC]=useState(true)
    const[redgreen,setRedgreen]=useState("def")
    const memorysefun = () => {
      setMGC(true)
        let randomp= Math.floor(Math.random()*4)
        setMemoryGameListS(MemoryGameListS.map((el, index) => index === randomp ? 'shakplanetan 1.3s' : el));
        setTimeout(() => {
            setMemoryGameListS(MemoryGameListS.map((el, index) => index === randomp ? 'none' : el));
            setMGC(false)
        }, 1300);
        setMemorytable([...Memorytable,randomp])
      };
      function showoldt() {
        setMGC(true)
        for (let i = 0; i <= Memorytable.length - 1; i += 1) {
          setTimeout(() => {
            setMemoryGameListS((MemoryGameListS) =>MemoryGameListS.map((el, index) =>
            index === Memorytable[i] ? 'shakplanetan 1.3s' : el ));
            setTimeout(() => {
              setMemoryGameListS((MemoryGameListS) =>
                MemoryGameListS.map((el, index) =>
                  index === Memorytable[i] ? 'none' : el
                )
              );
            }, 1200);
          }, i * 1300);
        }
      
        setTimeout(() => {
          memorysefun();
          setTimeout(() => {
            setMGC(false)
          }, 1300);
        }, Memorytable.length * 1300);
      }
      function yourans(ans){
        setMGC(true)
        setYourMemorytable([...YourMemorytable,ans])
        ShakeMe(ans)
      }
      function ShakeMe(idx){
       setMemoryGameListS(MemoryGameListS.map((el, index) =>
       index === idx ? 'shakplanetan 1.3s' : el ))
       setTimeout(() => {
        setMemoryGameListS(MemoryGameListS.map((el, index) =>
        index === idx ? 'none' : el ))
        setMGC(false)
       }, 1300);
      }
        function finish(){
        if(Memorytable.length===YourMemorytable.length&&StartMemoryGame===false){
          if(Memorytable.join('')===YourMemorytable.join('')){
            setMGC(true)
            setYourMemorytable([])
            SetScore(Score+1)
            setRedgreen(true)
            setTimeout(() => {
              setRedgreen("def")
              showoldt() 
            }, 1500);
          }
          else{
            setRedgreen(false)
            setTimeout(() => {
              setMGC(true)
              setYourMemorytable([])
              setMemorytable([])
              setStartMemoryGame(true)
              SetScore(0)
              setRedgreen("def")
            }, 1500);
          }
        }
          }
  return (
    <div>
      <div className='memorygamecover' style={{display:MGC?'block':'none'}}></div>
      <div className='gameplanet' onMouseEnter={()=>{finish()}}>
        <div></div>
        <div className='saturn' onMouseDown={()=>{yourans(0);}} style={{animation:MemoryGameListS[0]}}></div>
        <div></div>
        <div className='green'  onMouseDown={()=>{yourans(3);}} style={{animation:MemoryGameListS[3]}}></div>
        <button className='memoryscore' disabled={StartMemoryGame?false:true} style={{backgroundColor:redgreen==="def"?'white':redgreen?'rgb(65, 231, 65)':'rgb(231, 65, 65)',zIndex:StartMemoryGame?1:0}} onClick={()=>{setStartMemoryGame(false);setRedgreen("def");memorysefun()}}>{StartMemoryGame?<h1 className='startmemory'>Start</h1>:<><h1>Score</h1><h1>{Score}</h1></>}</button>
        <div className='marss'   onMouseDown={()=>{yourans(1);}} style={{animation:MemoryGameListS[1]}}></div>
        <div></div>
        <div className='neptun' onMouseDown={()=>{yourans(2);}} style={{animation:MemoryGameListS[2]}}></div>
      </div>
    </div>
  )
}