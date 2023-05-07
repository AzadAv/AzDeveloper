import React, { useState, useEffect } from "react";
import "./Projects.css";
import Project from "../UI/Project";

import { useSelector, connect, useDispatch } from "react-redux";

function Projects(props) {
  const styleColor = useSelector((state) => state.style.color);
  const language = useSelector((state) => state.language.languageMode);

  const [projects, projectsHandler] = useState([]);

  const [loading, loadingHandler] = useState(false);

  const data = {
    en: {
      projects: ["Recent Projects", "search for project", "Project Name"],
    },
    az: {
      projects: ["Yeni Proyektlər", "proyekt axtar", "Proyektin Adı"],
    },
  };
  const projectsDB = [
    {
      _id: 1,
      name: "Az-Developer",
      author: "Azad",
      languages: ["Javascript, HTML, CSS, JAVA"],
      database: "NoSql, MongoDB",
      linkGithub: "www.github.com/Az-Developer",
      pStyle: "purple",
    },
    {
      _id: 2,
      name: "GetAgent",
      author: "Ron",
      languages: ["Javascript, HTML, CSS, PHP"],
      database: "SQL, MySql",
      linkGithub: "www.github.com/GetAgent",
      pStyle: "yellow",
    },
    {
      _id: 3,
      name: "NotesApp",
      author: "Angela Yu",
      languages: ["Javascript, HTML, CSS, Node.js"],
      database: "SQL, MySql",
      linkGithub: "www.github.com/NotesApp",
      pStyle: "red",
    },

    {
      _id: 4,
      name: "TravelingBlog",
      author: "Rob Percival",
      languages: ["Javascript, HTML, CSS, Node.js"],
      database: "NoSQL, Mongoose",
      linkGithub: "www.github.com/TravelingBlog",
      pStyle: "spring",
    },
  ];

  useEffect(() => {
    loadingHandler(true);

    fetch("projects")
      .then((response) => response.json())
      .then((data) => {
        projectsHandler(data);
        loadingHandler(false);
      });
      
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  const projectsMain = projects.map((e) => (
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
      lang={language}
      colors={styleColor}
    />

    
  ));

  return (
    <div className={props.display ? "projectsContainer" + styleColor : "none"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projectsMain}
      </div>
    </div>
  );
}

export default Projects;
