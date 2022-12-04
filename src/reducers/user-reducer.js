import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk,
    registerThunk,
    profileThunk,
    logoutThunk,
    updateProfileThunk,
    findUserThunk
} from "../services/user-thunk";
import {findUser} from "../services/user-service";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        currentUser: null,
        error: null,
        user: null
    },
    reducers: {
        logoutUser(state) {
            state.currentUser = null;
            return state;
        }
    },
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.currentUser = {...state.currentUser, currentUser: action.payload}
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.currentUser = {...state.currentUser, currentUser: action.payload}
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            console.log(state.currentUser)
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.currentUser = null;
            alert('Invalid username or password.  Try again!');
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.currentUser = null;
            // console.log('profile error')
        },
        [updateProfileThunk.fulfilled]: (state, action) => {
            // const userIndex = state.currentUser.findIndex(u => u._id === payload._id)
            // console.log(userIndex)
            //
            // state.users[userIndex] = {
            //     ...state.users[userIndex],
            //     ...payload
            // }
            state.currentUser = action.payload

        },
        [findUserThunk.fulfilled]: (state, action) => {
            console.log("thunk " + action.payload)
            state.user = action.payload.user;
        }
    }
});

export default userSlice.reducer;