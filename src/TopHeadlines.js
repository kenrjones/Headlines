import React from 'react'
import FeaturedHeadline from './FeaturedHeadline';
import TrendingHeadlines from './TrendingHeadlines';
import Equality from './Images/Equality_Act_Web_Banner_1600x900.jpg';
import BackToTop from 'react-back-to-top-button';
import './App.css';

const TopHeadlines = (props) => {
    return(
        <div>
            <FeaturedHeadline featuredHeadline={props.featuredHeadline} />
            <TrendingHeadlines trendingHeadlines={props.trendingHeadlines} />
            <img className="front-image" src={Equality} alt="Equality Act Now"></img>
        </div>
        
    )
}

export default TopHeadlines