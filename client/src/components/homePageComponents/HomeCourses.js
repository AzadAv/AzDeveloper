import React from 'react'
import "./homeCourses.css"
import {useSelector, connect, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
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

  return (
    <div className={'homeCourses'+styleColor}>
      <span className='header'>
        {language? data.en.projects:data.az.projects}
      </span>
      <span className='main'>
        <div className={'homeCourseItemRed'}>
          <span className='itemHeader'>HTML</span>
          <span className='itemMain'>{language ? 'Build your first HTML DOM Document':'İlk DOM faylını necə qurmağı öyrən'}</span>
          <NavLink to="/learn/htmlFirst">
            <button className='itemBtn'>Begin</button>
          </NavLink> 
        </div>
        <div className={'homeCourseItemGreen'}>
          <span className='itemHeader'>CSS</span>
          <span className='itemMain'>{language ? 'Learn how to style HTML tags':'HTML elementlərinin formasını dəyişməyi öyrən'}</span>
          <button className='itemBtn'>Begin</button>
        </div>
        <div className={'homeCourseItemBlue'}>
          <span className='itemHeader'>JavaScript</span>
          <span className='itemMain'>{language ? 'Learn how to add JavaScript functionality to DOM elements':'Elementlərə JavaScript ilə funksionallıq əlavə et'}</span>
          <button className='itemBtn'>Begin</button>

        </div>
        
      </span>
      </div>
  )
}

export default HomeCourses