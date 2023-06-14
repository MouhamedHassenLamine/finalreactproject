import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: {
    rotationdeg:0,
    lastkeypress:"up",
}
}
export const rotationSlice = createSlice({
  name: 'rotationcontroller',
  initialState,
  reducers: {
    rotationfun: (state,actions) => {
            state.value.rotationdeg+=actions.payload
        },
    lastkeypressfun:(state,actions)=>{
       state.value.lastkeypress=actions.payload
    },
  },
})

export const {rotationfun,lastkeypressfun} = rotationSlice.actions

export default rotationSlice.reducer