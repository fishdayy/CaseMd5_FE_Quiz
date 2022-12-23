import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getExams} from "../../service/exams.service";

export default function ListQuizzes() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const exam = useSelector(state => {
        return state.exam.exams
    });

    const user_id = +localStorage.getItem('user')

    useEffect(() => {
        dispatch(getExams())
    }, [getExams])

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
                            <th scope="col"></th>
                        </tr>
                        </thead>

                        {exam.filter(item => {
                            return item.account_id == user_id
                        }).map((item) => {
                            console.log(item)
                            return (
                                <tbody>
                                <tr>
                                    <th scope="row">{item.exam_id}</th>
                                    <td>{item.exam_name}</td>
                                    <td>{item.category_name}</td>
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
                            )
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}