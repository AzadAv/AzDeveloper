import React from "react";
import GeneralContext from "./general-context";
import { useReducer } from "react";

const defaultModeState = {

    mode : false,
    color: "Light"
}

const modeReducer = (action) =>{

    if (action.type === "LIGHT"){

        return{mode: true, color: "Light"}

    }

    if(action.type === "DARK"){

        return{mode: false, color: "Dark"}
    }
}

function GeneralProvider(props) {

//   const { langState, dispatchLangAction } = useReducer(
//     langReducer,
//     defaultLangState
//   );

  const { modeState, dispatchModeAction } = useReducer(
    modeReducer,
    defaultModeState
  );

  const darkModeHandler =() =>{

    dispatchModeAction({type: "DARK"});
  }
  
  const lightModeHandler = () => {

    dispatchModeAction({type: "LIGHT"});
  }
  const generalContext = {
    // language: langState.language,
    modeState: modeState,
    setDark: darkModeHandler,
    setLight: lightModeHandler,
    setEnglish: () => {},
    setAze: () => {},
  };

  return (
    <GeneralContext.Provider value={generalContext}>
      {props.children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;
