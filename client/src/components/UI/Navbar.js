import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, { Suspense, useContext, useReducer,useEffect } from "react";
import { useLocation } from 'react-router-dom';
function navbarReducer(state, action) {
  switch (action.type) {
    case "/":
      return {
        home: false,
        explore: false,
        learn: false,
        dictionary: false,
        editor: false,
      };
    case "/home":
      return {
        home: true,
        explore: false,
        learn: false,
        dictionary: false,
        editor: false,
      };
    case "/explore":
      return {
        home: false,
        explore: true,
        learn: false,
        dictionary: false,
        editor: false,
      };
    case "/learn":
      return {
        home: false,
        explore: false,
        learn: true,
        dictionary: false,
        editor: false,
      };
    case "/dictionary":
      return {
        home: false,
        explore: false,
        learn: false,
        dictionary: true,
        editor: false,
      };
    case "/editor":
      return {
        home: false,
        explore: false,
        learn: false,
        dictionary: false,
        editor: true,
      };
    case "/projects":
      return {
        home: false,
        explore: false,
        learn: false,
        dictionary: false,
        editor: false,
        projects: true,
        lessons: false,
      };
    case "/lessons":
      return {
        home: false,
        explore: false,
        learn: false,
        dictionary: false,
        editor: false,
        projects: false,
        lessons: true,
      };
    case "/pArea":
      return {
        home: false,
        explore: false,
        learn: false,
        dictionary: false,
        editor: false,
        projects: false,
        lessons: false,
      };
    default:
      return {
        landing: true,
        home: false,
        explore: false,
        learn: false,
        dictionary: false,
        editor: false,
        projects: false,
        lessons: false,
        pArea: false,
      }
  }
}

function Navbar(props) {
  //Navbar reducer
  const navbarState = {
    landing: true,
    home: false,
    explore: false,
    learn: false,
    dictionary: false,
    editor: false,
    projects: false,
    lessons: false,
    pArea: false,
  };
  const [navbar, navbarDispatch] = useReducer(navbarReducer, navbarState);
  //Language config
  const data = {

    en: {
      navbar: [
        "Home",
        "Explore",
        "Projects",
        "Learn",
        "Dictionary",
        "Editor",
        "Events",
      ],
    },
    az: {
      navbar: [
        "Əsas səhifə",
        "Kəşf et",
        "Proyektlər",
        "Öyrən",
        "Lüğət",
        "Onlayn editor",
        "Dərslər",
      ],
    },
  };
  const location = useLocation();
  useEffect(() => {
    // Google Analytics
  //  alert(location.pathname);
   // console.log(location.pathname);
   navbarDispatch({type:location.pathname})
  }, [location]);

  return (
    <div className={"homePageNavbar" + props.colors}>
      <span className={"userName"}>
        {props.lang
          ? "Hi, " + "User" + "!"
          : "Salam, " + "User" + "!"}
      </span>
      <NavLink to="/home" className={'navLink'}>      
        <button className={"homePageButtons" + props.colors} 
        id={navbar.home ? "Active":""}
        onClick={() => navbarDispatch({type:'/home'})}
        >          
              {props.lang ? data.en.navbar[0] : data.az.navbar[0]}             
        </button>
    </NavLink>
    <NavLink to="/explore" className={'navLink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.explore ? "Active":""}
        onClick={() => navbarDispatch({type:'/explore'})}>
              {props.lang ? data.en.navbar[1] : data.az.navbar[1]}
        </button>
    </NavLink>
    <NavLink to="/projects" className={'navLink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.projects ? "Active":""}
        onClick={() => navbarDispatch({type:'/projects'})}>
              {props.lang ? data.en.navbar[2] : data.az.navbar[2]}
        </button>
    </NavLink>
    <NavLink to='/learn' className={'navlink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.learn ? "Active":""}
        onClick={() => navbarDispatch({type:'/learn'})}>
            {props.lang ? data.en.navbar[3] : data.az.navbar[3]}
        </button>
    </NavLink>
    <NavLink to='/dictionary' className={'navlink'}>
    <button className={"homePageButtons" + props.colors}
    id={ navbar.dictionary ? "Active":""}
    onClick={() => navbarDispatch({type:'/dictionary'})}>
      {props.lang ? data.en.navbar[4] : data.az.navbar[4]}
    </button>
    </NavLink>
    <NavLink to="/lessons" className={'navLink'}>
        <button className={"homePageButtons" + props.colors}
        id={navbar.lessons ? "Active":""}
        onClick={() => navbarDispatch({type:'/lessons'})}>
              {props.lang ? data.en.navbar[6] : data.az.navbar[6]}
        </button>
    </NavLink>
    <NavLink to='/editor' className={'navlink'}>
    <button className={"homePageButtons" + props.colors}
    id={ navbar.editor ? "Active":""}
    onClick={() => navbarDispatch({type:'/editor'})}>
      {props.lang ? data.en.navbar[5] : data.az.navbar[5]}
    </button>
    </NavLink>
    <NavLink to='/pArea' className={'navlink'}>
    <button className={"homePageButtons" + props.colors} id="pArea"
     onClick={() => navbarDispatch({type:'/pArea'})}>
      AA
    </button>
    </NavLink>

    </div>
  );
}

export default Navbar;
