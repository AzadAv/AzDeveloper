import React from 'react'
import './htmlEditor.css'
import {useSelector, connect, useDispatch} from 'react-redux';

function HtmlEditor() {
 const styleColor = useSelector((state) =>state.style.color);
     
  return (
    <textarea className={'htmlEditorContainer'+styleColor}></textarea>
  )
}

export default HtmlEditor;