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
    const [reviewerDetails, setReviewerDetails] = useState(null);
    const [approved, setApproved] = useState(null)

    const handleApprove = async (rId) => {
        const details = await findReviewer(rId);
        // const details = reviewerDetails;
        console.log("rrr" + details._id)
        //
        if (details !== undefined) {
            const updated = {...details, approved: true}
            console.log("u " + updated._id)
            const updateApprove = await updateReviewer(updated)
            setReviewerDetails(null)

        }

    }

    const handleDecline = async (rId) => {

        const declineReq = await deleteReviewer(rId);
        console.log(declineReq)
    }



    useEffect(() => {

        const getPendingList = async () => {
            const pendingListResponse = await getPendingReviewers()
            setPendingList(pendingListResponse)
        }

        // const getApprovedList = async () => {
        //     const approvedListResponse = await getApprovedReviewers()
        //     setApproved(approvedListResponse)
        // }

        getPendingList();
        // getApprovedList();
        console.log(pendingList)

    }, [])

    return (
        <>
            <AdminHeader/>

            {
                pendingList ?
                    <>

                        <h1> Reviewers Pending to Approve</h1>
                        <ul>
                            {pendingList.map((item) => (

                                <li className="m-2">
                                    <div className="row">
                                        <div className="col-8">
                                            {item.username}
                                        </div>
                                        <div className="col-2">

                                            <Button
                                                onClick={() => handleApprove(item._id)}
                                                className="btn btn-primary">
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

                                </li>

                            ))}
                        </ul>

                    </>


                    : null

            }


        </>
    )


}

export default AdminHomePage;