import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../../services/user-thunk";
import {findUser} from "../../services/user-service";
import {useState} from "react";
import {useNavigate} from "react-router";

const FollowItemList = ({follow}) => {

    const [user, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Ping")
        const getDataFromServer = async () => {
            const userData = await findUser(follow.followingId)
            console.log("data 1 " + userData)
            setUserData(userData);

        }

        getDataFromServer();
        console.log("user " + user)

    }, [])
    return (

        <>{
            user ?
                <li
                    className="list-group-item"
                >
                    <h1 >  {user.firstName} {user.lastName} </h1>
                </li> : null
        }


        </>
    )
}

export default FollowItemList