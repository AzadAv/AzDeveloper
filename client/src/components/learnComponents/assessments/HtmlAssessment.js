import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useRef, useEffect } from "react";
import "./HtmlAssessment.css";
function HtmlAssessment() {
  const assData = [
    {
      id: 0,
      question: "How to build html file ?",
      answers: [
        "Download from google",
        "Create a local file with code editor",
        "Buy from market",
      ],
      rightAsnwer: "Create a local file with code editor",
    },
    {
      id: 1,
      question: "How to set title of html file ?",
      answers: [
        "Change the default name of file in <title></title> tag",
        "Add the file name in <body></body>",
        "Set the src property of <script></script> tag",
      ],
      rightAsnwer: "Change the default name of file in <title></title> tag",
    },
    {
      id: 2,
      question: "How to connect css file to html file ?",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
      ],
      rightAsnwer: "Answer 1",
    },
  ];
  const [loading, loadingHandler] = useState(false);
  const [questions, questionsHandler] = useState(assData);
  const [index, indexHandler] = useState(0);

  const [userAnswer, answerHandler] = useState("");
  const [answersList, answersListHandler] = useState([]);
  const [grade, gradeHandler] = useState();
  const [switchScreens,switchScreensHandler]=useState(false);

  const hidePrevButton = index === 0;
  const hideNextButton = answersList.length == questions.length;
  
  const setAnswer = (e) => {
    answerHandler(e.currentTarget.innerText);
  }
  function updateAnswersList(){

    const answerExistsInList = answersList.find((e) => e.id === index);

      if (!answerExistsInList) {
        
            answersListHandler([
              ...answersList,
              {
                id: index,
                answer: userAnswer,
                rightOrNot: userAnswer === questions[index].rightAnswer,
              },
            ]);
      } 
      else {
      
          answersListHandler(current =>
            current.map(obj => {
              if (obj.id === index) {
                return {...obj, answer: userAnswer, rightOrNot: userAnswer === questions[index].rightAsnwer,};
              }
              return obj;
            }),
          );
       
      }
  }
  function nextQuestion() {
    if (index < questions.length) {
      
        
      if(index == questions.length-1){

        updateAnswersList();
        
      }else {

        updateAnswersList();
        indexHandler(index + 1);
      }
      
    }
    
  }
  function prevQuestion() {
    if (index > 0) {
      indexHandler(index - 1);
      const newList = answersList.slice(0,index);
      answersListHandler(newList);
    }
  }
  function setGrade() {

  const rightAnswers =  answersList.filter(value => value.rightOrNot === true).length;
  gradeHandler((rightAnswers*100)/answersList.length);
  switchScreensHandler(true);
  }
  function restart() {

    answersListHandler([]);
    indexHandler(0);
    gradeHandler(0);
    switchScreensHandler(false);
  }

  useEffect(() => {
    loadingHandler(true);

    fetch("assessments")
      .then((response) => response.json())
      .then((data) =>{

        questionsHandler(data[0].questions);
        // console.log(questions);
        loadingHandler(false);
      });

  }, []);

  // console.log(grade);
  console.log(answersList);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className={switchScreens?"none":"htmlAssContainer"}>
          <span className="question">{questions[index].question}</span>
          <div className="answers">
            {questions[index].answers.map((answer) => (
              <span
                className={"answer "}
                style={{
                  margin: "20px",
                  border: "1px solid #16406D",
                  padding: "2px",
                  fontSize: "20px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "0.1s ease-in",
                  backgroundColor: answer === userAnswer ? "#16406D" : "white",
                  color: answer === userAnswer ? "white" : "#16406D",
                }}
                onClick={setAnswer}
              >
                {answer}
              </span>
            ))}
          </div>
          <span className="buttons">
            <button disabled={hidePrevButton} onClick={prevQuestion}>
              Prev
            </button>
            <button disabled={hideNextButton} onClick={nextQuestion}>
              Next
            </button>
            <button disabled={questions.length>answersList.length} onClick={setGrade}>Submit</button>
          </span>
      </div>
      <div className={switchScreens?"finishContainer":"none"}>
        <span>Your grade is : {grade}</span>
        <button onClick={restart}>Restart Assessment</button>
        <button>Finish </button>
      </div>
  </div>
  );
}

export default HtmlAssessment;
