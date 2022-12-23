import React from "react";
import {Field, Formik, Form} from "formik";
import ListQuizzes from "./ListQuizzes";

import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addExams} from "../../service/exams.service";


const initialValues = {
    account_id: localStorage.getItem('user'),
    exam_name: "",
    category_id: "",
    img_exam: ""
};

export default function ManageQuizzes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        let data = {...values}
        console.log(data)
        await dispatch(addExams(data))
        navigate('/exams/exams')
    }
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values) => {
                handleSubmit(values)
            }}>
                <Form>
                        <div className="form-group">
                            <label htmlFor="disabledSelect">Name Exam</label>
                            <Field name="exam_name" type="text" className="form-control"/>


                            <label htmlFor="disabledSelect" className="form-label">Category</label>
                            <Field id="disabledSelect" name="category_id" className="form-select" as={'select'}>
                                <option value={"1"}>Animal</option>
                                <option value={"2"}>Football</option>
                            </Field>
                        </div>

                        <div className="form-group" style={{marginTop: "20px"}}>
                            <button type="submit" className="btn btn-primary btn-block">
                                <span>Add Exam</span>
                            </button>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <ListQuizzes/>
                        </div>
                </Form>
            </Formik>
        </>
    )
}