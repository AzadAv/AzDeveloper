import React from "react";
import "./Home.css";
import { useState } from "react";


import Project from "./Project";
import Event from "./Event";

function Home(props) {
  //Language config
  const data = {
    en: {
      projects: ["Uploaded Projects", "search for project", "Project Name"],
      lessons: ["New Lessons", "search for lesson"],
    },
    az: {
      projects: ["Yeni Proyektlər", "proyekt axtar", "Proyektin Adı"],
      lessons: ["Son Dərslər", "dərs axtar"],
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
      color: "green",
    },
    {
      _id:2,
      name: "GetAgent",
      author: "Ron",
      languages: "Javascript, HTML, CSS, PHP",
      database: "SQL, MySql",
      linkGithub: "www.github.com/GetAgent",
      color: "blue",
    },
    {
      _id:3,
      name: "NotesApp",
      author: "Angela Yu",
      languages: "Javascript, HTML, CSS, Node.js",
      database: "SQL, MySql",
      linkGithub: "www.github.com/NotesApp",
      color: "red",
    },

    {
      _id:4,
      name: "TravelingBlog",
      author: "Rob Percival",
      languages: "Javascript, HTML, CSS, Node.js",
      database: "NoSQL, Mongoose",
      linkGithub: "www.github.com/TravelingBlog",
      color: "yellow",
    },
  ];
  const eventsDB = [{

    _id : 1,
    username: "Doron",
    topic: "Front-End",
    likes: 4,
    description: "We are gonna talk about front end development",
    date: "13/5/2022",
    color:"red"

  },
  {
    _id : 2,
    username: "Eti",
    topic: "Back-end",
    likes: 2,
    description: "Learn the back end development technologies",
    date: "17/6/2022",
    color:"green"
    
  },
  {
    _id : 3,
    username: "Dario",
    topic: "Java Programming Language",
    likes: 1000,
    description: "Fundamentals of Java Programming language",
    date: "28/5/2022",
    color:"yellow"
    
  },

  {
    _id : 4,
    username: "Habib",
    topic: "CISCO Networking",
    likes: 10,
    description: "Networking from Beginner to Network Manager",
    date: "31/5/2022",
    color:"blue"
    
  },

];

  const colors =["red","blue","yellow","green"];
  const [color,setColor] = useState("yellow");
  const [counter,setCounter] = useState(0);

  var defineColor=()=>{

    if (counter==0){

      setColor(colors[counter]);
      setCounter(counter++);
    }

    if(counter==1){

      setColor(colors[counter]);
      setCounter(counter++);

    }
    
    else {

      setCounter(0);
    }

    return color;
  }

  

  return (
    <div className={props.visible ? "homeContainer" : "None"}>
      <div className="projectsContainer">
        
          <label id={"text" + props.colors}>
            {props.lang ? data.en.projects[0] : data.az.projects[0]}
          </label>
          <input
            type="search"
            id={"searchInput" + props.colors}
            placeholder={props.lang ? data.en.projects[1] : data.az.projects[1]}
          ></input>
        
        <div id="projects">
          
          {projectsDB.map((e) => (

            
            <Project
              name={e.name}
              author={e.author}
              languages={e.languages}
              database={e.database}
              link={e.linkGithub}
              color={e.color}
              lang={props.lang}

            />
          ))}
        </div>
      </div>

      <div className="eventsContainer">
        <div>
        <label id={"text" + props.colors}>
          {props.lang ? data.en.lessons[0] : data.az.lessons[0]}
        </label>
        <input
          type="search"
          id={"searchInput" + props.colors}
          placeholder={props.lang ? data.en.lessons[1] : data.az.lessons[1]}
        ></input>
        </div>
          <div >
          
           {eventsDB.map((e) => (
            
            <Event 
            name={e.username}
            topic={e.topic}
            likes={e.likes}
            description={e.description}
            date={e.date}
            color={e.color}
            lang={props.lang}

            />
          ))} 
          
          
        </div>

      </div>
    </div>
  );
}

export default Home;
