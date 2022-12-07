import {createSlice} from "@reduxjs/toolkit";
import {randomAnimeThunk} from "../services/random-anime-thunk";

function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

const randomAnimeSlice = createSlice({
    name: 'randomAnime',
    initialState : {
        animeList: [],
        loading: false
    },
    reducers: {
        hideRandomAnime(state, action) {
            state.animeList = []
        }
    },
    extraReducers: {
        [randomAnimeThunk.pending]: (state, action) => {
            state.loading = true
            state.animeList = []
        },
        [randomAnimeThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            if (state.animeList.length === 0) {
                fyShuffle(action.payload)
                state.animeList = action.payload
                state.loading = false
            }
        }
    }
})

export const {hideRandomAnime} = randomAnimeSlice.actions;
export default randomAnimeSlice.reducer