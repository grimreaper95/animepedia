import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllFollowers, addFollower, unfollow} from "./following-service";
import {addLikedAnime, findAllLikedAnime, removeLikedAnime} from "./liked-anime-service";

export const findAllLikedAnimeThunk = createAsyncThunk(
    'findAllLikedAnime',
    async (userId) => findAllLikedAnime(userId)
)

export const addLikedAnimeThunk = createAsyncThunk(
    'addLikedAnime',
    async (userLikedAnime) => await addLikedAnime(userLikedAnime)
)

export const removeLikedAnimeThunk = createAsyncThunk(
    'removeLikedAnime',
    async (userDislikedAnime) => await removeLikedAnime(userDislikedAnime)
)

