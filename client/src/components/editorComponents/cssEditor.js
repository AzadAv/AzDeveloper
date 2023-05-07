import React, { useRef } from "react";
import "./cssEditor.css";
import { useSelector, connect, useDispatch } from "react-redux";

function CssEditor(props) {
  const styleColor = useSelector((state) => state.style.color);
  const ref = useRef();

  function setCssChanges(){

      props.setCssCode(ref.current.value);
  }
  return (
    <textarea
      className={"cssEditorContainer" + styleColor}
      ref={ref}
      onChange={setCssChanges}
    >
      Delete it and type your own css code
    </textarea>
  );
}

export default CssEditor;
