import React, {useState,useEffect} from "react" 
import TestCom from './TestCom';
import TweetList from './components/TweetList'
import CreateTweet from "./components/CreateTweet";
function App() {

  useEffect(()=>{

  },[]);
  const [name,setName ]=useState("dev abe");
  const [textInput, setTextInput]= useState("");
    const [tweets, setTweets]= useState([]);
  const message="hell ists me";
   
  return (
    <div className="box" >
       
       <CreateTweet textInput={textInput} setTextInput={setTextInput}
       tweets={tweets} setTweets={setTweets}/>
       <TweetList  name={name} tweets={tweets} setTweets={setTweets}/>
       
      
    </div>
  );
}

export default App;
