import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: "100%"
}
export const zoomingSlice = createSlice({
  name: 'zoomcontroller',
  initialState,
  reducers: {
    zoomingfun: (state,actions) => {
            state.value=(actions.payload)+"%"
        }
    
  },
})

export const {zoomingfun} = zoomingSlice.actions

export default zoomingSlice.reducer