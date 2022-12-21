import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
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
        const res = await customAxios.post('exams', data);
        return data
    }
)