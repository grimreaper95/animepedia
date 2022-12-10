import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllFollowers, addFollower, unfollow} from "./following-service";
import {addLikedAnime, findAllLikedAnime} from "./liked-anime-service";

export const findAllLikedAnimeThunk = createAsyncThunk(
    'findAllLikedAnime',
    async (userId) => findAllLikedAnime(userId)
)

export const addLikedAnimeThunk = createAsyncThunk(
    'addLikedAnime',
    async (userLikedAnime) => await addLikedAnime(userLikedAnime)
)
