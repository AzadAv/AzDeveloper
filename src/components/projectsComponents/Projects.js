import React from 'react'
import './Projects.css'

import Project from '../UI/Project'
function Projects(props) {
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
  const Projects = projectsDB.map((e) => (
  
      <Project
        name={e.name}
        author={e.author}
        languages={e.languages}
        database={e.database}
        link={e.linkGithub}
        pStyle={e.pStyle}
        lang={props.lang}
        colors={props.colors}
      />
    ));
  return (
    <div className={'projects'+props.colors}>
        
        <div className={'pContainer'+props.colors}>
          <span className='header'>Latest Projects</span>
          <div className='main'>         
            {Projects}
          </div>
        </div>
        <div className={'pContainer'+props.colors}>
          <span className='header'>Most Popular Projects</span>
          <div className='main'>Main</div>
        </div>
        <div className={'pContainer'+props.colors}>
          <span className='header'>Cathegories</span>
          <div className='main'>Main</div>
        </div>
        <div className={'pContainer'+props.colors}>
          <span className='header'>Your projects</span>
          <div className='main'>Main</div>
        </div>
      </div>
  )
}

export default Projects