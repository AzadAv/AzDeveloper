import React from "react";
import "./PersonalArea.css";

import SignUp from "../signupComponents/SignUp";
import AccountSettings from "./accountSettingsComponents/AccountSettings";
import Support from "./supportComponents/Support";
import UserInfo from "./userInfoComponents/UserInfo";
function PersonalArea(props) {
  const data = {
    en: {
      navbar: ["Information", "Settings", "Support"],
    },
    az: {
      navbar: ["Məlumat", "Parametrlər", "Dəstək"],
    },
  };
  return (
    <div className={"PersonalAreaContainer" + props.colors}>
      <SignUp />
      <div className={"pAreaDiv" + props.colors}>
        
        <div className="navbar">
          {props.lang
            ? data.en.navbar.map((item) => <div className={"navbarButton"+props.colors}>{item}</div>)
            : data.az.navbar.map((item) => <div className={"navbarButton"+props.colors}>{item}</div>)}
        </div>
        <UserInfo lang={props.lang} colors={props.colors}/>
        {/* <AccountSettings lang={props.lang} colors={props.colors}/> */}
        {/* <Support lang={props.lang} colors={props.colors}/> */}

     </div> 
    </div>
  );
}

export default PersonalArea;
