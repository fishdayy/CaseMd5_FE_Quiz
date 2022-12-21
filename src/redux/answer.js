import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const answerSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            return { answer: action.payload };
        },
        clearAnswer: () => {
            return { answer: "" };
        },
    },
});

const { reducer, actions } = answerSlice;

export const { setAnswer, clearAnswer } = actions
export default reducer;