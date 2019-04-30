import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[]
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    const url = "https://swapi.co/api/films"
      fetch(url)
        .then(response => response.json())
        .then(results => this.setState({
          movies: results
        }))
        .catch(error => console.log(error))
  }



  render() {
    return (
      <div className="App">
        <h1>Swapi Box </h1>
      </div>
    )
  }
}

export default App;
