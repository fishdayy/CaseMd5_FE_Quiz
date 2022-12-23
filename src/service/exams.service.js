import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import authHeader from "./auth-header";

export const getExams = createAsyncThunk(
    'exams/getExams',
    async () => {
        const res = await customAxios.get('exams', {headers: authHeader()});
        return res.data
    }
)

export const addExams = createAsyncThunk(
    'exams/addExams',
    async (data) => {
        const res = await customAxios.post('exams',data,{headers: authHeader()});
        return data;
    }
)
export const deleteExams = createAsyncThunk(
    'exams/deleteExams',
    async (idExam)=>{
        const res = await customAxios.delete('exams'+idExam)
        return res.data
    }
)
export const findExams = createAsyncThunk(
    'exams/findExams',
    async (data) => {
        const res = await customAxios.get('exams/findExams?name=' + data.exam_name + '&&id=' + data.category_id)
        return res.data
    }
)

