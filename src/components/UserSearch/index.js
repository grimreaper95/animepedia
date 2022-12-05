import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {findByUsername, findUser} from "../../services/user-service";
import {all} from "axios";
import {ListGroupItem} from "react-bootstrap";


const UserSearch = () => {

    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    const param = useParams();
    console.log("param " + param.usid)

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await findByUsername(param.usid)
            setAllUsers(userData);
            console.log("allUsers " + JSON.stringify(allUsers))
        }

        getDataFromServer();

    }, [])

    return (
        <>

            {/*{*/}
            {/*    allUsers.map((user) => (*/}
            {/*        <Link to={`../profile/${user._id}`}>*/}
            {/*            <ListGroupItem>*/}
            {/*                {user.username} ({user.role})*/}
            {/*            </ListGroupItem>*/}
            {/*        </Link>*/}
            {/*    ))*/}
            {/*}*/}



            <h1> Name</h1>

        </>
    )

}

export default UserSearch;