import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialStyleState = {color: "Light", mode:true}

const styleSlice = createSlice({

    name:'styleHandler',
    initialState: initialStyleState,
    reducers:{

        setLight(state){

            state.color = 'Light';
            state.mode = true
        },
        setDark(state){

            state.color = "Dark";
            state.mode = false

        }
    }
});

export const styleActions = styleSlice.actions;
export default styleSlice.reducer;