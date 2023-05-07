import React from "react";
import "./Discover.css";
import { useState } from "react";
import {useSelector, connect, useDispatch} from 'react-redux';

import Languages from "./languages/Languages.js";
import Communities from "./communities/Communities.js"
import Editors from "./Editors";

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

  const styleMode = useSelector((state) =>state.style.mode);
  const styleColor = useSelector((state) =>state.style.color);
  const language = useSelector((state) =>state.language.languageMode);


  
  return (
    <div className={props.visible ? "discoverContainer" : "None"}>
        
      <Languages lang={language} color={styleColor}/>
      <Communities  lang={language} color={styleColor}/>
      <Editors lang={language} color={styleColor}/>
    </div>
  );
}

export default Discover;
