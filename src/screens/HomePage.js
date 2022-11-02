import React, { Suspense, useContext,useReducer } from 'react';
import { useState } from "react";
import "./HomePage.css";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { NavLink } from "react-router-dom";

import Home from "../components/homePageComponents/Home";
import Discover from "../components/discoverComponents/Discover";
import Learn from "../components/learnComponents/Learn";
import Dictionary from '../components/dictionaryComponents/Dictionary'
import Editor from "../components/editorComponents/Editor";

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
    default:
      throw new Error();
  }
}
function NavbarButton(props){

  //Navbar reducer
  const navbarState = {

    home:true,
    discover: false,
    learn: false,
    dictionary:false,
    editor:false
  }
  const [navbar, navbarDispatch] = useReducer(navbarReducer,navbarState);

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
      ],
    },
  };

  // const buttonsInEnglish = data.en.map((item))
  return(
  <button className={"homePageButtons" + props.colors}
      id={navbar.discover ? "Active":""}
      onClick={() => navbarDispatch({type:'discover'})}>
        {props.lang ? data.en.navbar[1] : data.az.navbar[1]}
  </button>
 );
}
function HomePage(props) {

  //Navbar reducer
  const navbarState = {

    home:true,
    discover: false,
    learn: false,
    dictionary:false,
    editor:false
  }
  const [navbar, navbarDispatch] = useReducer(navbarReducer,navbarState);
  //Language config
  const data = {
    en: {
      navbar: [
        "Home Page",
        "Discover",
        "Learn",
        "Dictionary",
        "Online Editor",
        "Personal Area",
        "User",
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
      ],
    },
  };

  return (
    <div className={"homePageContainer" + props.colors}>
      <div className="homePageNavbar">
      <p id={"userName" + props.colors}>
        {props.lang
          ? "Hi, " + data.en.navbar[6] + "!"
          : "Salam, " + data.az.navbar[6] + "!"}
      </p>

      <button className={"homePageButtons" + props.colors} 
       id={navbar.home ? "Active":""}
       onClick={() => navbarDispatch({type:'home'})}
        >
          {props.lang ? data.en.navbar[0] : data.az.navbar[0]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={navbar.discover ? "Active":""}
      onClick={() => navbarDispatch({type:'discover'})}>
        {props.lang ? data.en.navbar[1] : data.az.navbar[1]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={navbar.learn ? "Active":""}
      onClick={() => navbarDispatch({type:'learn'})}>
        {props.lang ? data.en.navbar[2] : data.az.navbar[2]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={ navbar.dictionary ? "Active":""}
      onClick={() => navbarDispatch({type:'dictionary'})}>
        {props.lang ? data.en.navbar[3] : data.az.navbar[3]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={ navbar.editor ? "Active":""}
      onClick={() => navbarDispatch({type:'editor'})}>
        {props.lang ? data.en.navbar[4] : data.az.navbar[4]}
      </button>
      <button className={"homePageButtons" + props.colors} id="pArea">
        {props.lang ? data.en.navbar[5] : data.az.navbar[5]}
      </button>
    </div>
      
      <Home visible={navbar.home}  />
      <Discover colors={props.colors} lang={props.lang} visible={navbar.discover}/>
      <Learn colors={props.colors} lang={props.lang} visible={navbar.learn} />
      <Dictionary colors={props.colors} lang={props.lang} visible={navbar.dictionary} />
      {/* <Editor colors={props.colors} lang={props.lang} visible={editor} /> */}
      
    </div>
  );
}

export default HomePage;
