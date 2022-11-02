import React from 'react'
import './cssEditor.css'
import {useSelector, connect, useDispatch} from 'react-redux';
function CssEditor() {
    const styleColor = useSelector((state) =>state.style.color);
  return (
    <textarea className={'cssEditorContainer'+styleColor}>cssEditor</textarea>
  )
}

export default CssEditor