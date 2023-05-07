import React, { useRef, useState, useEffect } from "react";
import "./NewProject.css";

import Project from "../UI/Project";
function NewProject(props) {
  var id = props.newProjectId;
  const [name, nameHandler] = useState("");
  const [author, authorHandler] = useState("");
  const [language, languageHandler] = useState();
  const [languages, languagesHandler] = useState([]);
  const [description, descriptionHandler] = useState("");
  const [db, dbHandler] = useState("noSql");
  const [style, styleHandler] = useState("spring");
  const [link, linkHandler] = useState("");

  const [loading, loadingHandler] = useState(false);

  let emptyInputs =
    name.trim().length === 0 ||
    author.trim().length === 0 ||
    languages.length === 0 ||
    description.length === 0 ||
    link.trim().length === 0;

  function closeNewProjectPage() {
    props.projectFormHandler(false);
    document.getElementById("form").reset();
  }

  function styleChange(event) {
    console.log(event.target.value);
    styleHandler(event.target.value);
  }

  function nameChange(event) {
    console.log(event.target.value);
    nameHandler(event.target.value);
  }

  function authorChange(event) {
    console.log(event.target.value);
    authorHandler(event.target.value);
  }

  function languageChange(event) {
    languageHandler(event.target.value);
  }

  function addLanguage() {
    if (language.trim().length !== 0) {
      languagesHandler((current) => [...current, language.trim()]);
    }
  }

  function descriptionChange(event) {
    console.log(event.target.value);
    descriptionHandler(event.target.value);
  }

  function dbChange(event) {
    dbHandler(event.target.value);
  }

  function linkChange(event) {
    console.log(event.target.value);
    linkHandler(event.target.value);
  }

  let languagesRender = languages.map((e) => (
    <div
      style={{
        border: "1px solid black",
        width: "23%",
        height: "30px",
        margin: "2px",
        textAlign: "center",
        alignItems: "center",
        borderRadius: "3px",
        overflow: "hidden",
        fontSize: "13px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {e}
    </div>
  ));

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/projects/addproject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: name,
          username: author,
          languages: languages,
          likes: 0,
          description: description,
          databaseType: db,
          style: style,
          link: link,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("User created successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={props.projectForm ? "NewProjectBackdrop" : "none"}>
      <div className={"NewProjectContainer" + props.colors}>
        <span className="closeButton" onClick={closeNewProjectPage}>
          X
        </span>

        <form onSubmit={handleSubmit} id="form">
          <span className="rowContainer">
            <label>Style</label>

            <select onChange={styleChange} className={"inputs" + props.colors}>
              <option>purple</option>
              <option>yellow</option>
              <option>red</option>
              <option>spring</option>
            </select>
          </span>
          <span className="rowContainer">
            <label>Project name</label>
            <input
              type="text"
              onChange={nameChange}
              className={"inputs" + props.colors}
            ></input>
          </span>
          <span className="rowContainer">
            <label>Author</label>
            <input
              type="text"
              onChange={authorChange}
              className={"inputs" + props.colors}
            ></input>
          </span>

          <span className="columnContainer">
            <label>Used Languages</label>
            <span className="rowContainer">
              <input
                type="text"
                onChange={languageChange}
                className={"inputs" + props.colors}
              ></input>
              <span
                className={"formButton" + props.colors}
                onClick={addLanguage}
              >
                Add
              </span>
            </span>
            <span className="choicesContainer">{languagesRender}</span>
          </span>
          <span className="rowContainer">
            <label>Database Type</label>
            <select onChange={dbChange} className={"inputs" + props.colors}>
              <option>SQL</option>
              <option>NoSQL</option>
            </select>
          </span>
          <span
            className="columnContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Description</label>
            <textarea
              style={{ width: "340px", height: "90px", margin: "5px" }}
              onChange={descriptionChange}
              className={"inputs"+props.colors}
            ></textarea>
          </span>
          <span className="rowContainer">
            <label>Github Link</label>
            <input onChange={linkChange} className={"inputs"+props.colors}></input>
          </span>
          <button
            className={
              emptyInputs ? "formButtonDisabled" : "formButton" + props.colors
            }
            disabled={emptyInputs}
          >
            Submit
          </button>
        </form>
        <div
          style={{
            width: "50%",
            height: "98%",
            margin: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor:'blue'
          }}
        >
          <Project
            id={1}
            name={name}
            author={author}
            languages={languages}
            likes={0}
            database={db}
            link={"www.example.com"}
            pStyle={style}
            description={"Example"}
            lang={props.lang}
            colors={props.colors}
          />
        </div>
      </div>
    </div>
  );
}

export default NewProject;
