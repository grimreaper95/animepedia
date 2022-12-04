import React, {useState} from "react";
import {useParams} from "react-router-dom";

const OtherUserProfile = () => {
    const params = useParams();

    console.log(params.usid)
    return (
        <div className="position-relative ">
            <img src={('../../images/profile_banner.png')} className=" img w-100 "/><br/>
            <div className="col-3 position-absolute top-50 ms-2">
                <img className="rounded-circle img-fluid img-thumbnail" src={('../../images/profile.jpg')}
                />
            </div>
        </div>

    )

}

export default OtherUserProfile;