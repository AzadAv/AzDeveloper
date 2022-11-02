import React from 'react'
import "./Languages.css"

import DiscoverNavbar from '../DiscoverNavbar';

import Java from './Java';
function Languages(props) {

      const en = 'Languages';
      const az = "Dillər";
      var navbarHeader = props.lang ? en : az;
    // var navbarHeader = props.lang ? data.en.languages[0]:data.az.languages[0];
    
  return (
    <div className={"languages"+props.color}>
        <DiscoverNavbar header={navbarHeader} color={props.color}/>
        <div className={'languagesMain'+props.color}>
          <Java color={props.color}/>
        </div>
        </div>
  )
}

export default Languages