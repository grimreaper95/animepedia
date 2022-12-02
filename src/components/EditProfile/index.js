import React, {useState} from "react";
import {compose} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";

const EditProfile = (editProfile) => {

    const {currentUser} = useSelector(state => state.userData);
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cancelClickHandler = () => {
        const updatedProfile = currentUser;
        dispatch(updateProfileThunk(updatedProfile))
        navigate("/profile")

    }

    const saveClickHandler = () => {
        const updatedProfile = {...currentUser, firstName, lastName, email}
        dispatch(updateProfileThunk(updatedProfile))
        navigate("/profile")

    }

    return (
        <>

            <div className="position-relative ">
                <img src={require('../../images/profile_banner.png')} className=" img w-100 "/><br/>
                <div className="col-3 position-absolute top-50 ms-2">
                    <img className="rounded-circle img-fluid img-thumbnail" src={require('../../images/profile.jpg')}
                    />
                </div>
            </div>

            <div className="row">
                <i
                    onClick={cancelClickHandler}
                    className="col-1 fa-solid fa-xmark fa-2x"></i>
                <h1 className="col-8">Edit Profile</h1>
                <button
                    onClick={saveClickHandler}
                    className=" my-1 me-0  btn btn-primary col-2 float-end rounded-pill"> Save
                </button>
            </div>

            <div className="mt-5 pt-5">
                <div className="form-floating ">
                    <input
                        onChange={(event) => {
                            setFirstName(event.target.value.split(' ').slice(0, -1).join(' '))
                            setLastName(event.target.value.split(' ').slice(-1).join(' '))
                        }
                        }
                        className="form-control" id="floatingInputGrid"
                        value={`${firstName} ${lastName}`}></input>
                    <label htmlFor="floatingInputGrid">Name</label>
                </div>
            </div>

            <div className=" mt-2">
                <div className="form-floating">
                    <input
                        onChange={(event) => {
                            console.log("loc ", event.target.value)
                            setEmail(event.target.value)
                        }
                        }
                        className="form-control" id="floatingInputGrid"
                        value={email}></input>
                    <label htmlFor="floatingInputGrid">Email Id</label>
                </div>

            </div>

        </>

    )

}

export default EditProfile;