import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import dotenv from 'dotenv'

const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=2fbfd60a715c400081cecdd7c3238037'

class App extends Component {
    constructor(props) {
      super(props)
    }
      render() {
        console.log(process.env.REACT_APP_NEWS_API_KEY);

        return(
            <div></div>
        )
      }
    }

    axios({
        method: 'GET',
        url: url
      })
      
      .then(response => {
        console.log(response)
      })
      
export default App



