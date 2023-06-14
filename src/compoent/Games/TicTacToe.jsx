import './Css/TicTacToe.css'
import { useDispatch, useSelector } from 'react-redux'
import { xodisp,ResetTable } from '../Slices/TicTacToeSlice'
import {winpos,Win_Code_List} from '../Lists/TicTacToelists'
import { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
export default function TicTacToe() {
   const TicTactList=useSelector((state)=>state.TicTacToeList.value)
   const dispatch=useDispatch()
   const [blacklist,setBlacklist]=useState([])
   const Can_I_ClickRef = useRef(true);
   const[Can_Bot_Click,setCan_Bot_Click]=useState(true)
   const [winposstyle,setWinposstyle]=useState({})
   const[cover,setCover]=useState(false)
   const Reset=()=>{
    setCover(false)
    setBlacklist([])
    dispatch(ResetTable())
    setWinposstyle({})
    Can_I_ClickRef.current=true
   }
   useEffect(() => {
      for(let i=0;i<Win_Code_List.length;i++){
        if(TicTactList[Win_Code_List[i][0]].xo===TicTactList[Win_Code_List[i][1]].xo&&TicTactList[Win_Code_List[i][1]].xo===TicTactList[Win_Code_List[i][2]].xo&&TicTactList[Win_Code_List[i][0]].disp===false&&TicTactList[Win_Code_List[i][1]].disp===false&&TicTactList[Win_Code_List[i][2]].disp===false){
          Can_I_ClickRef.current = false;
          setWinposstyle(winpos[Win_Code_List[i][3]]) 
         }
       }
  }, [TicTactList]);
   const Playerturn=(id)=>{
      setCover(true)
      dispatch( xodisp(id))
       setTimeout(() => {
        Botfun(id)
        setCover(false)
       }, 1000);
   }
   const Botfun=(id)=>{
    if(Can_Bot_Click===true&&Can_I_ClickRef.current===true){
      if(blacklist.length<=7){
            setBlacklist(old=>[...old,id])
            let a=Math.floor(Math.random() * 9)
            while(true){
              if(blacklist.includes(a)||a===id){
                a=Math.floor(Math.random() * 9)
              }
              else{
                break
              }
            }
            setBlacklist(old=>[...old,a])
            dispatch( xodisp(a))
       }
    }
   }
  return (
    <div className='tictacparent'>
      <div className='board'>
        {TicTactList.map((el)=>(
        <button disabled={el.disp?false:true} key={el.id} onMouseDown={()=>{Can_I_ClickRef.current&&Playerturn(el.id)}}className='tictac'><div>{el.disp?<>&nbsp;</>:el.xo? <h1>X</h1>:<h1>O</h1>}</div></button>
        ))}
      </div>
      <div className='winline' style={winposstyle}></div>
      <div className='TicTacControlle'>
      <Button variant="secondary" className='botbut' onClick={()=>{setCan_Bot_Click(!Can_Bot_Click);Reset()}}>Bot{!Can_Bot_Click?'❌':'🤖'}</Button>
      <Button variant="secondary" onClick={()=>{Reset()}}>Reset🔄</Button>
      </div>
      <div className='covertictac' style={{display:cover?'block':'none'}}></div>
    </div>
  )
}
