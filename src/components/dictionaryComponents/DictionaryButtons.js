import React, { useState } from "react";
import "./DictionaryButtons.css";

function DictionaryButtons(props) {
  const [activeLetter, activeHandler] = useState();
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className={"dicButtonsContainer" + props.colors}>
      {alphabet.map((item) => (
        <div
          className={
            "dicButton" + props.colors + (activeLetter == item ? "Active" : "")
          }
          onClick={() => {
            activeHandler(item);
            props.setLetter(item);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DictionaryButtons;
