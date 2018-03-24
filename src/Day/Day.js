import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
  render() {
    return (
      <div className="day">
        <p>{this.props.day.date}</p>
      </div>
    )
  }
}

export default Day;