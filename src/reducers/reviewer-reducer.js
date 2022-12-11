import {createSlice} from "@reduxjs/toolkit";
import {getPendingReviewerThunk, findReviewerThunk} from "../services/reviewer-thunk";
import {updateReviewer} from "../services/reviewer-service";

const reviewerSlice = createSlice(
    {
        name: 'reviewers',
        initialState: {
            currentReviewer : null,
            pendingList : []
        },
        extraReducers :{
            [findReviewerThunk.fulfilled]: (state, action) => {
                state.currentReviewer = action.payload;
            }

        }

    }
)

export default reviewerSlice.reducer