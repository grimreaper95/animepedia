import {login} from "./admin-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
    'login',
    async (admin) => await login(admin)
)