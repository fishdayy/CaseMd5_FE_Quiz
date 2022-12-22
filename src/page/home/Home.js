import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ListQuizzes from "./ListQuizzes";

export default function Home() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="col-1"
                         style={{float: "left", height: "200px", marginTop: "auto", width: "6.5%"}}></div>
                    <div className="col-6 d-flex " style={{
                        float: "left",
                        height: "200px",
                        border: '1px solid black',
                        boxShadow: "5px 5px 5px 1px #888888",
                        borderRadius: "25px"
                    }}>
                        <form className="d-flex" role="search" style={{margin: "auto"}}>
                            <input className="form-control me-2" type="search" placeholder="Join Code"
                                   style={{width: "300px", height: "50px"}}/>
                            <button className="btn btn-outline-success" type="submit" style={{height: "50px"}}>Join
                            </button>
                        </form>
                    </div>
                    <div className="col-1"
                         style={{float: "left", height: "200px", marginTop: "auto", width: "60px"}}></div>
                    <div className="col-4" style={{
                        float: "left",
                        height: "200px",
                        marginTop: "auto",
                        border: '1px solid black',
                        boxShadow: "5px 5px 5px 1px #888888",
                        borderRadius: "25px"
                    }}>
                        <div className="col-12" style={{textAlign: "center", height: '25%', marginTop: "50px"}}>
                            <p style={{margin: "auto",}}>UserName</p>
                        </div>
                        <div className="col-12" style={{margin: "auto"}}>
                            <Link to="/profile" className="col-5"
                                  style={{float: "left", textAlign: "center", height: '50%'}}>
                                <p style={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>Edit Profile</p>
                            </Link>
                            <label className="col-2" style={{float: "left", textAlign: "center"}}>|</label>
                            <Link to="/active" className="col-5"
                                  style={{float: "left", textAlign: "center", height: '50%'}}>
                                <p style={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>Action</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="col-12">
                        <div className="col-1"
                             style={{float: "left", height: "10px", marginTop: "auto", width: "7.5%"}}></div>
                        <div className="col-8" style={{float: "left", marginTop: "20px"}}>
                            <h3>Mathematics</h3>
                        </div>
                        <div className="col-2"
                             style={{float: "left", textAlign: "right", width: "280px", marginTop: "20px"}}>
                            <Button variant="secondary">Secondary</Button>{' '}
                        </div>
                        <div className="col-1" style={{float: "left", marginTop: "auto", width: "20px",}}></div>
                    </div>
                    <div className="col-12" style={{float: "left"}}>
                        <div className="col-1"
                             style={{float: "left", height: "10px", marginTop: "auto", width: "6.5%"}}></div>
                        <div className="col-2" style={{
                            float: "left",
                            width: "255.4",
                            height: "204",
                            backgroundColor: "red",
                            marginRight: "16px",
                            marginBottom: "16px"
                        }}>
                            <button style={{
                                float: "right",
                                width: "255.4",
                                height: "204",
                                backgroundColor: "red",
                                marginRight: "16px",
                                marginBottom: "16px"
                            }}>abv
                            </button>
                        </div>
                        <div className="col-2" style={{
                            float: "left",
                            width: "255.4",
                            height: "204",
                            backgroundColor: "red",
                            marginRight: "16px",
                            marginBottom: "16px"
                        }}>
                            <button style={{
                                float: "right",
                                width: "255.4",
                                height: "204",
                                backgroundColor: "red",
                                marginRight: "16px",
                                marginBottom: "16px"
                            }}>abv
                            </button>
                        </div>
                        <div className="col-2" style={{
                            float: "left",
                            width: "255.4",
                            height: "204",
                            backgroundColor: "red",
                            marginRight: "16px",
                            marginBottom: "16px"
                        }}>
                            <button style={{
                                float: "right",
                                width: "255.4",
                                height: "204",
                                backgroundColor: "red",
                                marginRight: "16px",
                                marginBottom: "16px"
                            }}>abv
                            </button>
                        </div>
                        <div className="col-2" style={{
                            float: "left",
                            width: "255.4",
                            height: "204",
                            backgroundColor: "red",
                            marginRight: "16px",
                            marginBottom: "16px"
                        }}>
                            <button style={{
                                float: "right",
                                width: "255.4",
                                height: "204",
                                backgroundColor: "red",
                                marginRight: "16px",
                                marginBottom: "16px"
                            }}>abv
                            </button>
                        </div>
                        <div className="col-2" style={{
                            float: "left",
                            width: "255.4",
                            height: "204",
                            backgroundColor: "red",
                            marginRight: "16px",
                            marginBottom: "16px"
                        }}>
                            <button style={{
                                float: "right",
                                width: "255.4",
                                height: "204",
                                backgroundColor: "red",
                                marginRight: "16px",
                                marginBottom: "16px"
                            }}>abv
                            </button>
                        </div>
                        <div className="col-1" style={{float: "left", marginTop: "auto", width: "20px",}}></div>
                    </div>
                </div>
                <div>
                    <ListQuizzes></ListQuizzes>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer/>
                </div>
            </div>

        </>
    )
}