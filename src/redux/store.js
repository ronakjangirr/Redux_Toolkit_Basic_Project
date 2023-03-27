import { configureStore } from '@reduxjs/toolkit'       // configureStore is used to      before this we have to import thunk, createStore etc. 
import studentReducer from './features/studentSlice';

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },                     // in reducer it is a wraper in this we can use multiple reducer
})