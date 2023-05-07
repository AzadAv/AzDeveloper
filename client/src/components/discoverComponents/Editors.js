import React, { useRef } from "react";
import "./Editors.css";

import IntelliJ from "../../static/intelliJ.png";
import VSCode from "../../static/visualStudioCode.png";
import Eclipse from "../../static/eclipse.jpeg";
import Sublime from "../../static/sublime.png";
import NotePad from "../../static/notepad.png";

function EditorsItem(props) {
  return (
    <div className={"editorsItem" + props.color}>
      <span className="editors-item-name">{props.name}</span>
      <span className="editors-item-features">
        <span
          style={{
            margin: "5px",
            width: "250px",
            height: "250px",
            // border:'1px solid black',
            backgroundImage: "url(" + props.img + ")",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        ></span>
        <span style={{ margin: "5px", border: "1px solid black" }}></span>
      </span>
        <a className="editors-item-button" href={props.link} target="_blank">
          Download
        </a>
    </div>
  );
}
function Editors(props) {
  const en = "Editors";
  const az = "Editorlar";
  const ref = useRef(null);

  function scroll(scrollOffset) {
    if (scrollOffset === -1) {
      ref.current.scrollLeft -= ref.current.offsetWidth;
    }
    if (scrollOffset === 1) {
      ref.current.scrollLeft += ref.current.offsetWidth;
    }
  }

  const editorsData = [
    {
      name: "IntelliJ",
      img: IntelliJ,
      link: "https://www.jetbrains.com/idea/download/#section=windows",
    },
    {
      name: "Visual Studio Code",
      img: VSCode,
      link: "https://code.visualstudio.com/download",
    },
    {
      name: "Sublime",
      img: Sublime,
      link: "https://www.sublimetext.com/3",
    },
    {
      name: "NotePad",
      img: NotePad,
      link: "https://notepad-plus-plus.org/downloads/",
    },
    {
      name: "Eclipse",
      img: Eclipse,
      link: "https://www.eclipse.org/downloads/",
    },
  ];

  const editorsList = editorsData.map((editor) => (
    <EditorsItem
      link={editor.link}
      img={editor.img}
      color={props.color}
      name={editor.name}
    />
  ));

  return (
    <div className={"editorsContainer" + props.color}>
      <span className="header">
        <button
          className={"scrollButton" + props.color}
          onClick={() => scroll(-1)}
        >
          {"<<"}
        </button>
        {props.lang ? en : az}
        <button
          className={"scrollButton" + props.color}
          onClick={() => scroll(1)}
        >
          {">>"}
        </button>
      </span>
      <div
        className="editorsScrollContainer"
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          // border: "1px solid black",
          width: "100%",
          scrollBehavior: "smooth",
        }}
      >
        {editorsList}
      </div>
    </div>
  );
}

export default Editors;
