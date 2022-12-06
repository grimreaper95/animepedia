import {createAsyncThunk} from "@reduxjs/toolkit";
import {randomAnime} from "./random-anime-service";

export const randomAnimeThunk = createAsyncThunk(
    'randomAnime',
    () => randomAnime()
)