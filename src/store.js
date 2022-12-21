import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/auth";
import messageReducer from "./redux/message";
import examsReducer from "./redux/exams"
const reducer = {
    auth: authReducer,
    message: messageReducer,
    exam: examsReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;