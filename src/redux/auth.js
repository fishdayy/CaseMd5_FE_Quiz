import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../service/auth.service";

const user = localStorage.getItem("user");

export const register = createAsyncThunk(
    "register",
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await AuthService.register(username, password);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue;
        }
    }
);

export const login = createAsyncThunk(
    "login",
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(username, password);
            return { user: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("logout", async () => {
    await AuthService.logout();
});

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            localStorage.clear()
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
            localStorage.clear()

        },
        [login.fulfilled]: (state, action) => {
            if(action.payload.user.message.token){
                state.isLoggedIn = true;
                state.user = action.payload.user;
            } else {
                state.isLoggedIn = false;
                state.user = action.payload.user;
            }
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.clear()

        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.clear()

        },
    },
});

const { reducer } = authSlice;
export default reducer;