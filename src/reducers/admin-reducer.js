import {createSlice} from "@reduxjs/toolkit";
import {
    addReviewerThunk,
    getAdminDetailsThunk,
    getReviewerListThunk,
    adminLoginThunk,
    adminLogoutThunk
} from "../services/admin-thunk";

const adminSlice = createSlice({
        name: 'admin',
        initialState: {
            currentAdmin: null,
            approvedList: []
        },

        extraReducers: {
            [adminLoginThunk.fulfilled]: (state, action) => {
                console.log("action" + action.payload)
                state.currentAdmin = action.payload
                state.currentAdmin = {...state.currentAdmin, currentAdmin: action.payload}
                console.log("red " + state)

            },
            [adminLoginThunk.rejected]: (state, action) => {
                state.currentUser = null;
            },
            [getAdminDetailsThunk.fulfilled]: (state, action) => {
                state.currentAdmin = action.payload
                console.log("red " + state)
            },
            [addReviewerThunk.fulfilled]: (state, action) => {
                state.approvedList.push(action.payload)
            },
            [getReviewerListThunk.fulfilled]: (state, action) => {
                state.approvedList = action.payload
            },
            [adminLogoutThunk.fulfilled]: (state, action) => {
                state.currentAdmin = null;
            }
        }
    }
)

export default adminSlice.reducer;