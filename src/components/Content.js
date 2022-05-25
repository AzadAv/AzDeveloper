import React from 'react';
import './Content.css';
import { useState } from 'react';
import Sign from './Sign.js';

import Discover from "../images/discover.jpeg";
import Learn from "../images/learn.jpg";
import Dictionary from "../images/dictionary.jpeg";
import Editor from "../images/editor.jpeg"



function Content(props) {



  // alert(props.colors);
  return (<div className={'container'+props.colors}>

    <div className={'contentContainer'+props.colors}>

    <img src={Discover} className="imgs"></img>
    <img src={Learn} className="imgs"></img>
     
      </div>
      <Sign language={props.language} colors={props.colors}/>
      
      <div className={'contentContainer'+props.colors}>
        <img src={Dictionary} className="imgs"></img>
    <img src={Editor} className="imgs"></img>
      </div>

  </div>);
}

export default Content;
