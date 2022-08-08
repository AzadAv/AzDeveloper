import React from "react";
import "./Html.css";
import Course from "./Course";

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
        {this.state.data.map((course) => (
          <Course name={course.name} color={course.color}/>
        ))}
      </div>
    );
  }
}

export default Html;
