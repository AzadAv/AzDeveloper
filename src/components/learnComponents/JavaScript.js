import React from 'react';
import "./JavaScript.css";
import Course from '../UI/Course';

class JavaScript extends React.Component {

  state = {

    
  }

  render() {

    return <div className='JS'>

        <Course name={'JavaScript'} explanation={'First Step'} color={'Blue'}/>
        <Course name={'JavaScript'} explanation={'Learn deeper'} color={'Blue'} />
        <span className={"l"+this.props.color}></span>
        <Course name={'JavaScript'} explanation={'Take assessment'} color={'Blue'} />

    </div>
  }
}

export default JavaScript;