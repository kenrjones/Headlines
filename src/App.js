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
      let strip = response.data.articles.slice(1, 4)
      let more = response.data.articles.slice(4, 14)
      this.setState({        
        topHeadline: response.data.articles[0],
        stripHeadlines: strip,
        moreHeadlines: more
      })
    })
  }
  componentDidMount() {
    this.getTopHeadlines()
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to="/home">Home</Link>{' '}
          <Link to="/moreheadlines">More Headlines</Link>{' '}
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



