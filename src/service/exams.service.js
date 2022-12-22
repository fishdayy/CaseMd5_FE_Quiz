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
    'test/deleteExams',
    async (idExam)=>{
        const res = await customAxios.delete('tests'+idExam)
        return res.data
    }
)
export const findTest = createAsyncThunk(
    'test/FindTest',
    async (data) => {
        const res = await customAxios.get('tests/findTest?name=' + data.exam_name + '&&id=' + data.category_id)
        return res.data
    }
)

