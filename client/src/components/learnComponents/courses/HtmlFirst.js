import React, { useState, useEffect } from "react";
import "./HtmlFirst.css";
import { NavLink } from "react-router-dom";

function HtmlFirst(props) {
  const [loading, loadingHandler] = useState(false);

  const contentArray = [
    {
      id: 0,
      header: "Content 1",
      description: "Description 1",
      answer: "Answer 1",
    },
    {
      id: 1,
      header: "Content 2",
      description: "Description 2",
      answer: "Answer 2",
    },
    {
      id: 2,
      header: "Content 3",
      description: "Description 3",
      answer: "Answer 3",
    },
  ];
  const [stackIndex, stackIndexHandler] = useState(0);
  const hidePrevButton = stackIndex === 0;
  const [headerList, hedaerListHandler] = useState([]);
  const hideNextButton = stackIndex === headerList.length - 1;
  const hideFinishButton = stackIndex < headerList.length - 1;
  function prev() {
    if (stackIndex > 0) {
      stackIndexHandler(stackIndex - 1);
    }
  }
  function next() {
    if (stackIndex < headerList.length ) {
      stackIndexHandler(stackIndex + 1);
    }
  }
  useEffect(() => {
    loadingHandler(true);

    fetch("courses")
      .then((response) => response.json())
      .then((serverData) => {
        hedaerListHandler(props.lang? serverData[0].enContentList : serverData[0].azContentList);
      loadingHandler(false);
      
      });
  }, [props.lang]);

  const data = headerList.find((e) => {
    return e.id === stackIndex;
  });
  const header = data && data.header;
  const description = data && data.description;
  const answer = data && data.answer;
  if (loading) {
    return <p>Loading...</p>;
  }
  

  return (
    <div className={"htmlFirst" + props.colors}>
      <div className="courseNavbar">
    
        {headerList.map((e) => (
          <div>
            <div
              className={
                "navbarItem " + (e.id === stackIndex ? "active" : "")
              }
              onClick={() => stackIndexHandler(e.id)}
            >
              {e.header}
            </div>
          </div>
        ))}
      </div>

      <main>
        <span className="header">{header}</span>
        <span className="description">{description}</span>
        <span className="answer">{answer}</span>

        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button disabled={hidePrevButton} onClick={prev}>
            Prev
          </button>
          <button disabled={hideNextButton} onClick={next}>
            Next
          </button>
          {!hideFinishButton && (
            <button disabled={hideFinishButton}>
              <NavLink to="/learn">Finish</NavLink>
            </button>
          )}
        </span>
      </main>
    </div>
  );
}

export default HtmlFirst;
