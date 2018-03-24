import React, { Component } from 'react';
import './EventForm.css';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: '',
      starttime: '',
      endtime: '',
      dayInput: this.props.day.date,
      monthInput: this.props.day.month
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    this.props.handleSubmit(e, this.state);
  }

  render() {
    return (
      <form id='event-form'
            onSubmit={this.handleSubmit}>
        <legend>Add an event</legend>
        <label htmlFor='eventname-input'>Event Name</label>
        <input type='text' 
               id='eventname-input'
               value={this.state.eventname}
               name='eventname'
               onChange={this.handleChange} />
        <label htmlFor='day-input'>Day</label>
        <input type='text'
               id='day-input'
               value={this.state.dayInput}
               name='dayInput'
               onChange={this.handleChange} />
        <label htmlFor='month-input'>Month</label>
        <input type='text' 
               id='month-input'
               value={this.state.monthInput}
               name='monthInput'
               onChange={this.handleChange} />
        <label htmlFor='starttime-input'>Start Time</label>
        <input type='text' 
               id='starttime-input'
               value={this.state.starttime}
               name='starttime'
               onChange={this.handleChange} />
        <label htmlFor='end'>End Time</label>
        <input type='text' 
               id='endtime-input'
               value={this.state.endtime}
               name='endtime'
               onChange={this.handleChange} />
        <button>Create Event</button>
        <button onClick={this.props.handleCloseForm}>X</button>
      </form>
    )
  }
}

export default EventForm;