import React, { useState,useEffect } from "react";
import "./DictionaryItems.css";
import { useSelector, connect, useDispatch } from "react-redux";
function Item(props) {
  const color = useSelector((state) => state.style.color);
  return (
    <div className={"item" + color}>
      <span className={"itemName" + color}>{props.word}</span>
      <span className={"descriptionEn" + color}>{props.enDescription}</span>
      {/* <hr className={"line"+color}></hr> */}
      <span className={"descriptionAze" + color}>{props.azDescription}</span>
    </div>
  );
}
function DictionaryItems(props) {
  const color = useSelector((state) => state.style.color);
  const [loading, loadingHandler] = useState(false);
  const dicData = [
    {
      id: "A",
      words: [
        {
          id: 0,
          word: "ASecondWord",
          enDescription: "ASecondWordEnDescription",
          azDescription: "ASecondWordAzDescription",
        },
        {
          id: 1,
          word: "ASecondWord",
          enDescription: "ASecondWordEnDescription",
          azDescription: "ASecondWordAzDescription",
        },
        {
            id: 2,
            word: "AThirdWord",
            enDescription: "AThirdWordEnDescription",
            azDescription: "AThirdWordAzDescription",
          },
      ],
    },
    {
      id: "B",
      words: [
        {
          id: 0,
          word: "BFirstWord",
          enDescription: "BfirstWordEnDescription",
          azDescription: "BfirstWordAzDescription",
        },
        {
          id: 1,
          word: "BSecondWord",
          enDescription: "BSecondWordEnDescription",
          azDescription: "BSecondWordAzDescription",
        },
      ],
    },
    {
      id: "C",
      words: [
        {
          id: 0,
          word: "CFirstWord",
          enDescription: "CfirstWordEnDescription",
          azDescription: "CfirstWordAzDescription",
        },
        {
          id: 1,
          word: "CSecondWord",
          enDescription: "CSecondWordEnDescription",
          azDescription: "CSecondWordAzDescription",
        },
      ],
    },
  ];
  const [data,dataHandler] = useState(dicData);
  const dataByLetter = data.find((e) => {
    return e.id === props.activeLetter;
  });
  const words =dataByLetter && dataByLetter.words.map((item) => 
       (
        <div>
          <Item
            word={item.word}
            enDescription={item.enDescription}
            azDescription={item.azDescription}
          />
        </div>
      )
    );

    useEffect(() => {
      loadingHandler(true);
  
      fetch("dictionary")
        .then((response) => response.json())
        .then((serverData) => {

          dataHandler(serverData);  
          loadingHandler(false);
  
        });
    }, []);

  console.log(dataByLetter);
  console.log(words);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={"dicItemsContainer" + color}>
      {words}
     
    </div>
  );
}

export default DictionaryItems;
