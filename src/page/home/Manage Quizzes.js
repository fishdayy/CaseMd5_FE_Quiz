import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getExams} from "../../service/exams.service";
import {ErrorMessage, Field, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Question from "../../component/Question";

export default function ManageQuizzes() {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const exams = useSelector(state => {
        console.log(state);
        return state
    })

    useEffect(()=>{
        dispatch(getExams())
    },[])

    const initialValues = {
        account_id: localStorage.getItem('user'),
        exam: {
            exam_name: " ",
            category_id: " ",
            img_exam: ""
        },
        questions: [{
            question_name: "",
            img_question: "",
            answers: [
                {answer: "", status: " "},
                {answer: "", status: " "},
                {answer: "", status: " "},
                {answer: "", status: " "}
            ]
        }]
    };

    const handleSubmit = (formValue) => {

    }
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div className="form-group">
                        <label htmlFor="disabledSelect">Name Exam</label>
                        <Field name="exam_name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="disabledSelect" className="form-label">Category</label>
                        <select id="disabledSelect" name="category_id" className="form-select">
                            <option>Disabled select 1</option>
                            <option>Disabled select 2</option>
                            <option>Disabled select 3</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="disabledSelect" className="form-label">Image</label>
                        <Field name="img_exam" type="file" className="form-control" />
                    </div>
                    <Question/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                            <span>Add Exam</span>
                        </button>
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