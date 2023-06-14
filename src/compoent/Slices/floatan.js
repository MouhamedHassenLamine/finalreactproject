import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: true
}
export const floatingSlice = createSlice({
  name: 'floatancontroller',
  initialState,
  reducers: {
    floatingfun: (state,actions) => {
            state.value=actions.payload
        }
    
  },
})

export const {floatingfun} = floatingSlice.actions

export default floatingSlice.reducer