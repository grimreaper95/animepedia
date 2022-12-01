import { createSlice } from "@reduxjs/toolkit";
import {loginThunk, registerThunk} from "../services/user-thunk";
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
            state.currentUser = action.payload;
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload;
            alert('Invalid username or password. Try again!');
        }
    }
});

export default userSlice.reducer;