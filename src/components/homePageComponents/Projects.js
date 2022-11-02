import React from 'react'
import "./Projects.css"
// import Project from './Project'
import Project from '../UI/Project';
import {useSelector, connect, useDispatch} from 'react-redux';

function Projects(props) {

    const styleColor = useSelector((state) =>state.style.color);
    const language = useSelector((state) =>state.language.languageMode);
  
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
          _id:1,
          name: "Az-Developer",
          author: "Azad",
          languages: "Javascript, HTML, CSS, JAVA",
          database: "NoSql, MongoDB",
          linkGithub: "www.github.com/Az-Developer",
          pStyle:'purple',
        },
        {
          _id:2,
          name: "GetAgent",
          author: "Ron",
          languages: "Javascript, HTML, CSS, PHP",
          database: "SQL, MySql",
          linkGithub: "www.github.com/GetAgent",
          pStyle:"yellow",
        },
        {
          _id:3,
          name: "NotesApp",
          author: "Angela Yu",
          languages: "Javascript, HTML, CSS, Node.js",
          database: "SQL, MySql",
          linkGithub: "www.github.com/NotesApp",
          pStyle:"red",
        },
    
        {
          _id:4,
          name: "TravelingBlog",
          author: "Rob Percival",
          languages: "Javascript, HTML, CSS, Node.js",
          database: "NoSQL, Mongoose",
          linkGithub: "www.github.com/TravelingBlog",
          pStyle:"spring",
        },
      ];

      const projectsHeader= <div><label id={"text" +styleColor}>
      {language ? data.en.projects[0] : data.az.projects[0]}
    </label>
    <input
      type="search"
      id={"searchInput"+styleColor}
      placeholder={language ? data.en.projects[1] : data.az.projects[1]}
    ></input></div>

     const  projectsMain=projectsDB.map((e) => (
  
        <Project
          name={e.name}
          author={e.author}
          languages={e.languages}
          database={e.database}
          link={e.linkGithub}
          pStyle={e.pStyle}
          lang={language}
          colors={styleColor}
        />
      ));

  return (
    <div className={"projectsContainer"+styleColor}>
      <span className='header'>
        {projectsHeader}
        </span>     
      
      <div style={{display:'flex',flexDirection:'row'
      }}>
      {projectsMain}
      {/* <Project pStyle={'purple'}/> */}
      </div>
      
    </div>
  )
}

export default Projects