import React from 'react';
import './Footer.css';
import { useState } from "react";

function Footer(props) {

  const data={en:'@ Copyright 2022. Created by EazyDevOps',
              az:'@ Bütün müəllif hüquqları qorunur 2022. EazyDevOps tərəfindən yaradılıb'}
   

  
  return (<div className={'FooterContainer'+props.colors}>

    <div >
    <p>{props.lang ? data.en : data.az}</p>
  
    </div>
  </div>);
}

export default Footer;
