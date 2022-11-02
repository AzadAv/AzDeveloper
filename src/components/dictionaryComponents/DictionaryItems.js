import React, { useState } from "react";
import "./DictionaryItems.css";
import {useSelector, connect, useDispatch} from 'react-redux';
function Item(props){

    const color = useSelector((state) =>state.style.color);
    return(<div className={"item"+color}>
        <span className={"itemName"+color}>React</span>
        <span className={"descriptionEn"+color}>Item English description</span>
        {/* <hr className={"line"+color}></hr> */}
        <span className={"descriptionAze"+color}>Item Azerbaijani description</span>
        
    </div>)
}
function DictionaryItems(props) {

    const color = useSelector((state) =>state.style.color);
    const [activeLetter,activeHandler] = useState(props.activeLetter);
    const dicData = [
       { A:["Aword"]},
       { "B":['Bword']},
       { "C":['Cword']},
       { "D":[]},
       { "E":[]},
       { "F":[]},
       { "G":[]},
       { "H":[]},
       { "I":[]},
       { "J":[]},
       { "K":[]},
       { "L":[]},
       { "M":[]},
       {"N":[]},
        {"O":[]},
        {"P":[]},
       { "Q":[]},
        {"R":[]},
       { "S":[]},
        {"T":[]},
        {"U":[]},
        {"V":[]},
        {"W":[]},
        {"X":[]},
        {"Y":[]},
        {"Z":[]},
    ];

  return <div className={"dicItemsContainer"+color}>
   {/* {dicData.activeLetter.map((item)=><p>{item}</p>)} */}
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />

   
    </div>;
}

export default DictionaryItems;
