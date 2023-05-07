import React from "react";
import "./Html.css";
import Course from "../UI/Course";
import { NavLink } from 'react-router-dom';
class Html extends React.Component {
  state = {
    data: [
      { id: 1, name: "Entry Level", color: "red", success: "50" },
      { id: 2, name: "Beginner", color: "yellow", success: "62"},
      { id: 3, name: "Intermediate", color: "green", success: "74"},
      { id: 4, name: "Advanced", color: "blue", success: "85" },
    ],
  };

  render() {
    return (
      <div className="Html">   
         <Course name={'HTML'} explanation={'First Step'} color={'Red'} link={"/learn/htmlFirst"} />
          <Course name={'HTML'} explanation={'Learn deeper'} color={'Red'} />
          <div className={"l"+this.props.color}></div>
          <Course name={'HTML'} explanation={'Take assessment'} color={'Yellow'} link={"/learn/html-assessment"}/>

      </div>
    );
  }
}

export default Html;
