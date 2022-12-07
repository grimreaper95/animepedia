import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "../services/admin-thunk";

const adminSlice = createSlice({
        name: 'admin',
        initialState: {
            currentAdmin: null
        },

        extraReducers: {
            [loginThunk.fulfilled]: (state, action) => {
                state.currentAdmin = action.payload;
                state.currentAdmin = {...state.currentAdmin, currentAdmin: action.payload}

            }
        }
    }
)

export default adminSlice.reducer;