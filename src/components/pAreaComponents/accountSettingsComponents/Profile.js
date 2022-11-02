import React from 'react'
import './Profile.css'
function Profile(props) {
  return (
    <div className={'profileContainer'+props.colors}>
        <form >
            <h3>Basics</h3>
        <span className='lineContainer'>
            <label> Name:</label>
            <input type="text"/>
        </span>
        <span className='lineContainer'>
            <label> Last Name:</label>  
            <input type="text"/>
        </span>
        <span className='lineContainer'>
            <label> Education:</label>
            <input type="text"/>
        </span>
        <span className='lineContainer'>
            <label>Profession:</label>
            <input type="text"/>
        </span>
        <span className='infoContainer'>
            <label>Information:</label>
            <input type="textarea" id="infoInput"/>
        </span>
        <div className='linksContainer'>
            <h3>Links</h3>
        <span >
            <input type="text" value="http://facebook.com/"></input>
            <input type="text"></input>
        </span>
        <span >
            <input type="text" value="http://github.com/"></input>
            <input type="text"></input>
        </span>
        <span >
            <input type="text" value="http://linkedin.com/"></input>
            <input type="text"></input>
        </span>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default Profile