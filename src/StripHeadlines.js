import React from 'react'

const StripHeadlines = (props) => {
    console.log(props);

    if (props.stripHeadlines) {
        let newsStrip = props.stripHeadlines.map( (headline, index) => {
            console.log(headline)
            return (
                <div key={index} className="srtip-articles">
                    <p>{headline.source.name}</p>
                    <h1>{headline.title}</h1>
                    <img src={headline.urlToImage} alt={headline.title}></img>
                    <p>{headline.description}</p>
                    <p>{headline.author}</p>
                </div>
            )
        })

        return (
            <div className="strip-container">
                { newsStrip }
            </div>
        )
    } else {
        return (
            <div>Page Is Loading</div>
        )
    }
}

export default StripHeadlines