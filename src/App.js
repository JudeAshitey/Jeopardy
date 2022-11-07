// import React from "react";
import './App.css';
import { useState } from "react";
import Query from './components/Questionare';



function App() {
  const [question , setQuestion] = useState(null)
const getQuestion = async()=>{
    try {
      const res = await fetch('http://jservice.io/api/random')
      const data = await res.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }

}


// ================= Display Section =================
  return (
    <div className="App">
        <h1>Jeopardy App</h1>
        <Query/>
        {/* <button onClick = {getQuestion} >Get Question</button> */}
         
    </div>
  );
}


export default App;