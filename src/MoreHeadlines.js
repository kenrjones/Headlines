import React from 'react'

const MoreHeadlines = (props) => {
    console.log(props)
    if (props.moreHeadlines) {
        let moreAricles = props.moreHeadlines.map( (headline, index) => {
            return (
                <div key={index} id="more-articles">
                    <img src={headline.urlToImage} alt={headline.title}></img>
                    <p>{headline.source.name}</p>
                    <h1>{headline.title}</h1>
                    {/* <p>{headline.description}</p>
                    <p>{headline.author}</p> */}
                </div>
            )
        })
        return (
            <div id="moreheadlines-container">
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