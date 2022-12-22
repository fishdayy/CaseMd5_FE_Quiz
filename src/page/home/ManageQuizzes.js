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

console.log((localStorage.getItem('user')))

export default function ManageQuizzes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        let data = {...values}
        console.log(data)
        await dispatch(addExams(data))
        navigate('/exams')
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

                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="disabledSelect" className="form-label">Image</label>*/}
                        {/*    <input name="img_exam" type="file" className="form-control"/>*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="disabledSelect">Question</label>*/}
                        {/*    <Field name="questions.question_name" type="text" className="form-control"/>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <label>Answer 1</label>*/}
                        {/*            <Field name="questions.answers.answer1" type="text" className="form-control"/>*/}
                        {/*            <Field name="questions.answers.status1" type="checkbox" />*/}
                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <label>Answer 2</label>*/}
                        {/*            <Field name="questions.answers.answer2" type="text" className="form-control"/>*/}
                        {/*            <Field name="questions.answers.status2" type="checkbox" />*/}

                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <label>Answer 3</label>*/}
                        {/*            <Field name="questions.answers.answer3" type="text" className="form-control"/>*/}
                        {/*            <Field name="questions.answers.status3" type="checkbox" />*/}

                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <label>Answer 4</label>*/}
                        {/*            <Field name="questions.answers.answer4" type="text" className="form-control"/>*/}
                        {/*            <Field name="questions.answers.status4" type="checkbox" />*/}
                        {/*        </div>*/}
                        {/*</div>*/}

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

            {/*<Table striped bordered hover>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>ID</th>*/}
            {/*        <th>Name Exam</th>*/}
            {/*        <th>Description</th>*/}
            {/*        <th>Action</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td>1</td>*/}
            {/*        <td>Mark</td>*/}
            {/*        <td>Otto</td>*/}
            {/*        <td>*/}
            {/*            <button type="button" className="btn btn-warning">Edit</button>*/}
            {/*            <button type="button" className="btn btn-danger">Delete</button>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    </tbody>*/}
            {/*</Table>*/}
        </>
    )
}