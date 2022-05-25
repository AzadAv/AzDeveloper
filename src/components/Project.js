import React from 'react';
import "./Project.css";

function Project(props) {

  const data = {
    en: {
      project: ["Author : ", "Languages : ", "Database Type : ","Github Repository : "]
      
    },
    az: {
      project: ["Müəllif : ", "Dillər : ", "Məlumat bazası : ", "Github keçidi : "]
    },
  };
  return (
    <div className='projectTemplate' id={props.color} >
    
      
        <h1>{props.name}</h1>
        <p>{props.lang ? data.en.project[0]:data.az.project[0]}{props.author}</p>
        <p>{props.lang ? data.en.project[1]:data.az.project[1]}{props.languages}</p>
        <p>{props.lang ? data.en.project[2]:data.az.project[2]}{props.database}</p>
        <p>{props.lang ? data.en.project[3]:data.az.project[3]}{props.link}</p>
   
    </div>
  )
}

export default Project