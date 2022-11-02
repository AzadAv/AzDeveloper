import React, { useState } from 'react'
import './SignUp.css'

function SignUp() {
const [visible,visibleHandler] = useState(true);

function setUnvisible(){

    visibleHandler(false);
}


  return (
    
    <div className={visible ? 'backdrop':'none'} >
        <div className='signUpContainer' >
        <span className='closeButton' onClick={setUnvisible}>X</span>
        <span className='headerText'>To reach to content you should Sign Up first</span>
        <span className='container'>
            <span className='internalContainer'>
                <label>Email / Phone number</label>
                <input></input>
            </span>    
        </span>
         <span className='container'>
            <span className='internalContainer'>
                <label>Password</label>
                <input></input>
            </span>
            <span className='internalContainer'>
                <label>Repeat password</label>
                <input></input>
            </span>
        </span>
        <span className='container'>
            <h3>Sign In with :</h3>
        </span>
       
        </div> 
    </div>
  )
}

export default SignUp