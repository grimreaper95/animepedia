import {createSlice} from "@reduxjs/toolkit";
import {findAllLikedAnimeThunk} from "../services/liked-anime-thunk";


const likedAnimeSlice = createSlice({
    name: 'likedAnime',
    initialState : {
        likedAnimeList: [],
        loading: false
    },
    reducers: {
        resetLikedAnime(state, action) {
            state.likedAnimeList = []
        },
    },
    extraReducers: {
        [findAllLikedAnimeThunk.pending]: (state, action) => {
            state.loading = true
            state.likedAnimeList = []
        },
        [findAllLikedAnimeThunk.fulfilled]: (state, action) => {
            state.likedAnimeList = action.payload
            state.loading = false
            console.log(state.likedAnimeList)
        }
    }
})
export const {resetLikedAnime} = likedAnimeSlice.actions;
export default likedAnimeSlice.reducer