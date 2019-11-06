import React from 'react'

const TrendingHeadlines = (props) => {
    console.log(props);
    
    if (props.trendingHeadlines) {
        let trendingNews = props.trendingHeadlines.map( (headline, index) => {
            return (
                <div key={index} id="trending-articles">
                    <img src={headline.urlToImage} alt={headline.title}></img>
                    <p>{headline.source.name}</p>
                    <h1>{headline.title}</h1>
                    {/* <p>{headline.description}</p> */}
                    {/* <p>{headline.author}</p> */}
                </div>
            )
        })
        return (
            <div id="trending-container">
                {trendingNews}
            </div>
        )
    } else {
        return (
            <div>Page is loading...</div>
        )
    }
}

export default TrendingHeadlines