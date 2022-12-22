import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";
import authHeader from "./auth-header";


export const addQuestion = createAsyncThunk(
    'question/addQuestion',
    async (data) => {
        const res = await customAxios.post('question', data, {headers: authHeader()});
        return data
    }
)