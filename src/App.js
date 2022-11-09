import React from "react";
import './App.css';
import { useState,useEffect } from "react";
import Query from './components/Questionare';




function App(props) {
  const [question , setQuestion] = useState(null)
const getQuestion = async()=>{
   
      const res = await fetch('http://jservice.io/api/random')
      const data = await res.json()
       setQuestion(data);
      
    }

  
    return (
      <div className="App">
          <h1>Jeopardy App</h1>
          <Query question = {question}/>
      
         
      </div>
    );

}


  


 





export default App;