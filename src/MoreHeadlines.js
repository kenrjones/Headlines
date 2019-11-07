import React from 'react'
import BLM from './Images/Black-Lives-Matter-150-dpi.jpg'
import './App.css';

const MoreHeadlines = (props) => {
    console.log(props)
    if (props.moreHeadlines) {
        let moreAricles = props.moreHeadlines.map( (headline, index) => {
            return (
                <div key={index} id="more-articles">
                    <img src={headline.urlToImage} alt={headline.title}></img>
                    <p className="article-source">{headline.source.name}</p>
                    <h1 className="article-title">{headline.title}</h1>
                    {/* <p>{headline.description}</p> */}
                    <a className="link" href = {headline.url} target="_blank">READ MORE</a>
                </div>
            )
        })
        return (
            <div id="moreheadlines-container">
                <img className="inside-image" src={BLM} alt="Black Lives Matter"></img>
                {moreAricles}
            </div>
        )
    } else {
        return (
            <div>Page is loading...</div>
        )
    }
}

export default MoreHeadlines