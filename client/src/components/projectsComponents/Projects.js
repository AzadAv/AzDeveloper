import "./Projects.css";
import "./NewProject.css";
import React, { useEffect, useState, useRef } from "react";

import Project from "../UI/Project";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";
import AddButton from "../../static/svg/AddButton";
import NewProject from "./NewProject";

function Projects(props) {
  const [projects, projectsHandler] = useState([]);
  const [loading, loadingHandler] = useState(false);
  const [projectForm, projectFormHandler] = useState(false);
  const [searchInput,searchInputHandler] = useState();
  const [searchValue, searchValueHandler] = useState('Project Name');
  const lastIdInArrayOfProjects = projects.length+1;

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

  function AddProject() {
    projectFormHandler(true);
}

  function setSearchInput(e){

    console.log(e.target.value.toLowerCase().trim());
    searchInputHandler(e.target.value.toLowerCase());
}

  function setSearchValue(e){

    console.log(e.target.value);
    searchValueHandler(e.target.value);
  }

  const filteredData = projects.filter((el) => {
    //if no input the return the original
    if (searchInput === '') {
        return el;
    }
    //return the item which contains the user input
    else {

        if(searchValue === 'Project Name'){

          return el.name.toLowerCase().match(searchInput)
        }
        else {

          return el.username.toLowerCase().match(searchInput);
        }
        
    }
})

  const filteredProjects = filteredData.map((e)=>(

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
  ))

  const serverProjects = projects.map((e) => (
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
  ));

  return (
    <div className={"projects" + props.colors}>
      <NewProject
        colors={props.colors}
        projectForm={projectForm}
        projectFormHandler={projectFormHandler}
        newProjectId={lastIdInArrayOfProjects}
        lang={props.lang}
      />
      
      <div className={"pContainer" + props.colors}>
        <span className="header">{props.lang? "Search" : "Axtar"}</span>
        <div className="searchBar">
          <select onChange={setSearchValue}>
              <option id="project">Project Name</option>
              <option id="user">User Name</option>
          </select>
              <input type='text' onChange={setSearchInput}/>
        </div>

        <div className="main">
          <div className={"newProject" + props.colors} onClick={AddProject}>
            <AddButton color={"white"} />
            <h1>{props.lang ? "New Project": "Yeni Proyekt"}</h1>
          </div>
            {filteredProjects}
        </div>

      </div>
    </div>
  );
}

export default Projects;
