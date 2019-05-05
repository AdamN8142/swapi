import React, { Component } from 'react'
import Card from './Card'
import './CardContainer.css'


class CardContainer extends Component {
    showCard = () => {
    if(this.props.categoryToShow === 'People') {
      return this.props.people.map((person) => {
        return (
          <Card 
            category={this.props.categoryToShow}
            name={person.name} 
            species={person.species}
            homeworld={person.planetName}
            population={person.population}
          />
        )
      }) 
    } else if(this.props.categoryToShow === 'Vehicles') {
      return this.props.vehicles.map((vehicle)=> {
        return (
          <Card 
            category={this.props.categoryToShow}
            name={vehicle.name}
            model={vehicle.model}
            passengers={vehicle.passengers}
            class={vehicle.vehicle_class}
          />
        )
      })
    } else if (this.props.categoryToShow === 'Planets') {
      return this.props.planets.map((planet)=> {
        return (
          <Card 
            category={this.props.categoryToShow}
            name={planet.name}
            climate={planet.climate}
            terrain={planet.terrain}
            residents={planet.residentName}
            population={planet.population}
          />
        )
      })
    }
  }
  render() {
    return(
      <div className="card-container">
        {this.showCard()}
      </div>
    )
  }
}

export default CardContainer