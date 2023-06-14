import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: "100%"
}
export const TransAnSlice = createSlice({
  name: 'activatetransport',
  initialState,
  reducers: {
    OpenCloseAn: (state,actions) => {
          state.value=actions.payload
    },
    
  },
})

export const {OpenCloseAn} = TransAnSlice.actions

export default TransAnSlice.reducer