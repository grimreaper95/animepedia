import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findUser} from "../../services/user-service";

const OtherUserProfile = () => {
    const params = useParams();
    const currentUser = params.usid;
    const [user, setUserData] = useState(null);

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await findUser(currentUser)
            setUserData(userData);

        }

        getDataFromServer();
    })

    return (
        user ?
        <div className="position-relative ">
            <img src={('../../images/profile_banner.png')} className=" img w-100 "/><br/>
            <div className="col-3 position-absolute top-50 ms-2">
                <img className="rounded-circle img-fluid img-thumbnail" src={('../../images/profile.jpg')}
                />
            </div>
            <div className="p-2 name">
                <div className="row">
                    <div className="col-8">
                        <h1 className=" text-secondary">@ {user.username}  </h1>
                    </div>


                </div>


                <div className="m-3 text-secondary">
                    <h3> Name : {user.firstName} {user.lastName}</h3>
                    <h3> Account Type : {user.accountType} </h3>
                </div>

            </div>
        </div> : null

    )

}

export default OtherUserProfile;