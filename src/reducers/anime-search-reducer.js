import {createSlice} from "@reduxjs/toolkit";
import {searchAnimeThunk} from "../services/anime-search-thunk";


const animeSearchSlice = createSlice({
    name: 'animeSearch',
    initialState : {
        animeList: [],
        loading: false,
        details: {}
    },
    extraReducers: {
        [searchAnimeThunk.pending]: (state, action) => {
            state.loading = true
            state.animeList = []
        },
        [searchAnimeThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.animeList = action.payload
            state.loading = false
        }
    }
})

export default animeSearchSlice.reducer