import React from 'react'
import './Learn.css'

function Learn(props) {
  return (
    <div className={props.visible ? "learnContainer":"None"}>
        
       <div  className='learnDivs'>HTML  DOM Document and</div>
       <div  className='learnDivs'>CSS properties</div>
       <div  className='learnDivs'>JavaScript</div>
        
    </div>
  )
}

export default Learn