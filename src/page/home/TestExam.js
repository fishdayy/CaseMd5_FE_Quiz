import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function TestExam() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    return (
        <>
            <div className={'row'}>
                <div className="col-12">
                    <div>Cau hoi</div>
                    <div>dap an</div>
                </div>
            </div>
        </>
    )
}