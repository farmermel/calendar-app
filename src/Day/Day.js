import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
  render() {
  console.log(this.props.day)
    return (
      <div className="calendar">
        <p>{this.props.day.date}</p>
      </div>
    )
  }
}

export default Day;