import React from "react";
import "./HomeExplore.css";
import { useSelector, connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import JavaLogo from "../../static/javaLogo.png";
import ReactLogo from "../../static/react.png";
import PythonLogo from "../../static/python.png";
import Community from "../../static/svg/Community";
import Editor from "../../static/svg/Editor";
function HomeExploreComponent(props) {
  const styleColor = useSelector((state) => state.style.color);
  return (
    <div className={"Component" + styleColor}>
      <div className="hoverDiv" style={{ color: props.colors[0] }}>
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
      <div className="mainText" style={{ color: props.colors[1] }}>
        {props.main}
      </div>
    </div>
  );
}

function HomeExpolore() {
  const styleColor = useSelector((state) => state.style.color);
  const language = useSelector((state) => state.language.languageMode);

  const data = {
    en: {
      projects: [" Explore with AzDeveloper"],
      links: [
        { text: "Programming Languages", img: "</>" },
        { text: "Developer Communities", img: <Community color={styleColor==='Light'}/> },
        { text: "Development Environments", img: <Editor color={styleColor==='Light'}/> },
      ],
    },
    az: {
      projects: ["Azdeveloper ilə kəşf et"],
      links: [
        { text: "Proqramlaşdırma Dilləri",  img: "</>"},
        { text: "Proqramçı cəmiyyətləri", img: <Community color={styleColor==='Light'}/> },
        { text: "Kod yazılım mühitləri", img: <Editor color={styleColor==='Light'}/> },
      ],
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
        {/* {exploreData.en.map((item) => (
          <HomeExploreComponent
            header={item.header}
            main={item.main}
            description={item.description}
            imgUrl={item.imgUrl}
            colors={item.colors}
          />
        ))} */}
       {language
          ? data.en.links.map((e) => (
             
              <div className="mainItem">
               
                <div className="mainItemImg">{e.img}</div>
              <NavLink to='/explore' style={{textDecoration:'none'}}>  
                <div className="mainItemText">{e.text}</div>
              </NavLink>  
              </div>
              
            ))
          : data.az.links.map((e) => (
              <div className="mainItem">
                <div className="mainItemImg">{e.img}</div>
                <NavLink to='/explore' style={{textDecoration:'none'}}>  
                <div className="mainItemText">{e.text}</div>
                </NavLink>  
              </div>
            ))}
      </span>
    </div>
  );
}

export default HomeExpolore;
