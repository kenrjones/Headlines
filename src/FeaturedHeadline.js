import React from 'react'
import './App.css';

const FeaturedHeadline = (props) => {
    if(props.featuredHeadline){
        return (
            <div id="featured-headline">
                <div>
                    <p className="featured-source">{props.featuredHeadline.source.name}</p>
                    <h1 className="featured-title">{props.featuredHeadline.title}</h1>
                    {/* <p className="featured-description">{props.featuredHeadline.description}</p> */}
                    {/* <p classname="featured-author">{props.featuredHeadline.author}</p> */}
                </div>
                <div>
                    <img className="featured-image" src={props.featuredHeadline.urlToImage} alt={props.featuredHeadline.title}></img>
                </div>
            </div>
        ) 
    } else {
        return (
            <div>Page is loading...</div>
        )
    }
}

export default FeaturedHeadline