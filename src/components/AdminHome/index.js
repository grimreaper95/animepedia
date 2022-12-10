import React, {useEffect, useState} from "react";
import AdminHeader from "../AdminHeader";
import {
    deleteReviewer,
    findReviewer,
    getApprovedReviewers,
    getPendingReviewers,
    updateReviewer
} from "../../services/reviewer-service";
import {Button} from "react-bootstrap";

const AdminHomePage = () => {

    const [pendingList, setPendingList] = useState([]);
    const [approved, setApproved] = useState([])

    const handleApprove = async (rId) => {
        const details = await findReviewer(rId);
        // const details = reviewerDetails;
        console.log("rrr" + details._id)
        //
        if (details !== undefined) {
            const updated = {...details, approved: true}
            console.log("u " + updated._id)
            const updateApprove = await updateReviewer(updated)

            const updatedPendingList = pendingList.filter((p) => p._id !== updated._id)
            setPendingList(updatedPendingList)
            console.log("pendingList " + pendingList)

            console.log("approved1 " + approved)
            approved.push(updated)
            setApproved(approved)
            console.log("approved " + approved)

        }

    }

    const handleDecline = async (rId) => {

        const declineReq = await deleteReviewer(rId);
        const updatedPendingList = pendingList.filter((p) => p._id !== rId)
        setPendingList(updatedPendingList)
    }


    useEffect(() => {

        const getPendingList = async () => {
            const pendingListResponse = await getPendingReviewers()
            setPendingList(pendingListResponse)
        }

        const getApprovedList = async () => {
            const approvedListResponse = await getApprovedReviewers()
            console.log(approvedListResponse)
            setApproved(approvedListResponse)
        }

        getPendingList();
        getApprovedList();
        console.log(approved)

    }, [])

    return (
        <>
            <AdminHeader/>
            {
                pendingList ?
                    <div className= "container">
                        <h1> Reviewers Pending to Approve</h1>
                        <ul>
                            {pendingList.map((item) => (

                                <div className="list-group m-2">
                                    <div className="list-group-item ">
                                        <div className="row">
                                            <div className="col-8">
                                                {item.username}
                                            </div>
                                            <div className="col-2">

                                                <Button
                                                    onClick={() => handleApprove(item._id)}
                                                    className="btn btn-success">
                                                    Approve
                                                </Button>
                                            </div>

                                            <div className="col-2">
                                                <Button
                                                    onClick={() => handleDecline(item._id)}

                                                    className="btn btn-danger">
                                                    Decline
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </ul>

                    </div>


                    : null
            }

            {
                approved ?
                    <div className="container">

                        <h1> Approved </h1>
                        <div className="list-group m-2">
                            {
                                approved.map((item) => (
                                    <div className="list-group m-2">
                                        <div className="list-group-item">
                                            @ {item.username}

                                        </div>
                                    </div>
                                    )
                                )
                            }
                        </div>
                    </div>

                    : null
            }


        </>
    )


}

export default AdminHomePage;