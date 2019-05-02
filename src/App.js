import React, { Component } from 'react';
import Splash from './Splash'
import Header from './Header';
import FilterControls from './FilterControls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[],
      people: [],
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
    this.fetchPeople()
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

  fetchPeople = () => {
    const url = "https://swapi.co/api/people"
    fetch(url)
      .then(response => response.json())
      .then(results => this.fetchHomeWorlds(results.results))
      .then((data) => {
        this.setState({
          people: data
        })
      })
  }

  fetchHomeWorlds = (arr) => {
    const unresolvedPromises = arr.map((person)=> {
      return fetch(person.homeworld) 
        .then(response => response.json())
        .then(results => ({... results, nameOfChar: person.name}))
    })
    return Promise.all(unresolvedPromises)
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
              <FilterControls />
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
