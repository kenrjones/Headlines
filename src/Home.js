import React from 'react'
import TopHeadline from './TopHeadline';
import StripHeadlines from './StripHeadlines';
import './App.css';

const Home = (props) => {
    return(
        <div>
            <TopHeadline topHeadline={props.topHeadline} />
            <StripHeadlines stripHeadlines={props.stripHeadlines} /> 
        </div>
    )
}

export default Home