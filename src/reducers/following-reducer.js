import {createSlice} from "@reduxjs/toolkit";
import {findAllFollowersThunk, addFollowerThunk, unfollowThunk} from "../services/following-thunk";

const followingSlice = createSlice({
    name: 'following',
    initialState: {
        followingList: [],
        loading: false
    },
    reducers : {
       makeListNull(state) {
           state.followingList = null;
           return state
       }

    },
    extraReducers: {
        [findAllFollowersThunk.fulfilled]: (state, action) => {
            state.followingList = action.payload;
        },
        [addFollowerThunk.fulfilled]: (state, action) => {
            state.followingList.push(action.payload)
        },

        [unfollowThunk.fulfilled]: (state, action) => {
            state.followingList = state.followingList
                .filter(f => f.userId !== action.payload.userId && f.followingId !== action.payload.followingId)


        }
    }

})

export default followingSlice.reducer
export const {makeListNull} = followingSlice.actions