import React from 'react'
import './Project.css'
function Project(props) {

  const data = {
    en: {
      project: ["Author : ", "Languages : ", "Database Type : ","See Repository : "]
      
    },
    az: {
      project: ["Müəllif : ", "Dillər : ", "Məlumat bazası : ", "Kod bazası : "]
    },
  }
  return (
    <div className='projectStyleLight'>
        <div className={props.pStyle}>{props.name}</div>
        <div className={'description'+props.colors}>
            <span>description</span>
            <span>{props.lang ? data.en.project[1]:data.az.project[1]}{props.languages}</span>
            <span>{props.lang ? data.en.project[2]:data.az.project[2]}{props.database}</span>
        </div>
        <div className='seeRepo'>See repository</div>
    </div>
  )
}

export default Project