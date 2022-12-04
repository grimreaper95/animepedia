import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllFollowers, addFollower} from "./following-service";

export const findAllFollowersThunk = createAsyncThunk(
    'findAllFollowers',
    async (userId) => findAllFollowers(userId)
)

export const addFollowerThunk = createAsyncThunk(
    'addFollower',
    async (follow) => await addFollower(follow)
)