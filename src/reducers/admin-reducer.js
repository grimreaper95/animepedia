import {createSlice} from "@reduxjs/toolkit";
import {
    addReviewerThunk,
    getAdminDetailsThunk,
    getReviewerListThunk,
    loginThunk,
    logoutThunk
} from "../services/admin-thunk";

const adminSlice = createSlice({
        name: 'admin',
        initialState: {
            currentAdmin: null,
            approvedList: []
        },

        extraReducers: {
            [loginThunk.fulfilled]: (state, action) => {
                state.currentAdmin = {...state.currentAdmin, currentAdmin: action.payload}
                console.log(state.currentAdmin)

            },
            [loginThunk.rejected]: (state, action) => {
                state.currentUser = null;
                alert('Invalid username or password.  Try again!');
            },
            [getAdminDetailsThunk.fulfilled]: (state, action) => {
                state.currentAdmin = action.payload
            },
            [addReviewerThunk.fulfilled]: (state, action) => {
                state.approvedList.push(action.payload)
            },
            [getReviewerListThunk.fulfilled]: (state, action) => {
                state.approvedList = action.payload
            },
            [logoutThunk.fulfilled]: (state, action) => {
                state.currentAdmin = null;
            }
        }
    }
)

export default adminSlice.reducer;