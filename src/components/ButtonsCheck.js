import React from 'react';
import './ButtonsCheck.css';
import {useState} from 'react';

function ButtonsCheck() {

  const [count,setCount] = useState(0);
  const [name,setName] = useState("Azad");
  const [isVisible, setIsVisible] = useState(true);


  return (<div>

    <div className={isVisible ? "buttonss" : "hideButtonss"} >
     
     <button onClick={() => setCount(count +1)} style={{background:"aqua"}}>Tıkla</button>
     <p>{count} dəfə tıklandı</p>

     <button onClick={() => setName("Adelle")}>Dəyiş</button>
     <p>{name} dəyişdirildi</p>

     <button onClick={() => setIsVisible(false)}>Hide</button>
     </div>

     <button onClick={() => setIsVisible(true)}>Show</button>
   
  </div>);
}

export default ButtonsCheck;
