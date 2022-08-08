import React, { useReducer } from "react";
import "./Learn.css";

import Html from "../learnComponents/Html"
import Css from "../learnComponents/Css"
import JS from "../learnComponents/JavaScript"

const defaultNavState = {
  html: true,
  css: false,
  js: false,
};

const navReducer = (state, action) => {
  if (action.type === "HTML") {
    return {
      html: true,
      css: false,
      js: false,
    };
  }

  if (action.type === "CSS") {
    return {
      html: false,
      css: true,
      js: false,
    };
  }

  if (action.type === "JS") {
    return {
      html: false,
      css: false,
      js: true,
    };
  }

  return defaultNavState;
};

function Learn(props) {
  const [navState, dispatchNav] = useReducer(navReducer, defaultNavState);

  const showHtml = ()=>{

    dispatchNav({type:"HTML"});
  }

  const showCss = ()=>{

    dispatchNav({type:"CSS"});
  }

  const showJs = ()=>{

    dispatchNav({type:"JS"});
  }

  return (
    <div className={props.visible ? "learnContainer" : "None"}>
      <nav>
        <ul>
          <li>
            <button onClick={showHtml}>DOM/HTML elements</button>
          </li>
          <li>
            <button onClick={showCss}>CSS properties</button>
          </li>
          <li>
            <button onClick={showJs}>JS</button>
          </li>
        </ul>
      </nav>

      {/* <div className={navState.html ? "learnDivs" : "None"}>HTML DOM Document and</div> */}
      {navState.html ? <Html />:null }
      {navState.css ? <Css />:null }
      {navState.js ? <JS />:null }
      
    </div>
  );
}

export default Learn;
