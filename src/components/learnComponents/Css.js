import React from 'react';
import "./Css.css";
import Course from '../UI/Course';

class Css extends React.Component {

  state = {

    
  }

  render() {

    return <div className='Css'>
        <Course name={'CSS'} explanation={'First Step'} color={'Green'}/>
        <Course name={'CSS'} explanation={'Learn deeper'} color={'Green'} />
        <span className={"l"+this.props.color}></span>
        <Course name={'CSS'} explanation={'Take assessment'} color={'Green'} />

    </div>
  }
}

export default Css;