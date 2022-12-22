import React, {useEffect} from "react";
import {Field, Formik, Form} from "formik";
import ListQuizzes from "./ListQuizzes";
import exams from "../../redux/exams";

const initialValues = {
    account_id: localStorage.getItem('user'),
    exam: {
        exam_name: "",
        category_id: "",
        img_exam: ""
    },
    questions: [{
        question_name: "",
        img_question: "",
        answers: [
            {answer: "", status: ""},
            {answer: "", status: ""},
            {answer: "", status: ""},
            {answer: "", status: ""}
        ]
    }]
};
// const exam
const handleSubmit = (formValue) => {
    let data = {...formValue,exam: {}}
    console.log(data)
}
export default function ManageQuizzes() {
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div className="form-group">
                        <label htmlFor="disabledSelect">Name Exam</label>
                        <Field name="exam_name" type="text" className="form-control"/>
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
                        <Form>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Question</label>
                                <Field name="question_name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Answer 1</label>
                                <Field name="question_name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Answer 2</label>
                                <Field name="question_name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Answer 3</label>
                                <Field name="question_name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Answer 4</label>
                                <Field name="question_name" type="text" className="form-control"/>
                            </div>
                        </Form>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">
                            <span>Add Exam</span>
                        </button>
                    </div>
                    <div>
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