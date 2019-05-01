import React, { Component } from 'react'
import './Splash.css'


class Splash extends Component{

  handleClick = (e) => {
    e.preventDefault();
    this.props.enterApp();
  }

  render(){
    return (
      <div className="splash">
        <button className="enter-button" onClick={this.handleClick}>ENTER</button>
        <div className="fade">
          <div className="star-wars">
            <div className="crawl">
              <div className="name-and-date">
                <h1>{this.props.scroll.title}</h1>
                <p>{this.props.scroll.release_date}</p>
              </div>
              <p>{this.props.scroll.opening_crawl}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash 