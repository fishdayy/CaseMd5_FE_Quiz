import {createSlice} from "@reduxjs/toolkit";
import {addExams, getExams} from "../service/exams.service";

const initialState = {
    exams: []
};

const examsSlice = createSlice({
    name: "exams",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getExams.fulfilled, (state, action) => {
            state.exams = action.payload
        })
        builder.addCase(addExams.fulfilled, (state, action) => {
            state.exams.push(action.payload)
        })

    }
});


export default examsSlice.reducer
