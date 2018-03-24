import React, { Component } from 'react';
import './Day.css';

const displayEvents = events => {
  console.log(events)
  return events.map( event => {
    return <p className='event-name'>{event.eventname}</p>
  })
}

const Day = ({handleDblClick, day}) => {
  return (
    <div className='day'
         onDoubleClick={() => handleDblClick(day)}>
      <p>{day.date}</p>
      {
        day.events && displayEvents(day.events)
      }
    </div>
  )
}

export default Day;