import { configureStore } from '@reduxjs/toolkit'
import CostomShipReduser from './compoent/Slices/CostomShipSlice'
import TasklistReduser from './compoent/Projects/Redux/TasklistSlice'
import TransAnReduser from './compoent/Slices/TransAnSlice'
import TicTacToeReduser from './compoent/Slices/TicTacToeSlice'
import zoomingReduser from './compoent/Slices/ZoomSlice'
import  floatingReduser  from './compoent/Slices/floatan'
import  rotationReduser from './compoent/Slices/ShipRotationSlice'
import joystickReduser from './compoent/Slices/JoystickSlice'
export const store = configureStore({
  reducer: {
    costomShip:CostomShipReduser,
    list:TasklistReduser,
    transfun:TransAnReduser,
    TicTacToeList:TicTacToeReduser,
    zoomper:zoomingReduser,
    floter:floatingReduser,
    rotater:rotationReduser,
    joystickdiplayer:joystickReduser
  },
})