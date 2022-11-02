import React from 'react';
import "./Course.css"
import {useSelector, connect, useDispatch} from 'react-redux';
function Course(props) {

    const styleColor = useSelector((state) =>state.style.color);
    return( 
    <div className={'Course '+props.color}>
            <div className={'courseName '+styleColor}>{props.name}</div>
            <div className={'courseExpl '+styleColor}>{props.explanation}</div>
            <div className={'courseBtn '+styleColor}>Begin</div>
    </div>
);
}

export default Course;