import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getExams} from "../../service/exams.service";

export default function ListQuizzes(){
    const dispatch = useDispatch()
    const exams = useSelector(state => {
        console.log(state.exam.exams)
        return state.exam.exams
    })
    useEffect(()=>{
        dispatch(getExams())
    },[])
    return(
        <>
            <div className={'row'}>
                <div className="col-12">
                    {exams.map((item)=>{
                        return <h1>{item.exam_name}</h1>
                    })}
                </div>
            </div>
        </>
    )
}