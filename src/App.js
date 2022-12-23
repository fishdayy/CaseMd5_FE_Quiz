import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/home/Home";
import Profile from "./page/account/Profile";


import {logout} from "./redux/auth";

import EventBus from "./common/EventBus";
import MenuExams from "./page/home/MenuExams";

import ManageQuizzes from "./page/home/ManageQuizzes";
import TestExam from "./page/home/TestExam";
import ManagerQuestion from "./page/home/ManagerQuestion";

const App = () => {

    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);


    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/exams" element={<MenuExams/>}>
                    <Route path="/exams/exams" element={<ManageQuizzes/>}/>
                    <Route path="/exams/questions" element={<ManagerQuestion/>}/>
                </Route>
                <Route path="/tests" element={<TestExam/>}/>
            </Routes>
        </div>
    );
};

export default App;
