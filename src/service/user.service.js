import axios from "axios";
import authHeader from "./auth-header";
import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

const API_URL = "http://localhost:3000/api/test/";

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};


const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

const userService = {
    getUserBoard,
    getAdminBoard,
};
export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const res = await customAxios.get('users', {headers: authHeader()});
        return res.data
    }
)

export default userService
