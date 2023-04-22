import React, { useState } from "react";
import { useSelector } from "react-redux";
import Bot from "./bot";

// function Message(){
//     return (
//         <div className="message">
//             <div className="msg-user">
//                 <p className="msg-text-user">{props.name}</p>
//             </div>
//             <div className="msg-bot">
//                 <p className="msg-text-bot">How can I help You</p>
//             </div>
//         </div>
//     )
// }




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
                             <p className="msg-text-bot">{message.text}</p>
                <p>{userClick}</p>
                     </div>
        }
    }
    const [userClick,setUseClick]=useState("");
    const handle=(e)=>{
        setUseClick(e.target.innerText);
    }
    return (
        <div className="message">
            <div className="msg-bot">
                 <p className="msg-text-bot">How Can We Help You</p>
             </div>
             <nav className='navb' onClick={handle}><li>Placement</li><li>Admission</li><li>Fees Detail</li></nav>
            {
                messages.map((message,i)=>{
                    return displayMessage(message,i)
                })
            }
        </div>
    )
}

export default Message;