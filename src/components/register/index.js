import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "../../services/user-thunk";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch();

    const handleRegistrationBtn = () => {
        if (password !== confirmPassword) {
            setError('Passwords must match!')
            return
        }
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    return (
        <>
            <h1>Register</h1>
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
                placeholder="Password"
                onChange={(e) =>setPassword(e.target.value)}/>

            <input
                className="form-control mb-2"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) =>setConfirmPassword(e.target.value)}/>
            <button onClick={handleRegistrationBtn} className="btn btn-primary w-100">
                Register
            </button>
        </>
    )
}

export default Register;