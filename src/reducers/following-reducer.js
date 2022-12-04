import {createSlice} from "@reduxjs/toolkit";
import {findAllFollowersThunk, addFollowerThunk} from "../services/following-thunk";

const followingSlice = createSlice({
    name: 'following',
    initialState: {
        followingList: [],
        loading: false
    },
    extraReducers: {
        [findAllFollowersThunk.fulfilled]: (state, action) => {
            state.followingList = action.payload;
        },
        [addFollowerThunk.fulfilled] : (state, action) => {
            state.followingList.push(action.payload)
        }
    }

})

export default followingSlice.reducer