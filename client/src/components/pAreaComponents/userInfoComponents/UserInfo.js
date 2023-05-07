import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import Projects from "../../homePageComponents/Projects";
import Course from "../../UI/Course";
import Event from "../../UI/Event";
import Project from "../../UI/Project";

import { useSelector, connect, useDispatch } from "react-redux";
function UserInfo(props) {
  const styleColor = useSelector((state) => state.style.color);
  const language = useSelector((state) => state.language.languageMode);

  const [projects, projectsHandler] = useState([]);
  const [events, eventsHandler] = useState([]);
  const [loading, loadingHandler] = useState(false);
  const [switcher, switchHandler] = useState(true);

  useEffect(() => {
    loadingHandler(true);

    fetch("projects")
      .then((response) => response.json())
      .then((data) => {
        projectsHandler(data);
        loadingHandler(false);
      });
    fetch("events")
      .then((response) => response.json())
      .then((data) => {
        eventsHandler(data);
        loadingHandler(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  const projectsMain = projects.map((e) => (
    <div style={{ border: "1px solid black" }}>
      <span
        style={{
          // border: "1px solid black",
          padding: "5px",
          float: "right",
          borderRadius: "2px",
          fontSize: "20px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        X
      </span>
      <Project
        id={e.id}
        name={e.name}
        author={e.username}
        languages={e.languages}
        likes={e.likes}
        database={e.databaseType}
        link={e.link}
        pStyle={e.style}
        description={e.description}
        lang={props.lang}
        colors={props.colors}
      />
    </div>
  ));
  const eventsList = events.map((e) => (
    <Event
      name={e.instructor}
      topic={e.subject}
      likes={e.participantsNumber}
      description={e.description}
      date={e.date}
      color={styleColor}
      lang={language}
      link={e.zoomLink}
    />
  ));

  function showProjects() {
    switchHandler(true);
  }
  function showEvents() {
    switchHandler(false);
  }
  return (
    <div className={"userInfo" + props.colors}>
      <span className="infoMain">
        <div className="mainContainer">
          {/* <h3>Info</h3> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <span
              className={"reelItem" + styleColor + (switcher ? "Active" : "")}
              onClick={showProjects}
            >
              Projects
            </span>
            <span
              className={"reelItem" + styleColor + (switcher ? "" : "Active")}
              onClick={showEvents}
            >
              Events
            </span>
          </div>
          <p>{language? 'Number of Projects':'Proyektlərin sayı'} : 2</p>
          <p>{language? 'Number of participated Events':'İştirak edilən görüşlərin sayı'} : 5 </p>
          <p>{language? 'Courses success':'Kursları bitirmə dərəcəsi'} :</p>
          <div className="textsContainer">
            <span>HTML first : 56 %</span>
            <span>HTML second : 77 %</span>
            <span>CSS first : 23 %</span>
            <span>CSS second : 33 %</span>
            <span>JS first : 56%</span>
            <span>JS second : 77%</span>
            <span>HTML Assessment Grade : 78</span>
            <span>CSS Assessment Grade :</span>
            <span>JS Assessment Grade :</span>
            
          </div>
            <button type="button" disabled
              className="certificateButton"
            >
              AzDeveloper Certificate
            </button>
        </div>

        <div className="secondContainer">
          <div className="projectsList">
            {switcher ? projectsMain : eventsList}
          </div>
          <div className="eventsList"></div>
        </div>
      </span>
    </div>
  );
}

export default UserInfo;
