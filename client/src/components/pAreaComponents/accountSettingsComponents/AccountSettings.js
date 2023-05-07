import React, { useReducer, useState } from "react";
import "./AccountSettings.css";

import Profile from "./Profile";
import Photo from "./Photo";
import Security from "./Security";
import Privacy from "./Privacy";
import Support from "../supportComponents/Support";
import { NavLink } from "react-router-dom";

function settingsNavbarReducer(state, action) {
  switch (action.type) {
    case "Support":
    
      return {
        value:"Support",
        support: true,
        photo: false,
        security: false,
        privacy: false,
      };
    case "Photo":
      return {
        value:"Photo",
        support: false,
        photo: true,
        security: false,
        privacy: false,
      };
    case "Security":
      return {
        value:"Security",
        support: false,
        photo: false,
        security: true,
        privacy: false,
      };
    case "Privacy":
      return {
        value:"Privacy",
        support: false,
        photo: false,
        security: false,
        privacy: true,
      };
    default:
      return {};
  }
}
function AccountSettings(props) {
  const settingsNavbarState = {
    value:"Profile",
    support: true,
    photo: false,
    security: false,
    privacy: false,
  };
  const [settingsNavbar, settingsNavbarDispatch] = useReducer(
    settingsNavbarReducer,
    settingsNavbarState
  );

  // console.log(settingsNavbar);
  return (
    <div className={"acContainer" + props.colors}>
      <div className={"acNavbar" + props.colors}>
        {/* <div className="img"></div> */}
        <div style={{ marginTop: "10%" }}>
          {/* {navbar} */}
         
          <div
            className={"acNavbarBtn" + props.colors}
            onClick={() => settingsNavbarDispatch({ type: "Photo" })}
          >
            {props.lang ? "Photo" : "Şəkil"}
          </div>
          <div
            className={"acNavbarBtn" + props.colors}
            onClick={() => settingsNavbarDispatch({ type: "Security" })}
          >
            {props.lang ? "Security" : "Güvənlik"}
          </div>
          <div
            className={"acNavbarBtn" + props.colors}
            onClick={() => settingsNavbarDispatch({ type: "Privacy" })}
          >
            {props.lang ? "Privacy" : "Gizlilik"}
          </div>
           <div
            className={"acNavbarBtn" + props.colors}
            onClick={() => settingsNavbarDispatch({ type: "Support" })}
          >
            {props.lang ? "Support" : "Dəstək"}
          </div>
        </div>
      </div>
      <span className="layout">
        <div className={"acHeader" + props.colors}>{settingsNavbar.value}</div>
        <div className="acMain">
          <Support colors={props.colors} visible={settingsNavbar.support}/>
          <Photo colors={props.colors} visible={settingsNavbar.photo}/>
          <Security colors={props.colors} visible={settingsNavbar.security}/>
          <Privacy colors={props.colors} visible={settingsNavbar.privacy}/>
        </div>
      </span>
    </div>
  );
}

export default AccountSettings;
