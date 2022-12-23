import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import authHeader from "./auth-header";


export const getQuestion = createAsyncThunk(
    'questions/getQuestions',
    async (data) => {
        const res = await customAxios.post('tests',data, {headers: authHeader()});
        console.log(data)
        return data
    }
)

export const addQuestion = createAsyncThunk(
    'questions/addQuestions',
    async (data) => {
        const res = await customAxios.post('tests', data, {headers: authHeader()});
        return data
    }
)
export const findQuestionByIdTest = createAsyncThunk(
    'questions/findQuestionByIdTest',
    async (id)=>{
        const res = await customAxios.get('tests'+id)
        return res.data
    }
)