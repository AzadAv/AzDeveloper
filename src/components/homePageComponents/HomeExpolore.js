import React from "react";
import "./HomeExplore.css";
import { useSelector, connect, useDispatch } from "react-redux";

import JavaLogo from "../../static/javaLogo.png";
import ReactLogo from "../../static/react.png";
import PythonLogo from "../../static/python.png";

function HomeExploreComponent(props) {
  const styleColor = useSelector((state) => state.style.color);
  return (
    <div className={"Component"+styleColor}>
      <div className="hoverDiv" style={{color:props.colors[0]}}>
      <span>{props.description}</span>  
      </div>
      <span
        className="imgDiv"
        style={{
          backgroundImage: "url(" + props.imgUrl + ")",
          borderTop: "15px solid" + props.colors[0],
          borderBottom: "15px solid" + props.colors[1],
        }}
      ></span>
      <div className="headerText" style={{ backgroundColor: props.colors[0] }}>
        {props.header}
      </div>
      <div className="mainText" style={{ color: props.colors[1] }}>{props.main}</div>
    </div>
  );
}


function HomeExpolore() {
  const styleColor = useSelector((state) => state.style.color);
  const language = useSelector((state) => state.language.languageMode);

  const data = {
    en: {
      projects: [" Explore programming with AzDeveloper"],
    },
    az: {
      projects: ["Proqramlaşdırmanı Azdeveloper ilə kəşf et"],
    },
  };

  const exploreData = {
    en: [
      {
        header: "Java",
        main: "Explore Java programming language with Us!",
        description: "Description text for Java",
        imgUrl: JavaLogo,
        colors: ["#E76F00", "#5382A1"],
      },
      {
        header: "React",
        main: "Read about one of the most favorite front-end frameworks!",
        description: "Description text for React.js",
        imgUrl: ReactLogo,
        colors: ["#00D8FF", "#32363E"],
      },
      {
        header: "Python",
        main: "Get information about Python",
        description: "Description text for Python",
        imgUrl: PythonLogo,
        colors: ["#3571A3", "#FDD041"],
      },
    ],
  };

  return (
    <div className={"homeExplore" + styleColor}>
      <span className={"header"}>
        {language ? data.en.projects : data.az.projects}
      </span>
      <span className={"main"}>
        {/* <HomeExploreComponentFirst /> */}

        {exploreData.en.map((item) => (
          <HomeExploreComponent
            header={item.header}
            main={item.main}
            description={item.description}
            imgUrl={item.imgUrl}
            colors={item.colors}
          />
          // {console.log("Message "+item.header)}
        ))}

        {/* <HomeExploreComponentSecond /> */}
      </span>
    </div>
  );
}

export default HomeExpolore;
