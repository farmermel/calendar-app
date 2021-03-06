import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';
import './App.css';

const starterEvents = [
  {eventname: 'Friend Bday', starttime: '8:00', endtime: '13:00', dayInput: '3', monthInput: 'April'},
  {eventname: 'Star gazing', starttime: '11:00', endtime: '17:00', dayInput: '6', monthInput: 'April'},
  {eventname: 'Hike with Wren', starttime: '7:00', endtime: '15:00', dayInput: '14', monthInput: 'May'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>April <span>2018</span></h1>
        <Calendar events={starterEvents} />
      </div>
    );
  }
}

export default App;