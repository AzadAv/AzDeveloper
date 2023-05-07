import React from 'react'
import './jsEditor.css'
import {useSelector, connect, useDispatch} from 'react-redux';
function JsEditor() {
    const styleColor = useSelector((state) =>state.style.color);
  return (
    <textarea className={'jsEditorContainer'+styleColor}>jsEditor</textarea>
  )
}

export default JsEditor;