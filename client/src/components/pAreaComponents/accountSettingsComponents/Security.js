import React from 'react'
import './Security.css'
function Security(props) {
  return (
    <div className={props.visible?'securityContainer':'none'}>
        <div className='emailContainer'>
            <label>Email:</label>
            <input type="text"></input>
            <input type='submit' value='Save' id='changeButton'></input>
        </div>
        <div className='passwordContainer'>
          <label>Change Password</label>
          <input type="text" placeholder='Enter old password'></input>
          <input type="text" placeholder='Enter new password'></input>
          <input type="text" placeholder='Re-enter new password'></input>
          <input type='submit' value='Change' id='changeButton'></input>
        </div>
    </div>
  )
}

export default Security