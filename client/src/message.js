import React, { useState } from "react";
import { useSelector } from "react-redux";
import Bot from "./bot";
import { FaBeer } from 'react-icons/fa';
import { IconBase } from "react-icons/lib";

const Message=()=>{
    const messages=useSelector(state=>state.chatBot.messages )
    // console.log('hell',messages);
    
    const displayMessage=(message,i)=>{
        if(message.speak==="user"){
           
            return <div key={i} className="msg-user">
                         <p className="msg-text-user">{message.text}?</p>
                    </div>
        }else if(message.speak==="bot"){
            
            return <div key={i} className="msg-bot">
                         <FaBeer/><p></p> <p className="msg-text-bot">{message.text}</p>
                           {/* <p>{userClick}</p> */}
                     </div>
            }
    }
    const [userClick,setUseClick]=useState("");
    const handle=(e)=>{
        console.log(e.target.innerText);
        setUseClick(e.target.innerText);
    }
    return (
        <div className="message">
            <div className="msg-bot">
                 <p className="msg-text-bot">How Can We Help You</p>
             </div>
             <nav className='navb' onClick={handle}><a href="https://ksrce.ac.in/index.php/page?id=139&item=117"><li>Placement</li></a><a href="https://ksrce.ac.in/index.php/page?id=135&item=113"><li>Faculty profile</li></a><a href="https://ksrce.ac.in/index.php/page?id=418&item=6"><li>Fees Detail</li></a></nav>
            {
                messages.map((message,i)=>{
                    return displayMessage(message,i)
                })
            }
        </div>
    )
}

export default Message;