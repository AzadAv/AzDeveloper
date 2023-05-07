import React, { useEffect, useState } from "react";
import "./Project.css";
import Bracket from "../../static/svg/Bracket";
function Project(props) {
  const data = {
    en: {
      project: [
        "Author : ",
        "Languages : ",
        "Database Type : ",
        "See Repository : ",
      ],
    },
    az: {
      project: [
        "Müəllif : ",
        "Dillər : ",
        "Məlumat bazası : ",
        "Kod bazası : ",
      ],
    },
  };
  const bracketStyle = props.colors === "Light";
  const [like, likeNumberHandler] = useState(props.likes);
  const [liked, likeButtonHandler] = useState(false);
  function addLike() {
    if (!liked) {
      likeNumberHandler(like + 1);
      likeButtonHandler(true);
    }
  }

  // console.log(props.database);
  return (
    <div className="projectStyleLight">
      {/* Project name */}
      <div className={props.pStyle}>{props.name}</div>

      <div className={"description" + props.colors}>
        {/* Creator */}
        <span>
          {props.lang ? data.en.project[0] : data.az.project[0]}
          {props.author}
        </span>
        {/* Used languages */}
        <span className="textContainer">
          {props.lang ? data.en.project[1] : data.az.project[1]}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.languages.map((e) => (
              <div style={{ textAlign: "center", margin: "3px" }}>{e},</div>
            ))}
          </div>
        </span>
        {/* DB types */}
        <span>
          {props.lang ? data.en.project[2] : data.az.project[2]}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.database}
          </div>
        </span>
        {/* description */}
        <span className="textContainer">Description :{props.description}</span>
     
        {/* Number of likes */}
        <span className="like" onClick={addLike}>
          <span style={{ marginTop: "5px" }}>
            <Bracket color={bracketStyle ? "#16406D" : "white"} />
          </span>
          <span style={{ margin: "3px" }}>{like}</span>
        </span>
      </div>
      {/* link to repository */}
      <div className="seeRepo">
        <a href={props.link} target="_blank">
          See repository
        </a>
      </div>
    </div>
  );
}

export default Project;
