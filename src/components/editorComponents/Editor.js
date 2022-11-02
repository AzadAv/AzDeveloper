import React from 'react'
import  './Editor.css'
import {useSelector, connect, useDispatch} from 'react-redux';

import HtmlEditor from './htmlEditor';
import CssEditor from './cssEditor';
import JsEditor from './jsEditor';
function Editor() {

  const styleColor = useSelector((state) =>state.style.color);
  const language = useSelector((state) =>state.language.languageMode);
  const en = 'Output';
  const az = 'Nəticə';

  var output = document.getElementById('#output');

  function updateOutput(){

    output.contents().find("html").html('Hello World');
  }

  console.log('editorContainer'+styleColor);
  return (
    <div className={'editorContainer'+styleColor}>
        {/* <button onClick={updateOutput}>Add</button> */}
    <div className={'editorNav'+styleColor}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>{language ? en : az}</li>
        </ul>
       
    </div>
    <div className={'boxContainer'+styleColor}>
      <HtmlEditor />
      <CssEditor />
      <JsEditor />
    </div>

    <div className={'outputContainer'+styleColor}>
    <span className={'outputHeader'+styleColor}>Output</span>
     <iframe id='output'></iframe> 
    </div>
    
    </div>
    
  )
}

export default Editor