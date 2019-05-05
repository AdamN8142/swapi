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
      vehicles: [],
      planets:[],
      pageStatus: 'splash',
      randomNumber: 0,
     
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
    this.fetchVehicles()
    this.fetchPlanets()
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

  fetchVehicles = () => {
    const url = "https://swapi.co/api/vehicles"
      fetch(url) 
        .then(response => response.json())
        .then(results => results.results)
        .then(results => this.setState({
          vehicles: results
        }))
  }

  fetchPeople = () => {
    const url = "https://swapi.co/api/people/"
      fetch(url)
        .then(response => response.json())
        .then(homeWorlds => this.fetchHomeworlds(homeWorlds.results))
        .then(species => this.fetchSpecies(species))
        .then(data => this.setState({
          people: data
        }))
        .catch(error => console.log(error))
  }

  fetchSpecies = (peopleArr) => {
    let unresolvedPromises = peopleArr.map((person) => {
      return fetch(person.species[0])
      .then(response => response.json())
      .then(data => ({...person, species: data.name}))
    })
    return Promise.all(unresolvedPromises)
  }


  fetchHomeworlds = (peopleArr) => {
    let unresolvedPromises = peopleArr.map((person)=> {
      return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({...person, planetName: data.name, population:data.population}))
    })
    return Promise.all(unresolvedPromises)
  }

  fetchPlanets = () => {
    const url = "https://swapi.co/api/planets"
      fetch(url)
        .then(response => response.json())
        .then(results => this.fetchResidents(results.results))
        .then(data => this.setState({
          planets: data
    }))
    .catch(error => console.log(error))
  }

  fetchResidents = (planetsArr) => {
    let unresolvedPromises = planetsArr.map((planet)=> {
      return this.fetchNames(planet.residents)
      .then(data => ({...planet, residentName: data}))
    })
    return Promise.all(unresolvedPromises)
  }

  fetchNames = (residents) => {
    let unresolvedPromises = residents.map((resident)=> {
      return fetch(resident)
      .then(response => response.json())
      .then(data => (data.name))
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
            <div className="app">
              <Header />
              <FilterControls     
                people={this.state.people}
                vehicles={this.state.vehicles}
                planets={this.state.planets}
              />
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
