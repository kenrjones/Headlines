import React, {Component} from 'react';
import axios from 'axios'
import TopHeadlines from './TopHeadlines'
import MoreHeadlines from './MoreHeadlines';
import './App.css';
import dotenv from 'dotenv'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      featuredHeadline: '',
      trendingHeadlines:[]
    }
  }
  getFeaturedHeadline() {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=2fbfd60a715c400081cecdd7c3238037'
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      let articles = response.data.articles
      let trendingHeadlines = articles.slice(1, 4)
      let moreHeadlines = articles.slice(4, 16)
      this.setState({        
        featuredHeadline: articles[0],
        trendingHeadlines,
        moreHeadlines
      })
      console.log(response.data.articles);
      
    })
  }
  componentDidMount() {
    this.getFeaturedHeadline()
  }

  render() {
    return (
      <Router>
        <nav id="nav">
          <h1>HEADLINES</h1>
          <Link to="/topheadline">Top Headlines</Link>
          <Link to="/moreheadlines">More Headlines</Link>
        </nav>

        <div>
          <Route exact path="/topheadline" component={()=> <TopHeadlines featuredHeadline={this.state.featuredHeadline} trendingHeadlines={this.state.trendingHeadlines} /> } /> 
          <Route path="/moreheadlines" component={()=> <MoreHeadlines moreHeadlines={this.state.moreHeadlines} /> } />
        </div>

        <footer id="footer">
          <nav className="footer-nav"> 
            <h1>HEADLINES</h1> 
            <p className="footer-copy">&copy;2019 Designed by Kendrick R Jones</p>
          </nav>
          <a className="footer-top" href="#top">Back to top</a>
        </footer>

      </Router>
    )
  }
}

   
    
export default App



