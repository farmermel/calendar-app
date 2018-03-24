import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
  render() {
    const {handleDblClick, day} = this.props

    return (
      <div className="day"
           onDoubleClick={() => handleDblClick(day)}>
        <p>{day.date}</p>
      </div>
    )
  }
}

export default Day;