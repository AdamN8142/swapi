import React, { Component } from 'react'
import CardContainer from './CardContainer'
import './FilterControls.css'


class FilterControls extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
 
  //Why do i need to have an empty state for this to work? 

  setCategory = (event) => {
    this.setState({
      categoryToShow: event.target.innerText
    })
  }

  render() {
    return (
      <div>
        <div className="buttons">
          <button className="button" onClick={this.setCategory}>People</button>
          <button className="button" onClick={this.setCategory}>Planets</button>
          <button className="button" onClick={this.setCategory}>Vehicles</button>
          <button className="button">Favorites</button>
        </div>
        <CardContainer 
          people={this.props.people}
          planets={this.props.planets}
          vehicles={this.props.vehicles}
          categoryToShow={this.state.categoryToShow}/>
        </div>
    )
  }
}



export default FilterControls
