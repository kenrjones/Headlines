import React from 'react'

const TopHeadline = (props) => {
    console.log(props.topHeadline);
    
    if(props.topHeadline){
        return (
            <div>
                <div>{props.topHeadline.source.name}</div>
                <div>{props.topHeadline.title}</div>
                <img src={props.topHeadline.urlToImage} alt='Microsoft Surface Pro X'></img>
                <div>{props.topHeadline.description}</div>
                <div>{props.topHeadline.author}</div>
            </div>
        ) 
    } else {
        return (
            <div>Page Is Loading...</div>
        )
    }
    console.log(props.topHeadline);
    
}

export default TopHeadline