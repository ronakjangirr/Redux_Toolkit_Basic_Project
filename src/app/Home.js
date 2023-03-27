// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';    // useSelector and useDispatch is a hook used in redux
// import { decrement, increment, incrementByAmount } from './counterSlices';

// function Home() {
//   const counter = useSelector((state) => state.counter.value)   // state.counter.value => is used the get the value of useState(0) 
//   const dispatch = useDispatch()

//   // In This we were changing the state locally with the use of useState.
//   // let [counter, setCounter]=useState(0);

//   function addCounter(){        
//     dispatch(increment())           //increment and decrement function be called in dispatch hook
//   }

//   // function addCounter(){
//   //   setCounter((prevCounter)=> prevCounter+1);
//   // }

//     function subCounter(){
//       dispatch(decrement())
//   }

//   // function subCounter(){
//   //   setCounter((prevCounter)=> prevCounter-1);
//   // }

//   return (
//     <>
//       <h2>Hello: {counter}</h2>
//       <button onClick={addCounter}>Increment</button>
//       <button onClick={subCounter}>Decrement</button>
//       <button onClick={()=> dispatch(incrementByAmount(10))}>Decrement by 10</button>  
//       {/* (incrementByAmount(10)) 10 is payload */}
//     </>
//   );
// }

// export default Home;
