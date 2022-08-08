import React from 'react';
import "./Course.css"

class Course extends React.Component {


render(){

    return <div className='Course' id={this.props.color}>
        {this.props.name}
       
    </div>

}

}

export default Course;