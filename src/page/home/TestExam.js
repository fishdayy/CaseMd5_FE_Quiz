import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {addQuestion, findQuestionByIdTest, getQuestion} from "../../service/quesiton.service";
import React, {useEffect} from "react";
import Navbar from "../../component/Navbar";
import {Field, Form, Formik} from "formik";
import ListQuizzes from "./ListQuizzes";

export default function TestExam() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const data = useSelector(state => {
        console.log(state.question.questions)
        return state.question.questions
    })
    const initialValues = {
        account_id: localStorage.getItem('user'),
        exam_id: "",
        point: "",
        questions: [{
            question_id: "",
            answer_id: "",
            status: ""
        }, {
            question_id: "",
            answer_id: "",
            status: ""
        }]
    }

    const handleSubmit = async (values) => {
        let data = {...values}
        await dispatch(findQuestionByIdTest(data))
        navigate("/tests")
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
                        <Field id="disabledSelect" name="exam_id" className="form-select" as={'select'}>
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