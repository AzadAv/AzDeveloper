import React, { useReducer, useState, useEffect } from "react";
import "./Languages.css";

import LanguageTemplate from "./LanguageTemplate";
import Data from "./Data";

import JavaLogo from "../../../static/javaLogo.png";
function discoverNavReducer(state, action) {
  switch (action.type) {
    case "Java":
      // alert(state.data);
      return {
        value: Data.java,
        name: "Java",
        java: true,
        python: false,
        js: false,
        c: false,
      };
    case "Python":
      return {
        value: Data.python,
        name: "Python",
        java: false,
        python: true,
        js: false,
        c: false,
      };
    case "JS":
      return {
        value: Data.js,
        name: "JS",
        java: false,
        python: false,
        js: true,
        c: false,
      };
    case "C":
      return {
        value: Data.c,
        name: "C",
        java: false,
        python: false,
        js: false,
        c: true,
      };
    default:
  }
}
function Languages(props) {
  const en = "Languages";
  const az = "Dillər";
  const langDB = {
    languages: ["Java", "Python", "JS", "C"],
  };
  
  const discoverNavState = {
    value: Data.java,
    name: "Java",
    java: true,
    python: false,
    js: false,
    c: false,
  };
  const [discoverNavbar, navDispatch] = useReducer(
    discoverNavReducer,
    discoverNavState
  );

  const navbarItems = langDB.languages.map((item) => (
    <span
      className={
        "discoverNavbarItem" +
        props.color +
        (item === discoverNavbar.name ? "Active" : "" )
      }
      onClick={() => navDispatch({ type: item })}
    >
      {item}
    </span>
  ));

  return (
    <div className={"languages" + props.color}>
      <div className={"discoverNavbar" + props.color}>
        <header>{props.lang ? en : az}</header>
        <span className="navMain">{navbarItems}</span>
      </div>

      <LanguageTemplate
        color={props.color}
        data={discoverNavbar.value}
        lang={props.lang}
        content={discoverNavbar.name}
      />
    </div>
  );
}

export default Languages;
