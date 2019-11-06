import React, {Component} from 'react';
import axios from 'axios'
import Home from './Home'
import MoreHeadlines from './MoreHeadlines';
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
      let articles = response.data.articles
      let stripHeadlines = articles.slice(1, 4)
      let moreHeadlines = articles.slice(4, 16)
      this.setState({        
        topHeadline: articles[0],
        stripHeadlines,
        moreHeadlines
      })
    })
  }
  componentDidMount() {
    this.getTopHeadlines()
  }

  render() {
    return (
      <Router>
        <nav id="nav">
          <h1>HEADLINES</h1>
          <Link to="/home">Home</Link>
          <Link to="/moreheadlines">More Headlines</Link>
        </nav>

        <div>
          <Route exact path="/home" component={()=> <Home topHeadline={this.state.topHeadline} stripHeadlines={this.state.stripHeadlines} /> } /> 
          <Route path="/moreheadlines" component={()=> <MoreHeadlines moreHeadlines={this.state.moreHeadlines} /> } />
        </div>

        <footer id="footer">
          <p>This is a footer</p>
        </footer>

      </Router>
    )
  }
}

   
    
export default App



