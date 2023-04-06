import React, { useState } from "react";
import './bot.css'
import { RiSendPlaneFill } from "react-icons/ri";
import Message from "./message";
import { useDispatch } from "react-redux";
import * as chatBotAction from './store/action/chatBotAction'
import axios from "axios";


const Bot=()=>{
    const [msg,SetMsg]=useState("");
    const dispatch=useDispatch();
    const handleQuery=async()=>{
        // console.log("mess",msg)
       if(msg===""){
           alert("Please enter Query");
           return
        }
        const data={
            text:msg
        }
        dispatch(chatBotAction.textQuery(data))
        SetMsg("");
    }
    
    return(
        <div className="bot">
            <div className="head"> 
               <h2>KSRCE CHATBOT</h2>
            </div>
            <div className="chat">
                <Message/>
            </div>
            <div className="foot">
                {/* <form> */}
                  <input type="text" name="in" className="inVal" value={msg} placeholder="Enter Message" onChange={(e)=>{
                      SetMsg(e.target.value)}}/>
                   <button className="send" onClick={()=>{
                          handleQuery()}}><RiSendPlaneFill/></button>
                {/* </form> */}
            </div>
        </div>
    )
}

export default Bot;