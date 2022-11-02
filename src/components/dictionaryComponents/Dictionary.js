import React, { useState } from 'react'
import "./Dictionary.css"

import DictionaryButtons from './DictionaryButtons.js'
import DictionaryItems from "./DictionaryItems";
function Dictionary(props) {

  const [letter,letterHandler] = useState();
  return (
    <div className={props.visible ?'dictionaryContainer'+props.colors :"None"}>
        <DictionaryButtons colors={props.colors} setLetter={letterHandler}/>
        <DictionaryItems activeLetter={letter}/>
        </div>
  )
}

export default Dictionary