import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {logout} from "../redux/auth";

export default function Navbar() {
    const dispatch = useDispatch();

    const { user: currentUser } = useSelector((state) => state.auth);
    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Quizz</a>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/action">Action</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/class">Class</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to={"/exams"}>
                                            <button className="ml-3 btn btn-outline-success" type="submit">Manage Quiz
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <form className="d-flex" role="search">
                                {currentUser ? (
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to={"/"} className="nav-link">
                                                {currentUser.username}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/login" className="ml-3 btn btn-outline-danger" onClick={logOut}>
                                                LogOut
                                            </a>
                                        </li>
                                    </div>
                                ) : (
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to={"/login"} className=" btn btn-outline-success" style={{marginRight: "10px"}}>
                                                Login
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to={"/register"} className="ml-3 btn btn-outline-primary">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </div>
                                )}
                                {/*<Link to={"/login"}>*/}
                                {/*    <button className=" btn btn-outline-success"*/}
                                {/*            style={{marginRight: "10px"}}>Log in*/}
                                {/*    </button>*/}
                                {/*</Link>*/}
                                {/*<Link to={"/register"}>*/}
                                {/*    <button className="ml-3 btn btn-outline-danger">Register</button>*/}
                                {/*</Link>*/}
                                {/*<Link to={"/login"}>*/}
                                {/*    <button className="ml-3 btn btn-outline-danger">Log Out</button>*/}
                                {/*</Link>*/}
                            </form>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}