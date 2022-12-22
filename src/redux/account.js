import {createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../service/user.service";

const initialState = {
    users: []
};

const accountSlice = createSlice({
    name:"users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state.users = action.payload
        })
    }
})

export default accountSlice.reducer