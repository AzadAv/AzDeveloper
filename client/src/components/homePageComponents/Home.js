import React from "react";
import "./Home.css";
import { useState } from "react";
import { useSelector, connect, useDispatch } from "react-redux";

import HomeExpolore from "./HomeExpolore";
// import Projects from "./Projects";
import Projects from "./Projects.js";
import HomeCourses from "./HomeCourses";
import HomePageEvents from "./homePageEvents";

function Home(props) {
  const language = useSelector((state) => state.language.languageMode);
  const styleColor = useSelector((state) => state.style.color);

  const reelValue = { flag: true, value: "Projects" };
  const [Reel, ReelHandler] = useState(reelValue);

  function switchToProjects() {
    // alert(Reel.value);
    ReelHandler({ flag: true, value: "Projects" });
  }
  function switchToEvents() {
    ReelHandler({ flag: false, value: "Events" });
    // alert(Reel.value);
  }

  return (
    <div className={props.visible ? "homeContainer" + props.colors : "None"}>
      <HomeExpolore />
      <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            height:"59px",
            marginTop:'7px'

          }}
        >
          <span
            className={"reelItem" + styleColor + (Reel.flag ? "Active" : "")}
            onClick={switchToProjects}
          >
            {language ? "Projects" : "Proyektlər"}
          </span>
          <span
            className={"reelItem" + styleColor + (Reel.flag ? "" : "Active")}
            onClick={switchToEvents}
          >
            {language ? "Events" : "Görüşlər"}
          </span>
        </div>
        <Projects display={Reel.flag}/>
        <HomePageEvents display={Reel.flag}/>
      </div>
      <HomeCourses />
    </div>
  );
}

export default Home;
