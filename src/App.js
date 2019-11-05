import React, {Component} from 'react';
import axios from 'axios'
import TopHeadline from './TopHeadline';
import StripHeadlines from './StripHeadlines';
import MoreHeadlines from './MoreHeadlines';
import About from './About';
import './App.css';
import dotenv from 'dotenv'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      topHeadline: '',
      stripHeadlines:[]
    }
  }
  getTopHeadlines() {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=2fbfd60a715c400081cecdd7c3238037'
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      let sliced = response.data.articles.slice(1, 4)
      // console.log(sliced)
      this.setState({        
        topHeadline: response.data.articles[0],
        stripHeadlines: sliced
      })
      // console.log(response.data.articles)
    })
  }
  componentDidMount() {
    this.getTopHeadlines()
  }

  render() {
    // console.log(process.env.REACT_APP_NEWS_API_KEY);
    // console.log(this.state);
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/moreheadline">More Headlines</Link>{' '}
          <Link to="/about">About</Link>
        </nav>

        <div>
          <Route exact path="/" />
          <Route path="/moreheadlines" component={MoreHeadlines} />
          <Route path="/about" component={About} />
        </div>

        <div>
          <TopHeadline topHeadline={this.state.topHeadline} />
          <StripHeadlines stripHeadlines={this.state.stripHeadlines} /> 
        </div>

      </Router>
    )
  }
}

   
    
export default App



