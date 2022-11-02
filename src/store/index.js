import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import styleReducer from "./style";
import languageReducer from "./language";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    style: styleReducer,
    language: languageReducer,
  },
});

export default store;
