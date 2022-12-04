import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../../services/user-thunk";


const FollowItemList = (follow) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userData)

    useEffect(() => {
        dispatch(findUserThunk(follow.userId))
    }, [])

    console.log("user - " + user)
    return (
        <>
            <li className="list-group-item">
                <h1> Follow {user.firstName} </h1>

            </li>
        </>
    )
}

export default FollowItemList