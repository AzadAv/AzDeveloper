import React, { useState, useEffect } from "react";
import "./Editor.css";
import { useSelector, connect, useDispatch } from "react-redux";

import HtmlEditor from "./htmlEditor";
import CssEditor from "./cssEditor";
import JsEditor from "./jsEditor";
function Editor() {
  const styleColor = useSelector((state) => state.style.color);
  const language = useSelector((state) => state.language.languageMode);
  const en = "Output";
  const az = "Nəticə";
  const [htmlInput, htmlInputHandler] = useState("<h1 id='style'>Hello World</h1>");
  const [cssInput, cssInputHandler] = useState("#style {color:blue}");
  const [jsInput, jsInputHandler] = useState("");
  
  const [allTogether,allTogetherHandler] = useState('<html><head><style type="text/css">' +
  cssInput + "</style></head><body>"+htmlInput +jsInput+"</body></html>");

  useEffect(()=>{

      allTogetherHandler('<html><head><style type="text/css">' +
      cssInput + "</style></head><body>"+htmlInput + jsInput+"</body></html>");
      
  },[htmlInput,cssInput,jsInput]);

  console.log(allTogether);
  return (
    <div className={"editorContainer" + styleColor}>
 
      <div className={"editorNav" + styleColor}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>{language ? en : az}</li>
        </ul>
      </div>

      <div className={"boxContainer" + styleColor}>
        <HtmlEditor setHtmlCode={htmlInputHandler}/>
        <CssEditor  setCssCode={cssInputHandler}/>
        <JsEditor   setJsCode={jsInputHandler}/>
      </div>

      <div className={"outputContainer" + styleColor}>
        <span className={"outputHeader" + styleColor}>Output</span>
        <iframe
          id="output"
          className={"outputContainer"+styleColor}
          srcDoc={
            allTogether
          }
        ></iframe>
      </div>

    </div>);
}

export default Editor;
