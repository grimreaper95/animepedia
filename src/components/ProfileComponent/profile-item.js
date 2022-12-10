import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/user-thunk";
import "./index.css"
import {useNavigate} from "react-router";
import Following from "../Following";
import {Link} from "react-router-dom";
import HeaderBar from "../Header";

const ProfileItem = () => {

    const {currentUser} = useSelector(state => state.userData)
    const [editProfile, setEditProfile] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState();
    const editClickHandler = () => {
        setEditProfile(true);
        navigate("/edit-profile");

    }

    return (
        <>
            <HeaderBar/>
            <div className="row mx-5">
                <div className="row my-4">
                    <div className="col-9 me-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for fellow users!"
                            value={input}
                            onInput={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="col ms-5 float-end ps-4 pe-0 me-0">
                        <Link to={`/searchUsers/${input}`}>
                            <button className="btn btn-dark">
                                Search
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="col-9">


                    <div className="position-relative ">
                        <img src={('../../images/banner_home.jpeg')} className=" img w-100 "/><br/>
                        <div className="col-3 position-absolute top-50 ms-2">
                            <img className="rounded-circle img-fluid img-thumbnail"
                                 src={('../../images/profile_1.jpeg')}
                            />
                        </div>
                    </div>
                    <div className="p-2 name">
                        <div className="row">
                            <div className="col-8">
                                <h1 className=" text-secondary">@ {currentUser.username}  </h1>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark float-end" onClick={editClickHandler}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        <div className="m-3 text-secondary">
                            <h3> Name : {currentUser.firstName} {currentUser.lastName}</h3>
                            <h3> Email Id : {currentUser.email} </h3>
                            <h3> Phone Number : {currentUser.phoneNumber} </h3>
                            <h3> Account Type : {currentUser.accountType} </h3>
                        </div>

                    </div>


                </div>
                <div className="col">
                    <Following/>
                </div>

            </div>


        </>
    )

}

export default ProfileItem;