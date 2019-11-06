import React from 'react'
import FeaturedHeadline from './FeaturedHeadline';
import TrendingHeadlines from './TrendingHeadlines';
import './App.css';

const TopHeadlines = (props) => {
    return(
        <div>
            <FeaturedHeadline featuredHeadline={props.featuredHeadline} />
            <TrendingHeadlines trendingHeadlines={props.trendingHeadlines} /> 
        </div>
    )
}

export default TopHeadlines