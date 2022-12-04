import React, {useState} from "react";

const OtherUserProfile = () => {


    return (
        <div className="position-relative ">
            <img src={require('../../images/profile_banner.png')} className=" img w-100 "/><br/>
            <div className="col-3 position-absolute top-50 ms-2">
                <img className="rounded-circle img-fluid img-thumbnail" src={require('../../images/profile.jpg')}
                />
            </div>
        </div>

    )

}

export default OtherUserProfile;