import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import React, { Suspense, useContext } from 'react';
import {useSelector, connect, useDispatch} from 'react-redux';
import { useState } from "react";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/UI/Navbar";

import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";



import Home from "./components/homePageComponents/Home";
import Discover from "./components/discoverComponents/Discover";
import Projects from "./components/projectsComponents/Projects";
import Learn from "./components/learnComponents/Learn";
import Dictionary from "./components/dictionaryComponents/Dictionary";
import Events from "./components/eventsComponents/Events";
import Editor from "./components/editorComponents/Editor";
import PersonalArea from "./components/pAreaComponents/PersonalArea";

import Privacy from "./components/pAreaComponents/accountSettingsComponents/Privacy";
import HtmlFirst from "./components/learnComponents/courses/HtmlFirst";
import HtmlAssessment from "./components/learnComponents/assessments/HtmlAssessment";

function App() {
 
  const styleMode = useSelector((state) =>state.style.mode);
  const styleColor = useSelector((state) =>state.style.color);
  const language = useSelector((state) =>state.language.languageMode);

  return (
    <React.Fragment >  
      <Header mode={styleColor} modeButton={styleMode}/>
      <Router>
      <Navbar lang={language} colors={styleColor}/>
      
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/" element={<LandingPage lang={language} colors = {styleColor} />  } />
              {/* <Route path="/homePage" element={ <HomePage lang={language} colors={styleColor} />} /> */}
              <Route path="/home" element={ <Home colors={styleColor} lang={language} visible={true}/>} />
              <Route path="/explore" element ={<Discover colors={styleColor} lang={language} visible={true}/>} />
              <Route path="/projects" element ={<Projects colors={styleColor} lang={language} visible={true}/>} />              
              <Route path="/learn" element={<Learn colors={styleColor} lang={language} visible={true} /> }/>
              <Route path="/learn/htmlFirst" element ={<HtmlFirst colors={styleColor} lang={language} visible={true}/>} />
              <Route path="/learn/html-assessment" element ={<HtmlAssessment colors={styleColor} lang={language} visible={true}/>} />
              
              <Route path="/dictionary" element={ <Dictionary colors={styleColor} lang={language} visible={true}/>} />
              <Route path="/lessons" element ={<Events colors={styleColor} lang={language} visible={true}/>} />
               <Route path="/editor" element={<Editor colors={styleColor} lang={language} visible={true}/>} />
              <Route path="/pArea" element={<PersonalArea colors={styleColor} lang={language} visible={true}/>} />
              <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </Router>
      <Footer lang={language} colors={styleColor} />
    </React.Fragment>
  );
}

export default App;
