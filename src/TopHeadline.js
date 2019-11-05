import React from 'react'

const TopHeadline = (props) => {
    // console.log(props.topHeadline);
    
    if(props.topHeadline){
        return (
            <div>
                <p>{props.topHeadline.source.name}</p>
                <h1>{props.topHeadline.title}</h1>
                <img src={props.topHeadline.urlToImage} alt={props.topHeadline.title}></img>
                <p>{props.topHeadline.description}</p>
                <p>{props.topHeadline.author}</p>
            </div>
        ) 
    } else {
        return (
            <div>Page Is Loading</div>
        )
    }
}

export default TopHeadline