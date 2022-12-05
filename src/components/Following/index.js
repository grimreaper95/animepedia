import React, {useEffect, useState} from "react";
import {findAllFollowersThunk} from "../../services/following-thunk";
import {useDispatch, useSelector} from "react-redux";
import FollowItemList from "./FollowItem";

const FollowingItem = () => {


    const {currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch();

    const {followingList, loading} = useSelector(state => state.following)

    useEffect(() => {
        dispatch(findAllFollowersThunk(currentUser._id))
    } , []);

    return (
        <>
           <h1> People you are following </h1>
            <ul className="list-group mt-2">

                {
                    followingList.map(item =>
                        <FollowItemList
                            key={item._id}
                            follow={item}/>
                    )
                }
            </ul>

        </>
    )


}

export default FollowingItem;