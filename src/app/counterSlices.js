// // This whole code is snippit and get from redux Toolkit documentation 

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({       //createSlice is getting from toolkit.
//   name: 'counter',
//   initialState,
//   reducers: {                  // Reducer is used to change/update or manupilate the initial state or data.like increment or decrement     
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer