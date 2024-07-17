import React, { useState } from "react";
// import img from "./assets/botimg.jpg";
import Navbar from "./component/Navbar";
import Bot from "./component/bot";

import ParticlesBackground from "./component/ParticlesBackground";


function App() {
  const [direct, SerDirect] = useState(false);

  return (
    <div className="bg-custom-image bg-cover bg-center min-h-screen">
            {/* <ParticlesBackground/> */}

      <Navbar />
      {/* <div className="h-16"></div> Spacer div for navbar height */}
      {/* <div className="bg-custom-image bg-cover bg-center min-h-screen"> */}
        {/* <input
          type="image"
          src={img}
          width="100px"
          height="80px"
          alt="Chatbot"
          className="fixed bottom-4 right-4 cursor-pointer"
          onClick={() => {
            SerDirect(!direct);
          }}
        /> */}
        {/* <input
        type="image"
        src={img}
        width="100px"
        height="80px"
        alt=""
        onClick={() => {
          SerDirect(!direct);
        }}
      /> */}
        {direct && <Bot />}
      {/* </div> */}
      {/* Other content can go here */}
    </div>
  );
}

export default App;
