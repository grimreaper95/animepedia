import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/user-thunk";
import userReducer from "../../reducers/user-reducer";
import {useNavigate} from "react-router";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.userData)
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
        console.log(currentUser)
        if (currentUser) {
            console.log(`Welcome ${currentUser.firstName}!`)
            navigate('/')
        }
    }
    return (
        <>
            <h1>Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                placeholder="Username"
                onChange={(e) =>setUsername (e.target.value)}/>

            <input
                className="form-control mb-2"
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) =>setPassword(e.target.value)}/>

            <button onClick={handleLoginBtn} className="btn btn-primary w-100">
                Login
            </button>
        </>
    )
}

export default Login;