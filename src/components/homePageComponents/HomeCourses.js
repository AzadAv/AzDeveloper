import React from 'react'
import "./homeCourses.css"
import {useSelector, connect, useDispatch} from 'react-redux';

import Course from '../UI/Course';
function HomeCourses() {

  const styleColor = useSelector((state) =>state.style.color);
  const language = useSelector((state) =>state.language.languageMode);

  const data = {
    en: {
      projects: ["Learn programming with AzDeveloper"],

    },
    az: {
      projects: ["AzDeveloper kursları ilə proqramlaşdırmanı öyrən"],

    },
  };

  const courseColors = {
    red: 'Red',
    blue: 'Blue',
    yellow: 'Yellow',
    green: 'Green'
  }
  return (
    <div className={'homeCourses'+styleColor}>
      <span className='header'>
        {language? data.en.projects:data.az.projects}
      </span>
      <span className='main'>
        <Course color={courseColors.blue} name={'CSS beginner'}/>
        <Course color={courseColors.red} name={'CSS beginner'}/>
        <Course color={courseColors.yellow} name={'CSS beginner'}/>
        <Course color={courseColors.green} name={'CSS beginner'}/>
      </span>
      </div>
  )
}

export default HomeCourses