import React from 'react';
import './Day.css';

const displayEvents = (events, selectEvent, closeEvent) => {
  return events.map( (event, i) => {
    return (
      <div className='event-name'>
        <p onClick={() => selectEvent(event)}
           key={i}>{event.eventname}</p>
        {
          event.active &&
          (<article className='event-details'>
            <button onClick={closeEvent}>X</button>
            <h3>{event.eventname}</h3>
            <p>Date: {`${event.monthInput} ${event.dayInput}`}</p>
            <p>Start: {event.starttime}</p>
            <p>End: {event.endtime}</p>
           </article>)
        }
      </div>
    )
  })
}

const Day = ({handleDblClick, day, selectEvent, closeEvent}) => {
  return (
    <div className='day'
         onDoubleClick={() => handleDblClick(day)}>
      <p>{day.date === 1 
          ? `${day.month} ${day.date}` 
          : day.date}</p>
      <section className='events-wrap'>
        {
          day.events && displayEvents(day.events, selectEvent, closeEvent)
        }
      </section>
    </div>
  )
}

export default Day;