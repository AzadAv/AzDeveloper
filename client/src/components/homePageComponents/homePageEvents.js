import React from 'react'
import "./homePageEvents.css"
import {useSelector, connect, useDispatch} from 'react-redux';

import Event from '../UI/Event'
function Events(props) {

  const styleColor = useSelector((state) =>state.style.color);
  const language = useSelector((state) =>state.language.languageMode);

    const data = {
        en: {
          lessons: ["New Events", "search for Event"],
        },
        az: {
         lessons: ["Son Dərslər", "dərs axtar"],
        },
      };

    const eventsDB = [{

        _id : 1,
        username: "Doron",
        topic: "Front-End",
        likes: 4,
        description: "We are gonna talk about front end development",
        date: "13/5/2022",
        color:"Red"
    
      },
      {
        _id : 2,
        username: "Eti",
        topic: "Back-end",
        likes: 2,
        description: "Learn the back end development technologies",
        date: "17/6/2022",
        color:"Green"
        
      },
      {
        _id : 3,
        username: "Dario",
        topic: "Java Programming Language",
        likes: 1000,
        description: "Fundamentals of Java Programming language",
        date: "28/5/2022",
        color:"Yellow"
        
      },
    
      {
        _id : 4,
        username: "Habib",
        topic: "CISCO Networking",
        likes: 10,
        description: "Networking from Beginner to Network Manager",
        date: "31/5/2022",
        color:"Blue"
        
      },
    
    ];


    const coursesMain = eventsDB.map((e) => (
        
      <Event 
      name={e.username}
      topic={e.topic}
      likes={e.likes}
      description={e.description}
      date={e.date}
      color={styleColor}
      lang={language}

      />
    ));
  return (
    <div className={props.display? 'none':("eventsContainer"+styleColor)}>
        
          {coursesMain}  
        
  </div>
  )
}

export default Events