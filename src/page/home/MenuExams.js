import Navbar from "../../component/Navbar";
import {Link, Outlet} from "react-router-dom";

export default function MenuExams() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="col-6" style={{float: "left", textAlign: "center"}}>
                        <Link to="/exams">
                            Manage Quizzes
                        </Link>
                    </div>
                    <div className="col-6" style={{float: "left", textAlign: "center"}}>
                        <Link to="/update-exams">
                            Update Q/A Quizzes
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>

        </>
    )
}