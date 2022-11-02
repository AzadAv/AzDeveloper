import React from 'react'
import "./UserInfo.css"

import Course from '../../UI/Course'
import Event from '../../UI/Event'
import Project from '../../UI/Project'
function UserInfo(props) {
  return (
    <div className={'userInfo'+props.colors}>
        
      <span className='header'>
                <div className="img"></div>
                <div>User Name</div>
            <div></div>
      </span> 
      <span className='main'>
                <span className='mainContainer'>
                   <h3>Info</h3> 
                   <p>Number of Projects</p>
                   <p>Number of participated Events</p>
                </span>
                <span className='mainContainer'>
                  <h3> Projects</h3> 
                  <Project/>
                </span>
                <span className='mainContainer'>
                    <h3>Courses</h3>
                    <Course />
                </span>
                <div className='mainContainer'>
                   <h3>Events</h3> 
                   <Event color={props.colors}/>
                </div>
                
      </span>
    </div>
  )
}

export default UserInfo