import React from 'react'
import  "./Event.css";

function Event(props) {

    const data = {
        en: {
          project: ["Instructor : ", "Topic : ", "Date : ","Description : "]
          
        },
        az: {
          project: ["Müəllif : ", "Mövzu : ", "Tarix : ", "Məlumat : "]
        },
      };
  return (
    <div className={'eventTemplate'+props.color}>
        
        
        <span className='instructorName'>
          {props.lang ? data.en.project[0]:data.az.project[0]} 
          {props.name}
        </span>
        <span className='eventTopic'>
          {props.lang ? data.en.project[1]:data.az.project[1]} 
          {props.topic}
        </span>
        <span className='eventDate'>
          {props.lang ? data.en.project[2]:data.az.project[2]} 
          {props.date}
        </span>
        <span className='eventDesc'>
          {props.lang ? data.en.project[3]:data.az.project[3]} 
          {props.description}
        </span>
        <span className='eventButtons'>
            <div className='eventButton'>Will Go</div>
            <div className='eventButton'>Get the Link</div>
            <div className='eventButton'>Interested</div>
        </span>
    
    </div>
  )
}

export default Event