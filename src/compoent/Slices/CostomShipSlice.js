import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    0/*color*/,
    2/*speed */,
    1/*size */,
    0/*skin */
  ]
}

export const costomShipSlice = createSlice({
  name: 'costomShip',
  initialState,
  reducers: {
    stylemyship: (state, action) => {
      state.value[action.payload[0]] = action.payload[1]
    },
    skin: (state) => {
      state.value[3]===6? state.value[3]=0 :state.value[3] += 1
      },
  },
})

// Action creators are generated for each case reducer function
export const {stylemyship , skin } = costomShipSlice.actions

export default costomShipSlice.reducer