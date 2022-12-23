import {createSlice} from "@reduxjs/toolkit";
import {addQuestion, findQuestionByIdTest, getQuestion} from "../service/quesiton.service";

const initialState = {questions: []};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getQuestion.fulfilled, (state, action) => {
            state.questions = action.payload
        })
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            state.questions.push(action.payload)
        })
        builder.addCase(findQuestionByIdTest.fulfilled, (state, action) => {
            state.questionTest = action.payload
        })
    }
});


export default questionSlice.reducer
