import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
const CreateTweet=({tweets,setTweets,textInput,setTextInput})=>{

    //const [textInput, setTextInput]= useState("");
   // const [tweets, setTweets]= useState([]);

    const userTweetHandler= (e)=>{
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e)=>{
        e.preventDefault();
       // console.log(tweets)
        setTweets([...tweets,{message:textInput,id:uuidv4()}])
        
        setTextInput("")
        //console.log("hey")
    } 
return(
    <form onSubmit={submitTweetHandler}> 
     <textarea value={textInput} onChange={userTweetHandler} name="" id="" cols="50" rows="5"></textarea>
    <button  >submite</button>
    
    </form>
)
}

export default CreateTweet;