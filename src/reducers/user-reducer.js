import { createSlice } from "@reduxjs/toolkit";
import {registerThunk} from "../services/user-thunk";

const userSlice = createSlice ({
    name: 'users',
    initialState: {
        currentUser: null,
        error: null
    },
    reducer: {

    },
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.error = action.payload
        }
    }
});

export default userSlice.reducer;