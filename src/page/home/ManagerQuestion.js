// import {useDispatch, useSelector} from "react-redux";
// import {useNavigate, useParams} from "react-router-dom";
// import {addQuestion, findQuestionByIdTest, getQuestion} from "../../service/quesiton.service";
// import React, {useEffect} from "react";
// import Navbar from "../../component/Navbar";
// import {Field, Form, Formik} from "formik";
// import ListQuizzes from "./ListQuizzes";
// import InputAnswer from "../../component/InputAnswer";
// import {addExams} from "../../service/exams.service";
//
// export default function ManagerQuestion() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate();
//     const data = useSelector(state => {
//         console.log(state.question.questions)
//         return state.question.questions
//     })
//     const exam = useSelector(state => {
//         return state.exam.exams
//     });
//
//
//     let newQuestion = {
//         account_id: localStorage.getItem('user'),
//         exam_id: exam.exam_id,
//         question_name: "",
//         answers: [ {answer: "", status: ""},
//             {answer: "", status: ""},
//             {answer: "", status: ""},
//             {answer: "", status: ""}]
//     }
//     const handleQuestion = async (values) => {
//         let data = {...values}
//         console.log(data)
//         newQuestion = {
//             account_id: localStorage.getItem('user'),
//             exam_id: data.exam_id,
//             question_name: values.question_name,
//             answers: [
//                 {answer: "", status: ""},
//                 {answer: "", status: ""},
//                 {answer: "", status: ""},
//                 {answer: "", status: ""}
//             ]
//         }
//         await dispatch(addQuestion(newQuestion))
//         navigate('/exams/questions')
//     }
//     useEffect(() => {
//         dispatch(addQuestion(data))
//     }, [addQuestion])
//
//
//     return (
//         <>
//             <Formik initialValues={newQuestion} onSubmit={async (values, {resetForm}) => {
//                 await handleQuestion(values)
//                 resetForm()
//             }}>
//                 <Form>
//                     <div className="form-group">
//                         <label htmlFor="disabledSelect" className="form-label">Name Quiz</label>
//                         <Field id="disabledSelect" name="answers" className="form-select" as={'select'}>
//                             {exam.map(item => {
//                                 return(
//                                     <option value={item.exam_id}>{item.exam_name}</option>
//                                 )
//                             })}
//                         </Field>
//
//                         <label htmlFor="disabledSelect">Name Question</label>
//                         <Field name="question_name" type="text" className="form-control"/>
//
//                         <InputAnswer/>
//                     </div>
//
//                     <div className="form-group" style={{marginTop: "20px"}}>
//                         <button type="submit" className="btn btn-primary btn-block">
//                             <span>Add Exam</span>
//                         </button>
//                     </div>
//                 </Form>
//             </Formik>
//         </>
//     )
// }