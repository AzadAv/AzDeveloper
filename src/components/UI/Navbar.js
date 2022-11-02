import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, { Suspense, useContext,useReducer } from 'react';

function navbarReducer(state,action) {

  switch(action.type){
    case 'home':
 
      return {
        home:true,
        discover: false,
        learn: false,
        dictionary:false,
        editor:false
      };
    case 'discover':
     
      return {
        home:false,
        discover: true,
        learn: false,
        dictionary:false,
        editor:false
      };
    case 'learn':
     
        return {
          home:false,
          discover: false,
          learn: true,
          dictionary:false,
          editor:false
        };
    case 'dictionary':
     
          return {
            home:false,
            discover: false,
            learn: false,
            dictionary: true,
            editor:false
          };
    case 'editor':
       
            return {
              home:false,
              discover: false,
              learn: false,
              dictionary: false,
              editor: true
            };
    case 'projects':
            return {

              home:false,
              discover: false,
              learn: false,
              dictionary: false,
              editor: false,
              projects: true,
              lessons: false
            }
    case 'lessons':
            return {
              home:false,
              discover: false,
              learn: false,
              dictionary: false,
              editor: false,
              projects: false,
              lessons: true
            }
    case 'pArea':
              return {
                home:false,
                discover: false,
                learn: false,
                dictionary: false,
                editor: false,
                projects: false,
                lessons: false
              }
    default:
      throw new Error();
  }
}
function Navbar(props) {

    //Navbar reducer
  const navbarState = {

    home:false,
    discover: false,
    learn: false,
    dictionary:false,
    editor:false,
    projects:false,
    lessons:false,
    pArea:false
  }
  const [navbar, navbarDispatch] = useReducer(navbarReducer,navbarState);
  //Language config
  const data = {
    en: {
      navbar: [
        "Home Page",
        "Explore",
        "Learn",
        "Dictionary",
        "Online Editor",
        "Personal Area",
        "User",
        "Projects",
        "Events"
      ],
    },
    az: {
      navbar: [
        "Əsas səhifə",
        "Kəşf et",
        "Öyrən",
        "Lüğət",
        "Onlayn editor",
        "Şəxsi otaq",
        "Istifadəçi",
        "Proyektlər",
        "Dərslər"
      ],
    },
  };

  return (
    <div className={"homePageNavbar"+props.colors}>
    <span className={"userName"}>
      {props.lang
        ? "Hi, " + data.en.navbar[6] + "!"
        : "Salam, " + data.az.navbar[6] + "!"}
    </span>
    <NavLink to="/home" className={'navLink'}>      
        <button className={"homePageButtons" + props.colors} 
        id={navbar.home ? "Active":""}
        onClick={() => navbarDispatch({type:'home'})}
        >          
              {props.lang ? data.en.navbar[0] : data.az.navbar[0]}             
        </button>
    </NavLink>
    <NavLink to="/discover" className={'navLink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.discover ? "Active":""}
        onClick={() => navbarDispatch({type:'discover'})}>
              {props.lang ? data.en.navbar[1] : data.az.navbar[1]}
        </button>
    </NavLink>
    <NavLink to="/projects" className={'navLink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.projects ? "Active":""}
        onClick={() => navbarDispatch({type:'projects'})}>
              {props.lang ? data.en.navbar[7] : data.az.navbar[7]}
        </button>
    </NavLink>
    <NavLink to='/learn' className={'navlink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.learn ? "Active":""}
        onClick={() => navbarDispatch({type:'learn'})}>
            {props.lang ? data.en.navbar[2] : data.az.navbar[2]}
        </button>
    </NavLink>
    <NavLink to='/dictionary' className={'navlink'}>
    <button className={"homePageButtons" + props.colors}
    id={ navbar.dictionary ? "Active":""}
    onClick={() => navbarDispatch({type:'dictionary'})}>
      {props.lang ? data.en.navbar[3] : data.az.navbar[3]}
    </button>
    </NavLink>
    <NavLink to="/events" className={'navLink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.lessons ? "Active":""}
        onClick={() => navbarDispatch({type:'lessons'})}>
              {props.lang ? data.en.navbar[8] : data.az.navbar[8]}
        </button>
    </NavLink>
    <NavLink to='/editor' className={'navlink'}>
    <button className={"homePageButtons" + props.colors}
    id={ navbar.editor ? "Active":""}
    onClick={() => navbarDispatch({type:'editor'})}>
      {props.lang ? data.en.navbar[4] : data.az.navbar[4]}
    </button>
    </NavLink>
    <NavLink to='/pArea' className={'navlink'}>
    <button className={"homePageButtons" + props.colors} id="pArea"
     onClick={() => navbarDispatch({type:'pArea'})}>
      {/* {props.lang ? data.en.navbar[5] : data.az.navbar[5]} */}
      AA
    </button>
    </NavLink>
  </div>
  )
}

export default Navbar