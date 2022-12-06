import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.userData)

    useEffect(() => {
        // redirect user to login page if registration was successful
        if (currentUser) navigate('/')
        console.log(currentUser)
    }, [navigate, currentUser])

    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser)).then(
            () => {
                console.log(currentUser)
                if (currentUser) {
                    navigate('/')
                }
            }

        )
    }

    const goToProfile = () => {

    }
    // return (
    //     <>
    //         <h1>Login</h1>
    //
    //         {
    //             error &&
    //             <div className="alert alert-danger">
    //                 {error}
    //             </div>
    //         }
    //         <input
    //             className="form-control mb-2"
    //             value={username}
    //             placeholder="Username"
    //             onChange={(e) =>setUsername (e.target.value)}/>
    //
    //         <input
    //             className="form-control mb-2"
    //             value={password}
    //             type="password"
    //             placeholder="Password"
    //             onChange={(e) =>setPassword(e.target.value)}/>
    //
    //         <button onClick={handleLoginBtn} className="btn btn-primary w-100">
    //             Login
    //         </button>
    //
    //
    //     </>
    // )
    return (
        <>
            <HeaderBar/>
            <div className="Auth-form-container">
            <div className="Auth-form">
                {
                    error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter username"
                            onChange={(e) =>setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) =>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-dark"
                            onClick={handleLoginBtn}>
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        New User? <a href="../register">Sign Up</a>
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login;