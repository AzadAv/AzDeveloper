import React from "react";
import { useState } from "react";
import {useSelector, connect, useDispatch} from 'react-redux';
import { styleActions } from "../../store/style";
import { languageActions } from "../../store/language";
import "./Header.css";
import BrightLogo from "../images/darkLogo.png";
import DarkLogo from "../images/lightLogo.png";

function Header(props) {
  const data = {
    en: ["English", "Azerbaijani"],
    az: ["Ingiliscə", "Azərbaycanca"],
  };

  const dispatch = useDispatch();
  const language = useSelector((state) =>state.language.languageMode);

  const [enBtn, enButtonHandler] = useState(data.en[0]);
  const [azBtn, azButtonHandler] = useState(data.en[1]);

  const English = () => {
    enButtonHandler(data.en[0]);
    azButtonHandler(data.en[1]);
    dispatch(languageActions.setEnglish());
   // alert(language);
  };
  const Aze = () => {
    enButtonHandler(data.az[0]);
    azButtonHandler(data.az[1]);
    dispatch(languageActions.setAze());
    // alert(styleMode);
  };

  return (
    <div className={"navbar" + props.mode}>
      <button onClick={English} className={"button" + props.mode} id="en">
        <strong>{enBtn}</strong>
      </button>
      <div className="logo">
        <img
          src={props.modeButton ? DarkLogo : BrightLogo}
          className={props.mode}
        ></img>
      </div>
      <button onClick={Aze} className={"button" + props.mode} id="az">
        <strong>{azBtn}</strong>
      </button>
    </div>
  );
}

export default Header;
