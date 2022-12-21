import {createSlice} from "@reduxjs/toolkit";
import {getExams} from "../service/exams.service";

const initialState = {exams: []};

const examsSlice = createSlice({
    name: "exams",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getExams.fulfilled, (state, action) => {
            state.exams = action.payload
        })
    }
});


export default examsSlice.reducer
