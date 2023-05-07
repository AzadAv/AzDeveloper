import React from 'react';
import './LandingPage.css'

import AdVideo from "../components/images/myAdvertisement.mp4";

import Sign from '../components/Sign';

import Discover from "../components/images/discover.jpeg";
import Learn from "../components/images/learn.jpg";
import Dictionary from "../components/images/dictionary.jpeg";
import Editor from "../components/images/editor.jpeg"

function LandingPage(props) {
  return (<div className={'container'+props.colors}>

    <video src={AdVideo} id="video"  autoPlay loop muted>
     </video>

    <div className={'contentContainer'+props.colors}>

    <img src={Discover} className="imgs"></img>
    <img src={Learn} className="imgs"></img>
     
      </div>
      <Sign language={props.lang} colors={props.colors}/>
      
      <div className={'contentContainer'+props.colors}>
        <img src={Dictionary} className="imgs"></img>
    <img src={Editor} className="imgs"></img>
      </div>
  </div>);
}

export default LandingPage;
