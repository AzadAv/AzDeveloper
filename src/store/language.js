import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialLanguageState = {
    language: "en",
    languageMode: true
}

const languageSlice = createSlice({

    name:'languageHandler',
    initialState: initialLanguageState,
    reducers:{

        setEnglish(state){

            state.languageMode = true;
           
        },
        setAze(state){

            state.languageMode = false;
         
        }   
    }
});

export const languageActions = languageSlice.actions;
export default languageSlice.reducer;