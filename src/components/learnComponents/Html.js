import React from "react";
import "./Html.css";
import Course from "../UI/Course";

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
         <Course name={'HTML'} explanation={'First Step'} color={'Red'}/>
          <Course name={'HTML'} explanation={'Learn deeper'} color={'Red'} />
          <div className={"l"+this.props.color}></div>
          <Course name={'HTML'} explanation={'Take assessment'} color={'Yellow'} />

      </div>
    );
  }
}

export default Html;
