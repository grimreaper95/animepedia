import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {findByUsername, findUser, searchByUsername} from "../../services/user-service";
import {all} from "axios";
import {ListGroupItem} from "react-bootstrap";


const UserSearch = () => {

    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    const param = useParams();
    console.log("param " + param.usid)

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await searchByUsername(param.usid)
            setAllUsers(userData);

        }

        getDataFromServer();
        console.log("allUsers " + JSON.stringify(allUsers))

    }, [])

    return (
        <>

            {
                allUsers.map((user) => (
                    <Link to={`../profile/${user._id}`}>
                        <ListGroupItem>
                            @ {user.username} ({user.accountType})
                        </ListGroupItem>
                    </Link>
                ))
            }

        </>
    )

}

export default UserSearch;