import {createSlice} from "@reduxjs/toolkit";
import {getPendingReviewerThunk} from "../services/reviewer-thunk";
import {updateReviewer} from "../services/reviewer-service";

const reviewerSlice = createSlice(
    {
        name: 'reviewers',
        initialState: {
            currentReviewer : null,
            pendingList : []
        },
        extraReducers :{


        }

    }
)