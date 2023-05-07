import React,{useState} from 'react';
import "./Course.css"
import {useSelector, connect, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
function Course(props) {

    const styleColor = useSelector((state) =>state.style.color);

    return( 
    <div className={'Course '+props.color}>
            <div className={'courseName '+styleColor}>{props.name}</div>
            <div className={'courseExpl '+styleColor}>{props.explanation}</div>
            <NavLink to={{pathname :props.link}}>
            <div className={'courseBtn '+styleColor}>
                Begin</div>
            </NavLink>
            
    </div>
);
}

export default Course;