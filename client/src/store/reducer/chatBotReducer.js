import { UPDATE_MESSAGE } from "../action/chatBotAction";
import { UPDATE_USER_MESSAGE } from "../action/chatBotAction";

const intialState={
    messages:[]
}

const chatBotReducer=(state=intialState,action)=>{
    switch(action.type){
        case UPDATE_MESSAGE:
            console.log("fata-bot",action.data)
            let message={
                speak:"bot",
                text:action.data.text
            }
            console.log(message.text,"tex");
            return{
               ...state,messages:[...state.messages,message]
            };
        case UPDATE_USER_MESSAGE:
            console.log("fata -user",action.data)

            let messageUser={
                speak:"user",
                text:action.data.text
            }
            return{
               ...state,messages:[...state.messages,messageUser]
            };
        default:
            return state;
    }
}

export default chatBotReducer;