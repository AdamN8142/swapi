import React, { Component } from 'react';
import Splash from './Splash'
import Header from './Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[],
      pageStatus: 'splash',
      randomNumber: 0 
    }
  }

  enterApp = (e) => {
    this.setState({
      pageStatus: 'home'
    })
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    const url = "https://swapi.co/api/films"
      fetch(url)
        .then(response => response.json())
        .then(results => this.setState({
          movies: results.results
        }, this.randomNumber())
      )
        .catch(error => console.log(error))
  }

  randomNumber = () => {
    let randomNumber = Math.floor((Math.random() * 6))
    this.setState({
      randomNumber
      })
    }
  

  


  render() {
    if(this.state.movies.length === 0) {
      return (<div>Help On The Way...</div>)
    } else {
      switch(this.state.pageStatus) {
        case ('home'):
          return (
            <div className="App">
              <Header />
            </div>
        )
        default:
          return (
            <div>
              <Splash 
              enterApp={this.enterApp} 
              randomNum={this.state.randomNumber} 
              scroll={this.state.movies[this.state.randomNumber]}
              />
            </div>
          )    
      }
    }
  }
}

export default App;
