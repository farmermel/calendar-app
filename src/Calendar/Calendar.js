import React, { Component } from 'react';
import Day from '../Day/Day';
import EventForm from '../EventForm/EventForm';
import './Calendar.css';

const weekdayArr = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
const monthArr = ['April', 'May'];

const generateMonths = () => {
  const monthArray = []
  for(let k = 0; k < 2; k++) {
    let month = monthArr[k];
    for(let i = 0; i < 30; i++) {
      let weekday = weekdayArr[(i%7)];
      monthArray.push({date: i+1, weekday, month})
    }
  }
  return monthArray;
}

const months = generateMonths();

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      formactive: false
    }
  }

  handleDblClick = day => {
    console.log(day)
    this.setState({formactive: day})
  }

  displayWeekDays = () => {
    return weekdayArr.map( wkday => {
      return <div>{wkday}</div>
    });
  }

  displayDays = () => {
    return months.map( day => {
      return <Day day={day}
                  handleDblClick={this.handleDblClick} />
    });
  }

  handleSubmit = (e, eventInfo) => {
    e.preventDefault();
    const events = [
      ...this.state.events, 
      eventInfo
    ];

    this.setState({
      events: events,
      formactive: false
    });
  }

  handleCloseForm = () => {
    this.setState({
      formactive: false
    })
  }

  render() {
    return (
      <div className="calendar">
        {this.displayWeekDays()}
        {
          this.state.formactive
          && <EventForm handleSubmit={this.handleSubmit}
                        day={this.state.formactive}
                        handleCloseForm={this.handleCloseForm} />
        }
        {this.displayDays()}
      </div>
    )
  }
}

export default Calendar;