import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import React, { Suspense, useContext } from 'react';
import GeneralContext from "./store/general-context";
import GeneralProvider from "./store/GeneralProvider";

import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import Footer from "./components/Footer";
import BrightLogo from "./images/darkLogo.png";
import DarkLogo from "./images/lightLogo.png";
import Learn from "./components/Learn";
import AdVideo from "./images/myAdvertisement.mp4";
import { useState } from "react";

function App() {
  //Colors config
  const [mode, modeHandler] = useState("Light");
  const [modeButton, modeButtonHandler] = useState(true);
  const changeStyle = () => {
    if (mode != "Light") {
      modeHandler("Light");
      modeButtonHandler(true);
    } else {
      modeHandler("Dark");
      modeButtonHandler(false);
    }
  };

  const generalCtx = useContext(GeneralContext);
  const changeStyleCtx =()=>{

    console.log(generalCtx.mode);

  }

  //Language config
  const data = {
    en: ["English", "Azerbaijani", "Dark", "Light"],
    az: ["Ingiliscə", "Azərbaycanca", "Gecə", "Gündüz"],
  };

  const [enBtn, enButtonHandler] = useState(data.en[0]);
  const [azBtn, azButtonHandler] = useState(data.en[1]);
  const [language, langHandler] = useState(true);

  const setEnglish = () => {
    enButtonHandler(data.en[0]);
    azButtonHandler(data.en[1]);
    langHandler(true);
  };
  const setAze = () => {
    enButtonHandler(data.az[0]);
    azButtonHandler(data.az[1]);
    langHandler(false);
  };

  return (
    <GeneralProvider>
    <div>
      <video src={AdVideo} id="video"  autoPlay loop muted>
     </video>
     {/* <button onClick={changeStyleCtx}>Hello</button> */}
       <div className={"appHeader" + mode}>
        <button onClick={setEnglish} className={"button" + mode} id="en">
          <strong>{enBtn}</strong>
        </button>
        <div className="logo">
          <img src={modeButton ? DarkLogo : BrightLogo} className={mode}></img>
        </div>
        <button onClick={setAze} className={"button" + mode} id="az">
          <strong>{azBtn}</strong>
        </button>
      </div>
      
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<LandingPage lang={language} colors = {mode} />  } />
            <Route path="/home" element={ <HomePage lang={language} colors={mode} />} />
        </Routes>
      </Suspense>
  </Router>
      <Footer lang={language} colors={mode} />

      <button id={mode} onClick={changeStyle}>
        {modeButton
          ? language
            ? data.en[2]
            : data.az[2]
          : language
          ? data.en[3]
          : data.az[3]}
        </button> 

        
  </div>
  </GeneralProvider>
  );
}

export default App;
