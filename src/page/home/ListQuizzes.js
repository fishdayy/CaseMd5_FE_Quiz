import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getExams} from "../../service/exams.service";

export default function ListQuizzes() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const exams = useSelector(state => {
        console.log(state)
        return state.exam.exams
    })
    useEffect(() => {
        dispatch(getExams())
    }, [])

    // const handleEdit = (formValue) => {
    //     setValues({  });
    //     dispatch(editExam({
    //         id: params.id,
    //         name: values.name,
    //         email: values.email
    //     }));
    //     navigate('/users/');
    // }

    return (
        <>
            <div className={'row'}>
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name Exam</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Total Question</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        {exams.map((item) => {
                            return (
                                <tbody>
                                <tr>
                                    <th scope="row">{item.exam_id}</th>
                                    <td>{item.exam_name}</td>
                                    <td>{item.category_name}</td>
                                    <td>{item.total_question}</td>
                                    <td>
                                        <button>
                                            Edit
                                        </button>
                                        <button>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            )})}
                    </table>
                </div>
            </div>
        </>
    )
}