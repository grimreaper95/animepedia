import React, {useEffect, useState} from "react";
import {findAllFollowersThunk} from "../../services/following-thunk";
import {useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";
import OtherFollowingItem from "./OtherFollowingItem";

const OtherFollowing = () => {

    const param = useParams();

    const dispatch = useDispatch();

    const {followingList, loading} = useSelector(state => state.following)

    useEffect(() => {
        dispatch(findAllFollowersThunk(param.usid))
    } , []);

    return (
        <>
            <div className="list-group">


                <div className="list-group-item"><h2> People They Follow </h2></div>


                {
                    followingList.map(item =>
                        <OtherFollowingItem
                            key={item._id}
                            follow={item}/>
                    )
                }

            </div>

        </>
    )


}

export default OtherFollowing;