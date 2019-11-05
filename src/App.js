import React, {Component} from 'react';
import axios from 'axios'
import TopHeadline from './TopHeadline';
import './App.css';
import dotenv from 'dotenv'


class App extends Component {
  constructor() {
    super()
    this.state = {
      topHeadline: ''

    }
  }
  getTopHeadlines() {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=2fbfd60a715c400081cecdd7c3238037'
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      this.setState({
        topHeadline: response.data.articles[0],
      })
      console.log(response.data.articles)
    })
  }
  componentDidMount() {
    this.getTopHeadlines()
  }

  render() {
    console.log(process.env.REACT_APP_NEWS_API_KEY);
    console.log(this.state.topHeadlines);
    return (
      <div>
        <TopHeadline topHeadline={this.state.topHeadline} />
      </div>
    )
   }
}

   
    
export default App



