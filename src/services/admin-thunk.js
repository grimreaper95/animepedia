import {addReviewer, getAdminDetails, getReviewerList, login, logout} from "./admin-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
    'login',
    async (admin) => await login(admin)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const getReviewerListThunk = createAsyncThunk(
    'getReviewerList',
    async (adminId) => await getReviewerList(adminId)
)

export const addReviewerThunk = createAsyncThunk(
    'addReviewer',
    async (reviewerId) => await addReviewer(reviewerId)
)

export const getAdminDetailsThunk = createAsyncThunk (
    'getAdminDetails',
    async () => await getAdminDetails()
)