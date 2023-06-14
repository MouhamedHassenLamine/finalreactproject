import './css/Back.css'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { OpenCloseAn } from './Slices/TransAnSlice'
export default function Backbutton() {
   const navigator=useNavigate()
   const dispatch=useDispatch()
   const activatean=useSelector((state)=>state.transfun.value)
   const activateanfun=()=>{
    dispatch(OpenCloseAn("37.4%"))
    setTimeout(() => {
      navigator("/")
    }, 1000);
    setTimeout(() => {
      dispatch(OpenCloseAn("100%")) 
    }, 2000);
   }

  return (
    <div className='backtospace'>
      <button onClick={()=>activateanfun()}></button>
      <div style={{right:activatean}} className='trans_tringle1'></div>
      <div style={{left:activatean}} className='trans_tringle2'></div>
    </div>
  )
}
