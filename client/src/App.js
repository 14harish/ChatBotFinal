import './App.css';
import img from './botimg.jpg';
import logoImg from './ksrcelogo.jpg';
import React from 'react';
import { useState } from 'react';
import Bot from './bot';


function App() {
  const[direct,SerDirect]=useState(false);

  return (
    <div className="App">
    <div className='main'>
    <div>
      <img src={logoImg} width="90px" height="70px"></img>
      </div>
    <nav className='navba'>
      <li>Profile</li>
      <li>Placement</li>
      <li>PEO,PO,PSO</li>
      <li>Vision & Mission</li>
      <li>Circulam</li>
      <li>Lab Infrastructure</li>
      <li>Students Achievements</li>
      <li>Roll of Honor</li>
      <li>Research</li>
    </nav>
      <input type="image" src={img} width="100px" height="80px" onClick={
        ()=>{
          SerDirect(!direct);
        }
      }/>
      </div> 
      <div className='botsam'>
      </div>
      {direct && <Bot/> }
      {/* <Bot/> */}
    </div>
  );
}

export default App;
