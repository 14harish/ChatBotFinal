import axios from 'axios';
export const UPDATE_MESSAGE="UPDATE_MESSAGE";
export const UPDATE_USER_MESSAGE="UPDATE_USER_MESSAGE";

export const textQuery=(data)=>{
    // console.log("dataVal",data);
    return async(dispatch,getState)=>{
        dispatch({type:UPDATE_USER_MESSAGE,data:data})
        
        // const response="helllllo from bot";
        const response=await axios.post('https://chatsever-5bsa.onrender.com/in',
        {text:data.text})
        
        // console.log(response.data,"hello");
        return dispatch({type:UPDATE_MESSAGE,data:response.data})
    }
}