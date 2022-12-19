import {Link} from "react-router-dom";
import "./Footer.css"

export default function Footer(){
    return(
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>abcbac</h4>
                            <ul className="list-unstyled">
                                <li>asdasd</li>
                                <li>asdasd</li>
                                <li>asdasd</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>ASDASD</h4>
                            <ul className="list-unstyled">
                                <li>asdasd</li>
                                <li>asdasd</li>
                                <li>asdasd</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>ASDASD</h4>
                            <ul className="list-unstyled">
                                <li>asdasd</li>
                                <li>asdasd</li>
                                <li>asdasd</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>ASDASD</h4>
                            <ul className="list-unstyled">
                                <li>asdasd</li>
                                <li>asdasd</li>
                                <li>asdasd</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} TA-MK INC | ALL right reserved | Term Of Service | Privacy

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}