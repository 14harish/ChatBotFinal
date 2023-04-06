import './App.css';
import img from './botimg.jpg';
import React from 'react';
import { useState } from 'react';
import Bot from './bot';


function App() {
  const[direct,SerDirect]=useState(false);

  return (
    <div className="App">
      <input type="image" src={img} width="100px" height="100px" onClick={
        ()=>{
          SerDirect(!direct);
        }
      }/>      
      {direct && <Bot/> }
      {/* <Bot/> */}
    </div>
  );
}

export default App;
