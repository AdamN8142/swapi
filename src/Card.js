import React, { Component }from 'react'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <article className="individual-card">
        <div>
          <button className="favorite-btn">FAVORITE</button>
        </div>
        {this.props.name && <p className="card-name">{this.props.name}</p>}
        {this.props.species && <p>Species: {this.props.species}</p>}
        {this.props.homeworld && <p>Homeworld: {this.props.homeworld}</p>}
        {this.props.population && <p>Population: {this.props.population}</p>}
        {this.props.model && <p>Model: {this.props.model}</p>}
        {this.props.class && <p>Class: {this.props.class}</p>}
        {this.props.passengers && <p>Max Capactiy: {this.props.passengers}</p>}
        {this.props.climate && <p>Climate: {this.props.climate}</p>}
        {this.props.terrain && <p>Terrain: {this.props.terrain}</p>}
        {this.props.residents && this.props.residents.map((resident)=> {
          return <p>{resident}</p>
        })}
      </article>
    )
  }
}




export default Card;