import React from "react";
import "./Home.css";
import { useState } from "react";
import {useSelector, connect, useDispatch} from 'react-redux';

import HomeExpolore from "./HomeExpolore";
import Projects from "./Projects";
import HomeCourses from "./HomeCourses";
import Events from "./Events";

function Home(props) {

  const colors =["red","blue","yellow","green"];
  const [color,setColor] = useState("yellow");
  const [counter,setCounter] = useState(0);

  var defineColor=()=>{

    if (counter==0){

      setColor(colors[counter]);
      setCounter(counter++);
    }

    if(counter==1){

      setColor(colors[counter]);
      setCounter(counter++);

    }
    
    else {

      setCounter(0);
    }

    return color;
  }

  return (
    <div className={props.visible ? "homeContainer"+props.colors : "None"}>
      
      <HomeExpolore />
      <Projects/>
      <HomeCourses />
      <Events/>
    </div>
  );
}

export default Home;
