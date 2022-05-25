import React from "react";
import "./Discover.css";
import { useState } from "react";

import Languages from "./Languages.js";
import Communities from "./Communities.js"

import LanguagesPng from "../images/lang.png";
import CommunitiesPng from "../images/comSign.png";
import EditorsPng from "../images/editorSign.png";

//#076AE1
function Discover(props) {
  const data = {
    en: {
      navbar: ["Languages", "Communities", "Code Editors"],
    },
    az: {
      navbar: ["Dillər", "Cəmiyyətlər", "Kod Redaktorlar"],
    },
  };

  //navbar
  const [navbarMode, navbarModeHandler] = useState(true);
  const [languages, languagesButtonHandler] = useState(false);
  const [communities, communitiesButtonHandler] = useState(false);
  const [editors, editorsButtonHandler] = useState(false);
  

  const turnOnLanguages = () => {
    if (navbarMode == true) {
      navbarModeHandler(false);
      languagesButtonHandler(true);
      communitiesButtonHandler(false);
      editorsButtonHandler(false);
      
     
    } else {
      navbarModeHandler(true);
      languagesButtonHandler(false);
      communitiesButtonHandler(false);
      editorsButtonHandler(false);
     
    }
  };
  const turnOnCommunities = () => {
    if (navbarMode == true) {
      navbarModeHandler(false);
      languagesButtonHandler(false);
      communitiesButtonHandler(true);
      editorsButtonHandler(false);

    } else {
      navbarModeHandler(true);
      languagesButtonHandler(false);
      communitiesButtonHandler(false); 
      editorsButtonHandler(false);
    }
  };
  const turnOnEditors = () => {
    if (navbarMode == true) {
      navbarModeHandler(false);
      languagesButtonHandler(false);
      communitiesButtonHandler(false);
      editorsButtonHandler(true);
    } else {
      navbarModeHandler(true);
      languagesButtonHandler(false);
      communitiesButtonHandler(false);
      editorsButtonHandler(false);
    }
  };

  return (
    <div className={props.visible ? "discoverContainer" : "None"}>
      <div className={"discoverNavbar" + (navbarMode ? "On" : "Off")}>
        <button
          onClick={turnOnLanguages}
          id={"languages"}
          className={"discoverButtons" + (navbarMode? "":"On")}
        >
          <img className={navbarMode ? "None" : "images"} src={LanguagesPng} />
          <h1 className={navbarMode ? "" : "None"}>
            {props.lang ? data.en.navbar[0] : data.az.navbar[0]}
          </h1>

          
        </button>       
        <button
          onClick={turnOnCommunities}
          id="communities"
          className={"discoverButtons"+(navbarMode? "":"On")}
        >
          <img className={navbarMode ?  "None" : "images"} src={CommunitiesPng} />
          <h1 className={navbarMode ? "" : "None"}>
            {props.lang ? data.en.navbar[1] : data.az.navbar[1]}
          </h1>
        </button>
        <button
          onClick={turnOnEditors}
          id="editors"
          className={"discoverButtons"+(navbarMode? "":"On")}
        >
          <img className={navbarMode ? "None" : "images"} src={EditorsPng} />
          <h1 className={navbarMode ? "" : "None"}>
            {props.lang ? data.en.navbar[2] : data.az.navbar[2]}
          </h1>
        </button>
      </div>
  
      <Languages languages={languages} lang={props.lang}/>
      <Communities communities={communities} lang={props.lang} />



    </div>
  );
}

export default Discover;
