import {createSlice} from "@reduxjs/toolkit";
import {searchAnimeThunk} from "../services/anime-search-thunk";


const animeSearchSlice = createSlice({
    name: 'animeSearch',
    initialState : {
        searchAnimeList: [],
        loading: false
    },
    reducers: {
        resetSearch(state, action) {
            state.searchAnimeList = []
        },
    },
    extraReducers: {
        [searchAnimeThunk.pending]: (state, action) => {
            state.loading = true
            state.searchAnimeList = []
        },
        [searchAnimeThunk.fulfilled]: (state, action) => {
            state.searchAnimeList = action.payload
            state.loading = false
        }
    }
})
export const {resetSearch} = animeSearchSlice.actions;
export default animeSearchSlice.reducer