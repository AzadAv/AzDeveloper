import React from 'react';
import { useState } from "react";

import './Header.css'
import BrightLogo from "../images/darkLogo.png";
import DarkLogo from "../images/lightLogo.png"

function Header(props) {



  const data = {en:['English','Azerbaijani'],
                az:['Ingiliscə','Azərbaycanca']};

  const [enBtn, enButtonHandler] = useState(data.en[0]);
  const [azBtn, azButtonHandler] = useState(data.en[1]);

  const setEnglish = () => {

      enButtonHandler(data.en[0]);
      azButtonHandler(data.en[1]);
  }
  const setAze = () => {

    enButtonHandler(data.az[0]);
    azButtonHandler(data.az[1]);

  }
  var modeHandler = true;
  if (props.colors == "Dark"){

    modeHandler = false;
  }
  else {

    modeHandler = true;
  }
  return (<div className={'navbar'+props.colors}>
  <button onClick={setEnglish} className={'button'+props.colors} id="en"><strong>{enBtn}</strong></button>
    <div className='logo'><img src={modeHandler ? DarkLogo:BrightLogo} className={props.colors}></img></div>
      <button onClick={setAze} className={'button'+props.colors} id="az"><strong>{azBtn}</strong></button>
  </div>);
}

export default Header;
