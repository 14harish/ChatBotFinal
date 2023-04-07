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
    <nav className='navbar'>
      <li><img src={logoImg} width="200px" height="200px"></img></li>
      <li>Profile</li>
      <li>Placement</li>
      <li>PEO,PO,PSO</li>
      <li>Vision & Mission</li>
      <li>Circulam</li>
      <li>Lab Infrastructure</li>
      <li>Students Achievements</li>
      <li>Roll of Honor</li>
      <li>Research</li>
      <li>ChatBot</li>
      <li><input type="image" src={img} width="100px" height="100px" onClick={
        ()=>{
          SerDirect(!direct);
        }
      }/></li>
    </nav>
            
      {direct && <Bot/> }
      {/* <Bot/> */}
    </div>
  );
}

export default App;
