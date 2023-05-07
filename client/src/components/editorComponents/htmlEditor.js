import React,{useRef} from 'react'
import './htmlEditor.css'
import {useSelector, connect, useDispatch} from 'react-redux';

function HtmlEditor(props) {
 const styleColor = useSelector((state) =>state.style.color);
 const ref = useRef();


  function setHtmlChanges(){

    props.setHtmlCode(ref.current.value);
  }
  return (
    <textarea ref={ref} onChange={setHtmlChanges} className={'htmlEditorContainer'+styleColor}>
     Type HTML code
    </textarea>
  )
}

export default HtmlEditor;