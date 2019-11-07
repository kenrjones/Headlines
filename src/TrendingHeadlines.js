import React from 'react'

const TrendingHeadlines = (props) => {
    console.log(props);
    
    if (props.trendingHeadlines) {
        let trendingNews = props.trendingHeadlines.map( (headline, index) => {
            return (
                <div key={index} id="trending-articles">
                    <img src={headline.urlToImage} alt={headline.title}></img>
                    <p className="article-source">{headline.source.name}</p>
                    <h1 className="article-title">{headline.title}</h1>
                    {/* <p>{headline.description}</p> */}
                    <a className="link" href = {headline.url} target="_blank">READ MORE</a>
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