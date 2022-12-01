import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, register} from "./user-service"

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)