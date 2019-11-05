import React from 'react'

const TopHeadline = (props) => {
    if(props.topHeadline){
        return (
            <div id="top-article">
                <p>{props.topHeadline.source.name}</p>
                <h1>{props.topHeadline.title}</h1>
                <img src={props.topHeadline.urlToImage} alt={props.topHeadline.title}></img>
                <p>{props.topHeadline.description}</p>
                <p>{props.topHeadline.author}</p>
            </div>
        ) 
    } else {
        return (
            <div>Page is loading...</div>
        )
    }
}

export default TopHeadline