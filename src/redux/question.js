import {createSlice} from "@reduxjs/toolkit";
import {addQuestion} from "../service/quesiton.service";

const initialState = {questions: []};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            state.questions = action.payload
        })
    }
});


export default questionSlice.reducer
