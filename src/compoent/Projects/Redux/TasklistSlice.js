import { createSlice } from '@reduxjs/toolkit'
import tasklist from './ListTask'
const initialState = {
  value: tasklist,
}
export const TasklistSlice = createSlice({
  name: 'mylist',
  initialState,
  reducers: {
    done:(state,action)=>{
      state.value.map((el)=>{
        if (el.id===action.payload){
          el.isDone=!el.isDone
        }
        return ""
      }
      )
    },
    add:(state,action)=>{
      state.value.unshift(action.payload)
    },
    inputhider:(state,action)=>{
      state.value.map((el)=>{
        if (el.id===action.payload){
          el.inputvis=!el.inputvis
        }
        return ""
      }
      )
    },
    descchanger:(state,action)=>{
      state.value.map((el)=>{
        if (el.id===action.payload[0]){
          el.description=action.payload[1]
          
        }
        return ""
      }
      )
    },
  }
})

// Action creators are generated for each case reducer function
export const { done,add,inputhider,descchanger } = TasklistSlice.actions
export default TasklistSlice.reducer