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
      monthArray.push({date: i+1, weekday, month, events: []})
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
      formactive: false,
      eventactive: false
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

  associateEvents = () => {
    return months.map( date => {
      date.events = [];
      this.state.events.forEach( event => {
        if(event.dayInput == date.date && event.monthInput === date.month) {
          date.events.push(event);
        };
      })
      return date;
    })
  }

  handleSelectEvent = selectedEvent => {
    const events = [...this.state.events];
    const updatedEvents = events.map( event => {
      event.active = false;
      if(event.eventname === selectedEvent.eventname && event.dayInput === selectedEvent.dayInput) {
        event.active = true;
      }
      return event
    })

    this.setState({
      events: updatedEvents,
      eventactive: selectedEvent
    })
  }

  handleCloseEvent = () => {
    const events = [...this.state.events];
    const updatedEvents = events.map( event => {
      event.active = false;
      return event;
    })
    this.setState({
      events: updatedEvents,
      eventactive: false
    })
  }

  displayDays = () => {
    const daysWithEvents = this.associateEvents();
    return daysWithEvents.map( (day, i) => {
      return <Day day={day}
                  handleDblClick={this.handleDblClick}
                  selectEvent={this.handleSelectEvent}
                  closeEvent={this.handleCloseEvent}
                  key={i} />
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