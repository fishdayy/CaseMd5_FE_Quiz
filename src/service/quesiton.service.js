import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import authHeader from "./auth-header";


export const addQuestion = createAsyncThunk(
    'question/addQuestion',
    async (data) => {
        const res = await customAxios.post('question', data, {headers: authHeader()});
        return data
    }
)
export const findQuestionByIdTest = createAsyncThunk(
    'question/findQuestionByIdTest',
    async (id)=>{
        const res = await customAxios.get('questions'+id)
        return res.data
    }
)