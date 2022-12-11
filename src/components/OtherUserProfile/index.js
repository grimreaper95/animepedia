import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findUser} from "../../services/user-service";
import {useDispatch, useSelector} from "react-redux";
import {addFollowerThunk, findAllFollowersThunk, unfollowThunk} from "../../services/following-thunk";
import {useNavigate} from "react-router";
import {unfollow} from "../../services/following-service";
import HeaderBar from "../Header";
import Following from "../Following";
import OtherFollowing from "../OtherFollowing";

const OtherUserProfile = () => {
    const params = useParams();
    const otherUser = params.usid;
    const [user, setUserData] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.userData)
    const {followingList, loading} = useSelector(state => state.following)
    const [checkFollowingData, setFollowingData] = useState(false);

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await findUser(otherUser)
            setUserData(userData);
        };

        getDataFromServer();

    }, [])

    useEffect(() => {

        const checkFollowing = async () => {
            followingList.forEach(function (key, value) {
                console.log("foll" + key.followingId)
                console.log("foll" + user._id)
                if (key.followingId === user._id) {
                    setFollowingData(true);
                }

            })

            if (user._id === currentUser._id) {
                navigate("/profile");

            }

        };
        checkFollowing();
    }, [user])


    const addFollowerHandler = () => {
        const userId = currentUser._id;
        const followingId = user._id;
        const follow = {userId, followingId}
        dispatch(addFollowerThunk(follow));
        setFollowingData(true)
        alert("User Followed")



    }

    const unFollowHandler = () => {
        const userId = currentUser._id;
        const followingId = user._id;
        const unfollowId = {userId, followingId}
        dispatch(unfollowThunk(unfollowId));
        setFollowingData(false)
        alert("User Unfollowed")
    }


    return (


        user ?
            <>
                <HeaderBar/>
                <div className="row mx-5">
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
                                    <h1 className=" text-secondary">@ {user.username}  </h1>

                                </div>
                                <div className="col-4">


                                    {
                                        !checkFollowingData &&
                                        <button className="btn btn-dark  float-end"
                                                onClick={addFollowerHandler}>
                                            Follow
                                        </button>
                                    }

                                    {
                                        checkFollowingData &&
                                        <button className="btn btn-dark  float-end"
                                                onClick={unFollowHandler}>
                                            Unfollow
                                        </button>
                                    }


                                </div>


                            </div>


                            <div className="m-3 text-secondary">
                                <h3> Name : {user.firstName} {user.lastName}</h3>
                                <h3> Account Type : {user.accountType} </h3>
                            </div>

                        </div>
                    </div>

                    <div className="col">
                        <OtherFollowing/>
                    </div>



                </div>
            </> : null

    )


}

export default OtherUserProfile;