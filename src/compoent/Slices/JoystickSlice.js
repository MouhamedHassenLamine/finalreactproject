import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: false
}
export const joystickSlice = createSlice({
  name: 'joystickcontroller',
  initialState,
  reducers: {
    joystick_disp_fun: (state,actions) => {
            state.value=actions.payload
        }
    
  },
})

export const {joystick_disp_fun} = joystickSlice.actions

export default joystickSlice.reducer