import React from 'react'
import './Privacy.css'
function Privacy(props) {
  return (
    <div className={props.visible?'privacyContainer':'none'}>
        <form>
       <h2>Privacy settings</h2> 
        <span >
            <input type='checkbox'></input>
            <label>Show my projects to other users</label>
        </span>
        <span>
            <input type='checkbox'></input>
            <label>Show my lessons to other users</label>
        </span>
        <span>
            <input type='checkbox'></input>
            <label>Show my personal information to other users</label>
        </span>
        <input type='submit' value='Save' id='privacySubmit'></input>
       </form> 
    </div>

  )
}

export default Privacy