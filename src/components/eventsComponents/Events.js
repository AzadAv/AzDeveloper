import React from 'react'
import './Events.css'
import Event from '../UI/Event'
function Events(props) {
  return (
    <div className={'eventsPageContainer'+props.colors}>
      <div className='searchBar'>
       <label>Event Name</label>
       <input type="text"></input>
       <label>Instructor</label>
       <input type="text"></input>
       <label>Date</label>
       <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></input>

      </div>
      <Event color={props.colors}/>
    </div>
  )
} 

export default Events