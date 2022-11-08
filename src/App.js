// import React from "react";
import './App.css';
import { useState } from "react";
import Query from './components/Questionare';


  // const [question , setQuestion] = useState(null)
const getQuestion = ()=>{
  
      const res = fetch('http://jservice.io/api/random')
      const data =  res.json()
      console.log(data);
      return data
  
}



function App(props) {
//   const [question , setQuestion] = useState(null)
// const getQuestion = async()=>{
//     try {
//       const res = await fetch('http://jservice.io/api/random')
//       const data = await res.json()
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }

// }


  let res = fetch('http://jservice.io/api/random');
  const data =  res.json();
  console.log(data);
  console.log(res);


// ================= Display Section =================
  return (
    <div className="App">
        <h1>Jeopardy App</h1>
        <Query question = {data.question}/>
        {/* <button onClick = {getQuestion} >Get Question</button> */}
       
    </div>
  );
}


export default App;