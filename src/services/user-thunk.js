import {createAsyncThunk} from "@reduxjs/toolkit";
import {register} from "./user-service"

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)