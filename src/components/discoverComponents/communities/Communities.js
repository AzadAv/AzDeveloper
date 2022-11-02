import React from "react";
import "./Communities.css";

export function CommunitiesItem(props) {
  return (
    <div className={"communitiesItem"+props.color}>
      <span className="name">Community name</span>
      <span className="features">
        Main Features.Gonna put here content about programming communities and
        other stuff
      </span>
      <span className="numDataCont">
        <span className="numData">Number of topics</span>
        <span className="numData">Number of users</span>
      </span>
      <span className="button">Read more</span>
    </div>
  );
}
function Communities(props) {
  const en = "Communities";
  const az = "Cəmiyyətlər";

  var navbarHeader = props.lang ? en : az;
  return (
    <div className={"communities" + props.color}>
      <span className="header">Communities</span>
      <span className="scroller">{` <`}</span>
      <span className="itemsContainer">
        <CommunitiesItem color={props.color}/>
        <CommunitiesItem color={props.color}/>
        <CommunitiesItem color={props.color}/>
      </span>
      <span className="scroller">{` >`}</span>
    </div>
  );
}

export default Communities;
