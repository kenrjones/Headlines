import React from 'react'

const StripHeadlines = (props) => {
    if (props.stripHeadlines) {
        let newsStrip = props.stripHeadlines.map( (headline, index) => {
            return (
                <div key={index} id="srtip-articles">
                    <img src={headline.urlToImage} alt={headline.title}></img>
                    <p>{headline.source.name}</p>
                    <h1>{headline.title}</h1>
                    {/* <p>{headline.description}</p> */}
                    {/* <p>{headline.author}</p> */}
                </div>
            )
        })
        return (
            <div id="strip-container">
                {newsStrip}
            </div>
        )
    } else {
        return (
            <div>Page is loading...</div>
        )
    }
}

export default StripHeadlines