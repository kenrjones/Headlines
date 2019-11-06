import React from 'react'
import './App.css';

const TopHeadline = (props) => {
    if(props.topHeadline){
        return (
            <div id="featured-headline">
                <div>
                    <p className="featured-source">{props.topHeadline.source.name}</p>
                    <h1 className="featured-title">{props.topHeadline.title}</h1>
                    {/* <p className="featured-description">{props.topHeadline.description}</p> */}
                    {/* <p classname="featured-author">{props.topHeadline.author}</p> */}
                </div>
                <div>
                    <img className="featured-image" src={props.topHeadline.urlToImage} alt={props.topHeadline.title}></img>
                </div>
            </div>
        ) 
    } else {
        return (
            <div>Page is loading...</div>
        )
    }
}

export default TopHeadline