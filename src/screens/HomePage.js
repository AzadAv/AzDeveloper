import React from "react";
import { useState } from "react";
import "./HomePage.css";

import searchButton from "../images/searchButton.png";

import Home from "../components/Home";
import Discover from "../components/Discover";
import Learn from "../components/Learn";
import Dictionary from '../components/Dictionary'
import Editor from "../components/Editor";

function HomePage(props) {
  //Language config
  const data = {
    en: {
      navbar: [
        "Home Page",
        "Explore",
        "Learn",
        "Dictionary",
        "Online Editor",
        "Personal Area",
        "User",
      ],
    },
    az: {
      navbar: [
        "Əsas səhifə",
        "Kəşf et",
        "Öyrən",
        "Lüğət",
        "Onlayn editor",
        "Şəxsi otaq",
        "Istifadəçi",
      ],
    },
  };

 
  //Buttons config
  const [home,homeButtonHandler]=useState(true);
  const homeClick=()=>{
    homeButtonHandler(true);
    discoverButtonHandler(false);
    learnButtonHandler(false);
    dictionaryButtonHandler(false);
    editorButtonHandler(false);
  }
  const [discover,discoverButtonHandler]=useState(false);
  const discoverClick=()=>{
       
    homeButtonHandler(false);
    discoverButtonHandler(true);
    learnButtonHandler(false);
    dictionaryButtonHandler(false);
    editorButtonHandler(false);

  }
  const [learn,learnButtonHandler]=useState(false);
  const learnClick=()=>{

    homeButtonHandler(false);
    discoverButtonHandler(false);
    learnButtonHandler(true);
    dictionaryButtonHandler(false);
    editorButtonHandler(false);

  }
  const [dictionary,dictionaryButtonHandler]=useState(false);
  const dictionaryClick=()=>{

    homeButtonHandler(false);
    discoverButtonHandler(false);
    learnButtonHandler(false);
    dictionaryButtonHandler(true);
    editorButtonHandler(false);
  }
  const [editor,editorButtonHandler] = useState(false);
  const editorClick=()=>{

    homeButtonHandler(false);
    discoverButtonHandler(false);
    learnButtonHandler(false);
    dictionaryButtonHandler(false);
    editorButtonHandler(true);
  }


  return (
    <div className={"homePageContainer" + props.colors}>
      <div className="homePageNavbar">
      <p id={"userName" + props.colors}>
        {props.lang
          ? "Hi, " + data.en.navbar[6] + "!"
          : "Salam, " + data.az.navbar[6] + "!"}
      </p>
      <button className={"homePageButtons" + props.colors} 
      id={home ? "Active":""}
      onClick={homeClick}>
      {props.lang ? data.en.navbar[0] : data.az.navbar[0]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={discover ? "Active":""}
      onClick={discoverClick}>
        {props.lang ? data.en.navbar[1] : data.az.navbar[1]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={learn ? "Active":""}
      onClick={learnClick}>
        {props.lang ? data.en.navbar[2] : data.az.navbar[2]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={ dictionary ? "Active":""}
      onClick={dictionaryClick}>
        {props.lang ? data.en.navbar[3] : data.az.navbar[3]}
      </button>
      <button className={"homePageButtons" + props.colors}
      id={ editor ? "Active":""}
      onClick={editorClick}>
        {props.lang ? data.en.navbar[4] : data.az.navbar[4]}
      </button>
      <button className={"homePageButtons" + props.colors} id="pArea">
        {props.lang ? data.en.navbar[5] : data.az.navbar[5]}
      </button>
    </div>
      <Home colors={props.colors} lang={props.lang} visible={home}  />
      <Discover colors={props.colors} lang={props.lang} visible={discover}/>
      <Learn colors={props.colors} lang={props.lang} visible={learn} />
      {/* <Dictionary colors={props.colors} lang={props.lang} visible={dictionary} /> */}
      {/* <Editor colors={props.colors} lang={props.lang} visible={editor} /> */}



    </div>
  );
}

export default HomePage;
