import React from 'react';
import './Footer.css';
import { useState } from "react";
import {useSelector, connect, useDispatch} from 'react-redux';
import { styleActions } from '../../store/style';
function Footer(props) {

  const dispatch = useDispatch();
  const styleMode = useSelector((state) =>state.style.mode);
  const styleColor = useSelector((state) =>state.style.color);
  const language = useSelector((state) =>state.language.languageMode);



  //Language config
  const data={en:'@ Copyright 2022. Created by EazyDevOps',
              az:'@ Bütün müəllif hüquqları qorunur 2022. EazyDevOps tərəfindən yaradılıb'}
   
  const changeStyle = () =>{

    if(styleMode){

      // alert(styleMode);
      dispatch(styleActions.setDark());
    }
    else{

      // alert(styleMode);
      dispatch(styleActions.setLight());
    }
  }

  const buttonData = {
    en: ["English", "Azerbaijani", "Dark", "Light"],
    az: ["Ingiliscə", "Azərbaycanca", "Gecə", "Gündüz"],
};
  
  return (<div className={'FooterContainer'+props.colors}>

    <div >
    <p>{language ? data.en : data.az}</p>
    </div>

      <button onClick={changeStyle} className={'footerButton'+styleColor}>
        {styleMode
          ? language
            ? buttonData.en[2]
            : buttonData.az[2]
          : language
          ? buttonData.en[3]
          : buttonData.az[3]}

      </button>
  </div>);
}

export default Footer;
