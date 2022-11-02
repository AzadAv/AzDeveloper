import React, { useReducer } from "react";
import "./Learn.css";
import { useSelector, connect, useDispatch } from "react-redux";
import Html from "./Html";
import Css from "./Css";
import JS from "./JavaScript";

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
  const styleColor = useSelector((state) => state.style.color);
  
  

  return (
    <div className={props.visible ? "learnContainer" : "None"}>
      <div className={"lcontentContainer"+styleColor}>
        <Html color={styleColor}/>
        <Css color={styleColor}/>
        <JS color={styleColor}/> 
      </div>
      <div className={"successRateContainer"+styleColor}>
        <span>Success Rate</span>
        <span> 0.1 %</span>
        <div className="successBar"></div>
      </div>
    </div>
  );
}

export default Learn;
