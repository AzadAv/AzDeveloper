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

  function goToUserInfo() {
    window.scrollTo({
      top: document.getElementById("userInfo").offsetTop,
      behavior: "smooth",
    });
  }

  function goToSettings() {
    window.scrollTo({
      top: document.getElementById("settings").offsetTop,
      behavior: "smooth",
    });
  }

  function goToSupport() {
    window.scrollTo({
      top: document.getElementById("support").offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <div className={"PersonalAreaContainer" + props.colors}>
      <SignUp />
      <div className={"pAreaDiv" + props.colors}>
        <div className="navbar">
          <div className="userNameContainer">User Name</div>
          <div
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <div className={"navbarButton" + props.colors}
                 onClick={goToUserInfo}>
              {props.lang ? "Information" : "Məlumat"}
            </div>
            <div className={"navbarButton" + props.colors}
                 onClick={goToSettings}>
              {props.lang ? "Settings" : "Parametrlər"}
            </div>
            <div
              className={"navbarButton" + props.colors}
              onClick={goToSupport}
            >
              {props.lang ? "Support" : "Dəstək"}
            </div>
          </div>
          <div className="img"></div>
        </div>
        <div id="userInfo">
          <UserInfo lang={props.lang} colors={props.colors} />
        </div>
        <div id="settings">
          <AccountSettings lang={props.lang} colors={props.colors} />
        </div>
        <div id="support">
          <Support lang={props.lang} colors={props.colors} />
        </div>
      </div>
    </div>
  );
}

export default PersonalArea;
