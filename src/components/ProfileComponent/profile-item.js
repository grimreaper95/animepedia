import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/user-thunk";
import "./index.css"
import {useNavigate} from "react-router";

const ProfileItem = () => {

    const {currentUser} = useSelector(state => state.userData)
    const [editProfile, setEditProfile] = useState(false);
    const navigate = useNavigate();

    const editClickHandler = () => {
        setEditProfile(true);
        navigate("/edit-profile");

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
            <div className="p-2 name">
                <div className="row">
                    <div className="col-8">
                        <h1 className=" text-secondary">@ {currentUser.username}  </h1>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary rounded-pill float-end" onClick={editClickHandler}>
                            Edit Profile
                        </button>
                    </div>


                </div>


                <div className="m-3 text-secondary">
                    <h3> Name : {currentUser.firstName} {currentUser.lastName}</h3>
                    <h3> Email Id : {currentUser.email} </h3>
                    <h3> Account Type : {currentUser.accountType} </h3>
                </div>

            </div>


        </>
    )

}

export default ProfileItem;