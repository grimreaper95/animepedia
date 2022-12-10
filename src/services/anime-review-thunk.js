import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllReviewsForAnime, findAllReviewsByUser, createReview, removeReview} from "./anime-review-service.js";

export const findAllReviewsForAnimeThunk = createAsyncThunk(
    'findAllReviewsForAnime',
    async (animeId) => findAllReviewsForAnime(animeId)
)

export const findAllReviewsByUserThunk = createAsyncThunk(
    'findAllReviewsByUser',
    async (userId) => await findAllReviewsByUser(userId)
)

export const createReviewThunk = createAsyncThunk (
    'createReview',
        async (review) => await createReview(review)
)

export const removeReviewThunk = createAsyncThunk (
    'removeReview',
        async (reviewId) => await removeReview(reviewId)
)
