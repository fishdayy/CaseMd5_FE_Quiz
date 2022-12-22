import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/auth";
import messageReducer from "./redux/message";
import examsSlice from "./redux/exams"
import accountSlice from "./redux/account"

const reducer = {
    auth: authReducer,
    message: messageReducer,
    exam: examsSlice,
    account: accountSlice
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;