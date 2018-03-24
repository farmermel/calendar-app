import React, { Component } from 'react';
import Day from '../Day/Day';
import './Calendar.css';

const aprilWeekdayArr = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
const mayWeekdayArr = ['Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon'];
//refactor this to use common array with offset for day

const weekdayArr = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];


const generateMonths = () => {
  const monthArray = []
  for(let k = 0; k < 2; k++) {
    for(let i = 0; i < 30; i++) {
      let weekday = weekdayArr[(i%7)];
      monthArray.push({date: i+1, weekday})
    }
  }
  return monthArray;
}

const months = generateMonths();
console.log(months)

// const april = generateMonth(aprilWeekdayArr);
// const may = generateMonth(mayWeekdayArr);

const displayDays = () => {
  return months.map( day => {
    return <Day day={day} />
  })
}

const displayWeekDays = () => {
  return weekdayArr.map( wkday => {
    return <div>{wkday}</div>
  })
}

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        {displayWeekDays()}
        {displayDays()}
      </div>
    )
  }
}

export default Calendar;