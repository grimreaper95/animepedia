import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {profileThunk} from "../../services/user-thunk";
// import {adminLoginThunk} from "../../services/admin-thunk";

const CurrentUser = ({children}) => {
    const [isLoading, setLoading] = useState(true);
    const {currentUser} = useSelector((state) => state.userData)
    // const {currentAdmin} = useSelector((state) => state.adminData())
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk()).then(
            ()=>{
                setLoading(false)
            }
        )
        // dispatch(adminLoginThunk()).then(
        //     ()=>{
        //         setLoading(false)
        //     }
        // )
    },[])
    if (isLoading) {
        return null
    }
    else {
        return (children)
    }

}
export default CurrentUser