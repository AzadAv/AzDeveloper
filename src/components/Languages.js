import React from 'react'
import "./Languages.css"

function Languages(props) {

    const data = {
        en: {
          languages: ["Languages"],
        },
        az: {
          languages: ["Dillər"],
        },
      };

    
  return (
    <div className={props.languages ? "languages" : "None"}>
        
       <h1>{props.lang ? data.en.languages[0]:data.az.languages[0]}</h1>
        
        </div>
  )
}

export default Languages