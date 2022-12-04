import {createAsyncThunk} from "@reduxjs/toolkit";
import {searchAnime} from "./anime-search-service";

export const searchAnimeThunk = createAsyncThunk(
    'searchAnime',
    (query) => searchAnime(query)
)