import React from 'react'
import './Events.css'
import Event from '../UI/Event'
function AddEvent(props){

  return(<div >

    <form className={'addEventForm'+props.color}>
      <span>
        <label>Event Subject</label>
        <input type="text"/>
      </span>
      <span>
      <label>Description</label>
      <textarea id="text"></textarea>
      </span>
      <span>
      <label>Date</label>
      <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></input>
       </span>
       <span>
          <label>Link</label>
          <input type='text' />
       </span>
       <button className='eventAddButton'>Add</button>
    </form>
  </div>)
}

function SearchEvent(props){

  return(<div className={'searchBar'+props.color}>
    <label>Event Name</label>
       <input type="text"></input>
       <label>Instructor</label>
       <input type="text"></input>
       <label>Date</label>
       <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></input>
       <label>Link</label>
       <input type="text"/>
       <button className='eventSearchButton'>Search</button>
  </div>)
}

function Events(props) {
  return (
    <div className={'eventsPageContainer'+props.colors}>
      
      <SearchEvent color={props.colors}/>
      <span style={{display:'flex',flexDirection:'row',marginTop:'50px'}}>
        <AddEvent color={props.colors}/>
        <Event color={props.colors} lang={props.lang}/>
       
      </span>
    </div>
  )
} 

export default Events