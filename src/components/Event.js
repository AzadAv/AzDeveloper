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
    <div className='eventTemplate' id={props.color}>
        
        
        <p>{props.lang ? data.en.project[0]:data.az.project[0]} {props.name}</p>
        <p>{props.lang ? data.en.project[1]:data.az.project[1]} {props.topic}</p>
        <p>{props.lang ? data.en.project[2]:data.az.project[2]} {props.date}</p>
        <p>{props.lang ? data.en.project[3]:data.az.project[3]} {props.description}</p>
    
    </div>
  )
}

export default Event