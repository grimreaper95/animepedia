import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, register, profile, updateProfile} from "./user-service"
import {useState} from "react";

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const profileThunk = createAsyncThunk(
    'profile',
    async (user) => await profile(user)
)

export const updateProfileThunk = createAsyncThunk (
    'updateProfile',
    async (user) => await updateProfile(user)
)