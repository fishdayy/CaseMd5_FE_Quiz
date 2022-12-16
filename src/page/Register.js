import {Link} from "react-router-dom";

export default function Register(){
    return(
        <>
            <div className='row'>
                <div className='offset-3 col-6 mt-5'>
                    <form>
                        <h1 style={{textAlign: "center"}}>Register</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address/Username</label>
                            <input type={"text"} className={'form-control'}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type={"text"} className={'form-control'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="ml-3 btn btn-secondary">
                            <Link to={'/'} style={{textDecoration: 'none', color:'white'}}>Login</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}