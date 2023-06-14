import { createSlice } from '@reduxjs/toolkit'
import TicTactList from '../Lists/TicTacList'

const initialState = {
  value: TicTactList
}

export const TicTactListSlice = createSlice({
  name: 'TicTactList',
  initialState,
  reducers: {
    xodisp: (state,actions) => {
      state.value[actions.payload].disp=false
      state.value.filter(el=>el.disp===true).map((el)=>(el.xo=!state.value[actions.payload].xo))
    },
    ResetTable:(state)=>{
      state.value=TicTactList
    },
  }
})

// Action creators are generated for each case reducer function
export const { xodisp,ResetTable } = TicTactListSlice.actions

export default TicTactListSlice.reducer