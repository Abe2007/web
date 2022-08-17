import React from "react";
//import '../styles/Tweets.scss'
import styled from 'styled-components'
const Tweet=({name, tweet, tweets, setTweets})=>{

    const deletTweet =()=>{
        setTweets(tweets.filter((state)=> state.id !==tweet.id));
    };
return(
    <TweetStyle> 
    <h2>{name}  </h2>
    <h3>{tweet.message} </h3>
    <button onClick={deletTweet}>delet</button>
    <button>like</button>
    </TweetStyle>
)
}

const TweetStyle = styled.div`
 ;
border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
`


export default Tweet;