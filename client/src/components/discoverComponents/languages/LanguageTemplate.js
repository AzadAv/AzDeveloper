import React, { useState, useEffect } from "react";
import "./LanguageTemplate.css";

function LanguageTemplate(props) {
  const [exploreContent, exploreContentHandler] = useState([]);
  const [loading, loadingHandler] = useState(false);
  const [infoForm, infoFormHandler] = useState(false);
  const lines = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  useEffect(() => {
    loadingHandler(true);

    fetch("/explore")
      .then((response) => response.json())
      .then((data) => {
        // const myData = JSON.parse(data);

        exploreContentHandler(data);
        loadingHandler(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  const data = exploreContent.find((e) => {
    return e.name === props.content;
  });

  const name = data && data.name;
  const description = data && (props.lang ? data.enDesc : data.azDesc);
  const whatFor = data && 
  (props.lang ? data.enWhatFor.map((e)=>(
    <div style={{  margin: "3px" }}>
      {e}
    </div>
  )) : data.azWhatFor.map((e)=>(
    <div style={{  margin: "3px" }}>
      {e}
    </div>
  )));
  const frameworks =
    data &&
    data.frameworks.map((e) => (
      <span style={{  margin: "3px" }}>{e}</span>
    ));
  const statistics =
    data &&
    (props.lang
      ? data.enStatistics.map((e) => (
          <span style={{  margin: "3px" }}>{e}</span>
        ))
      : data.azStatistics.map((e) => (
          <span style={{  margin: "3px" }}>{e}</span>
        )));
  const links = 
    data && data.links.map((e)=>(<a href={e}>{e}</a>))
  return (
    <div className={"langMainContainer" + props.color}>
      <div className="halfBox">
        <span className={"langContainer" + props.color}>
          <header>Syntax</header>
          
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems:"center",
                width: "20px",
                marginRight:'5px',
                backgroundColor: props.color==="Light" ?  '#F8F9FA' : "black" 
              }}
            >
              {lines.map((e) => (
                <span>{e}</span>
              ))}
            </span>
            <span className="codeContainer">{props.data.syntax}</span>
          </div>
          <header>{props.lang ? "Output":"Nəticə" } :</header>
          <span>{props.data.output}</span>
          
        </span>
        <span className={"langContainer" + props.color}>
          <header>{props.lang ? 'Description' : 'Məlumat'} </header>
          <span className="textHolder">{description}</span>
          <span
            className={"descriptionReadMore" + props.color}
            onClick={() => infoFormHandler(true)}
          >
            {props.lang ? 'read more':'davam et'}
          </span>
        </span>
      </div>
      <div className="halfBox">
        <span className={"langContainer" + props.color}>
          <header>{props.lang ? "Most used fields":"Ən çox istifadə olunan sahələr"}</header>
          <span className="textHolder">{whatFor}</span>
        </span>
        <span className={"langContainer" + props.color}>
          <header>{props.lang ?"Popular frameworks and libraries":"Məhşur iş mühitləri və kitabxanalar"}</header>
          <span className="textHolder">{frameworks}</span>
        </span>
        <span className={"langContainer" + props.color}>
          <header>{props.lang ? "Interesting facts":"Marağlı faktlar"}</header>
          <span className="textHolder">{statistics}</span>
        </span>
      </div>

      <div className={infoForm ? "ReadMoreBackdrop" : "none"}>
        <div className="ReadMoreContainer">

          <span className="closeButton" onClick={() => infoFormHandler(false)}>
            x
          </span>
          <div className="main">
            <h3>{props.lang ?'Description':'Izah'}</h3>
            {description}
            <h3>{props.lang ?'Most used fields':'Ən çox istifadə olunan sahələr'}</h3>
            {whatFor}
            <h3>{props.lang ?'Interesting facts':'Marağlı faktlar'}</h3>
            {statistics}
            <h3>{props.lang ?'Popular Frameworks':'Məhşur iş çərçivələri'}</h3>
            {frameworks}
            <h3>{props.lang ?'Useful Links':'Maraqlı məqalələr'}</h3>
            {links}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LanguageTemplate;
