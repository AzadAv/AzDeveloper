import React from "react";
import "./Communities.css";
import W3Schools from "../../../static/w3.png";
import Stack from "../../../static/stack.png";
import Geeks from "../../../static/geeks.png";
export function CommunitiesItem(props) {
  return (
    <div className={"communitiesItem" + props.color}>
      <span className="name">{props.name}</span>
      <div
        className="communityImg"
        style={{
          backgroundImage: "url(" + props.img + ")",
        }}
      ></div>

      <span className="features">
        {props.features.map((e) => (
          <div
            style={{
              // border: "1px solid black",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop:'22px',
              fontSize:'20px',
            }}
          >
            {e}
          </div>
        ))}
      </span>
      <a href={props.link} className="button">Read more</a>
    </div>
  );
}
function Communities(props) {
  const data = [
    { name: "W3Schools", img: W3Schools, 
    features: ["The largest web developer site on the internet"
    , "3 billion pages displayed each year"
    , "65 million visitors each month"
    , "W3Schools is, and will always be, a completely free developers resource"
    , "W3Schools practice easy learning"
    , "W3Schools is a school for web developers, covering all the aspects of web development"], 
    link: "https://www.w3schools.com/about/" },
    { name: "GeeksforGeeks", img: Geeks, 
    features: ["Free Tutorials and Millions of Articles",
     "Live, Online and Classroom Courses",
     "Frequent Coding Competitions",
     "Webinars by Industry Experts",
    "Internship opportunities and Job Opportunities",], link: "https://www.geeksforgeeks.org/about/" },
    {
      name: "StackOverflow",
      img: Stack,
      features: [
        "100+ million Monthly visitors",
        " 21+ million Questions asked to-date",
        "13.6 seconds Average time between new questions",
        "50.6+ billion Times a developer got help",
        "10,000+ Customer companies for all products",
        "Stack Overflow helps people find the answers they need, when they need them"
      ],
      link: "https://stackoverflow.co/",
    }, ];

  return (
    <div className={"communities" + props.color}>
      <span className="header">
        {props.lang ? "Communities" : "Cəmiyyətlər"}
      </span>
      {/* <span className="scroller">{` <`}</span> */}
      <span className="itemsContainer">
        {data.map((item) => (
          <div>
            <CommunitiesItem
              color={props.color}
              name={item.name}
              img={item.img}
              features={item.features}
              link={item.link}
            />
          </div>
        ))}
      </span>
      {/* <span className="scroller">{` >`}</span> */}
    </div>
  );
}

export default Communities;
